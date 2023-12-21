const Film = require('../models/film');

const ITEMS_PER_PAGE = 35;

module.exports.renderDetailFilm = async (req, res) => {
    data = await Film.find({id: req.params.id});
    data = data[0];
    res.render('film/detail', {data});
}

module.exports.renderFilmPopuler = async (req, res) => {
    const page = parseInt(req.query.page) || 1; // Get the page from the query parameter, default to 1
    const skip = (page - 1) * ITEMS_PER_PAGE; // Calculate the number of items to skip

    try {
        const totalFilms = await Film.countDocuments(); // Get the total number of films

        // Fetch films for the current page using skip and limit
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
module.exports.renderFilmRekomendasi = async (req, res) => {
    const page = parseInt(req.query.page) || 1; // Get the page from the query parameter, default to 1
    const skip = (page - 1) * ITEMS_PER_PAGE; // Calculate the number of items to skip

    try {
        const totalFilms = await Film.countDocuments(); // Get the total number of films

        // Fetch films for the current page using skip and limit
        const films = await Film.find({}).sort({ 'rating': -1 }).skip(skip).limit(ITEMS_PER_PAGE);

        res.render('film/rekomendasi', {
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
}

module.exports.renderFilmCari = async (req, res) => {
    let query = req.query.search;
    
    if (!query) {
        query = 'Anda tidak mencari apapun';
        let result = ""
        return res.render('film/cari', {query, result});
    }
    
    const isModalSearch = req.query.modal === 'true';
    
    if(isModalSearch){
        const result = await Film.find({'judul': {$regex: `${query}`, $options: 'i'}}, ['judul', 'tahunRilis', 'rating', 'link_cover']).sort({'rating': -1}).limit(50);
        res.json(result);
    }else{
        try {
            const page = parseInt(req.query.page) || 1; // Get the page from the query parameter, default to 1
            const skip = (page - 1) * ITEMS_PER_PAGE; // C
            
            // Fetch films for the current page using skip and limit
            const totalFilms = await Film.find({'judul': {$regex: `${query}`, $options: 'i'}}).sort({'rating': -1}).countDocuments(); // Get the total number of films
            const result = await Film.find({'judul': {$regex: `${query}`, $options: 'i'}}).sort({'rating': -1}).skip(skip).limit(ITEMS_PER_PAGE);
            res.render('film/cari', {
                query,
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