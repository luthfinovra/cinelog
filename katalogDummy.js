const katalog = require("./models/katalog")

katalogs = [
    {
        "id": 1,
        "judul": "Film Favorit",
        "deskripsi": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Habitant morbi tristique senectus et netus et. At elementum eu facilisis sed. Facilisis magna etiam tempor orci eu. Tortor posuere ac ut consequat semper viverra nam libero.",
        "film": [
            {
                "id": 438631,
                "judul": "Dune",
                "durasi": 155,
                "rating": 7.787,
                "tahunRilis": "2021",
                "sutradara": "Denis Villeneuve",
                "link_cover": "/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
                "genre": [
                    "Science Fiction",
                    "Adventure"
                ],
                "sinopsis": "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet's exclusive supply of the most precious resource in existence-a commodity capable of unlocking humanity's greatest potential-only those who can conquer their fear will survive.",
                "pemeran": [
                    {
                        "name": "Timoth\u00e9e Chalamet",
                        "character": "Paul Atreides"
                    },
                    {
                        "name": "Rebecca Ferguson",
                        "character": "Lady Jessica Atreides"
                    },
                    {
                        "name": "Oscar Isaac",
                        "character": "Duke Leto Atreides"
                    },
                    {
                        "name": "Josh Brolin",
                        "character": "Gurney Halleck"
                    },
                    {
                        "name": "Stellan Skarsg\u00e5rd",
                        "character": "Baron Vladimir Harkonnen"
                    },
                    {
                        "name": "Dave Bautista",
                        "character": "Beast Rabban Harkonnen"
                    },
                    {
                        "name": "Sharon Duncan-Brewster",
                        "character": "Dr. Liet Kynes"
                    },
                    {
                        "name": "Stephen McKinley Henderson",
                        "character": "Thufir Hawat"
                    },
                    {
                        "name": "Zendaya",
                        "character": "Chani"
                    },
                    {
                        "name": "Chang Chen",
                        "character": "Dr. Wellington Yueh"
                    },
                    {
                        "name": "Charlotte Rampling",
                        "character": "Reverend Mother Gaius Helen Mohiam"
                    },
                    {
                        "name": "Jason Momoa",
                        "character": "Duncan Idaho"
                    },
                    {
                        "name": "Javier Bardem",
                        "character": "Stilgar"
                    },
                    {
                        "name": "David Dastmalchian",
                        "character": "Piter de Vries"
                    },
                    {
                        "name": "Babs Olusanmokun",
                        "character": "Jamis"
                    },
                    {
                        "name": "Golda Rosheuvel",
                        "character": "Shadout Mapes"
                    },
                    {
                        "name": "Roger Yuan",
                        "character": "Lieutenant Lanville"
                    },
                    {
                        "name": "Benjamin Cl\u00e9mentine",
                        "character": "Herald of the Change"
                    },
                    {
                        "name": "Souad Faress",
                        "character": "Bene Gesserit Sister"
                    },
                    {
                        "name": "Seun Shote",
                        "character": "Arrakeen Residency Gardener"
                    },
                    {
                        "name": "Neil Bell",
                        "character": "Sardaukar Bashar"
                    },
                    {
                        "name": "Oliver Ryan",
                        "character": "Hawat Specialist"
                    },
                    {
                        "name": "Stephen Collins",
                        "character": "Harkonnen Trooper"
                    },
                    {
                        "name": "Charlie Rawes",
                        "character": "Harkonnen Trooper"
                    },
                    {
                        "name": "Richard Carter",
                        "character": "Harkonnen Trooper"
                    },
                    {
                        "name": "Benjamin Dilloway",
                        "character": "Sardaukar Assassin"
                    },
                    {
                        "name": "Elmi Rashid Elmi",
                        "character": "Shamir"
                    },
                    {
                        "name": "Tachia Newall",
                        "character": "Tanat"
                    },
                    {
                        "name": "Gloria Obianyo",
                        "character": "Female Fremen"
                    },
                    {
                        "name": "Fehinti Balogun",
                        "character": "Male Fremen"
                    },
                    {
                        "name": "Dora K\u00e1polnai-Schvab",
                        "character": "Baron Servant"
                    },
                    {
                        "name": "Joelle",
                        "character": "Baron Servant"
                    },
                    {
                        "name": "Jimmy Walker",
                        "character": "Atreides Lieutenant"
                    },
                    {
                        "name": "Paul Bullion",
                        "character": "Sardaukar Soldier"
                    },
                    {
                        "name": "Milena Sidorova",
                        "character": "Human Spider Proxy"
                    },
                    {
                        "name": "J\u00e1nos Timk\u00f3",
                        "character": "Harkonnen Guard"
                    },
                    {
                        "name": "Jean Gilpin",
                        "character": "Bene Gesserit Ancestor (voice)"
                    },
                    {
                        "name": "Marianne Faithfull",
                        "character": "Bene Gesserit Ancestor (voice)"
                    },
                    {
                        "name": "Ellen Dubin",
                        "character": "Bene Gesserit Ancestor (voice)"
                    }
                ]
            },
            {
                "id": 16859,
                "judul": "Kiki's Delivery Service",
                "durasi": 103,
                "rating": 7.848,
                "tahunRilis": "1989",
                "sutradara": "Hayao Miyazaki",
                "link_cover": "/Aufa4YdZIv4AXpR9rznwVA5SEfd.jpg",
                "genre": [
                    "Animation",
                    "Family",
                    "Fantasy",
                    "Adventure"
                ],
                "sinopsis": "A young witch, on her mandatory year of independent life, finds fitting into a new community difficult while she supports herself by running an air courier service.",
                "pemeran": [
                    {
                        "name": "Minami Takayama",
                        "character": "Kiki / Ursula (voice)"
                    },
                    {
                        "name": "Rei Sakuma",
                        "character": "Jiji (voice)"
                    },
                    {
                        "name": "Kappei Yamaguchi",
                        "character": "Tombo (voice)"
                    },
                    {
                        "name": "Keiko Toda",
                        "character": "Osono (voice)"
                    },
                    {
                        "name": "Mieko Nobusawa",
                        "character": "Kokiri (voice)"
                    },
                    {
                        "name": "Koichi Miura",
                        "character": "Okino (voice)"
                    },
                    {
                        "name": "Haruko Kat\u014d",
                        "character": "Old Lady (voice)"
                    },
                    {
                        "name": "Hiroko Seki",
                        "character": "Barsa (voice)"
                    },
                    {
                        "name": "Yuriko Fuchizaki",
                        "character": "Ketto (voice)"
                    },
                    {
                        "name": "Koichi Yamadera",
                        "character": "Bakery Worker / Policeman (voice)"
                    },
                    {
                        "name": "Kikuko Inoue",
                        "character": "Maki (voice)"
                    },
                    {
                        "name": "Yuko Kobayashi",
                        "character": "Young Sempai Witch (voice)"
                    },
                    {
                        "name": "Mika Doi",
                        "character": "Ketto's Mother (voice)"
                    },
                    {
                        "name": "Takaya Hashi",
                        "character": "Ketto's Father (voice)"
                    },
                    {
                        "name": "Chika Sakamoto",
                        "character": "Baby (voice)"
                    },
                    {
                        "name": "Yoshiko Asai",
                        "character": "Ketto's Grandmother (voice)"
                    },
                    {
                        "name": "Hiroko Maruyama",
                        "character": "Boy (voice)"
                    },
                    {
                        "name": "Shinpachi Tsuji",
                        "character": "Hotel Receptionist (voice)"
                    },
                    {
                        "name": "Yuko Maruyama",
                        "character": "Boy (voice)"
                    },
                    {
                        "name": "Masa Sait\u014d",
                        "character": "Dora (voice)"
                    },
                    {
                        "name": "Yuko Tsuga",
                        "character": "Delivery Pies Girl (voice)"
                    },
                    {
                        "name": "Tomomichi Nishimura",
                        "character": "Clock Tower Keeper (voice)"
                    },
                    {
                        "name": "Akio Otsuka",
                        "character": "Captain of the Airship (voice)"
                    },
                    {
                        "name": "Yoshiko Kamei",
                        "character": "Delivery Pies Girl (voice)"
                    },
                    {
                        "name": "Keiko Kagimoto",
                        "character": "Old Lady's Granddaughter (voice)"
                    },
                    {
                        "name": "Takashi Taguchi",
                        "character": "Cleaning Man (voice)"
                    },
                    {
                        "name": "Michihiro Ikemizu",
                        "character": "Truck Driver (voice)"
                    }
                ]
            },
            {
                "id": 1949,
                "judul": "Zodiac",
                "durasi": 163,
                "rating": 7.521,
                "tahunRilis": "2007",
                "sutradara": "David Fincher",
                "link_cover": "/6YmeO4pB7XTh8P8F960O1uA14JO.jpg",
                "genre": [
                    "Crime",
                    "Drama",
                    "Mystery",
                    "Thriller"
                ],
                "sinopsis": "A cartoonist teams up with an ace reporter and a law enforcement officer to track down an elusive serial killer.",
                "pemeran": [
                    {
                        "name": "Jake Gyllenhaal",
                        "character": "Robert Graysmith"
                    },
                    {
                        "name": "Mark Ruffalo",
                        "character": "Inspector David Toschi"
                    },
                    {
                        "name": "Anthony Edwards",
                        "character": "Inspector William Armstrong"
                    },
                    {
                        "name": "Robert Downey Jr.",
                        "character": "Paul Avery"
                    },
                    {
                        "name": "Brian Cox",
                        "character": "Melvin Belli"
                    },
                    {
                        "name": "Charles Fleischer",
                        "character": "Bob Vaughn"
                    },
                    {
                        "name": "Zach Grenier",
                        "character": "Mel Nicolai"
                    },
                    {
                        "name": "Philip Baker Hall",
                        "character": "Sherwood Morrill"
                    },
                    {
                        "name": "Elias Koteas",
                        "character": "Sgt. Jack Mulanax"
                    },
                    {
                        "name": "James Le Gros",
                        "character": "Officer George Bawart"
                    },
                    {
                        "name": "Donal Logue",
                        "character": "Captain Ken Narlow"
                    },
                    {
                        "name": "John Carroll Lynch",
                        "character": "Arthur Leigh Allen"
                    },
                    {
                        "name": "Dermot Mulroney",
                        "character": "Captain Martin Lee"
                    },
                    {
                        "name": "Chlo\u00eb Sevigny",
                        "character": "Melanie"
                    },
                    {
                        "name": "Richmond Arquette",
                        "character": "Zodiac 1 / Zodiac 2"
                    },
                    {
                        "name": "Bob Stephenson",
                        "character": "Zodiac 3"
                    },
                    {
                        "name": "John Lacy",
                        "character": "Zodiac 4"
                    },
                    {
                        "name": "Ed Setrakian",
                        "character": "Al Hyman"
                    },
                    {
                        "name": "John Getz",
                        "character": "Templeton Peck"
                    },
                    {
                        "name": "John Terry",
                        "character": "Charles Thieriot"
                    },
                    {
                        "name": "Candy Clark",
                        "character": "Carol Fisher"
                    },
                    {
                        "name": "June Diane Raphael",
                        "character": "Mrs. Toschi"
                    },
                    {
                        "name": "Ciara Hughes",
                        "character": "Darlene Ferrin"
                    },
                    {
                        "name": "Lee Norris",
                        "character": "Young Mike Mageau"
                    },
                    {
                        "name": "Patrick Scott Lewis",
                        "character": "Bryan Hartnell"
                    },
                    {
                        "name": "Pell James",
                        "character": "Cecilia Shepard"
                    },
                    {
                        "name": "David Lee Smith",
                        "character": "Father"
                    },
                    {
                        "name": "Jason Wiles",
                        "character": "Lab Tech Dagitz"
                    },
                    {
                        "name": "Charles Schneider",
                        "character": "Cabbie / Paul Stine"
                    },
                    {
                        "name": "James Carraway",
                        "character": "Shorty"
                    },
                    {
                        "name": "Tom Verica",
                        "character": "Jim Dunbar"
                    },
                    {
                        "name": "Jimmi Simpson",
                        "character": "Mike Mageau"
                    },
                    {
                        "name": "Doan Ly",
                        "character": "Belli's Housekeeper"
                    },
                    {
                        "name": "Karina Logue",
                        "character": "Woman"
                    },
                    {
                        "name": "Joel Bissonnette",
                        "character": "Inspector Kracke"
                    },
                    {
                        "name": "John Mahon",
                        "character": "Riverside Captain"
                    },
                    {
                        "name": "Matt Winston",
                        "character": "John Allen"
                    },
                    {
                        "name": "Jules Bruff",
                        "character": "Catherine Allen"
                    },
                    {
                        "name": "John Ennis",
                        "character": "Terry Pascoe"
                    },
                    {
                        "name": "J. Patrick McCormack",
                        "character": "Police Commissioner"
                    },
                    {
                        "name": "Adam Goldberg",
                        "character": "Duffy Jennings"
                    },
                    {
                        "name": "Clea DuVall",
                        "character": "Linda del Buono"
                    },
                    {
                        "name": "Paul Schulze",
                        "character": "Sandy Panzarella"
                    },
                    {
                        "name": "Adam Trese",
                        "character": "Detective #1"
                    },
                    {
                        "name": "Penny Wallace",
                        "character": "Mulanax's Secretary"
                    },
                    {
                        "name": "John Hemphill",
                        "character": "Donald Cheney"
                    },
                    {
                        "name": "Michel Francoeur",
                        "character": "Man on Marquee"
                    },
                    {
                        "name": "Thomas Kopache",
                        "character": "Copy Editor #1"
                    },
                    {
                        "name": "Barry Livingston",
                        "character": "Copy Editor #3"
                    },
                    {
                        "name": "Christopher John Fields",
                        "character": "Copy Editor #4"
                    },
                    {
                        "name": "Jack Samson",
                        "character": "Young David Graysmith"
                    },
                    {
                        "name": "Micah Sauers",
                        "character": "David Graysmith"
                    },
                    {
                        "name": "Zachary Sauers",
                        "character": "Aaron Graysmith"
                    },
                    {
                        "name": "Jessica Baltutis",
                        "character": "Margot Graysmith"
                    },
                    {
                        "name": "Peter Quartaroli",
                        "character": "Patrolman Fouke"
                    },
                    {
                        "name": "Geoff Callan",
                        "character": "Patrolman Zelms"
                    },
                    {
                        "name": "Michael Hungerford",
                        "character": "Truck Driver"
                    },
                    {
                        "name": "Anna Katarina",
                        "character": "Society Woman"
                    },
                    {
                        "name": "E.P. McKnight",
                        "character": "Informant (Hall of Justice A)"
                    },
                    {
                        "name": "Betty Murphy",
                        "character": "Informant"
                    },
                    {
                        "name": "Jeff Daniel Phillips",
                        "character": "Informant"
                    },
                    {
                        "name": "Shane Woodson",
                        "character": "Informant"
                    },
                    {
                        "name": "Cookie Crawford",
                        "character": "Informant #8"
                    },
                    {
                        "name": "Cassius M. Willis",
                        "character": "Uniform Cop"
                    },
                    {
                        "name": "Judith Drake",
                        "character": "Florence Douglas"
                    },
                    {
                        "name": "Phoebe Holston",
                        "character": "Prison Guard"
                    },
                    {
                        "name": "Marty Lodge",
                        "character": "Pinole Foreman"
                    },
                    {
                        "name": "Cooper Thornton",
                        "character": "Internal Affairs Agent #1"
                    },
                    {
                        "name": "Cazimir Milostan",
                        "character": "Internal Affairs Agent #2"
                    },
                    {
                        "name": "Charlotte Ferguson",
                        "character": "Kathleen Johns' baby"
                    },
                    {
                        "name": "Phoebe Ferguson",
                        "character": "Kathleen Johns' baby"
                    },
                    {
                        "name": "Kacey Malmsten",
                        "character": "Kathleen Johns' baby"
                    },
                    {
                        "name": "Karly Malmsten",
                        "character": "Kathleen Johns' baby"
                    },
                    {
                        "name": "JD Cullum",
                        "character": "Director"
                    },
                    {
                        "name": "Stanley B. Herman",
                        "character": "Staff Editor"
                    },
                    {
                        "name": "Roy Lee Jones",
                        "character": "Distraught African American Male"
                    },
                    {
                        "name": "Michael Rose",
                        "character": "Navy Project Leader"
                    },
                    {
                        "name": "James Joseph O'Neil",
                        "character": "DOD Project Leader"
                    },
                    {
                        "name": "Rod Damer",
                        "character": "FBI Codebreaker"
                    },
                    {
                        "name": "John Sarno",
                        "character": "Donald Harden"
                    },
                    {
                        "name": "Gloria Grant",
                        "character": "Bettye Harden"
                    },
                    {
                        "name": "Brett Rickaby",
                        "character": "Detective Roy"
                    },
                    {
                        "name": "M.F. Bernier",
                        "character": "Detective #2"
                    },
                    {
                        "name": "Carter Evans",
                        "character": "Newscaster #2"
                    },
                    {
                        "name": "Bill Seward",
                        "character": "TV News Anchor"
                    },
                    {
                        "name": "Dave Nemeth",
                        "character": "Newscaster #4"
                    },
                    {
                        "name": "Ted Garcia",
                        "character": "Anchorman #1"
                    },
                    {
                        "name": "Greg Wolf",
                        "character": "Interviewer #1"
                    },
                    {
                        "name": "Barry LeBrock",
                        "character": "Reporter"
                    },
                    {
                        "name": "Ione Skye",
                        "character": "Kathleen Johns (uncredited)"
                    },
                    {
                        "name": "David Winston Barge",
                        "character": "Vallejo Desk Ofiicer (uncredited)"
                    },
                    {
                        "name": "Hayati Akbas",
                        "character": "Hardware Store Customer (uncredited)"
                    },
                    {
                        "name": "Brad Carr",
                        "character": "Camera Man (uncredited)"
                    },
                    {
                        "name": "Mitchell Fink",
                        "character": "Reporter (uncredited)"
                    },
                    {
                        "name": "Erica Ford",
                        "character": "Traveler (uncredited)"
                    },
                    {
                        "name": "Tish Hicks",
                        "character": "Informant (uncredited)"
                    },
                    {
                        "name": "Danielle McKee",
                        "character": "Prisoner (uncredited)"
                    },
                    {
                        "name": "Derris Nile",
                        "character": "Office Worker (uncredited)"
                    },
                    {
                        "name": "Carmen Plumb",
                        "character": "Janie (uncredited)"
                    },
                    {
                        "name": "Callie Thompson",
                        "character": "Child Witness (uncredited)"
                    },
                    {
                        "name": "Bud Davis",
                        "character": "Patrolman (uncredited)"
                    },
                    {
                        "name": "Ken Narlow",
                        "character": "Himself (archive footage) (uncredited)"
                    }
                ]
            },
            {
                "id": 335984,
                "judul": "Blade Runner 2049",
                "durasi": 164,
                "rating": 7.548,
                "tahunRilis": "2017",
                "sutradara": "Denis Villeneuve",
                "link_cover": "/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg",
                "genre": [
                    "Science Fiction",
                    "Drama"
                ],
                "sinopsis": "Thirty years after the events of the first film, a new blade runner, LAPD Officer K, unearths a long-buried secret that has the potential to plunge what's left of society into chaos. K's discovery leads him on a quest to find Rick Deckard, a former LAPD blade runner who has been missing for 30 years.",
                "pemeran": [
                    {
                        "name": "Ryan Gosling",
                        "character": "'K'"
                    },
                    {
                        "name": "Harrison Ford",
                        "character": "Rick Deckard"
                    },
                    {
                        "name": "Ana de Armas",
                        "character": "Joi"
                    },
                    {
                        "name": "Sylvia Hoeks",
                        "character": "Luv"
                    },
                    {
                        "name": "Robin Wright",
                        "character": "Lieutenant Joshi"
                    },
                    {
                        "name": "Jared Leto",
                        "character": "Niander Wallace"
                    },
                    {
                        "name": "Mackenzie Davis",
                        "character": "Mariette"
                    },
                    {
                        "name": "Carla Juri",
                        "character": "Dr. Ana Stelline"
                    },
                    {
                        "name": "Lennie James",
                        "character": "Mister Cotton"
                    },
                    {
                        "name": "Sean Young",
                        "character": "Rachael"
                    },
                    {
                        "name": "Edward James Olmos",
                        "character": "Gaff"
                    },
                    {
                        "name": "Dave Bautista",
                        "character": "Sapper Morton"
                    },
                    {
                        "name": "David Dastmalchian",
                        "character": "Coco"
                    },
                    {
                        "name": "Hiam Abbass",
                        "character": "Freysa"
                    },
                    {
                        "name": "Barkhad Abdi",
                        "character": "Doc Badger"
                    },
                    {
                        "name": "Wood Harris",
                        "character": "Nandez"
                    },
                    {
                        "name": "T\u00f3mas Lemarquis",
                        "character": "File Clerk"
                    },
                    {
                        "name": "Sallie Harmsen",
                        "character": "Replicant"
                    },
                    {
                        "name": "Loren Peta",
                        "character": "Rachael Double"
                    },
                    {
                        "name": "Mark Arnold",
                        "character": "Interviewer"
                    },
                    {
                        "name": "Krista Kosonen",
                        "character": "Doxie #2"
                    },
                    {
                        "name": "Elarica Johnson",
                        "character": "Doxie #3"
                    },
                    {
                        "name": "David Benson",
                        "character": "Liberace Look-A-Like"
                    },
                    {
                        "name": "Kingston Taylor",
                        "character": "Boy with One Ear"
                    },
                    {
                        "name": "Ben Thompson",
                        "character": "Elvis Look-A-Like"
                    },
                    {
                        "name": "Ellie Wright",
                        "character": "Little Ellie"
                    },
                    {
                        "name": "Suzie Kennedy",
                        "character": "Marilyn Look-A-Like"
                    },
                    {
                        "name": "Stephen Triffitt",
                        "character": "Sinatra Look-A-Like"
                    },
                    {
                        "name": "Vilma Sz\u00e9csi",
                        "character": "Angry Old Lady"
                    },
                    {
                        "name": "Kincs\u00f6 S\u00e1nta",
                        "character": "Birthday Girl"
                    },
                    {
                        "name": "Andr\u00e9 Luk\u00e1cs Moln\u00e1r",
                        "character": "Memory Child"
                    },
                    {
                        "name": "Istv\u00e1n G\u00f6z",
                        "character": "Scavenger #1"
                    },
                    {
                        "name": "P\u00e1l Ny\u00e1ri",
                        "character": "Scavenger #2"
                    },
                    {
                        "name": "Joshua Tersoo Allagh",
                        "character": "Scavenger #3"
                    },
                    {
                        "name": "Zolt\u00e1n B\u00e9res",
                        "character": "Scavenger #4"
                    },
                    {
                        "name": "Konstantin P\u00e1l",
                        "character": "Scavenger #5"
                    },
                    {
                        "name": "Ferenc Gy\u00f6rgyi",
                        "character": "Scavenger #6"
                    },
                    {
                        "name": "Samuel Brown",
                        "character": "Orphanage Boy"
                    },
                    {
                        "name": "Mary Lukasiewicz",
                        "character": "Hologram Joi (voice) (uncredited)"
                    },
                    {
                        "name": "Deniz Altunay",
                        "character": "Scavenger #7"
                    }
                ]
            }
        ]
    },
    {
        "id": 2,
        "judul": "Film Top 50 Best",
        "deskripsi": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Habitant morbi tristique senectus et netus et. At elementum eu facilisis sed. Facilisis magna etiam tempor orci eu. Tortor posuere ac ut consequat semper viverra nam libero.",
        "film": [
            {
                "id": 335988,
                "judul": "Transformers: The Last Knight",
                "durasi": 154,
                "rating": 6.059,
                "tahunRilis": "2017",
                "sutradara": "Michael Bay",
                "link_cover": "/s5HQf2Gb3lIO2cRcFwNL9sn1o1o.jpg",
                "genre": [
                    "Action",
                    "Adventure",
                    "Science Fiction"
                ],
                "sinopsis": "Autobots and Decepticons are at war, with humans on the sidelines. Optimus Prime is gone. The key to saving our future lies buried in the secrets of the past, in the hidden history of Transformers on Earth.",
                "pemeran": [
                    {
                        "name": "Mark Wahlberg",
                        "character": "Cade Yeager"
                    },
                    {
                        "name": "Josh Duhamel",
                        "character": "Col. William Lennox"
                    },
                    {
                        "name": "Stanley Tucci",
                        "character": "Wizard Merlin"
                    },
                    {
                        "name": "Anthony Hopkins",
                        "character": "Sir Edmund Burton"
                    },
                    {
                        "name": "Isabela Merced",
                        "character": "Izabella"
                    },
                    {
                        "name": "Laura Haddock",
                        "character": "Vivian Wembly"
                    },
                    {
                        "name": "Jerrod Carmichael",
                        "character": "Jimmy"
                    },
                    {
                        "name": "Santiago Cabrera",
                        "character": "Santos"
                    },
                    {
                        "name": "John Turturro",
                        "character": "Seymour Simmons"
                    },
                    {
                        "name": "Glenn Morshower",
                        "character": "General Morshower"
                    },
                    {
                        "name": "Liam Garrigan",
                        "character": "King Arthur"
                    },
                    {
                        "name": "Peter Cullen",
                        "character": "Optimus Prime / Nemesis Prime (voice)"
                    },
                    {
                        "name": "Frank Welker",
                        "character": "Megatron (voice)"
                    },
                    {
                        "name": "Gemma Chan",
                        "character": "Quintessa"
                    },
                    {
                        "name": "Erik Aadahl",
                        "character": "Bumblebee (voice)"
                    },
                    {
                        "name": "Jim Carter",
                        "character": "Cogman (voice)"
                    },
                    {
                        "name": "Omar Sy",
                        "character": "Hot Rod (voice)"
                    },
                    {
                        "name": "Ken Watanabe",
                        "character": "Drift (voice)"
                    },
                    {
                        "name": "John Goodman",
                        "character": "Hound (voice)"
                    },
                    {
                        "name": "John DiMaggio",
                        "character": "Crosshairs / Nitro Zeus (voice)"
                    },
                    {
                        "name": "Reno Wilson",
                        "character": "Sqweeks / Mohawk (voice)"
                    },
                    {
                        "name": "Jess Harnell",
                        "character": "Barricade (voice)"
                    },
                    {
                        "name": "Tom Kenny",
                        "character": "Wheelie (voice)"
                    },
                    {
                        "name": "Steve Buscemi",
                        "character": "Daytrader (voice)"
                    },
                    {
                        "name": "Steven Barr",
                        "character": "Topspin (voice)"
                    },
                    {
                        "name": "Mark Ryan",
                        "character": "Lieutenant / Bulldog (voice)"
                    },
                    {
                        "name": "Mitch Pileggi",
                        "character": "TRF Group Leader"
                    },
                    {
                        "name": "Tony Hale",
                        "character": "JPL Engineer"
                    },
                    {
                        "name": "Gil Birmingham",
                        "character": "Chief Sherman"
                    },
                    {
                        "name": "Remi Adeleke",
                        "character": "TRF Lieutenant"
                    },
                    {
                        "name": "Nicola Peltz Beckham",
                        "character": "Tessa Yaeger (voice)"
                    },
                    {
                        "name": "Shia LaBeouf",
                        "character": "Sam Witwicky (archive photo)"
                    },
                    {
                        "name": "Stephen Hogan",
                        "character": "Viviane's Father"
                    },
                    {
                        "name": "Martin McCreadie",
                        "character": "Lancelot"
                    },
                    {
                        "name": "Rob Witcomb",
                        "character": "Percival"
                    },
                    {
                        "name": "Marcus Fraser",
                        "character": "Gawain"
                    },
                    {
                        "name": "John Hollingworth",
                        "character": "Tristan"
                    },
                    {
                        "name": "Daniel Adegboyega",
                        "character": "Saebert"
                    },
                    {
                        "name": "Benjamin Maurice Webb",
                        "character": "Hengist"
                    },
                    {
                        "name": "Claude Knowlton",
                        "character": "JPL Director"
                    },
                    {
                        "name": "Jacob Zachar",
                        "character": "Young JPL Engineer"
                    },
                    {
                        "name": "Maggie Steed",
                        "character": "Viviane's Grandmum"
                    },
                    {
                        "name": "Sara Stewart",
                        "character": "Viviane's Mum"
                    },
                    {
                        "name": "Phoebe Nicholls",
                        "character": "Aunt Helen"
                    },
                    {
                        "name": "Rebecca Front",
                        "character": "Aunt Marie"
                    },
                    {
                        "name": "Minti Gorne",
                        "character": "Young Viviane"
                    },
                    {
                        "name": "Benjamin Flores Jr.",
                        "character": "Kid"
                    },
                    {
                        "name": "Juliocesar Chavez",
                        "character": "Kid"
                    },
                    {
                        "name": "Samuel Parker",
                        "character": "Kid"
                    },
                    {
                        "name": "Daniel Iturriaga",
                        "character": "Kid"
                    },
                    {
                        "name": "Aisha Kabia",
                        "character": "Lawyer"
                    },
                    {
                        "name": "Andy Bean",
                        "character": "Lawyer"
                    },
                    {
                        "name": "Sam Yim",
                        "character": "Lawyer"
                    },
                    {
                        "name": "Mark Dexter",
                        "character": "U.K. Prime Minister"
                    },
                    {
                        "name": "Rob Jarvis",
                        "character": "Downing Street Policeman"
                    },
                    {
                        "name": "Tim Downie",
                        "character": "Polo Player"
                    },
                    {
                        "name": "Elizabeth Croft",
                        "character": "High Society Woman"
                    },
                    {
                        "name": "Emily Tierney",
                        "character": "High Society Woman"
                    },
                    {
                        "name": "Wolfgang Young",
                        "character": "Saxon Knight"
                    },
                    {
                        "name": "Nicholas Khan",
                        "character": "Scientist"
                    },
                    {
                        "name": "Leighton Sharpe",
                        "character": "Scientist"
                    },
                    {
                        "name": "Christina Tam",
                        "character": "Scientist"
                    },
                    {
                        "name": "Aiyaz Ahmed",
                        "character": "Scientist"
                    },
                    {
                        "name": "Pauline McLynn",
                        "character": "Female Researcher"
                    },
                    {
                        "name": "Matthew Castle",
                        "character": "Student"
                    },
                    {
                        "name": "Mia Maria",
                        "character": "Student"
                    },
                    {
                        "name": "Poppy Carter",
                        "character": "Student"
                    },
                    {
                        "name": "Seeta Indrani",
                        "character": "News Reporter"
                    },
                    {
                        "name": "Phill Langhorne",
                        "character": "News Reporter"
                    },
                    {
                        "name": "Simon Harrison",
                        "character": "News Reporter"
                    },
                    {
                        "name": "Wendy Albiston",
                        "character": "Submarine Ticket Agent"
                    },
                    {
                        "name": "John Burke",
                        "character": "Pentagon Colonel"
                    },
                    {
                        "name": "Barbara Eve Harris",
                        "character": "Pentagon Colonel"
                    },
                    {
                        "name": "Granville Ames",
                        "character": "Pentagon Official"
                    },
                    {
                        "name": "Jim Wisniewski",
                        "character": "Government Suit"
                    },
                    {
                        "name": "Perry Yee",
                        "character": "TRF Operator"
                    },
                    {
                        "name": "Brian William Price",
                        "character": "TRF Operator"
                    },
                    {
                        "name": "Vincent Jerome",
                        "character": "TRF Operator"
                    },
                    {
                        "name": "Alan Pietruszewski",
                        "character": "F-35 Pilot"
                    },
                    {
                        "name": "Christoper Vasquez",
                        "character": "F-16 Pilot"
                    },
                    {
                        "name": "Drew Waters",
                        "character": "F-16 Pilot"
                    },
                    {
                        "name": "Krista Schaeffer",
                        "character": "Osprey Pilot"
                    },
                    {
                        "name": "Walles Hamonde",
                        "character": "American Serviceman"
                    },
                    {
                        "name": "Tom Wright",
                        "character": "Military Attache"
                    },
                    {
                        "name": "Dan Warner",
                        "character": "Military Attache"
                    },
                    {
                        "name": "Michael Richard",
                        "character": "Namibian Scientist"
                    },
                    {
                        "name": "Charlie Bouguenon",
                        "character": "Namibian Scientist"
                    },
                    {
                        "name": "Jandre le Roux",
                        "character": "Namibian Scientist"
                    },
                    {
                        "name": "Eddie Hall",
                        "character": "Saxon Warrior (uncredited)"
                    },
                    {
                        "name": "Kevin Kent",
                        "character": "TRF Group Leader (uncredited)"
                    },
                    {
                        "name": "Jude Poyer",
                        "character": "German Soldier (uncredited)"
                    }
                ]
            },
            {
                "id": 278,
                "judul": "The Shawshank Redemption",
                "durasi": 142,
                "rating": 8.705,
                "tahunRilis": "1994",
                "sutradara": "Frank Darabont",
                "link_cover": "/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
                "genre": [
                    "Drama",
                    "Crime"
                ],
                "sinopsis": "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.",
                "pemeran": [
                    {
                        "name": "Tim Robbins",
                        "character": "Andy Dufresne"
                    },
                    {
                        "name": "Morgan Freeman",
                        "character": "Ellis Boyd 'Red' Redding"
                    },
                    {
                        "name": "Bob Gunton",
                        "character": "Warden Norton"
                    },
                    {
                        "name": "William Sadler",
                        "character": "Heywood"
                    },
                    {
                        "name": "Clancy Brown",
                        "character": "Captain Byron T. Hadley"
                    },
                    {
                        "name": "Gil Bellows",
                        "character": "Tommy"
                    },
                    {
                        "name": "James Whitmore",
                        "character": "Brooks Hatlen"
                    },
                    {
                        "name": "Mark Rolston",
                        "character": "Bogs Diamond"
                    },
                    {
                        "name": "Jeffrey DeMunn",
                        "character": "1946 D.A."
                    },
                    {
                        "name": "Larry Brandenburg",
                        "character": "Skeet"
                    },
                    {
                        "name": "Neil Giuntoli",
                        "character": "Jigger"
                    },
                    {
                        "name": "Brian Libby",
                        "character": "Floyd"
                    },
                    {
                        "name": "David Proval",
                        "character": "Snooze"
                    },
                    {
                        "name": "Joseph Ragno",
                        "character": "Ernie"
                    },
                    {
                        "name": "Jude Ciccolella",
                        "character": "Guard Mert"
                    },
                    {
                        "name": "Paul McCrane",
                        "character": "Guard Trout"
                    },
                    {
                        "name": "Renee Blaine",
                        "character": "Andy Dufresne's Wife"
                    },
                    {
                        "name": "Scott Mann",
                        "character": "Glenn Quentin"
                    },
                    {
                        "name": "John Horton",
                        "character": "1946 Judge"
                    },
                    {
                        "name": "Gordon Greene",
                        "character": "1947 Parole Hearings Man"
                    },
                    {
                        "name": "Alfonso Freeman",
                        "character": "Fresh Fish Con"
                    },
                    {
                        "name": "V.J. Foster",
                        "character": "Hungry Fish Con"
                    },
                    {
                        "name": "John E. Summers",
                        "character": "New Fish Guard"
                    },
                    {
                        "name": "Frank Medrano",
                        "character": "Fat Ass"
                    },
                    {
                        "name": "Mack Miles",
                        "character": "Tyrell"
                    },
                    {
                        "name": "Alan R. Kessler",
                        "character": "Laundry Bob"
                    },
                    {
                        "name": "Morgan Lund",
                        "character": "Laundry Truck Driver"
                    },
                    {
                        "name": "Cornell Wallace",
                        "character": "Laundry Leonard"
                    },
                    {
                        "name": "Gary Lee Davis",
                        "character": "Rooster"
                    },
                    {
                        "name": "Neil Summers",
                        "character": "Pete"
                    },
                    {
                        "name": "Ned Bellamy",
                        "character": "Guard Youngblood"
                    },
                    {
                        "name": "Joe Pecoraro",
                        "character": "Projectionist"
                    },
                    {
                        "name": "Harold E. Cope Jr.",
                        "character": "Hole Guard"
                    },
                    {
                        "name": "Brian Delate",
                        "character": "Guard Dekins"
                    },
                    {
                        "name": "Don McManus",
                        "character": "Guard Wiley"
                    },
                    {
                        "name": "Donald Zinn",
                        "character": "Moresby Batter"
                    },
                    {
                        "name": "Dorothy Silver",
                        "character": "1954 Landlady"
                    },
                    {
                        "name": "Robert Haley",
                        "character": "1954 Food-Way Manager"
                    },
                    {
                        "name": "Dana Snyder",
                        "character": "1954 Food-Way Woman"
                    },
                    {
                        "name": "John D. Craig",
                        "character": "1957 Parole Hearings Man"
                    },
                    {
                        "name": "Ken Magee",
                        "character": "Ned Grimes"
                    },
                    {
                        "name": "Eugene C. DePasquale",
                        "character": "Mail Caller"
                    },
                    {
                        "name": "Bill Bolender",
                        "character": "Elmo Blatch"
                    },
                    {
                        "name": "Ron Newell",
                        "character": "Elderly Hole Guard"
                    },
                    {
                        "name": "John R. Woodward",
                        "character": "Bullhorn Tower Guard"
                    },
                    {
                        "name": "Chuck Brauchler",
                        "character": "Man Missing Guard"
                    },
                    {
                        "name": "Dion Anderson",
                        "character": "Head Bull Haig"
                    },
                    {
                        "name": "Claire Slemmer",
                        "character": "Bank Teller"
                    },
                    {
                        "name": "James Kisicki",
                        "character": "Bank Manager"
                    },
                    {
                        "name": "Rohn Thomas",
                        "character": "Bugle Editor"
                    },
                    {
                        "name": "Charlie Kearns",
                        "character": "1966 D.A."
                    },
                    {
                        "name": "Rob Reider",
                        "character": "Duty Guard"
                    },
                    {
                        "name": "Brian Brophy",
                        "character": "1967 Parole Hearings Man"
                    },
                    {
                        "name": "Paul Kennedy",
                        "character": "1967 Food-Way Manager"
                    },
                    {
                        "name": "James Babson",
                        "character": "Con (uncredited)"
                    },
                    {
                        "name": "Dennis Baker",
                        "character": "Old Man on Bus (uncredited)"
                    },
                    {
                        "name": "Fred Culbertson",
                        "character": "Police Officer (uncredited)"
                    },
                    {
                        "name": "Alonzo F. Jones",
                        "character": "Inmate (uncredited)"
                    },
                    {
                        "name": "Sergio Kato",
                        "character": "Inmate II (uncredited)"
                    },
                    {
                        "name": "Gary A. Jones",
                        "character": "Convict (uncredited)"
                    }
                ]
            },
            {
                "id": 279,
                "judul": "Amadeus",
                "durasi": 161,
                "rating": 8.037,
                "tahunRilis": "1984",
                "sutradara": "Milo\u0161 Forman",
                "link_cover": "/1n5VUlCqgmVax1adxGZm8oCFaKc.jpg",
                "genre": [
                    "History",
                    "Music",
                    "Drama"
                ],
                "sinopsis": "Wolfgang Amadeus Mozart is a remarkably talented young Viennese composer who unwittingly finds a fierce rival in the disciplined and determined Antonio Salieri. Resenting Mozart for both his hedonistic lifestyle and his undeniable talent, the highly religious Salieri is gradually consumed by his jealousy and becomes obsessed with Mozart's downfall, leading to a devious scheme that has dire consequences for both men.",
                "pemeran": [
                    {
                        "name": "F. Murray Abraham",
                        "character": "Antonio Salieri"
                    },
                    {
                        "name": "Tom Hulce",
                        "character": "Wolfgang Amadeus Mozart"
                    },
                    {
                        "name": "Elizabeth Berridge",
                        "character": "Constanze Mozart"
                    },
                    {
                        "name": "Roy Dotrice",
                        "character": "Leopold Mozart"
                    },
                    {
                        "name": "Simon Callow",
                        "character": "Emanuel Schikaneder"
                    },
                    {
                        "name": "Christine Ebersole",
                        "character": "Katerina Cavalieri"
                    },
                    {
                        "name": "Jeffrey Jones",
                        "character": "Emperor Joseph II"
                    },
                    {
                        "name": "Charles Kay",
                        "character": "Count Orsini-Rosenberg"
                    },
                    {
                        "name": "Kenneth McMillan",
                        "character": "Michael Schlumberg"
                    },
                    {
                        "name": "Kenny Baker",
                        "character": "Parody Commendatore"
                    },
                    {
                        "name": "Lisbeth Bartlett",
                        "character": "Papagena"
                    },
                    {
                        "name": "Barbara Bryne",
                        "character": "Frau Weber"
                    },
                    {
                        "name": "Martin Cavina",
                        "character": "Young Salieri"
                    },
                    {
                        "name": "Roderick Cook",
                        "character": "Count Von Strack"
                    },
                    {
                        "name": "Milan Demjanenko",
                        "character": "Karl Mozart"
                    },
                    {
                        "name": "Peter DiGesu",
                        "character": "Francesco Salieri"
                    },
                    {
                        "name": "Richard Frank",
                        "character": "Father Vogler"
                    },
                    {
                        "name": "Patrick Hines",
                        "character": "Kappelmeister Bonno"
                    },
                    {
                        "name": "Nicholas Kepros",
                        "character": "Archbishop Colloredo"
                    },
                    {
                        "name": "Philip Lenkowsky",
                        "character": "Salieri's Servant"
                    },
                    {
                        "name": "Herman Meckler",
                        "character": "Priest"
                    },
                    {
                        "name": "Jonathan Moore",
                        "character": "Baron Van Swieten"
                    },
                    {
                        "name": "Cynthia Nixon",
                        "character": "Lorl"
                    },
                    {
                        "name": "Brian Pettifer",
                        "character": "Hospital Attendant"
                    },
                    {
                        "name": "Vincent Schiavelli",
                        "character": "Salieri's Valet"
                    },
                    {
                        "name": "Douglas Seale",
                        "character": "Count Arco"
                    },
                    {
                        "name": "Miroslav Sekera",
                        "character": "Young Mozart"
                    },
                    {
                        "name": "Cassie Stuart",
                        "character": "Gertrude Schlumberg"
                    },
                    {
                        "name": "John Strauss",
                        "character": "Conductor"
                    },
                    {
                        "name": "Karl-Heinz Teuber",
                        "character": "Wig Salesman"
                    },
                    {
                        "name": "Rita Zohar",
                        "character": "Frau Schlumberg"
                    },
                    {
                        "name": "Miro Grisa",
                        "character": "Figaro in 'The Marriage of Figaro' (uncredited)"
                    },
                    {
                        "name": "Karel Gult",
                        "character": "Count Almaviva in 'The Marriage of Figaro' (uncredited)"
                    },
                    {
                        "name": "Ladislav Kre\u010dmer",
                        "character": "Antonio in 'The Marriage of Figaro' (uncredited)"
                    },
                    {
                        "name": "Karel Fiala",
                        "character": "Don Giovanni in 'Don Giovanni' (uncredited)"
                    },
                    {
                        "name": "John Carrafa",
                        "character": "Dancer (uncredited)"
                    },
                    {
                        "name": "Hana Brejchov\u00e1",
                        "character": "Czechoslovakian Actor (uncredited)"
                    },
                    {
                        "name": "Miriam Chytilov\u00e1",
                        "character": "Czechoslovakian Actor (uncredited)"
                    },
                    {
                        "name": "Karel Effa",
                        "character": "Czechoslovakian Actor (uncredited)"
                    },
                    {
                        "name": "Ren\u00e9 Gabzdyl",
                        "character": "Czechoslovakian Actor (uncredited)"
                    },
                    {
                        "name": "Karel H\u00e1bl",
                        "character": "Czechoslovakian Actor (uncredited)"
                    },
                    {
                        "name": "Ji\u0159\u00ed Krytin\u00e1\u0159",
                        "character": "Czechoslovakian Actor (uncredited)"
                    },
                    {
                        "name": "Jan Ku\u017eelka",
                        "character": "Czechoslovakian Actor (uncredited)"
                    },
                    {
                        "name": "Ji\u0159\u00ed L\u00edr",
                        "character": "Czechoslovakian Actor (uncredited)"
                    },
                    {
                        "name": "Jitka Molavcov\u00e1",
                        "character": "Czechoslovakian Actor (uncredited)"
                    },
                    {
                        "name": "Pavel Nov\u00fd",
                        "character": "Czechoslovakian Actor (uncredited)"
                    },
                    {
                        "name": "Jan Pohan",
                        "character": "Czechoslovakian Actor (uncredited)"
                    },
                    {
                        "name": "Tereza Pokorn\u00e1-Herzov\u00e1",
                        "character": "Czechoslovakian Actor (uncredited)"
                    },
                    {
                        "name": "Ivan Pokorn\u00fd",
                        "character": "Czechoslovakian Actor (uncredited)"
                    },
                    {
                        "name": "Milan Riehs",
                        "character": "Czechoslovakian Actor (uncredited)"
                    },
                    {
                        "name": "Dana V\u00e1vrov\u00e1",
                        "character": "Czechoslovakian Actor (uncredited)"
                    },
                    {
                        "name": "June Anderson",
                        "character": "Queen of the Night in 'The Magic Flute' (singing voice) (uncredited)"
                    },
                    {
                        "name": "Isobel Buchanan",
                        "character": "Susanna in 'The Marriage of Figaro' (singing voice) (uncredited)"
                    },
                    {
                        "name": "Anne Howells",
                        "character": "Cherubino in 'The Marriage of Figaro' (singing voice) (uncredited)"
                    },
                    {
                        "name": "Robin Leggate",
                        "character": "Don Curzio in 'The Marriage of Figaro' (singing voice) (uncredited)"
                    },
                    {
                        "name": "Felicity Lott",
                        "character": "Countess in 'The Marriage of Figaro' (singing voice) (uncredited)"
                    },
                    {
                        "name": "Alexander Oliver",
                        "character": "Basilio in 'The Marriage of Figaro' (singing voice) (uncredited)"
                    },
                    {
                        "name": "Samuel Ramey",
                        "character": "Figaro in 'The Marriage of Figaro' (singing voice) (uncredited)"
                    },
                    {
                        "name": "Richard Stilwell",
                        "character": "Count Almaviva in 'The Marriage of Figaro' / Don Giovanni in 'Don Giovanni' (singing voice) (uncredited)"
                    },
                    {
                        "name": "John Tomlinson",
                        "character": "Dr. Bartolo in 'The Marriage of Figaro' / Commendatore in 'Don Giovanni' (singing voice) (uncredited)"
                    },
                    {
                        "name": "Willard White",
                        "character": "Antonio in 'The Marriage of Figaro' / Leporello in 'Don Giovanni' (singing voice) (uncredited)"
                    },
                    {
                        "name": "Michele Esposito",
                        "character": "Salieri's Student (uncredited)"
                    },
                    {
                        "name": "Zden\u011bk Mahler",
                        "character": "Cardinal (uncredited)"
                    },
                    {
                        "name": "Vladim\u00edr Svit\u00e1\u010dek",
                        "character": "Pope Clement (uncredited)"
                    },
                    {
                        "name": "Jana Musilov\u00e1",
                        "character": "Czechoslovakian Actor (uncredited)"
                    },
                    {
                        "name": "Raymond Kurshals",
                        "character": "Dancer"
                    }
                ]
            },
            {
                "id": 11,
                "judul": "Star Wars",
                "durasi": 121,
                "rating": 8.205,
                "tahunRilis": "1977",
                "sutradara": "George Lucas",
                "link_cover": "/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
                "genre": [
                    "Adventure",
                    "Action",
                    "Science Fiction"
                ],
                "sinopsis": "Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire.",
                "pemeran": [
                    {
                        "name": "Mark Hamill",
                        "character": "Luke Skywalker"
                    },
                    {
                        "name": "Harrison Ford",
                        "character": "Han Solo"
                    },
                    {
                        "name": "Carrie Fisher",
                        "character": "Princess Leia Organa"
                    },
                    {
                        "name": "Peter Cushing",
                        "character": "Grand Moff Tarkin"
                    },
                    {
                        "name": "Alec Guinness",
                        "character": "Obi-Wan \"Ben\" Kenobi"
                    },
                    {
                        "name": "Anthony Daniels",
                        "character": "C-3PO"
                    },
                    {
                        "name": "Kenny Baker",
                        "character": "R2-D2"
                    },
                    {
                        "name": "Peter Mayhew",
                        "character": "Chewbacca"
                    },
                    {
                        "name": "David Prowse",
                        "character": "Darth Vader (performer)"
                    },
                    {
                        "name": "James Earl Jones",
                        "character": "Darth Vader (voice)"
                    },
                    {
                        "name": "Phil Brown",
                        "character": "Uncle Owen"
                    },
                    {
                        "name": "Shelagh Fraser",
                        "character": "Aunt Beru"
                    },
                    {
                        "name": "Jack Purvis",
                        "character": "Chief Jawa"
                    },
                    {
                        "name": "Alex McCrindle",
                        "character": "General Dodonna"
                    },
                    {
                        "name": "Eddie Byrne",
                        "character": "General Willard"
                    },
                    {
                        "name": "Drewe Henley",
                        "character": "Red Leader"
                    },
                    {
                        "name": "Denis Lawson",
                        "character": "Red Two (Wedge Antilles)"
                    },
                    {
                        "name": "Garrick Hagon",
                        "character": "Red Three (Biggs Darklighter)"
                    },
                    {
                        "name": "Jack Klaff",
                        "character": "Red Four (John \"D\")"
                    },
                    {
                        "name": "William Hootkins",
                        "character": "Red Six (Porkins)"
                    },
                    {
                        "name": "Angus MacInnes",
                        "character": "Gold Leader"
                    },
                    {
                        "name": "Jeremy Sinden",
                        "character": "Gold Two"
                    },
                    {
                        "name": "Graham Ashley",
                        "character": "Gold Five"
                    },
                    {
                        "name": "Don Henderson",
                        "character": "General Taggi"
                    },
                    {
                        "name": "Richard LeParmentier",
                        "character": "General Motti"
                    },
                    {
                        "name": "Leslie Schofield",
                        "character": "Commander #1"
                    },
                    {
                        "name": "Michael Leader",
                        "character": "Stormtrooper"
                    },
                    {
                        "name": "David Ankrum",
                        "character": "Red Two, Wedge Antilles (voice) (uncredited)"
                    },
                    {
                        "name": "Scott Beach",
                        "character": "Stormtrooper (voice) (uncredited)"
                    },
                    {
                        "name": "Lightning Bear",
                        "character": "Stormtrooper (uncredited)"
                    },
                    {
                        "name": "Jon Berg",
                        "character": "Cantina Alien (uncredited)"
                    },
                    {
                        "name": "Doug Beswick",
                        "character": "Cantina Alien (uncredited)"
                    },
                    {
                        "name": "Paul Blake",
                        "character": "Greedo (uncredited)"
                    },
                    {
                        "name": "Janice Burchette",
                        "character": "Nabrun Leids (uncredited)"
                    },
                    {
                        "name": "Ted Burnett",
                        "character": "Wuher (uncredited)"
                    },
                    {
                        "name": "John Chapman",
                        "character": "Drifter (Red 12) (uncredited)"
                    },
                    {
                        "name": "Gilda Cohen",
                        "character": "Cantina Patron (uncredited)"
                    },
                    {
                        "name": "Tim Condren",
                        "character": "Stormtrooper (uncredited)"
                    },
                    {
                        "name": "Barry Copping",
                        "character": "Wioslea (uncredited)"
                    },
                    {
                        "name": "Alfie Curtis",
                        "character": "Dr. Evazan (uncredited)"
                    },
                    {
                        "name": "Robert Davies",
                        "character": "Cantina Patron (uncredited)"
                    },
                    {
                        "name": "Maria De Aragon",
                        "character": "Greedo (uncredited)"
                    },
                    {
                        "name": "Robert A. Denham",
                        "character": "Hrchek Kal Fas (uncredited)"
                    },
                    {
                        "name": "Frazer Diamond",
                        "character": "Jawa (uncredited)"
                    },
                    {
                        "name": "Peter Diamond",
                        "character": "Stormtrooper / Tusken Raider / Death Star Trooper / Garouf Lafoe (uncredited)"
                    },
                    {
                        "name": "Warwick Diamond",
                        "character": "Jawa (uncredited)"
                    },
                    {
                        "name": "Sadie Eden",
                        "character": "Garindan (uncredited)"
                    },
                    {
                        "name": "Kim Falkinburg",
                        "character": "Djas Puhr (uncredited)"
                    },
                    {
                        "name": "Harry Fielder",
                        "character": "Death Star Trooper (uncredited)"
                    },
                    {
                        "name": "Ted Gagliano",
                        "character": "Stormtrooper with Binoculars (uncredited)"
                    },
                    {
                        "name": "Salo Gardner",
                        "character": "Cantina Patron (uncredited)"
                    },
                    {
                        "name": "Steve Gawley",
                        "character": "Death Star Trooper (uncredited)"
                    },
                    {
                        "name": "Barry Gnome",
                        "character": "Kabe (uncredited)"
                    },
                    {
                        "name": "Rusty Goffe",
                        "character": "Kabe / Jawa / GONK Droid (uncredited)"
                    },
                    {
                        "name": "Isaac Grand",
                        "character": "Cantina Patron (uncredited)"
                    },
                    {
                        "name": "Reg Harding",
                        "character": "Stormtrooper (uncredited)"
                    },
                    {
                        "name": "Alan Harris",
                        "character": "Leia's Rebel Escort (uncredited)"
                    },
                    {
                        "name": "Frank Henson",
                        "character": "Stormtrooper (uncredited)"
                    },
                    {
                        "name": "Christine Hewett",
                        "character": "Brea Tonnika (uncredited)"
                    },
                    {
                        "name": "Arthur Howell",
                        "character": "Stormtrooper (uncredited)"
                    },
                    {
                        "name": "Tommy Ilsley",
                        "character": "Ponda Baba (uncredited)"
                    },
                    {
                        "name": "Joe Johnston",
                        "character": "Death Star Trooper (uncredited)"
                    },
                    {
                        "name": "Annette Jones",
                        "character": "Mosep (uncredited)"
                    },
                    {
                        "name": "Linda Jones",
                        "character": "Chall Bekan (uncredited)"
                    },
                    {
                        "name": "Joe Kaye",
                        "character": "Solomohal (uncredited)"
                    },
                    {
                        "name": "Colin Michael Kitchens",
                        "character": "Stormtrooper (voice) (uncredited)"
                    },
                    {
                        "name": "Melissa Kurtz",
                        "character": "Jawa (uncredited)"
                    },
                    {
                        "name": "Tiffany Hillkurtz",
                        "character": "Jawa (uncredited)"
                    },
                    {
                        "name": "Al Lampert",
                        "character": "Daine Jir (uncredited)"
                    },
                    {
                        "name": "Anthony Lang",
                        "character": "BoShek (uncredited)"
                    },
                    {
                        "name": "Laine Liska",
                        "character": "Muftak / Cantina Band Member (uncredited)"
                    },
                    {
                        "name": "Derek Lyons",
                        "character": "Temple Guard / Medal Bearer (uncredited)"
                    },
                    {
                        "name": "Mahjoub",
                        "character": "Jawa (uncredited)"
                    },
                    {
                        "name": "Alf Mangan",
                        "character": "Takeel (uncredited)"
                    },
                    {
                        "name": "Grant McCune",
                        "character": "Death Star Gunner (uncredited)"
                    },
                    {
                        "name": "Geoffrey Moon",
                        "character": "Cantina Patron (uncredited)"
                    },
                    {
                        "name": "Mandy Morton",
                        "character": "Swilla Corey (uncredited)"
                    },
                    {
                        "name": "Lorne Peterson",
                        "character": "Massassi Base Rebel Scout (uncredited)"
                    },
                    {
                        "name": "Marcus Powell",
                        "character": "Rycar Ryjerd (uncredited)"
                    },
                    {
                        "name": "Shane Rimmer",
                        "character": "InCom Engineer (uncredited)"
                    },
                    {
                        "name": "Pam Rose",
                        "character": "Leesub Sirln (uncredited)"
                    },
                    {
                        "name": "George Roubicek",
                        "character": "Cmdr. Praji (Imperial Officer #2 on rebel ship) (uncredited)"
                    },
                    {
                        "name": "Erica Simmons",
                        "character": "Tawss Khaa (uncredited)"
                    },
                    {
                        "name": "Angela Staines",
                        "character": "Senni Tonnika (uncredited)"
                    },
                    {
                        "name": "George Stock",
                        "character": "Cantina Patron (uncredited)"
                    },
                    {
                        "name": "Roy Straite",
                        "character": "Cantina Patron (uncredited)"
                    },
                    {
                        "name": "Peter Sturgeon",
                        "character": "Sai'torr Kal Fas (uncredited)"
                    },
                    {
                        "name": "Peter Sumner",
                        "character": "Lt. Pol Treidum (uncredited)"
                    },
                    {
                        "name": "John Sylla",
                        "character": "Cantina Voices (voice) (uncredited)"
                    },
                    {
                        "name": "Tom Sylla",
                        "character": "Massassi Outpost Announcer / Various Voices (voice) (uncredited)"
                    },
                    {
                        "name": "Malcolm Tierney",
                        "character": "Lt. Shann Childsen (uncredited)"
                    },
                    {
                        "name": "Phil Tippett",
                        "character": "Cantina Alien (uncredited)"
                    },
                    {
                        "name": "Burnell Tucker",
                        "character": "Del Goren (uncredited)"
                    },
                    {
                        "name": "Morgan Upton",
                        "character": "Stormtrooper (voice) (uncredited)"
                    },
                    {
                        "name": "Jerry Walter",
                        "character": "Stormtrooper (voice) (uncredited)"
                    },
                    {
                        "name": "Hal Wamsley",
                        "character": "Jawa (uncredited)"
                    },
                    {
                        "name": "Diana Sadley Way",
                        "character": "Thuku (uncredited)"
                    },
                    {
                        "name": "Bill Weston",
                        "character": "Stormtrooper (uncredited)"
                    },
                    {
                        "name": "Fred Wood",
                        "character": "Cantina Patron (uncredited)"
                    },
                    {
                        "name": "Colin Higgins",
                        "character": "Rebel Pilot, Col. Takbright (uncredited)"
                    },
                    {
                        "name": "Ron Tarr",
                        "character": "Jabba's Henchman (uncredited)"
                    },
                    {
                        "name": "Anthony Forrest",
                        "character": "Sandtrooper / Fixer (uncredited)"
                    },
                    {
                        "name": "Frances Alfred Basil Tomlin",
                        "character": "BoShek (uncredited)"
                    },
                    {
                        "name": "Larry Ward",
                        "character": "Greedo (voice) (uncredited)"
                    },
                    {
                        "name": "John Cannon",
                        "character": "Stormtrooper (uncredited)"
                    }
                ]
            },
            {
                "id": 12,
                "judul": "Finding Nemo",
                "durasi": 100,
                "rating": 7.825,
                "tahunRilis": "2003",
                "sutradara": "Andrew Stanton",
                "link_cover": "/ggQ6o8X5984OCh3kZi2UIJQJY5y.jpg",
                "genre": [
                    "Animation",
                    "Family"
                ],
                "sinopsis": "Nemo, an adventurous young clownfish, is unexpectedly taken from his Great Barrier Reef home to a dentist's office aquarium. It's up to his worrisome father Marlin and a friendly but forgetful fish Dory to bring Nemo home -- meeting vegetarian sharks, surfer dude turtles, hypnotic jellyfish, hungry seagulls, and more along the way.",
                "pemeran": [
                    {
                        "name": "Albert Brooks",
                        "character": "Marlin (voice)"
                    },
                    {
                        "name": "Ellen DeGeneres",
                        "character": "Dory (voice)"
                    },
                    {
                        "name": "Alexander Gould",
                        "character": "Nemo (voice)"
                    },
                    {
                        "name": "Willem Dafoe",
                        "character": "Gill (voice)"
                    },
                    {
                        "name": "Geoffrey Rush",
                        "character": "Nigel (voice)"
                    },
                    {
                        "name": "Brad Garrett",
                        "character": "Bloat (voice)"
                    },
                    {
                        "name": "Allison Janney",
                        "character": "Peach (voice)"
                    },
                    {
                        "name": "Austin Pendleton",
                        "character": "Gurgle (voice)"
                    },
                    {
                        "name": "Stephen Root",
                        "character": "Bubbles (voice)"
                    },
                    {
                        "name": "Vicki Lewis",
                        "character": "Deb / Flo (voice)"
                    },
                    {
                        "name": "Joe Ranft",
                        "character": "Jacques (voice)"
                    },
                    {
                        "name": "Andrew Stanton",
                        "character": "Crush (voice)"
                    },
                    {
                        "name": "Elizabeth Perkins",
                        "character": "Coral (voice)"
                    },
                    {
                        "name": "Nicholas Bird",
                        "character": "Squirt (voice)"
                    },
                    {
                        "name": "Bob Peterson",
                        "character": "Mr. Ray / Additional Voices (voice)"
                    },
                    {
                        "name": "Barry Humphries",
                        "character": "Bruce (voice)"
                    },
                    {
                        "name": "Eric Bana",
                        "character": "Anchor (voice)"
                    },
                    {
                        "name": "Bruce Spence",
                        "character": "Chum (voice)"
                    },
                    {
                        "name": "Bill Hunter",
                        "character": "Dentist (voice)"
                    },
                    {
                        "name": "LuLu Ebeling",
                        "character": "Darla (voice)"
                    },
                    {
                        "name": "Jordan Ranft",
                        "character": "Tad (voice)"
                    },
                    {
                        "name": "Erica Beck",
                        "character": "Pearl (voice)"
                    },
                    {
                        "name": "Erik Per Sullivan",
                        "character": "Sheldon (voice)"
                    },
                    {
                        "name": "John Ratzenberger",
                        "character": "Fish School (voice)"
                    },
                    {
                        "name": "Carlos Alazraqui",
                        "character": "Additional Voices  (voice)"
                    },
                    {
                        "name": "Alec Medlock",
                        "character": "Additional Voices  (voice)"
                    },
                    {
                        "name": "Bob Bergen",
                        "character": "Additional Voices  (voice)"
                    },
                    {
                        "name": "Nicole Miller",
                        "character": "Additional Voices  (voice)"
                    },
                    {
                        "name": "Geoff Brooks",
                        "character": "Additional Voices  (voice)"
                    },
                    {
                        "name": "Lisa Peers",
                        "character": "Additional Voices  (voice)"
                    },
                    {
                        "name": "Paul Eiding",
                        "character": "Additional Voice  (voice)"
                    },
                    {
                        "name": "Phil Proctor",
                        "character": "Additional Voices  (voice)"
                    },
                    {
                        "name": "Leland Grossman",
                        "character": "Additional Voices  (voice)"
                    },
                    {
                        "name": "Daryl Sabara",
                        "character": "Additional Voices  (voice)"
                    },
                    {
                        "name": "Lili Ishida",
                        "character": "Additional Voices"
                    },
                    {
                        "name": "Emmett Shoemaker",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Oliver Kindred",
                        "character": "Additional Voices  (voice)"
                    },
                    {
                        "name": "Ben Stanton",
                        "character": "Additional Voices  (voice)"
                    },
                    {
                        "name": "Danny Mann",
                        "character": "Additional Voices  (voice)"
                    },
                    {
                        "name": "Kali Whitehurst",
                        "character": "Additional Voices  (voice)"
                    },
                    {
                        "name": "Rove McManus",
                        "character": "Additional Voices  (voice)"
                    },
                    {
                        "name": "James S. Baker",
                        "character": "Additional Voices  (voice)"
                    },
                    {
                        "name": "Vanessa Marano",
                        "character": "Additional Voices  (voice)"
                    },
                    {
                        "name": "Susan Blu",
                        "character": "Additional Voices  (voice)"
                    },
                    {
                        "name": "Annelise Nolting",
                        "character": "Additional Voices  (voice)"
                    },
                    {
                        "name": "Jeff Pidgeon",
                        "character": "Additional Voices  (voice)"
                    },
                    {
                        "name": "Jennifer Darling",
                        "character": "Additional Voices  (voice)"
                    },
                    {
                        "name": "Aaron Fors",
                        "character": "Additional Voices  (voice)"
                    },
                    {
                        "name": "Katherine Ringgold",
                        "character": "Additional Voices  (voice)"
                    },
                    {
                        "name": "Jess Harnell",
                        "character": "Additional Voices  (voice)"
                    },
                    {
                        "name": "David Ian Salter",
                        "character": "Additional Voices  (voice)"
                    },
                    {
                        "name": "Caroline Kindred",
                        "character": "Additional Voices  (voice)"
                    },
                    {
                        "name": "Sherry Lynn",
                        "character": "Additional Voices  (voice)"
                    },
                    {
                        "name": "Jim Ward",
                        "character": "Additional Voices  (voice)"
                    },
                    {
                        "name": "Mickie McGowan",
                        "character": "Additional Voices  (voice)"
                    },
                    {
                        "name": "Jack Angel",
                        "character": "Additional Voices  (voice)"
                    },
                    {
                        "name": "Laura Marano",
                        "character": "Additional Voices  (voice)"
                    },
                    {
                        "name": "Bobby Block",
                        "character": "Additional Voices  (voice)"
                    },
                    {
                        "name": "Laraine Newman",
                        "character": "Additional Voices  (voice)"
                    },
                    {
                        "name": "Jane Carr",
                        "character": "Additional Voices  (voice)"
                    },
                    {
                        "name": "Jessie Flower",
                        "character": "Additional Voices  (voice)"
                    },
                    {
                        "name": "Jan Rabson",
                        "character": "Additional Voices  (voice)"
                    },
                    {
                        "name": "Bradley Trevor Greive",
                        "character": "Additional Voices  (voice)"
                    },
                    {
                        "name": "Evan Sabara",
                        "character": "Additional Voices  (voice)"
                    },
                    {
                        "name": "Marc John Jefferies",
                        "character": "Additional Voices  (voice)"
                    },
                    {
                        "name": "Eliza Schneider",
                        "character": "Additional Voices  (voice)"
                    },
                    {
                        "name": "Lee Unkrich",
                        "character": "Additional Voices  (voice)"
                    },
                    {
                        "name": "Noah Luke",
                        "character": "Additional Voices  (voice)"
                    }
                ]
            },
            {
                "id": 13,
                "judul": "Forrest Gump",
                "durasi": 142,
                "rating": 8.476,
                "tahunRilis": "1994",
                "sutradara": "Robert Zemeckis",
                "link_cover": "/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
                "genre": [
                    "Comedy",
                    "Drama",
                    "Romance"
                ],
                "sinopsis": "A man with a low IQ has accomplished great things in his life and been present during significant historic events\u2014in each case, far exceeding what anyone imagined he could do. But despite all he has achieved, his one true love eludes him.",
                "pemeran": [
                    {
                        "name": "Tom Hanks",
                        "character": "Forrest Gump"
                    },
                    {
                        "name": "Robin Wright",
                        "character": "Jenny Curran"
                    },
                    {
                        "name": "Gary Sinise",
                        "character": "Lieutenant Dan Taylor"
                    },
                    {
                        "name": "Sally Field",
                        "character": "Mrs. Gump"
                    },
                    {
                        "name": "Mykelti Williamson",
                        "character": "Benjamin Buford 'Bubba' Blue"
                    },
                    {
                        "name": "Michael Conner Humphreys",
                        "character": "Young Forrest Gump"
                    },
                    {
                        "name": "Hanna Hall",
                        "character": "Young Jenny Curran"
                    },
                    {
                        "name": "Haley Joel Osment",
                        "character": "Forrest Junior"
                    },
                    {
                        "name": "Siobhan Fallon Hogan",
                        "character": "School Bus Driver"
                    },
                    {
                        "name": "Rebecca Williams",
                        "character": "Nurse at Park Bench"
                    },
                    {
                        "name": "Bob Penny",
                        "character": "Crony"
                    },
                    {
                        "name": "Harold G. Herthum",
                        "character": "Doctor"
                    },
                    {
                        "name": "George Kelly",
                        "character": "Barber"
                    },
                    {
                        "name": "John Randall",
                        "character": "Crony"
                    },
                    {
                        "name": "Sam Anderson",
                        "character": "Principal Hancock"
                    },
                    {
                        "name": "Margo Moorer",
                        "character": "Louise"
                    },
                    {
                        "name": "Ione M. Telech",
                        "character": "Elderly Woman"
                    },
                    {
                        "name": "Christine Seabrook",
                        "character": "Elderly Woman's Daughter"
                    },
                    {
                        "name": "John Worsham",
                        "character": "Southern Gentleman / Landowner"
                    },
                    {
                        "name": "Peter Dobson",
                        "character": "Young Elvis Presley"
                    },
                    {
                        "name": "Alexander Zemeckis",
                        "character": "School Bus Boy"
                    },
                    {
                        "name": "Logan Livingston Gomez",
                        "character": "School Bus Boy"
                    },
                    {
                        "name": "Ben Waddel",
                        "character": "School Bus Boy"
                    },
                    {
                        "name": "Elizabeth Hanks",
                        "character": "School Bus Girl"
                    },
                    {
                        "name": "Tyler Long",
                        "character": "Red Headed Boy"
                    },
                    {
                        "name": "Christopher Jones",
                        "character": "Boy with Cross"
                    },
                    {
                        "name": "Grady Bowman",
                        "character": "Fat Boy"
                    },
                    {
                        "name": "Kevin Mangan",
                        "character": "Jenny's Father"
                    },
                    {
                        "name": "Fay Genens",
                        "character": "Jenny's Grandmother"
                    },
                    {
                        "name": "Frank Geyer",
                        "character": "Police Chief"
                    },
                    {
                        "name": "Rob Landry",
                        "character": "Red Headed Teen"
                    },
                    {
                        "name": "Jason McGuire",
                        "character": "Fat Teen"
                    },
                    {
                        "name": "Pete Auster",
                        "character": "Teen with Cross"
                    },
                    {
                        "name": "Sonny Shroyer",
                        "character": "College Football Coach"
                    },
                    {
                        "name": "Brett Rice",
                        "character": "High School Football Coach"
                    },
                    {
                        "name": "Ed Davis",
                        "character": "High School Football Coach"
                    },
                    {
                        "name": "Daniel C. Striepeke",
                        "character": "Recruiter"
                    },
                    {
                        "name": "Bruce Lucvia",
                        "character": "Kick Off Return Player"
                    },
                    {
                        "name": "David Brisbin",
                        "character": "Newscaster"
                    },
                    {
                        "name": "Kirk Ward",
                        "character": "Earl"
                    },
                    {
                        "name": "Angela Lomas",
                        "character": "Black Student"
                    },
                    {
                        "name": "Timothy Record",
                        "character": "Black Student"
                    },
                    {
                        "name": "Deborah McTeer",
                        "character": "Woman with Child on Park Bench"
                    },
                    {
                        "name": "Mark Matheisen",
                        "character": "Jenny's Date"
                    },
                    {
                        "name": "Al Harrington",
                        "character": "Local Anchor #1"
                    },
                    {
                        "name": "Jed Gillin",
                        "character": "President John F. Kennedy (voice)"
                    },
                    {
                        "name": "Bob Harks",
                        "character": "University Dean"
                    },
                    {
                        "name": "Don Fischer",
                        "character": "Army Recruiter"
                    },
                    {
                        "name": "Kenneth Bevington",
                        "character": "Army Bus Driver"
                    },
                    {
                        "name": "Michael Flannery",
                        "character": "Bus Recruit"
                    },
                    {
                        "name": "Gary Robinson",
                        "character": "Bus Recruit"
                    },
                    {
                        "name": "Marlena Smalls",
                        "character": "Bubba's Mother"
                    },
                    {
                        "name": "Kitty K. Green",
                        "character": "Bubba's Great Grandmother"
                    },
                    {
                        "name": "Afemo Omilami",
                        "character": "Drill Sergeant"
                    },
                    {
                        "name": "Matt Wallace",
                        "character": "Barracks Recruit"
                    },
                    {
                        "name": "Dant\u00e9 McCarthy",
                        "character": "Topless Girl"
                    },
                    {
                        "name": "Paulie DiCocco",
                        "character": "Emcee"
                    },
                    {
                        "name": "Mike Jolly",
                        "character": "Club Patron"
                    },
                    {
                        "name": "Michael Kemmerling",
                        "character": "Club Patron"
                    },
                    {
                        "name": "John Voldstad",
                        "character": "Club Patron"
                    },
                    {
                        "name": "Jeffrey Winner",
                        "character": "Club Patron"
                    },
                    {
                        "name": "Russ Wilson",
                        "character": "Pick-up Truck Driver"
                    },
                    {
                        "name": "Daniel J. Gillooly",
                        "character": "Helicopter Gunman"
                    },
                    {
                        "name": "Calvin Gadsden",
                        "character": "Sargeant Sims"
                    },
                    {
                        "name": "Aaron Izbicki",
                        "character": "Dallas"
                    },
                    {
                        "name": "Michael Burgess",
                        "character": "Cleveland"
                    },
                    {
                        "name": "Steven Griffith",
                        "character": "Tex"
                    },
                    {
                        "name": "Bill Roberson",
                        "character": "Fat Man at Bench"
                    },
                    {
                        "name": "Michael McFall",
                        "character": "Army Hospital Male Nurse"
                    },
                    {
                        "name": "Eric Underwood",
                        "character": "Mail Call Soldier"
                    },
                    {
                        "name": "Steve DeRelian",
                        "character": "Wounded Soldier"
                    },
                    {
                        "name": "Byron Minns",
                        "character": "Wounded Soldier"
                    },
                    {
                        "name": "Stephen Bridgewater",
                        "character": "Hospital Officer"
                    },
                    {
                        "name": "Bonnie Ann Burgess",
                        "character": "Army Nurse"
                    },
                    {
                        "name": "Scott Oliver",
                        "character": "National Correspondent #1"
                    },
                    {
                        "name": "John William Galt",
                        "character": "President Johnson (voice)"
                    },
                    {
                        "name": "Hilary Chaplain",
                        "character": "Hilary"
                    },
                    {
                        "name": "Isabel Rose",
                        "character": "Isabel"
                    },
                    {
                        "name": "Jay Ross",
                        "character": "Veteran at War Rally"
                    },
                    {
                        "name": "Richard D'Alessandro",
                        "character": "Abbie Hoffman"
                    },
                    {
                        "name": "Dick Stilwell",
                        "character": "Policeman at War Rally"
                    },
                    {
                        "name": "Kevin Davis",
                        "character": "Black Panther"
                    },
                    {
                        "name": "Michael Jace",
                        "character": "Black Panther"
                    },
                    {
                        "name": "Geoffrey Blake",
                        "character": "Wesley"
                    },
                    {
                        "name": "Tim Perry",
                        "character": "Hippie at Commune"
                    },
                    {
                        "name": "Vanessa Roth",
                        "character": "Hollywood Boulevard Girlfriend"
                    },
                    {
                        "name": "Emily Carey",
                        "character": "Hollywood Boulevard Girlfriend"
                    },
                    {
                        "name": "Paul Raczkowski",
                        "character": "Man in VW Bug"
                    },
                    {
                        "name": "Valentine",
                        "character": "Chinese Ping Pong Player"
                    },
                    {
                        "name": "Dick Cavett",
                        "character": "Dick Cavett"
                    },
                    {
                        "name": "Joe Stefanelli",
                        "character": "John Lennon (voice)"
                    },
                    {
                        "name": "Tiffany Salerno",
                        "character": "Carla"
                    },
                    {
                        "name": "Marla Sucharetza",
                        "character": "Lenore"
                    },
                    {
                        "name": "Aloysius Gigl",
                        "character": "Musician Boyfriend"
                    },
                    {
                        "name": "Jack Bowden",
                        "character": "National Correspondent #4"
                    },
                    {
                        "name": "Joe Alaskey",
                        "character": "President Nixon (voice)"
                    },
                    {
                        "name": "Lazarus Jackson",
                        "character": "Discharge Officer"
                    },
                    {
                        "name": "W. Benson Terry",
                        "character": "Stanley Loomis"
                    },
                    {
                        "name": "Matt Rebenkoff",
                        "character": "Drugged Out Boyfriend"
                    },
                    {
                        "name": "Peter Bannon",
                        "character": "Local Correspondent #2"
                    },
                    {
                        "name": "Joe Washington",
                        "character": "Local Anchor #2"
                    },
                    {
                        "name": "Nora Dunfee",
                        "character": "Elderly Southern Woman"
                    },
                    {
                        "name": "Natalie Hendrix Tate",
                        "character": "Local Anchor #3"
                    },
                    {
                        "name": "Hallie D'Amore",
                        "character": "Waitress in Cafe"
                    },
                    {
                        "name": "Jim Hanks",
                        "character": "Forrest Gump Running Double"
                    },
                    {
                        "name": "Chiffonye Cobb",
                        "character": "Hannibal Reporter"
                    },
                    {
                        "name": "Juan Singleton",
                        "character": "Hannibal Reporter"
                    },
                    {
                        "name": "Bobby Richardson",
                        "character": "Hannibal Reporter"
                    },
                    {
                        "name": "Michael Mattison",
                        "character": "Taxi Driver"
                    },
                    {
                        "name": "Lenny Herb",
                        "character": "Young Man Running"
                    },
                    {
                        "name": "Charles Boswell",
                        "character": "Aging Hippie"
                    },
                    {
                        "name": "Timothy McNeil",
                        "character": "Wild Eyed Man"
                    },
                    {
                        "name": "Lonnie Hamilton",
                        "character": "The Minister"
                    },
                    {
                        "name": "Teresa Denton",
                        "character": "Lieutenant Dan's Fianc\u00e9e, Susan"
                    },
                    {
                        "name": "Kurt Russell",
                        "character": "Elvis Presley (voice) (uncredited)"
                    },
                    {
                        "name": "Mary Ellen Trainor",
                        "character": "Jenny's Babysitter (uncredited)"
                    },
                    {
                        "name": "Robb Skyler",
                        "character": "Nicholas Katzenbach (uncredited)"
                    },
                    {
                        "name": "Michael J. Oliver",
                        "character": "Red Headed Teen (uncredited)"
                    },
                    {
                        "name": "Bryan Hanna",
                        "character": "Football Coach (uncredited)"
                    },
                    {
                        "name": "Greg Brown",
                        "character": "Football Player (uncredited)"
                    },
                    {
                        "name": "Brendan Shanahan",
                        "character": "Football Player (uncredited)"
                    },
                    {
                        "name": "Troy Christian",
                        "character": "Cheerleader (uncredited)"
                    },
                    {
                        "name": "Jacqueline Lovell",
                        "character": "Football Fan (uncredited)"
                    },
                    {
                        "name": "Zach Hanner",
                        "character": "Barracks Recruit (uncredited)"
                    },
                    {
                        "name": "Aaron Michael Lacey",
                        "character": "National Guardsman (uncredited)"
                    },
                    {
                        "name": "William Shipman",
                        "character": "Black Panther (uncredited)"
                    },
                    {
                        "name": "Bob Hope",
                        "character": "Self - in Vietnam (archive footage) (uncredited)"
                    }
                ]
            },
            {
                "id": 58,
                "judul": "Pirates of the Caribbean: Dead Man's Chest",
                "durasi": 151,
                "rating": 7.347,
                "tahunRilis": "2006",
                "sutradara": "Gore Verbinski",
                "link_cover": "/uXEqmloGyP7UXAiphJUu2v2pcuE.jpg",
                "genre": [
                    "Adventure",
                    "Fantasy",
                    "Action"
                ],
                "sinopsis": "Captain Jack Sparrow works his way out of a blood debt with the ghostly Davy Jones to avoid eternal damnation.",
                "pemeran": [
                    {
                        "name": "Johnny Depp",
                        "character": "Jack Sparrow"
                    },
                    {
                        "name": "Orlando Bloom",
                        "character": "Will Turner"
                    },
                    {
                        "name": "Keira Knightley",
                        "character": "Elizabeth Swann"
                    },
                    {
                        "name": "Stellan Skarsg\u00e5rd",
                        "character": "William \"Bootstrap Bill\" Turner"
                    },
                    {
                        "name": "Bill Nighy",
                        "character": "Davy Jones"
                    },
                    {
                        "name": "Jack Davenport",
                        "character": "James Norrington"
                    },
                    {
                        "name": "Kevin McNally",
                        "character": "Joshamee Gibbs"
                    },
                    {
                        "name": "Jonathan Pryce",
                        "character": "Weatherby Swann"
                    },
                    {
                        "name": "Lee Arenberg",
                        "character": "Pintel"
                    },
                    {
                        "name": "Mackenzie Crook",
                        "character": "Ragetti"
                    },
                    {
                        "name": "Tom Hollander",
                        "character": "Cutler Beckett"
                    },
                    {
                        "name": "Naomie Harris",
                        "character": "Tia Dalma"
                    },
                    {
                        "name": "David Bailie",
                        "character": "Cotton"
                    },
                    {
                        "name": "Martin Klebba",
                        "character": "Marty"
                    },
                    {
                        "name": "David Schofield",
                        "character": "Ian Mercer"
                    },
                    {
                        "name": "Alex Norton",
                        "character": "Bellamy"
                    },
                    {
                        "name": "Dermot Keaney",
                        "character": "Maccus"
                    },
                    {
                        "name": "Andy Beckwith",
                        "character": "Clanker"
                    },
                    {
                        "name": "Clive Ashborn",
                        "character": "Koleniko"
                    },
                    {
                        "name": "Reggie Lee",
                        "character": "Headless"
                    },
                    {
                        "name": "Christopher Adamson",
                        "character": "Jimmy Legs"
                    },
                    {
                        "name": "Jonathan Linsley",
                        "character": "Ogilvey (uncredited)"
                    },
                    {
                        "name": "John Boswall",
                        "character": "Burser (uncredited)"
                    },
                    {
                        "name": "Max Baker",
                        "character": "Burser - Edinburgh (uncredited)"
                    },
                    {
                        "name": "Steve Speirs",
                        "character": "Quartermaster - Edinburgh (uncredited)"
                    },
                    {
                        "name": "Lauren Maher",
                        "character": "Scarlet (uncredited)"
                    },
                    {
                        "name": "Vanessa Branch",
                        "character": "Giselle (uncredited)"
                    },
                    {
                        "name": "Luke de Woolfson",
                        "character": "Frightened Sailor (uncredited)"
                    },
                    {
                        "name": "Jonathan Kite",
                        "character": "Black Pearl Pirate (uncredited)"
                    },
                    {
                        "name": "Ho-Kwan Tse",
                        "character": "Ho-Kwan (uncredited)"
                    },
                    {
                        "name": "Peter Donald Badalamenti II",
                        "character": "Penrod (uncredited)"
                    },
                    {
                        "name": "Christopher S. Capp",
                        "character": "Cotton's Parrot (voice) (uncredited)"
                    },
                    {
                        "name": "Donald Dowd",
                        "character": "Swamp Dweller (uncredited)"
                    },
                    {
                        "name": "Barry McEvoy",
                        "character": "Carruthers' Guard (uncredited)"
                    },
                    {
                        "name": "Claudia Adams",
                        "character": "(uncredited)"
                    },
                    {
                        "name": "Filip Cvijetic",
                        "character": "A tree seen in the movie"
                    },
                    {
                        "name": "Michael Enright",
                        "character": "Deckhand - Edinburgh"
                    },
                    {
                        "name": "Geoffrey Rush",
                        "character": "Hector Barbossa"
                    }
                ]
            },
            {
                "id": 59,
                "judul": "A History of Violence",
                "durasi": 96,
                "rating": 7.2,
                "tahunRilis": "2005",
                "sutradara": "David Cronenberg",
                "link_cover": "/rrc6GiAKHDrUjp8OmdVng9hRWBn.jpg",
                "genre": [
                    "Drama",
                    "Thriller",
                    "Crime"
                ],
                "sinopsis": "An average family is thrust into the spotlight after the father commits a seemingly self-defense murder at his diner.",
                "pemeran": [
                    {
                        "name": "Viggo Mortensen",
                        "character": "Tom Stall / Joey Cusack"
                    },
                    {
                        "name": "Maria Bello",
                        "character": "Edie Stall"
                    },
                    {
                        "name": "Ed Harris",
                        "character": "Carl Fogarty"
                    },
                    {
                        "name": "William Hurt",
                        "character": "Richie Cusack"
                    },
                    {
                        "name": "Ashton Holmes",
                        "character": "Jack Stall"
                    },
                    {
                        "name": "Peter MacNeill",
                        "character": "Sheriff Sam Carney"
                    },
                    {
                        "name": "Stephen McHattie",
                        "character": "Leland"
                    },
                    {
                        "name": "Greg Bryk",
                        "character": "Billy"
                    },
                    {
                        "name": "Kyle Schmid",
                        "character": "Bobby"
                    },
                    {
                        "name": "Sumela Kay",
                        "character": "Judy Danvers"
                    },
                    {
                        "name": "Gerry Quigley",
                        "character": "Mick"
                    },
                    {
                        "name": "Deborah Drakeford",
                        "character": "Charlotte"
                    },
                    {
                        "name": "Heidi Hayes",
                        "character": "Sarah Stall"
                    },
                    {
                        "name": "Aidan Devine",
                        "character": "Charlie Roarke"
                    },
                    {
                        "name": "Bill MacDonald",
                        "character": "Frank Mulligan"
                    },
                    {
                        "name": "Michelle McCree",
                        "character": "Jenny Wyeth"
                    },
                    {
                        "name": "Ian Matthews",
                        "character": "Ruben"
                    },
                    {
                        "name": "R.D. Reid",
                        "character": "Pat"
                    },
                    {
                        "name": "Morgan Kelly",
                        "character": "Bobby's Buddy"
                    },
                    {
                        "name": "Martha Reilly",
                        "character": "Shoe Saleswoman"
                    },
                    {
                        "name": "Jason Barbeck",
                        "character": "Richie's Thug"
                    },
                    {
                        "name": "Bruce Beaton",
                        "character": "Richie's Thug"
                    },
                    {
                        "name": "Neven Pajkic",
                        "character": "Richie's Thug"
                    },
                    {
                        "name": "Brendan Connor",
                        "character": "Local TV Reporter"
                    },
                    {
                        "name": "Nick Antonacci",
                        "character": "Local TV Reporter"
                    },
                    {
                        "name": "John Watson",
                        "character": "Baseball Coach"
                    },
                    {
                        "name": "Don Allison",
                        "character": "TV Broadcaster"
                    },
                    {
                        "name": "Brittany Payer",
                        "character": "Motel Girl"
                    },
                    {
                        "name": "Mitch Boughs",
                        "character": "Kid in Diner"
                    },
                    {
                        "name": "April Mullen",
                        "character": "Kid in Diner"
                    },
                    {
                        "name": "George King",
                        "character": "Hospital Well-Wisher"
                    },
                    {
                        "name": "Shawn Campbell",
                        "character": "Orderly"
                    }
                ]
            },
            {
                "id": 62,
                "judul": "2001: A Space Odyssey",
                "durasi": 149,
                "rating": 8.079,
                "tahunRilis": "1968",
                "sutradara": "Stanley Kubrick",
                "link_cover": "/ve72VxNqjGM69Uky4WTo2bK6rfq.jpg",
                "genre": [
                    "Science Fiction",
                    "Mystery",
                    "Adventure"
                ],
                "sinopsis": "Humanity finds a mysterious object buried beneath the lunar surface and sets off to find its origins with the help of HAL 9000, the world's most advanced super computer.",
                "pemeran": [
                    {
                        "name": "Keir Dullea",
                        "character": "Dr. David Bowman"
                    },
                    {
                        "name": "Gary Lockwood",
                        "character": "Dr. Frank Poole"
                    },
                    {
                        "name": "William Sylvester",
                        "character": "Dr. Heywood Floyd"
                    },
                    {
                        "name": "Douglas Rain",
                        "character": "HAL 9000 (voice)"
                    },
                    {
                        "name": "Daniel Richter",
                        "character": "Moonwatcher"
                    },
                    {
                        "name": "Leonard Rossiter",
                        "character": "Dr. Andrei Smyslov"
                    },
                    {
                        "name": "Margaret Tyzack",
                        "character": "Elena"
                    },
                    {
                        "name": "Robert Beatty",
                        "character": "Dr. Ralph Halvorsen"
                    },
                    {
                        "name": "Sean Sullivan",
                        "character": "Dr. Roy Michaels"
                    },
                    {
                        "name": "Frank Miller",
                        "character": "Mission Controller"
                    },
                    {
                        "name": "Ed Bishop",
                        "character": "Aries-1B Lunar Shuttle Captain"
                    },
                    {
                        "name": "Edwina Carroll",
                        "character": "Aries-1B Stewardess"
                    },
                    {
                        "name": "Heather Downham",
                        "character": "Stewardess"
                    },
                    {
                        "name": "Penny Brahms",
                        "character": "Stewardess"
                    },
                    {
                        "name": "Maggie London",
                        "character": "Stewardess"
                    },
                    {
                        "name": "Chela Matthison",
                        "character": "Stewardess"
                    },
                    {
                        "name": "Judy Kiern",
                        "character": "Voiceprint Identification Girl"
                    },
                    {
                        "name": "Alan Gifford",
                        "character": "Poole's Father"
                    },
                    {
                        "name": "Ann Gillis",
                        "character": "Poole's Mother"
                    },
                    {
                        "name": "Vivian Kubrick",
                        "character": "Floyd's daughter (uncredited)"
                    },
                    {
                        "name": "Kenneth Kendall",
                        "character": "BBC-12 Announcer"
                    },
                    {
                        "name": "Kevin Scott",
                        "character": "Miller"
                    },
                    {
                        "name": "Martin Amor",
                        "character": "Interviewer Martin Amor"
                    },
                    {
                        "name": "Bill Weston",
                        "character": "Astronaut"
                    },
                    {
                        "name": "Glenn Beck",
                        "character": "Astronaut"
                    },
                    {
                        "name": "Mike Lovell",
                        "character": "Astronaut"
                    },
                    {
                        "name": "John Ashley",
                        "character": "Ape"
                    },
                    {
                        "name": "Jimmy Bell",
                        "character": "Ape"
                    },
                    {
                        "name": "David Charkham",
                        "character": "Ape"
                    },
                    {
                        "name": "Simon Davis",
                        "character": "Ape"
                    },
                    {
                        "name": "Jonathan Daw",
                        "character": "Ape"
                    },
                    {
                        "name": "P\u00e9ter Delm\u00e1r",
                        "character": "Ape"
                    },
                    {
                        "name": "Terry Duggan",
                        "character": "Ape Attacked by Leopard"
                    },
                    {
                        "name": "David Fleetwood",
                        "character": "Ape"
                    },
                    {
                        "name": "Danny Grover",
                        "character": "Ape"
                    },
                    {
                        "name": "Brian Hawley",
                        "character": "Ape"
                    },
                    {
                        "name": "David Hines",
                        "character": "Ape"
                    },
                    {
                        "name": "Tony Jackson",
                        "character": "Ape"
                    },
                    {
                        "name": "John Jordan",
                        "character": "Ape"
                    },
                    {
                        "name": "Scott MacKee",
                        "character": "Ape"
                    },
                    {
                        "name": "Laurence Marchant",
                        "character": "Ape"
                    },
                    {
                        "name": "Darryl Paes",
                        "character": "Ape"
                    },
                    {
                        "name": "Joe Refalo",
                        "character": "Ape"
                    },
                    {
                        "name": "Andy Wallace",
                        "character": "Ape"
                    },
                    {
                        "name": "Bob Wilyman",
                        "character": "Ape"
                    },
                    {
                        "name": "Richard Woods",
                        "character": "Ape Killed by Moon-Watcher"
                    },
                    {
                        "name": "S. Newton Anderson",
                        "character": "Young Man (uncredited)"
                    },
                    {
                        "name": "Sheraton Blount",
                        "character": "(uncredited)"
                    },
                    {
                        "name": "Ann Bormann",
                        "character": "(uncredited)"
                    },
                    {
                        "name": "Julie Croft",
                        "character": "(uncredited)"
                    },
                    {
                        "name": "Penny Francis",
                        "character": "(uncredited)"
                    },
                    {
                        "name": "Marcella Markham",
                        "character": "(uncredited)"
                    },
                    {
                        "name": "Irena Marr",
                        "character": "Russian Scientist (uncredited)"
                    },
                    {
                        "name": "Krystyna Marr",
                        "character": "Russian Scientist (uncredited)"
                    },
                    {
                        "name": "Kim Neil",
                        "character": "(uncredited)"
                    },
                    {
                        "name": "Jane Pearl",
                        "character": "(uncredited)"
                    },
                    {
                        "name": "Penny Pearl",
                        "character": "(uncredited)"
                    },
                    {
                        "name": "Burnell Tucker",
                        "character": "TMA-1 Site Photographer (uncredited)"
                    },
                    {
                        "name": "John Swindells",
                        "character": "TMA-1 Site Technician #1 (uncredited)"
                    },
                    {
                        "name": "John Clifford",
                        "character": "TMA-1 Site Technician #2 (uncredited)"
                    },
                    {
                        "name": "Stanley Kubrick",
                        "character": "(voice) (uncredited)"
                    },
                    {
                        "name": "Anthony Jackson",
                        "character": "Ape"
                    }
                ]
            },
            {
                "id": 63,
                "judul": "Twelve Monkeys",
                "durasi": 129,
                "rating": 7.6,
                "tahunRilis": "1995",
                "sutradara": "Terry Gilliam",
                "link_cover": "/gt3iyguaCIw8DpQZI1LIN5TohM2.jpg",
                "genre": [
                    "Science Fiction",
                    "Thriller",
                    "Mystery"
                ],
                "sinopsis": "In the year 2035, convict James Cole reluctantly volunteers to be sent back in time to discover the origin of a deadly virus that wiped out nearly all of the earth's population and forced the survivors into underground communities. But when Cole is mistakenly sent to 1990 instead of 1996, he's arrested and locked up in a mental hospital. There he meets psychiatrist Dr. Kathryn Railly, and patient Jeffrey Goines, the son of a famous virus expert, who may hold the key to the mysterious rogue group, the Army of the 12 Monkeys, thought to be responsible for unleashing the killer disease.",
                "pemeran": [
                    {
                        "name": "Bruce Willis",
                        "character": "James Cole"
                    },
                    {
                        "name": "Madeleine Stowe",
                        "character": "Dr. Kathryn Railly"
                    },
                    {
                        "name": "Brad Pitt",
                        "character": "Jeffrey Goines"
                    },
                    {
                        "name": "Christopher Plummer",
                        "character": "Dr. Goines"
                    },
                    {
                        "name": "David Morse",
                        "character": "Dr. Peters"
                    },
                    {
                        "name": "Jon Seda",
                        "character": "Jose"
                    },
                    {
                        "name": "Christopher Meloni",
                        "character": "Lt. Halperin"
                    },
                    {
                        "name": "Joey Perillo",
                        "character": "Detective Franki"
                    },
                    {
                        "name": "LisaGay Hamilton",
                        "character": "Teddy"
                    },
                    {
                        "name": "Matt Ross",
                        "character": "Bee"
                    },
                    {
                        "name": "Annie Golden",
                        "character": "Woman Cabbie"
                    },
                    {
                        "name": "Michael Chance",
                        "character": "Scarface"
                    },
                    {
                        "name": "H. Michael Walls",
                        "character": "Botanist"
                    },
                    {
                        "name": "Bob Adrian",
                        "character": "Geologist"
                    },
                    {
                        "name": "Bill Raymond",
                        "character": "Microbiologist"
                    },
                    {
                        "name": "Ernest Abuba",
                        "character": "Engineer"
                    },
                    {
                        "name": "Nell Johnson",
                        "character": "Ward Nurse"
                    },
                    {
                        "name": "Rozwill Young",
                        "character": "Billings"
                    },
                    {
                        "name": "Joseph Melito",
                        "character": "Young Cole"
                    },
                    {
                        "name": "Frank Gorshin",
                        "character": "Dr. Fletcher"
                    },
                    {
                        "name": "Aaron Michael Lacey",
                        "character": "WWI Sergeant"
                    },
                    {
                        "name": "Vernon Campbell",
                        "character": "Tiny"
                    },
                    {
                        "name": "Simon Jones",
                        "character": "Zoologist"
                    },
                    {
                        "name": "Carol Florence",
                        "character": "Astrophysicist / Jones"
                    },
                    {
                        "name": "Irma St. Paule",
                        "character": "Poet"
                    },
                    {
                        "name": "Frederick Strother",
                        "character": "L.J. Washington"
                    },
                    {
                        "name": "Charles Techman",
                        "character": "Professor"
                    },
                    {
                        "name": "Rick Warner",
                        "character": "Dr. Casey"
                    },
                    {
                        "name": "Anthony 'Chip' Brienza",
                        "character": "Dr. Goodin"
                    },
                    {
                        "name": "Bruce Kirkpatrick",
                        "character": "Policeman No. 1"
                    },
                    {
                        "name": "Wilfred Williams",
                        "character": "Policeman No. 2"
                    },
                    {
                        "name": "Joilet Harris",
                        "character": "Harassed Mother"
                    },
                    {
                        "name": "Drucie McDaniel",
                        "character": "Waltzing Woman Patient"
                    },
                    {
                        "name": "John Blaisse",
                        "character": "Old Man Patient"
                    },
                    {
                        "name": "Louis Lippa",
                        "character": "Patient at Gate"
                    },
                    {
                        "name": "Stan Kang",
                        "character": "X-Ray Doctor"
                    },
                    {
                        "name": "Pat Dias",
                        "character": "WWI Captain"
                    },
                    {
                        "name": "Felix Pire",
                        "character": "Fale"
                    },
                    {
                        "name": "Karl Warren",
                        "character": "Pompous Man"
                    },
                    {
                        "name": "Joseph McKenna",
                        "character": "Wallace"
                    },
                    {
                        "name": "Stephen Bridgewater",
                        "character": "Airport Detective"
                    },
                    {
                        "name": "Ray Huffman",
                        "character": "Plump Businessman"
                    },
                    {
                        "name": "Charley Scalies",
                        "character": "Impatient Traveler"
                    },
                    {
                        "name": "Paul Meshejian",
                        "character": "Detective Dalva"
                    },
                    {
                        "name": "Kevin Thigpen",
                        "character": "Kweskin"
                    },
                    {
                        "name": "Jann Ellis",
                        "character": "Marilou"
                    },
                    {
                        "name": "Michael Ryan Segal",
                        "character": "Weller"
                    },
                    {
                        "name": "Korchenko",
                        "character": "Thug No. 1"
                    },
                    {
                        "name": "Robert O'Neill",
                        "character": "Wayne"
                    },
                    {
                        "name": "Harry O'Toole",
                        "character": "Louie / Raspy Voice"
                    },
                    {
                        "name": "Chuck Jeffreys",
                        "character": "Thug No. 2"
                    },
                    {
                        "name": "Barry Price",
                        "character": "Agent No. 1"
                    },
                    {
                        "name": "John Panzarella",
                        "character": "Agent No. 2"
                    },
                    {
                        "name": "Janet Zappala",
                        "character": "Anchorwoman"
                    },
                    {
                        "name": "Lisa Talerico",
                        "character": "Ticket Agent"
                    },
                    {
                        "name": "Tiffany Baldwin",
                        "character": "Student in Airport (uncredited)"
                    },
                    {
                        "name": "C.J. Byrnes",
                        "character": "Psychiatric Patient (uncredited)"
                    },
                    {
                        "name": "Tom Detrik",
                        "character": "FBI Agent (uncredited)"
                    },
                    {
                        "name": "Joe Gerety",
                        "character": "Sprayer (uncredited)"
                    },
                    {
                        "name": "Bonnie Loev",
                        "character": "Time Portal Nurse (uncredited)"
                    },
                    {
                        "name": "Raymond Mamrak",
                        "character": "Travler (uncredited)"
                    },
                    {
                        "name": "Allelon Ruggiero",
                        "character": "Inpatient (uncredited)"
                    },
                    {
                        "name": "Thang",
                        "character": "Monkey Member (uncredited)"
                    },
                    {
                        "name": "Sal Mazzotta",
                        "character": "Prisoner Joey (uncredited)"
                    },
                    {
                        "name": "Bart The Bear",
                        "character": "Bear"
                    }
                ]
            },
            {
                "id": 466420,
                "judul": "Killers of the Flower Moon",
                "durasi": 206,
                "rating": 7.713,
                "tahunRilis": "2023",
                "sutradara": "Martin Scorsese",
                "link_cover": "/dB6Krk806zeqd0YNp2ngQ9zXteH.jpg",
                "genre": [
                    "Crime",
                    "Drama",
                    "History"
                ],
                "sinopsis": "When oil is discovered in 1920s Oklahoma under Osage Nation land, the Osage people are murdered one by one\u2014until the FBI steps in to unravel the mystery.",
                "pemeran": [
                    {
                        "name": "Leonardo DiCaprio",
                        "character": "Ernest Burkhart"
                    },
                    {
                        "name": "Lily Gladstone",
                        "character": "Mollie Burkhart"
                    },
                    {
                        "name": "Robert De Niro",
                        "character": "William King Hale"
                    },
                    {
                        "name": "Jesse Plemons",
                        "character": "Tom White"
                    },
                    {
                        "name": "Tantoo Cardinal",
                        "character": "Lizzie Q"
                    },
                    {
                        "name": "Scott Shepherd",
                        "character": "Byron Burkhart"
                    },
                    {
                        "name": "Jason Isbell",
                        "character": "Bill Smith"
                    },
                    {
                        "name": "William Belleau",
                        "character": "Henry Roan"
                    },
                    {
                        "name": "Cara Jade Myers",
                        "character": "Anna"
                    },
                    {
                        "name": "John Lithgow",
                        "character": "Prosecutor Peter Leaward"
                    },
                    {
                        "name": "Brendan Fraser",
                        "character": "W.S. Hamilton"
                    },
                    {
                        "name": "JaNae Collins",
                        "character": "Reta"
                    },
                    {
                        "name": "Jillian Dion",
                        "character": "Minnie"
                    },
                    {
                        "name": "Louis Cancelmi",
                        "character": "Kelsie Morrison"
                    },
                    {
                        "name": "Tommy Schultz",
                        "character": "Blackie Thompson"
                    },
                    {
                        "name": "Everett Waller",
                        "character": "Paul Red Eagle"
                    },
                    {
                        "name": "Tahlee Redcorn",
                        "character": "Non-Hon-Zhin-Ga / Traditional Leader"
                    },
                    {
                        "name": "Yancey Red Corn",
                        "character": "Chief Bonnicastle"
                    },
                    {
                        "name": "Tatanka Means",
                        "character": "John Wren"
                    },
                    {
                        "name": "Sturgill Simpson",
                        "character": "Henry Grammer"
                    },
                    {
                        "name": "Ty Mitchell",
                        "character": "John Ramsey"
                    },
                    {
                        "name": "Gary Basaraba",
                        "character": "Detective Burns"
                    },
                    {
                        "name": "Charlie Musselwhite",
                        "character": "Alvin Reynolds"
                    },
                    {
                        "name": "Pat Healy",
                        "character": "Agent John Burger"
                    },
                    {
                        "name": "Steve Witting",
                        "character": "Dr. James Shoun"
                    },
                    {
                        "name": "Steve Routman",
                        "character": "Dr. David Shoun"
                    },
                    {
                        "name": "Gene Jones",
                        "character": "Pitts Beatty"
                    },
                    {
                        "name": "Michael Abbott Jr.",
                        "character": "Agent Frank Smith"
                    },
                    {
                        "name": "J. C. MacKenzie",
                        "character": "Radio Announcer"
                    },
                    {
                        "name": "Jack White",
                        "character": "Radio Show Actor"
                    },
                    {
                        "name": "Larry Sellers",
                        "character": "Non-Hon-Zhin-Ga"
                    },
                    {
                        "name": "Barry Corbin",
                        "character": "Undertaker Turton"
                    },
                    {
                        "name": "Gabriel Casdorph",
                        "character": "Joe Jones"
                    },
                    {
                        "name": "Samuel French",
                        "character": "Agent CJ Robinson"
                    },
                    {
                        "name": "Wally Welch",
                        "character": "Bob Mount"
                    },
                    {
                        "name": "James Roman Dailey Jr.",
                        "character": "Baby Namer"
                    },
                    {
                        "name": "Christopher Cote",
                        "character": "Baby Namer (for Anna)"
                    },
                    {
                        "name": "Randy Houser",
                        "character": "Scott Mathis"
                    },
                    {
                        "name": "Moe Headrick",
                        "character": "Sheriff Freas"
                    },
                    {
                        "name": "Pete Yorn",
                        "character": "Acie Kirby"
                    },
                    {
                        "name": "Margaret Shannon-Sisk",
                        "character": "Wife of Pipe Keeper / Wailing Relative"
                    },
                    {
                        "name": "Moira Redcorn",
                        "character": "Prologue Wailer"
                    },
                    {
                        "name": "Eric Parkinson",
                        "character": "Deputy Marshal"
                    },
                    {
                        "name": "Chase Parker",
                        "character": "Osage at Oil Discovery / Fairfax Explosion Responder"
                    },
                    {
                        "name": "Jarad Looper",
                        "character": "Osage at Oil Discover"
                    },
                    {
                        "name": "John Gibbs",
                        "character": "Osage at Oil Discover"
                    },
                    {
                        "name": "Jerry Logsdon",
                        "character": "Osage at Oil Discover"
                    },
                    {
                        "name": "Jacob Lux",
                        "character": "Osage at Oil Discover"
                    },
                    {
                        "name": "Xavier Toehay",
                        "character": "Osage at Oil Discover"
                    },
                    {
                        "name": "Mike Cook",
                        "character": "Hawker at Train"
                    },
                    {
                        "name": "Katherine Willis",
                        "character": "Myrtie Hale"
                    },
                    {
                        "name": "Delani Chambers",
                        "character": "Willie Hale"
                    },
                    {
                        "name": "Zachary Hokeah",
                        "character": "Osage Dying from Poison"
                    },
                    {
                        "name": "Talon Satepauhoodle",
                        "character": "John Whitehair"
                    },
                    {
                        "name": "Jennifer Rader",
                        "character": "Sara Butler"
                    },
                    {
                        "name": "Chance Rush",
                        "character": "Bill Stepson"
                    },
                    {
                        "name": "Dana Daylight",
                        "character": "Anna Sanford"
                    },
                    {
                        "name": "Mahada Sanders",
                        "character": "Rose Lewis"
                    },
                    {
                        "name": "Ben Hall",
                        "character": "Sara's Murderer"
                    },
                    {
                        "name": "John Q. Wilson",
                        "character": "Bank Clerk"
                    },
                    {
                        "name": "Beau Smith",
                        "character": "Photos Hustler #1"
                    },
                    {
                        "name": "Victor McCay",
                        "character": "Photos Hustler #2"
                    },
                    {
                        "name": "Nathalie Standingcloud",
                        "character": "Roan Girlfriend"
                    },
                    {
                        "name": "Jay Paulson",
                        "character": "Car Salesman"
                    },
                    {
                        "name": "Marvin E. Stepson Jr.",
                        "character": "Osage Family Buying Car"
                    },
                    {
                        "name": "Tracey Ann Moore",
                        "character": "Osage Family Buying Car"
                    },
                    {
                        "name": "Easton Wade Yellowfish",
                        "character": "Osage Family Buying Car"
                    },
                    {
                        "name": "Reignen Yellowfish",
                        "character": "Osage Family Buying Car"
                    },
                    {
                        "name": "Candice Costello",
                        "character": "Catherine Cole"
                    },
                    {
                        "name": "Father Chris Daigle",
                        "character": "Catholic Priest"
                    },
                    {
                        "name": "Justin France",
                        "character": "Card Player"
                    },
                    {
                        "name": "Jerry Wolf",
                        "character": "Fred Denoya (Robbed)"
                    },
                    {
                        "name": "Addie Roanhorse",
                        "character": "Mrs. DeNoya (Robbed)"
                    },
                    {
                        "name": "Erica Pretty Eagle Moore",
                        "character": "Baby Naming Mother #1 / Bridesmaid"
                    },
                    {
                        "name": "Mason Cunningham",
                        "character": "Baby Naming Father"
                    },
                    {
                        "name": "Norma Jean",
                        "character": "Vera (Mollie's Housekeeper)"
                    },
                    {
                        "name": "Elisha Pratt",
                        "character": "Joseph Bigheart"
                    },
                    {
                        "name": "Desireee Storm Brave",
                        "character": "Bertha Bigheart"
                    },
                    {
                        "name": "Margaret Gray",
                        "character": "Grace Bigheart"
                    },
                    {
                        "name": "Christopher Hill",
                        "character": "John Bigheart"
                    },
                    {
                        "name": "Dolan Wilson",
                        "character": "Justice of the Peace"
                    },
                    {
                        "name": "Jackie Wyatt",
                        "character": "Wedding Photographer"
                    },
                    {
                        "name": "Rayna Gellert",
                        "character": "Wedding Band Lead Fiddle"
                    },
                    {
                        "name": "Nokosee Fields",
                        "character": "Wedding Band"
                    },
                    {
                        "name": "Kieran Kane",
                        "character": "Wedding Band"
                    },
                    {
                        "name": "Lucas Ross",
                        "character": "Wedding Band"
                    },
                    {
                        "name": "Elijah Cemp Ragsdale",
                        "character": "Wedding Band"
                    },
                    {
                        "name": "Vanessa Rose Pham",
                        "character": "Elizabeth Burkhart (Baby)"
                    },
                    {
                        "name": "Terry Allen",
                        "character": "Uncle Jim"
                    },
                    {
                        "name": "Jo Harvey Allen",
                        "character": "Aunt Annie"
                    },
                    {
                        "name": "Sarah Spurger",
                        "character": "Martha (Nanny)"
                    },
                    {
                        "name": "Joshua Close",
                        "character": "Horace Burkhart"
                    },
                    {
                        "name": "Elden Henson",
                        "character": "Duke Burkhart"
                    },
                    {
                        "name": "Kinsleigh McNac",
                        "character": "Elizabeth Burkhart (2-3 years)"
                    },
                    {
                        "name": "Roanin Davis",
                        "character": "Cowboy Burkhart (Baby)"
                    },
                    {
                        "name": "David Fields",
                        "character": "Bob The Cab Driver"
                    },
                    {
                        "name": "Anthony J. Harvey",
                        "character": "Charlie Whitehorn"
                    },
                    {
                        "name": "Stephen Berkman",
                        "character": "Studio Photographer"
                    },
                    {
                        "name": "William Alyn Hill",
                        "character": "Studio Vagrant #1"
                    },
                    {
                        "name": "Joseph Spinelli",
                        "character": "Friendly Joe"
                    },
                    {
                        "name": "Blaine Hall",
                        "character": "Studio Vagrant #2"
                    },
                    {
                        "name": "Brent Langdon",
                        "character": "Barney McBride"
                    },
                    {
                        "name": "Leland Prater",
                        "character": "Rex Theater Manager"
                    },
                    {
                        "name": "DJ Whited",
                        "character": "Cave Outlaw"
                    },
                    {
                        "name": "Elizabeth Waller",
                        "character": "Elizabeth Burkhart (3-5 Years)"
                    },
                    {
                        "name": "Jessica Harjo",
                        "character": "Pearl (Henry's Girlfriend)"
                    },
                    {
                        "name": "Joey Oglesby",
                        "character": "Roy Bunch"
                    },
                    {
                        "name": "Alexis Ann",
                        "character": "Mary Roan"
                    },
                    {
                        "name": "Lee Eddy",
                        "character": "Mrs. Mackie"
                    },
                    {
                        "name": "Gary S. Pratt",
                        "character": "Bank Manager"
                    },
                    {
                        "name": "Nathaniel Arcand",
                        "character": "Ancestor Warrior"
                    },
                    {
                        "name": "Kristin Keith",
                        "character": "Speakeasy Prostitute"
                    },
                    {
                        "name": "Bravery Nowlin",
                        "character": "Cowboy (2-3 Years)"
                    },
                    {
                        "name": "Edward Gray Sr.",
                        "character": "Fleeing Osage Family"
                    },
                    {
                        "name": "Angela Pratt",
                        "character": "Fleeing Osage Family"
                    },
                    {
                        "name": "Henry Amos Gray",
                        "character": "Fleeing Osage Family"
                    },
                    {
                        "name": "Samuel Gray",
                        "character": "Fleeing Osage Family"
                    },
                    {
                        "name": "Edward Gray Jr.",
                        "character": "Fleeing Osage Family"
                    },
                    {
                        "name": "Mamie Cozad",
                        "character": "Baby Anna (at naming)"
                    },
                    {
                        "name": "Shonagh Smith",
                        "character": "Nettie Brookshire"
                    },
                    {
                        "name": "Joel Tallchief Lemon",
                        "character": "Fairfax Explosion Responder"
                    },
                    {
                        "name": "Richard Lookout RulingHisSun",
                        "character": "Fairfax Explosion Responder"
                    },
                    {
                        "name": "Brett Bower",
                        "character": "Fairfax Explosion Responder"
                    },
                    {
                        "name": "Garrison Panzer",
                        "character": "Radio Announcer"
                    },
                    {
                        "name": "River Rhoades",
                        "character": "Cowboy (4-5 Years)"
                    },
                    {
                        "name": "Zack T. Morris",
                        "character": "Osage Delegation Member"
                    },
                    {
                        "name": "Harrison Shackelford",
                        "character": "Osage Delegation Member"
                    },
                    {
                        "name": "Alexis Waller",
                        "character": "Elizabeth Burkhart (5-6 years)"
                    },
                    {
                        "name": "Mark Landon Smith",
                        "character": "President Coolidge"
                    },
                    {
                        "name": "Tom Ashmore",
                        "character": "Tribal Council Interpreter"
                    },
                    {
                        "name": "Myron F. Red Eagle",
                        "character": "Osage Man Town Dance"
                    },
                    {
                        "name": "Dolores Marie Goodeagle",
                        "character": "Osage Woman Town Dance"
                    },
                    {
                        "name": "Matt Tolentino",
                        "character": "Town Dance Band"
                    },
                    {
                        "name": "Johnny Baier",
                        "character": "Town Dance Band"
                    },
                    {
                        "name": "Gregory Fallis",
                        "character": "Town Dance Band"
                    },
                    {
                        "name": "Patrick Bubert",
                        "character": "Town Dance Band"
                    },
                    {
                        "name": "TJ Muller",
                        "character": "Town Dance Band"
                    },
                    {
                        "name": "Will Reardon-Anderson",
                        "character": "Town Dance Band"
                    },
                    {
                        "name": "Peter Reardon-Anderson",
                        "character": "Town Dance Band"
                    },
                    {
                        "name": "Kyle Dillingham",
                        "character": "Town Dance Band"
                    },
                    {
                        "name": "Jacob Johnson",
                        "character": "Town Dance Band"
                    },
                    {
                        "name": "Jeffrey Stevenson",
                        "character": "Town Dance Band"
                    },
                    {
                        "name": "Clint Rohr",
                        "character": "Town Dance Band"
                    },
                    {
                        "name": "D. Reride Smith",
                        "character": "Hale's Ranch Hand"
                    },
                    {
                        "name": "James Healy Jr.",
                        "character": "2nd Insurance Man"
                    },
                    {
                        "name": "Jeremy Goodvoice",
                        "character": "Pony Watching Man"
                    },
                    {
                        "name": "Ron McMahan",
                        "character": "Old Timer"
                    },
                    {
                        "name": "Seth Buckminster",
                        "character": "Barber"
                    },
                    {
                        "name": "Penny Potts",
                        "character": "Ballet Instructor"
                    },
                    {
                        "name": "Melissa Tiger",
                        "character": "Pony Watching Woman"
                    },
                    {
                        "name": "Karen Garlitz",
                        "character": "Tillie's Stepson"
                    },
                    {
                        "name": "Bronson Redeagle",
                        "character": "Tillie's Son"
                    },
                    {
                        "name": "Jenny Paige Lynn",
                        "character": "Tillie's Daughter"
                    },
                    {
                        "name": "David Born",
                        "character": "Kelsie's Lawyer"
                    },
                    {
                        "name": "Mary Buss",
                        "character": "John Ramsey's Wife"
                    },
                    {
                        "name": "Ted Welch",
                        "character": "Reporter #1"
                    },
                    {
                        "name": "Carl Palmer",
                        "character": "Reporter #2"
                    },
                    {
                        "name": "Tanner Brantley",
                        "character": "Marshall Gunman"
                    },
                    {
                        "name": "Jezy Gray",
                        "character": "Hale's Secretary"
                    },
                    {
                        "name": "Steve Eastin",
                        "character": "Judge John C. Pollock"
                    },
                    {
                        "name": "Joe Chrest",
                        "character": "Lawyer Freeling"
                    },
                    {
                        "name": "Brian Shoop",
                        "character": "Mr. Kraceon"
                    },
                    {
                        "name": "James Carroll",
                        "character": "Mr. Solowey"
                    },
                    {
                        "name": "Lux Britni Malaske",
                        "character": "Baby Anna (2 years)"
                    },
                    {
                        "name": "Adam Washington",
                        "character": "Acolyte"
                    },
                    {
                        "name": "Larry Jack Dotson",
                        "character": "Jailer"
                    },
                    {
                        "name": "Larry Fessenden",
                        "character": "Radio Voice (for Hale)"
                    },
                    {
                        "name": "Welker White",
                        "character": "Radio Voice (Hale's Relative)"
                    },
                    {
                        "name": "Martin Scorsese",
                        "character": "Radio Show Producer"
                    },
                    {
                        "name": "Marko Costanzo",
                        "character": "Radio Sound Effects"
                    },
                    {
                        "name": "Nicholas White",
                        "character": "Radio Sound Effects"
                    },
                    {
                        "name": "Rob Fisher",
                        "character": "Radio Show Conductor"
                    },
                    {
                        "name": "Vince Giordano",
                        "character": "Radio Show Band Leader"
                    },
                    {
                        "name": "Paul Woodiel",
                        "character": "Radio Show Orchestra"
                    },
                    {
                        "name": "Andy Stein",
                        "character": "Radio Show Orchestra"
                    },
                    {
                        "name": "Sam Bardfeld",
                        "character": "Radio Show Orchestra"
                    },
                    {
                        "name": "Joe Boga",
                        "character": "Radio Show Orchestra"
                    },
                    {
                        "name": "Jon-Erik Kellso",
                        "character": "Radio Show Orchestra"
                    },
                    {
                        "name": "Jim Fryer",
                        "character": "Radio Show Orchestra"
                    },
                    {
                        "name": "Marc Phaneuf",
                        "character": "Radio Show Orchestra"
                    },
                    {
                        "name": "Mark Lopeman",
                        "character": "Radio Show Orchestra"
                    },
                    {
                        "name": "Chris Byars",
                        "character": "Radio Show Orchestra"
                    },
                    {
                        "name": "Vinny Raniolo",
                        "character": "Radio Show Orchestra"
                    },
                    {
                        "name": "Paul Wells",
                        "character": "Radio Show Orchestra"
                    },
                    {
                        "name": "Peter Yarin",
                        "character": "Radio Show Orchestra"
                    },
                    {
                        "name": "Scott George",
                        "character": "End Celebration Osage Head Singer"
                    },
                    {
                        "name": "Kenneth Bighorse Jr.",
                        "character": "End Celebration Osage Head Singer"
                    },
                    {
                        "name": "Vann Bighorse",
                        "character": "End Celebration Osage Head Singer"
                    },
                    {
                        "name": "Anna L. Bighorse",
                        "character": "End Celebration Osage Singer"
                    },
                    {
                        "name": "Mason Bighorse",
                        "character": "End Celebration Osage Singer"
                    },
                    {
                        "name": "Norris Bighorse",
                        "character": "End Celebration Osage Singer"
                    },
                    {
                        "name": "Scott Bighorse",
                        "character": "End Celebration Osage Singer"
                    },
                    {
                        "name": "Paul Bighorse",
                        "character": "End Celebration Osage Singer"
                    },
                    {
                        "name": "Taveah Ann George",
                        "character": "End Celebration Osage Singer"
                    },
                    {
                        "name": "Wahwastoas J. Jones",
                        "character": "End Celebration Osage Singer"
                    },
                    {
                        "name": "Dobbin Monoessy Knifechief",
                        "character": "End Celebration Osage Singer"
                    },
                    {
                        "name": "Julia Lookout",
                        "character": "End Celebration Osage Singer"
                    },
                    {
                        "name": "Jennifer Moses",
                        "character": "End Celebration Osage Singer"
                    },
                    {
                        "name": "Francis Pipestem Jr.",
                        "character": "End Celebration Osage Singer"
                    },
                    {
                        "name": "Michael Paul Pahsetopah",
                        "character": "End Celebration Osage Singer"
                    },
                    {
                        "name": "Silas Satepauhoodle",
                        "character": "End Celebration Osage Singer"
                    },
                    {
                        "name": "Cherylyn Oberly Satepauhoodle",
                        "character": "End Celebration Osage Singer"
                    },
                    {
                        "name": "Charisse Satepauhoodle",
                        "character": "End Celebration Osage Singer"
                    },
                    {
                        "name": "Lynette Satepauhoodle",
                        "character": "End Celebration Osage Singer"
                    },
                    {
                        "name": "John Shaw",
                        "character": "End Celebration Osage Singer"
                    },
                    {
                        "name": "Angela Toineeta Satepauhoodle",
                        "character": "End Celebration Osage Singer"
                    },
                    {
                        "name": "Alexandria Toineeta",
                        "character": "End Celebration Osage Singer"
                    },
                    {
                        "name": "Ed Yellowfish",
                        "character": "End Celebration Osage Singer"
                    },
                    {
                        "name": "Nick W. Nicholson",
                        "character": "Deputy Dodge (uncredited)"
                    },
                    {
                        "name": "Danny Frost",
                        "character": "Lawyer (uncredited)"
                    }
                ]
            }   
        ]
    },
    {
        "id": 3,
        "judul": "Film Animasi Favorit",
        "deskripsi": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Habitant morbi tristique senectus et netus et. At elementum eu facilisis sed. Facilisis magna etiam tempor orci eu. Tortor posuere ac ut consequat semper viverra nam libero.",
        "film": [
            {
                "id": 211672,
                "judul": "Minions",
                "durasi": 91,
                "rating": 6.397,
                "tahunRilis": "2015",
                "sutradara": "Kyle Balda",
                "link_cover": "/vlOgaxUiMOA8sPDG9n3VhQabnEi.jpg",
                "genre": [
                    "Family",
                    "Animation",
                    "Adventure",
                    "Comedy"
                ],
                "sinopsis": "Minions Stuart, Kevin and Bob are recruited by Scarlet Overkill, a super-villain who, alongside her inventor husband Herb, hatches a plot to take over the world.",
                "pemeran": [
                    {
                        "name": "Sandra Bullock",
                        "character": "Scarlet Overkill (voice)"
                    },
                    {
                        "name": "Jon Hamm",
                        "character": "Herb Overkill (voice)"
                    },
                    {
                        "name": "Michael Keaton",
                        "character": "Walter Nelson (voice)"
                    },
                    {
                        "name": "Allison Janney",
                        "character": "Madge Nelson (voice)"
                    },
                    {
                        "name": "Steve Coogan",
                        "character": "Professor Flux / Tower Guard (voice)"
                    },
                    {
                        "name": "Jennifer Saunders",
                        "character": "Reine Elizabeth II (voice)"
                    },
                    {
                        "name": "Geoffrey Rush",
                        "character": "Narrator (voice)"
                    },
                    {
                        "name": "Steve Carell",
                        "character": "Gru (voice)"
                    },
                    {
                        "name": "Pierre Coffin",
                        "character": "Kevin / Stuart / Bob / The Minions (voice)"
                    },
                    {
                        "name": "Katy Mixon",
                        "character": "Tina (voice)"
                    },
                    {
                        "name": "Michael Beattie",
                        "character": "VNC Announcer / Walter Jr. (voice)"
                    },
                    {
                        "name": "Hiroyuki Sanada",
                        "character": "Sumo (voice)"
                    },
                    {
                        "name": "Dave Rosenbaum",
                        "character": "Fabrice (voice)"
                    },
                    {
                        "name": "Alex Dowding",
                        "character": "Royal Advisor (voice)"
                    },
                    {
                        "name": "Paul Thornley",
                        "character": "News Reporter (voice)"
                    },
                    {
                        "name": "Kyle Balda",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Ava Acres",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Sherry Lynn",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Mickie McGowan",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Carlos Alazraqui",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Lori Alan",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Daniel Barker",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Bob Bergen",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Melanie Bond",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Jim Cummings",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "John Cygan",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Brian T. Delaney",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Bill Farmer",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Keith Ferguson",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Jess Harnell",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Eve Karpf",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "John Kassir",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Lewis Macleod",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Danny Mann",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Mona Marshall",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Gary Martin",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Laraine Newman",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Andy Nyman",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Alexander Polinsky",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Jan Rabson",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Christopher Ragland",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Mindy Sterling",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Tara Strong",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Jim Ward",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Colette Whitaker",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "James Daniel Wilson",
                        "character": "Additional Voices (voice)"
                    }
                ]
            },
            {
                "id": 569094,
                "judul": "Spider-Man: Across the Spider-Verse",
                "durasi": 140,
                "rating": 8.406,
                "tahunRilis": "2023",
                "sutradara": "Joaquim Dos Santos",
                "link_cover": "/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
                "genre": [
                    "Animation",
                    "Action",
                    "Adventure",
                    "Science Fiction"
                ],
                "sinopsis": "After reuniting with Gwen Stacy, Brooklyn\u2019s full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters the Spider Society, a team of Spider-People charged with protecting the Multiverse\u2019s very existence. But when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders and must set out on his own to save those he loves most.",
                "pemeran": [
                    {
                        "name": "Shameik Moore",
                        "character": "Miles Morales / Spider-Man (voice)"
                    },
                    {
                        "name": "Hailee Steinfeld",
                        "character": "Gwen Stacy / Spider-Woman (voice)"
                    },
                    {
                        "name": "Jason Schwartzman",
                        "character": "Jonathan Ohnn / Spot (voice)"
                    },
                    {
                        "name": "Oscar Isaac",
                        "character": "Miguel O'Hara / Spider-Man 2099 (voice)"
                    },
                    {
                        "name": "Brian Tyree Henry",
                        "character": "Jeff Morales (voice)"
                    },
                    {
                        "name": "Luna Lauren Velez",
                        "character": "Rio Morales (voice)"
                    },
                    {
                        "name": "Jake Johnson",
                        "character": "Peter B. Parker / Spider-Man (voice)"
                    },
                    {
                        "name": "Issa Rae",
                        "character": "Jessica Drew / Spider-Woman (voice)"
                    },
                    {
                        "name": "Karan Soni",
                        "character": "Pavitr Prabhakar / Spider-Man India (voice)"
                    },
                    {
                        "name": "Shea Whigham",
                        "character": "George Stacy (voice)"
                    },
                    {
                        "name": "Greta Lee",
                        "character": "LYLA (voice)"
                    },
                    {
                        "name": "Amandla Stenberg",
                        "character": "Margo Kess: Spider-Byte (voice)"
                    },
                    {
                        "name": "Jharrel Jerome",
                        "character": "Miles G. Morales (voice)"
                    },
                    {
                        "name": "Andy Samberg",
                        "character": "Ben Reilly / Scarlet Spider (voice)"
                    },
                    {
                        "name": "Jack Quaid",
                        "character": "Peter Parker / The Lizard (voice)"
                    },
                    {
                        "name": "Rachel Dratch",
                        "character": "Ms. Weber (voice)"
                    },
                    {
                        "name": "Ziggy Marley",
                        "character": "Lenny (voice)"
                    },
                    {
                        "name": "Jorma Taccone",
                        "character": "Adriano Tumino / '67 (voice)"
                    },
                    {
                        "name": "Daniel Kaluuya",
                        "character": "Hobie Brown / Spider-Punk (voice)"
                    },
                    {
                        "name": "Mahershala Ali",
                        "character": "Uncle Aaron (voice)"
                    },
                    {
                        "name": "J.K. Simmons",
                        "character": "J. Jonah Jameson (voice)"
                    },
                    {
                        "name": "Donald Glover",
                        "character": "Aaron Davis"
                    },
                    {
                        "name": "Elizabeth Perkins",
                        "character": "May / Quippy Spider-Person (voice)"
                    },
                    {
                        "name": "Kathryn Hahn",
                        "character": "Doc Ock (voice)"
                    },
                    {
                        "name": "Ayo Edebiri",
                        "character": "Glory (voice)"
                    },
                    {
                        "name": "Nicole Delaney",
                        "character": "MJ (voice)"
                    },
                    {
                        "name": "Antonina Lentini",
                        "character": "Betty (voice)"
                    },
                    {
                        "name": "Atsuko Okatsuka",
                        "character": "Yuri (voice)"
                    },
                    {
                        "name": "Peter Sohn",
                        "character": "Ganke (voice)"
                    },
                    {
                        "name": "Melissa Sturm",
                        "character": "Mary Jane (voice)"
                    },
                    {
                        "name": "Lorraine Velez",
                        "character": "Maria (voice)"
                    },
                    {
                        "name": "Nic Novicki",
                        "character": "Lego Spider-Man (voice)"
                    },
                    {
                        "name": "Taran Killam",
                        "character": "Web-Slinger (voice)"
                    },
                    {
                        "name": "Metro Boomin",
                        "character": "Metro Spider-Man (voice)"
                    },
                    {
                        "name": "Josh Keaton",
                        "character": "Spectacular Spider-Man (voice)"
                    },
                    {
                        "name": "Sofia Barclay",
                        "character": "Malala Windsor: Spider-UK (voice)"
                    },
                    {
                        "name": "Danielle Perez",
                        "character": "Charlotte Webber: Sun-Spider (voice)"
                    },
                    {
                        "name": "Yuri Lowenthal",
                        "character": "Insomniac Spider-Man (voice)"
                    },
                    {
                        "name": "Rita Rani Ahuja",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Ismail Bashey",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Oscar Camacho",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Freddy Ferrari",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Kerry Gutierrez",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Kamal Khan",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Angelo Sekou Kouyate",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Andrew Leviton",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "David Michie",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Sumit Naig",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Juan Pacheco",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Chrystee Pharris",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Ben Pronsky",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Al Rodrigo",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Stan Sellers",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Warren Sroka",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Jasper Johannes Andrews",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Gredel Berrios Calladine",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Natalia Castellanos",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Russell Tyre Francis",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Deepti Gupta",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Sohm Kapila",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Pradnya Kuwadekar",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Ashley London",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Christopher Miller",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Andrea Navedo",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Lakshmi Patel",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Jacqueline Pinol",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Eliyas Qureshi",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Lashana Rodriguez",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Jaswant Dev Shrestha",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Libby Thomas Dickey",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Jason Linere-White",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Sitara Attaie",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Mayuri Bhandari",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "June Christopher",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Michelle Jubilee Gonzalez",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Marabina Jaimes",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Rez Kempton",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Lex Lang",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Phil Lord",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Richard Miro",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Doug Nicholas",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Shakira Ja'nai Paye",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "James Pirri",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Marley Ralph",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Michelle Ruff",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Dennis Singletary",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Amanda Troop",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Ruth Zalduondo",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Kimberly Bailey",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Sanjay Chandani",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Melanie Duke",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Jorge R. Gutierrez",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Miguel Jiron",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Deepti Kingra-Mickelsen",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Luisa Leschin",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Caitlin McKenna",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Andrew Morgado",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Arthur Ortiz",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Eliana A. Perez",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Juan Pope",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Mike Rianda",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Erika Scopelli",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Narender Sood",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Cedric L. Williams",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Kimiko Glenn",
                        "character": "Peni Parker (voice) (uncredited)"
                    },
                    {
                        "name": "Peggy Lu",
                        "character": "Mrs. Chen (archive footage) (uncredited)"
                    },
                    {
                        "name": "Andrew Garfield",
                        "character": "Peter Parker / Spider-Man (archive footage) (uncredited)"
                    },
                    {
                        "name": "Denis Leary",
                        "character": "Captain Stacy (archive footage) (uncredited)"
                    },
                    {
                        "name": "Tobey Maguire",
                        "character": "Peter Parker / Spider-Man (archive footage) (uncredited)"
                    },
                    {
                        "name": "Cliff Robertson",
                        "character": "Ben Parker (archive footage) (uncredited)"
                    },
                    {
                        "name": "Alfred Molina",
                        "character": "Doctor Octopus (voice) (archive footage) (uncredited)"
                    },
                    {
                        "name": "Post Malone",
                        "character": "Brooklyn Bystander (voice) (archive footage) (uncredited)"
                    },
                    {
                        "name": "John Mulaney",
                        "character": "Peter Porker / Spider-Ham (voice) (archive footage) (uncredited)"
                    }
                ]
            },
            {
                "id": 324857,
                "judul": "Spider-Man: Into the Spider-Verse",
                "durasi": 117,
                "rating": 8.405,
                "tahunRilis": "2018",
                "sutradara": "Rodney Rothman",
                "link_cover": "/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg",
                "genre": [
                    "Action",
                    "Adventure",
                    "Animation",
                    "Science Fiction"
                ],
                "sinopsis": "Struggling to find his place in the world while juggling school and family, Brooklyn teenager Miles Morales is unexpectedly bitten by a radioactive spider and develops unfathomable powers just like the one and only Spider-Man. While wrestling with the implications of his new abilities, Miles discovers a super collider created by the madman Wilson \"Kingpin\" Fisk, causing others from across the Spider-Verse to be inadvertently transported to his dimension.",
                "pemeran": [
                    {
                        "name": "Shameik Moore",
                        "character": "Miles Morales / Spider-Man (voice)"
                    },
                    {
                        "name": "Jake Johnson",
                        "character": "Peter B. Parker / Spider-Man (voice)"
                    },
                    {
                        "name": "Hailee Steinfeld",
                        "character": "Gwen Stacy / Spider-Woman (voice)"
                    },
                    {
                        "name": "Mahershala Ali",
                        "character": "Uncle Aaron / Prowler (voice)"
                    },
                    {
                        "name": "Brian Tyree Henry",
                        "character": "Jefferson Davis (voice)"
                    },
                    {
                        "name": "Lily Tomlin",
                        "character": "Aunt May (voice)"
                    },
                    {
                        "name": "Luna Lauren Velez",
                        "character": "Rio Morales (voice)"
                    },
                    {
                        "name": "Zo\u00eb Kravitz",
                        "character": "Mary Jane (voice)"
                    },
                    {
                        "name": "John Mulaney",
                        "character": "Peter Porker / Spider-Ham (voice)"
                    },
                    {
                        "name": "Kimiko Glenn",
                        "character": "Peni Parker (voice)"
                    },
                    {
                        "name": "Nicolas Cage",
                        "character": "Peter Parker / Spider-Man Noir (voice)"
                    },
                    {
                        "name": "Kathryn Hahn",
                        "character": "Olivia 'Liv' Octavius / Doc Ock (voice)"
                    },
                    {
                        "name": "Liev Schreiber",
                        "character": "Wilson Fisk / Kingpin (voice)"
                    },
                    {
                        "name": "Chris Pine",
                        "character": "Peter Parker / Spider-Man (voice)"
                    },
                    {
                        "name": "Natalie Morales",
                        "character": "Miss Calleros (voice)"
                    },
                    {
                        "name": "Edwin H. Bravo",
                        "character": "Brooklyn Visions Security Guard (voice)"
                    },
                    {
                        "name": "Oscar Isaac",
                        "character": "Interesting Person #1 (voice)"
                    },
                    {
                        "name": "Greta Lee",
                        "character": "Interesting Person #2 (voice)"
                    },
                    {
                        "name": "Stan Lee",
                        "character": "Stan (voice)"
                    },
                    {
                        "name": "Jorma Taccone",
                        "character": "Green Goblin / Last Dude (voice)"
                    },
                    {
                        "name": "Joaqu\u00edn Cos\u00edo",
                        "character": "Scorpion (voice)"
                    },
                    {
                        "name": "Marvin 'Krondon' Jones III",
                        "character": "Tombstone (voice)"
                    },
                    {
                        "name": "Kim Yarbrough",
                        "character": "Scientist in Cafeteria (voice)"
                    },
                    {
                        "name": "Lake Bell",
                        "character": "Vanessa Fisk (voice)"
                    },
                    {
                        "name": "Jessica Mikayla Adams",
                        "character": "Brooklyn Friend (voice)"
                    },
                    {
                        "name": "Gredel Berrios Calladine",
                        "character": "Brooklyn Friend (voice)"
                    },
                    {
                        "name": "Sarah D. Cole",
                        "character": "Brooklyn Friend (voice)"
                    },
                    {
                        "name": "Kelby Joseph",
                        "character": "Brooklyn Friend (voice)"
                    },
                    {
                        "name": "Mimi Davila",
                        "character": "Brooklyn Visions Student (voice)"
                    },
                    {
                        "name": "Claudia Choi",
                        "character": "Brooklyn Visions Teacher (voice)"
                    },
                    {
                        "name": "Melanie Haynes",
                        "character": "Brooklyn Visions Teacher (voice)"
                    },
                    {
                        "name": "Joseph Izzo",
                        "character": "Brooklyn Visions Teacher (voice)"
                    },
                    {
                        "name": "Nick Jaine",
                        "character": "Brooklyn Visions Teacher (voice)"
                    },
                    {
                        "name": "Muneeb Rehman",
                        "character": "Brooklyn Visions Teacher (voice)"
                    },
                    {
                        "name": "Carlos Zaragoza",
                        "character": "Brooklyn Visions Teacher (voice)"
                    },
                    {
                        "name": "Post Malone",
                        "character": "Brooklyn Bystander (voice)"
                    },
                    {
                        "name": "David Applebee",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Juan Carlos Arvelo",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Adam Brown",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Jon Bruno",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Darcy Rose Byrnes",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Oscar Camacho",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "June Christopher",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Alycia Cooper",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Michelle Jubilee Gonzalez",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Terrence Hardy Jr.",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Bridget Hoffman",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Rif Hutton",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Miguel Jiron",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Harrison Knight",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Lex Lang",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Donna Lynn Leavy",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Andrew Leviton",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Caitlin McKenna",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Scott Menville",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Christopher Miller",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Arthur Ortiz",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Juan Pacheco",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Devika Parikh",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Shakira Ja'nai Paye",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Courtney Peldon",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Chrystee Pharris",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Jacqueline Pinol",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Juan Pope",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Al Rodrigo",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Joseph Sanfelippo",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Justin Shenkarow",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Dennis Singletary",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Warren Sroka",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Melissa Sturm",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Holly Walker",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Jason Linere-White",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Ruth Zalduondo",
                        "character": "Additional Voices (voice)"
                    }
                ]
            },
            {
                "id": 12,
                "judul": "Finding Nemo",
                "durasi": 100,
                "rating": 7.825,
                "tahunRilis": "2003",
                "sutradara": "Andrew Stanton",
                "link_cover": "/ggQ6o8X5984OCh3kZi2UIJQJY5y.jpg",
                "genre": [
                    "Animation",
                    "Family"
                ],
                "sinopsis": "Nemo, an adventurous young clownfish, is unexpectedly taken from his Great Barrier Reef home to a dentist's office aquarium. It's up to his worrisome father Marlin and a friendly but forgetful fish Dory to bring Nemo home -- meeting vegetarian sharks, surfer dude turtles, hypnotic jellyfish, hungry seagulls, and more along the way.",
                "pemeran": [
                    {
                        "name": "Albert Brooks",
                        "character": "Marlin (voice)"
                    },
                    {
                        "name": "Ellen DeGeneres",
                        "character": "Dory (voice)"
                    },
                    {
                        "name": "Alexander Gould",
                        "character": "Nemo (voice)"
                    },
                    {
                        "name": "Willem Dafoe",
                        "character": "Gill (voice)"
                    },
                    {
                        "name": "Geoffrey Rush",
                        "character": "Nigel (voice)"
                    },
                    {
                        "name": "Brad Garrett",
                        "character": "Bloat (voice)"
                    },
                    {
                        "name": "Allison Janney",
                        "character": "Peach (voice)"
                    },
                    {
                        "name": "Austin Pendleton",
                        "character": "Gurgle (voice)"
                    },
                    {
                        "name": "Stephen Root",
                        "character": "Bubbles (voice)"
                    },
                    {
                        "name": "Vicki Lewis",
                        "character": "Deb / Flo (voice)"
                    },
                    {
                        "name": "Joe Ranft",
                        "character": "Jacques (voice)"
                    },
                    {
                        "name": "Andrew Stanton",
                        "character": "Crush (voice)"
                    },
                    {
                        "name": "Elizabeth Perkins",
                        "character": "Coral (voice)"
                    },
                    {
                        "name": "Nicholas Bird",
                        "character": "Squirt (voice)"
                    },
                    {
                        "name": "Bob Peterson",
                        "character": "Mr. Ray / Additional Voices (voice)"
                    },
                    {
                        "name": "Barry Humphries",
                        "character": "Bruce (voice)"
                    },
                    {
                        "name": "Eric Bana",
                        "character": "Anchor (voice)"
                    },
                    {
                        "name": "Bruce Spence",
                        "character": "Chum (voice)"
                    },
                    {
                        "name": "Bill Hunter",
                        "character": "Dentist (voice)"
                    },
                    {
                        "name": "LuLu Ebeling",
                        "character": "Darla (voice)"
                    },
                    {
                        "name": "Jordan Ranft",
                        "character": "Tad (voice)"
                    },
                    {
                        "name": "Erica Beck",
                        "character": "Pearl (voice)"
                    },
                    {
                        "name": "Erik Per Sullivan",
                        "character": "Sheldon (voice)"
                    },
                    {
                        "name": "John Ratzenberger",
                        "character": "Fish School (voice)"
                    },
                    {
                        "name": "Carlos Alazraqui",
                        "character": "Additional Voices  (voice)"
                    },
                    {
                        "name": "Alec Medlock",
                        "character": "Additional Voices  (voice)"
                    },
                    {
                        "name": "Bob Bergen",
                        "character": "Additional Voices  (voice)"
                    },
                    {
                        "name": "Nicole Miller",
                        "character": "Additional Voices  (voice)"
                    },
                    {
                        "name": "Geoff Brooks",
                        "character": "Additional Voices  (voice)"
                    },
                    {
                        "name": "Lisa Peers",
                        "character": "Additional Voices  (voice)"
                    },
                    {
                        "name": "Paul Eiding",
                        "character": "Additional Voice  (voice)"
                    },
                    {
                        "name": "Phil Proctor",
                        "character": "Additional Voices  (voice)"
                    },
                    {
                        "name": "Leland Grossman",
                        "character": "Additional Voices  (voice)"
                    },
                    {
                        "name": "Daryl Sabara",
                        "character": "Additional Voices  (voice)"
                    },
                    {
                        "name": "Lili Ishida",
                        "character": "Additional Voices"
                    },
                    {
                        "name": "Emmett Shoemaker",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Oliver Kindred",
                        "character": "Additional Voices  (voice)"
                    },
                    {
                        "name": "Ben Stanton",
                        "character": "Additional Voices  (voice)"
                    },
                    {
                        "name": "Danny Mann",
                        "character": "Additional Voices  (voice)"
                    },
                    {
                        "name": "Kali Whitehurst",
                        "character": "Additional Voices  (voice)"
                    },
                    {
                        "name": "Rove McManus",
                        "character": "Additional Voices  (voice)"
                    },
                    {
                        "name": "James S. Baker",
                        "character": "Additional Voices  (voice)"
                    },
                    {
                        "name": "Vanessa Marano",
                        "character": "Additional Voices  (voice)"
                    },
                    {
                        "name": "Susan Blu",
                        "character": "Additional Voices  (voice)"
                    },
                    {
                        "name": "Annelise Nolting",
                        "character": "Additional Voices  (voice)"
                    },
                    {
                        "name": "Jeff Pidgeon",
                        "character": "Additional Voices  (voice)"
                    },
                    {
                        "name": "Jennifer Darling",
                        "character": "Additional Voices  (voice)"
                    },
                    {
                        "name": "Aaron Fors",
                        "character": "Additional Voices  (voice)"
                    },
                    {
                        "name": "Katherine Ringgold",
                        "character": "Additional Voices  (voice)"
                    },
                    {
                        "name": "Jess Harnell",
                        "character": "Additional Voices  (voice)"
                    },
                    {
                        "name": "David Ian Salter",
                        "character": "Additional Voices  (voice)"
                    },
                    {
                        "name": "Caroline Kindred",
                        "character": "Additional Voices  (voice)"
                    },
                    {
                        "name": "Sherry Lynn",
                        "character": "Additional Voices  (voice)"
                    },
                    {
                        "name": "Jim Ward",
                        "character": "Additional Voices  (voice)"
                    },
                    {
                        "name": "Mickie McGowan",
                        "character": "Additional Voices  (voice)"
                    },
                    {
                        "name": "Jack Angel",
                        "character": "Additional Voices  (voice)"
                    },
                    {
                        "name": "Laura Marano",
                        "character": "Additional Voices  (voice)"
                    },
                    {
                        "name": "Bobby Block",
                        "character": "Additional Voices  (voice)"
                    },
                    {
                        "name": "Laraine Newman",
                        "character": "Additional Voices  (voice)"
                    },
                    {
                        "name": "Jane Carr",
                        "character": "Additional Voices  (voice)"
                    },
                    {
                        "name": "Jessie Flower",
                        "character": "Additional Voices  (voice)"
                    },
                    {
                        "name": "Jan Rabson",
                        "character": "Additional Voices  (voice)"
                    },
                    {
                        "name": "Bradley Trevor Greive",
                        "character": "Additional Voices  (voice)"
                    },
                    {
                        "name": "Evan Sabara",
                        "character": "Additional Voices  (voice)"
                    },
                    {
                        "name": "Marc John Jefferies",
                        "character": "Additional Voices  (voice)"
                    },
                    {
                        "name": "Eliza Schneider",
                        "character": "Additional Voices  (voice)"
                    },
                    {
                        "name": "Lee Unkrich",
                        "character": "Additional Voices  (voice)"
                    },
                    {
                        "name": "Noah Luke",
                        "character": "Additional Voices  (voice)"
                    }
                ]
            },
            {
                "id": 129,
                "judul": "Spirited Away",
                "durasi": 125,
                "rating": 8.541,
                "tahunRilis": "2001",
                "sutradara": "Hayao Miyazaki",
                "link_cover": "/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
                "genre": [
                    "Animation",
                    "Family",
                    "Fantasy"
                ],
                "sinopsis": "A young girl, Chihiro, becomes trapped in a strange new world of spirits. When her parents undergo a mysterious transformation, she must call upon the courage she never knew she had to free her family.",
                "pemeran": [
                    {
                        "name": "Rumi Hiiragi",
                        "character": "Chihiro Ogino / Sen (voice)"
                    },
                    {
                        "name": "Miyu Irino",
                        "character": "Haku (voice)"
                    },
                    {
                        "name": "Mari Natsuki",
                        "character": "Yubaba / Zeniba (voice)"
                    },
                    {
                        "name": "Takashi Naito",
                        "character": "Akio Ogino (voice)"
                    },
                    {
                        "name": "Yasuko Sawaguchi",
                        "character": "Yuko Ogino (voice)"
                    },
                    {
                        "name": "Tsunehiko Kamij\u014d",
                        "character": "Chichiyaku (voice)"
                    },
                    {
                        "name": "Takehiko Ono",
                        "character": "Aniyaku (voice)"
                    },
                    {
                        "name": "Bunta Sugawara",
                        "character": "Kamaji (voice)"
                    },
                    {
                        "name": "Akio Nakamura",
                        "character": "Kaonashi (voice)"
                    },
                    {
                        "name": "Yumi Tamai",
                        "character": "Rin (voice)"
                    },
                    {
                        "name": "Ryunosuke Kamiki",
                        "character": "Boh (voice)"
                    },
                    {
                        "name": "Tatsuya Gash\u00fbin",
                        "character": "Aogaeru (voice)"
                    },
                    {
                        "name": "Yo Oizumi",
                        "character": "Bantai Frog Service (voice)"
                    },
                    {
                        "name": "Ken Yasuda",
                        "character": "Mr. Oshira (voice)"
                    },
                    {
                        "name": "Koba Hayashi",
                        "character": "God of the River (voice)"
                    },
                    {
                        "name": "Shigeru Wakita",
                        "character": "(voice)"
                    },
                    {
                        "name": "Shir\u00f4 Sait\u00f4",
                        "character": "(voice)"
                    },
                    {
                        "name": "Michiko Yamamoto",
                        "character": "(voice)"
                    },
                    {
                        "name": "Keiko Tsukamoto",
                        "character": "(voice)"
                    },
                    {
                        "name": "Shinji Tokumaru",
                        "character": "(voice)"
                    },
                    {
                        "name": "Kaori Yamagata",
                        "character": "(voice)"
                    },
                    {
                        "name": "Yayoi Kazuki",
                        "character": "(voice)"
                    },
                    {
                        "name": "Masahiro Asano",
                        "character": "(voice)"
                    },
                    {
                        "name": "Kazutaka Hayashida",
                        "character": "(voice)"
                    },
                    {
                        "name": "Ikuko Yamamoto",
                        "character": "(voice)"
                    },
                    {
                        "name": "Mina Meguro",
                        "character": "(voice)"
                    },
                    {
                        "name": "Tetsur\u00f4 Ishibashi",
                        "character": "(voice)"
                    },
                    {
                        "name": "Katsutomo Sh\u00eebara",
                        "character": "(voice)"
                    },
                    {
                        "name": "Shinobu Katabuchi",
                        "character": "(voice)"
                    },
                    {
                        "name": "Noriko Kitou",
                        "character": "(voice)"
                    },
                    {
                        "name": "Naoto Kaji",
                        "character": "(voice)"
                    },
                    {
                        "name": "Yoshitaka Sukegawa",
                        "character": "(voice)"
                    },
                    {
                        "name": "Aki Tachikawa",
                        "character": "(voice)"
                    },
                    {
                        "name": "Noriko Yamaya",
                        "character": "(voice)"
                    },
                    {
                        "name": "Katsuhisa Matsuo",
                        "character": "(voice)"
                    },
                    {
                        "name": "Masayuki Kizu",
                        "character": "(voice)"
                    },
                    {
                        "name": "Y\u00f4ko \u00d4no",
                        "character": "(voice)"
                    },
                    {
                        "name": "Sachie Azuma",
                        "character": "(voice)"
                    },
                    {
                        "name": "Shigeyuki Totsugi",
                        "character": "(voice)"
                    },
                    {
                        "name": "Mayumi Saco",
                        "character": "(voice)"
                    },
                    {
                        "name": "Sonoko Soeda",
                        "character": "(voice)"
                    },
                    {
                        "name": "Akiko Tomihira",
                        "character": "(voice)"
                    },
                    {
                        "name": "Minako Masuda",
                        "character": "(voice)"
                    },
                    {
                        "name": "Orika Ono",
                        "character": "(voice)"
                    },
                    {
                        "name": "Rina Yamada",
                        "character": "(voice)"
                    },
                    {
                        "name": "Miwa Takachi",
                        "character": "(voice)"
                    },
                    {
                        "name": "Hiromi Takeuchi",
                        "character": "(voice)"
                    },
                    {
                        "name": "Makiko Oku",
                        "character": "(voice)"
                    }
                ]
            },
            {
                "id": 425,
                "judul": "Ice Age",
                "durasi": 81,
                "rating": 7.351,
                "tahunRilis": "2002",
                "sutradara": "Chris Wedge",
                "link_cover": "/gLhHHZUzeseRXShoDyC4VqLgsNv.jpg",
                "genre": [
                    "Animation",
                    "Comedy",
                    "Family",
                    "Adventure"
                ],
                "sinopsis": "With the impending ice age almost upon them, a mismatched trio of prehistoric critters \u2013 Manny the woolly mammoth, Diego the saber-toothed tiger and Sid the giant sloth \u2013 find an orphaned infant and decide to return it to its human parents. Along the way, the unlikely allies become friends but, when enemies attack, their quest takes on far nobler aims.",
                "pemeran": [
                    {
                        "name": "Ray Romano",
                        "character": "Manny (voice)"
                    },
                    {
                        "name": "John Leguizamo",
                        "character": "Sid (voice)"
                    },
                    {
                        "name": "Denis Leary",
                        "character": "Diego (voice)"
                    },
                    {
                        "name": "Goran Visnjic",
                        "character": "Soto (voice)"
                    },
                    {
                        "name": "Jack Black",
                        "character": "Zeke (voice)"
                    },
                    {
                        "name": "Cedric the Entertainer",
                        "character": "Carl (voice)"
                    },
                    {
                        "name": "Stephen Root",
                        "character": "Frank / Start (voice)"
                    },
                    {
                        "name": "Diedrich Bader",
                        "character": "Oscar (voice)"
                    },
                    {
                        "name": "Alan Tudyk",
                        "character": "Lenny / Oscar / Dab (voice)"
                    },
                    {
                        "name": "Lorri Bagley",
                        "character": "Jennifer (voice)"
                    },
                    {
                        "name": "Jane Krakowski",
                        "character": "Rachel (voice)"
                    },
                    {
                        "name": "Peter Ackerman",
                        "character": "Dodo / Macrauchenia (voice)"
                    },
                    {
                        "name": "P.J. Benjamin",
                        "character": "Dodo (voice)"
                    },
                    {
                        "name": "Josh Hamilton",
                        "character": "Dodo / Aardvark (voice)"
                    },
                    {
                        "name": "Chris Wedge",
                        "character": "Dodo / Scrat (voice)"
                    },
                    {
                        "name": "Denny Dillon",
                        "character": "Glyptodon (voice)"
                    },
                    {
                        "name": "Mitzi McCall",
                        "character": "Glyptodont (voice)"
                    },
                    {
                        "name": "Tara Strong",
                        "character": "Baby Moeritherium (voice)"
                    },
                    {
                        "name": "Darin De Paul",
                        "character": "Additional Voices (voice) (uncredited)"
                    },
                    {
                        "name": "Dann Fink",
                        "character": "Dodo (voice) (uncredited)"
                    },
                    {
                        "name": "Patrick Pinney",
                        "character": "Various Mammals (uncredited)"
                    },
                    {
                        "name": "Phil Proctor",
                        "character": "Various Mammals (uncredited)"
                    }
                ]
            },
            {
                "id": 328111,
                "judul": "The Secret Life of Pets",
                "durasi": 86,
                "rating": 6.269,
                "tahunRilis": "2016",
                "sutradara": "Chris Renaud",
                "link_cover": "/g3Hms6AE174doeGR1gz5zX5sVsv.jpg",
                "genre": [
                    "Adventure",
                    "Comedy",
                    "Animation",
                    "Family"
                ],
                "sinopsis": "The quiet life of a terrier named Max is upended when his owner takes in Duke, a stray whom Max instantly dislikes.",
                "pemeran": [
                    {
                        "name": "Louis C.K.",
                        "character": "Max (voice)"
                    },
                    {
                        "name": "Eric Stonestreet",
                        "character": "Duke (voice)"
                    },
                    {
                        "name": "Kevin Hart",
                        "character": "Snowball (voice)"
                    },
                    {
                        "name": "Jenny Slate",
                        "character": "Gidget (voice)"
                    },
                    {
                        "name": "Ellie Kemper",
                        "character": "Katie (voice)"
                    },
                    {
                        "name": "Albert Brooks",
                        "character": "Tiberius (voice)"
                    },
                    {
                        "name": "Lake Bell",
                        "character": "Chloe (voice)"
                    },
                    {
                        "name": "Dana Carvey",
                        "character": "Pops (voice)"
                    },
                    {
                        "name": "Hannibal Buress",
                        "character": "Buddy (voice)"
                    },
                    {
                        "name": "Bobby Moynihan",
                        "character": "Mel (voice)"
                    },
                    {
                        "name": "Chris Renaud",
                        "character": "Norman (voice)"
                    },
                    {
                        "name": "Steve Coogan",
                        "character": "Ozone / Reginald (voice)"
                    },
                    {
                        "name": "Michael Beattie",
                        "character": "Tattoo (voice)"
                    },
                    {
                        "name": "Sandra Echeverr\u00eda",
                        "character": "Maria (voice)"
                    },
                    {
                        "name": "Jaime Camil",
                        "character": "Fernando (voice)"
                    },
                    {
                        "name": "Kiely Renaud",
                        "character": "Molly (voice)"
                    },
                    {
                        "name": "Tara Strong",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Jason Marsden",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Mona Marshall",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Brian T. Delaney",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Bill Farmer",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Jan Rabson",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Ken Schretzmann",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "John Kassir",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Danny Mann",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Jim Ward",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Tyler Werrin",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Bob Bergen",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Jim Cummings",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Jess Harnell",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Laraine Newman",
                        "character": "Additional Voices (voice)"
                    }
                ]
            },
            {
                "id": 585,
                "judul": "Monsters, Inc.",
                "durasi": 92,
                "rating": 7.837,
                "tahunRilis": "2001",
                "sutradara": "Pete Docter",
                "link_cover": "/wFSpyMsp7H0ttERbxY7Trlv8xry.jpg",
                "genre": [
                    "Animation",
                    "Comedy",
                    "Family"
                ],
                "sinopsis": "Lovable Sulley and his wisecracking sidekick Mike Wazowski are the top scare team at Monsters, Inc., the scream-processing factory in Monstropolis. When a little girl named Boo wanders into their world, it's the monsters who are scared silly, and it's up to Sulley and Mike to keep her out of sight and get her back home.",
                "pemeran": [
                    {
                        "name": "John Goodman",
                        "character": "Sullivan (voice)"
                    },
                    {
                        "name": "Billy Crystal",
                        "character": "Mike (voice)"
                    },
                    {
                        "name": "Mary Gibbs",
                        "character": "Boo (voice)"
                    },
                    {
                        "name": "Steve Buscemi",
                        "character": "Randall (voice)"
                    },
                    {
                        "name": "James Coburn",
                        "character": "Waternoose (voice)"
                    },
                    {
                        "name": "Jennifer Tilly",
                        "character": "Celia (voice)"
                    },
                    {
                        "name": "Bob Peterson",
                        "character": "Roz (voice)"
                    },
                    {
                        "name": "John Ratzenberger",
                        "character": "Yeti (voice)"
                    },
                    {
                        "name": "Frank Oz",
                        "character": "Jeff Fungus (voice)"
                    },
                    {
                        "name": "Daniel Gerson",
                        "character": "Needleman / Smitty (voice)"
                    },
                    {
                        "name": "Steve Susskind",
                        "character": "Floor Manager (voice)"
                    },
                    {
                        "name": "Bonnie Hunt",
                        "character": "Flint (voice)"
                    },
                    {
                        "name": "Jeff Pidgeon",
                        "character": "Bile (voice)"
                    },
                    {
                        "name": "Samuel Lord Black",
                        "character": "George (voice)"
                    },
                    {
                        "name": "Jack Angel",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Bob Bergen",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Rodger Bumpass",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Gino Conforti",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Jennifer Darling",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Patti Deutsch",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Pete Docter",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Bobby Edner",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Ashley Edner",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Katie Scarlett",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Paul Eiding",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Bill Farmer",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Keegan Farrell",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Pat Fraley",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Teresa Ganzel",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Taylor Gifaldi",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Marc John Jefferies",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Joe Lala",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Noah Luke",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Sherry Lynn",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Danny Mann",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Mona Marshall",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Mickie McGowan",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Laraine Newman",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Kay Panabaker",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Bret Parker",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Phil Proctor",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Josh Qualtieri",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Guido Quaroni",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Jan Rabson",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Lisa Raggio",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Joe Ranft",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Sophia Ranft",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Katherine Ringgold",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Bob Scott",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "David Silverman",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Jim Thornton",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Lee Unkrich",
                        "character": "Additional Voices (voice)"
                    },
                    {
                        "name": "Wallace Shawn",
                        "character": "Rex (voice) (uncredited)"
                    }
                ]
            }
        ]
    }
]

module.exports = katalogs;