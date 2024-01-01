const Film = require('../models/film');
const Pengguna = require('../models/pengguna');

const ITEMS_PER_PAGE = 35;

module.exports.renderDetailFilm = async (req, res) => {
    data = await Film.find({ id: req.params.id });
    data = data[0];
    res.render('film/detail', { data });
}

module.exports.renderFilmPopuler = async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const skip = (page - 1) * ITEMS_PER_PAGE;

    try {
        const totalFilms = await Film.countDocuments();

        const films = await Film.find({}).sort({ 'rating': -1 }).skip(skip).limit(ITEMS_PER_PAGE);

        res.render('film/populer', {
            films,
            currentPage: page,
            hasNextPage: ITEMS_PER_PAGE * page < totalFilms,
            hasPreviousPage: page > 1,
            nextPage: page + 1,
            previousPage: page - 1,
            lastPage: Math.ceil(totalFilms / ITEMS_PER_PAGE)
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports.renderFilmRekomendasi = async (req) => {
    const page = parseInt(req.query.page) || 1; 
    const skip = (page - 1) * ITEMS_PER_PAGE;

    try {
        let hasKatalog = false;
        let recommendedGenres = [];

        if (req.user) {
            const user = await Pengguna.findById(req.user._id).populate({
                path: 'katalog',
                populate: {
                    path: 'film',
                    model: 'Film',
                },
            });

            if (user) {
                if (user.katalog.length > 0) {
                    hasKatalog = true;

                    const allGenres = user.katalog.reduce((genres, katalog) => {
                        katalog.film.forEach(film => {
                            genres.push(...film.genre);
                        });
                        return genres;
                    }, []);

                    const genreCounts = {};
                    allGenres.forEach(genre => {
                        genreCounts[genre] = (genreCounts[genre] || 0) + 1;
                    });

                    console.log(genreCounts);
                    // Pilih Top 3 genre
                    recommendedGenres = Object.keys(genreCounts)
                        .sort((a, b) => genreCounts[b] - genreCounts[a])
                        .slice(0, 3);
                }
            }
        }

        console.log(recommendedGenres);
        const films = recommendedGenres.length > 0
            ? await Film.find({ genre: { $in: recommendedGenres } })
                  .sort({ rating: -1 })
                  .skip(skip)
                  .limit(ITEMS_PER_PAGE)
            : [];

        const dummy = recommendedGenres.length > 0
        ? await Film.find({ genre: { $in: recommendedGenres } })
              .sort({ rating: -1 })
              .skip(skip)
            : [];
        const totalFilms = dummy.length;

        return {
            films,
            hasKatalog,
            totalFilms,
        };

    } catch (error) {
        console.error(error);
        throw error; 
    }
};


module.exports.renderFilmCari = async (req, res) => {
    let query = req.query.search;
    let genreQuery = req.query.genre;

    if (query == ""){
        
        const isModalSearch = req.query.modal === 'true';

        if (isModalSearch) {
            // Pencarian untuk modal (Ajax)
            const result = await Film.find({ 'genre': genreQuery }, ['judul', 'tahunRilis', 'rating', 'link_cover']).sort({ 'rating': -1 }).limit(50);
            res.json(result);
        } else {
            try {
                const page = parseInt(req.query.page) || 1;
                const skip = (page - 1) * ITEMS_PER_PAGE;
    
                // Pencarian berdasarkan genre
                const totalFilms = await Film.find({ 'genre': genreQuery }).sort({ 'rating': -1 }).countDocuments();
                const result = await Film.find({ 'genre': genreQuery }).sort({ 'rating': -1 }).skip(skip).limit(ITEMS_PER_PAGE);
    
                res.render('film/cari', {
                    query, 
                    genreQuery,
                    result,
                    currentPage: page,
                    hasNextPage: ITEMS_PER_PAGE * page < totalFilms,
                    hasPreviousPage: page > 1,
                    nextPage: page + 1,
                    previousPage: page - 1,
                    lastPage: Math.ceil(totalFilms / ITEMS_PER_PAGE),
                });
            } catch (error) {
                console.error(error);
                res.status(500).send('Internal Server Error');
            }
        }
    } else{
        const isModalSearch = req.query.modal === 'true';

        if (isModalSearch) {
            const result = await Film.find({ 'judul': { $regex: `${query}`, $options: 'i' } }, ['judul', 'tahunRilis', 'rating', 'link_cover']).sort({ 'rating': -1 }).limit(50);
            res.json(result);
        } else {
            try {
                const page = parseInt(req.query.page) || 1;
                const skip = (page - 1) * ITEMS_PER_PAGE;

                const genreFilter = genreQuery ? { 'genre': genreQuery } : {};
                const titleFilter = { 'judul': { $regex: `${query}`, $options: 'i' } };

                const totalFilms = await Film.find({ ...titleFilter, ...genreFilter }).sort({ 'rating': -1 }).countDocuments();
                const result = await Film.find({ ...titleFilter, ...genreFilter }).sort({ 'rating': -1 }).skip(skip).limit(ITEMS_PER_PAGE);

                res.render('film/cari', {
                    query,
                    genreQuery,
                    result,
                    currentPage: page,
                    hasNextPage: ITEMS_PER_PAGE * page < totalFilms,
                    hasPreviousPage: page > 1,
                    nextPage: page + 1,
                    previousPage: page - 1,
                    lastPage: Math.ceil(totalFilms / ITEMS_PER_PAGE)
                });
            } catch (error) {
                console.error(error);
                res.status(500).send('Internal Server Error');
            }
        }
    }
}