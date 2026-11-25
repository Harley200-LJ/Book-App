const books = [
    {
        title: "A Dark and Drowning Tide",
        author: "Allison Saft",
        genre: "Fantasy",
        year: 2024,
        pages: null,
        read: false,
        isbn: "9781837840915",
        owned: true,
        series: "",
        seriesNumber: null,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "I'd Tell You I Love you, But Then I'd Have To Kill You",
        author: "Ally Carter",
        genre: "Espionage",
        year: 2006,
        pages: null,
        read: true,
        isbn: "9781408309513",
        owned: true,
        series: "Gallagher Girls",
        seriesNumber: 1,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Cross My Heart and Hope to Spy",
        author: "Ally Carter",
        genre: "Espionage",
        year: 2007,
        pages: null,
        read: true,
        isbn: "9781408309520",
        owned: true,
        series: "Gallagher Girls",
        seriesNumber: 2,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Don't Judge a Girl by Her Cover",
        author: "Ally Carter",
        genre: "Espionage",
        year: 2009,
        pages: null,
        read: true,
        isbn: "9781408309537",
        owned: true,
        series: "Gallagher Girls",
        seriesNumber: 3,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Only the Good Spy Young",
        author: "Ally Carter",
        genre: "Espionage",
        year: 2010,
        pages: 284,
        read: true,
        isbn: "9781408309544",
        owned: true,
        series: "Gallagher Girls",
        seriesNumber: 4,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Out of Sight, Out of Time",
        author: "Ally Carter",
        genre: "Espionage",
        year: 2012,
        pages: 323,
        read: true,
        isbn: "9781408314746",
        owned: true,
        series: "Gallagher Girls",
        seriesNumber: 5,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "United we Spy",
        author: "Ally Carter",
        genre: "Espionage",
        year: 2013,
        pages: null,
        read: true,
        isbn: "9781408314753",
        owned: true,
        series: "Gallagher Girls",
        seriesNumber: 6,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "The Blonde Identity",
        author: "Ally Carter",
        genre: "Espionage",
        year: 2023,
        pages: null,
        read: true,
        isbn: "9781035038367",
        owned: true,
        series: "",
        seriesNumber: null,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "An Academy for Liars",
        author: "Alexis Henderson",
        genre: "Fantasy",
        year: 2024,
        pages: 464,
        read: false,
        isbn: "9781804993651",
        owned: true,
        series: "",
        seriesNumber: null,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "The Book of Azrael",
        author: "Amber V.Nicole",
        genre: "Fantasy",
        year: 2022,
        pages: null,
        read: false,
        isbn: "9781035414505",
        owned: true,
        series: "Gods and Monsters",
        seriesNumber: 1,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "The Gods Below",
        author: "Andrea Stewart",
        genre: "Fantasy",
        year: 2024,
        pages: 528,
        read: false,
        isbn: "9780356520704",
        owned: true,
        series: "",
        seriesNumber: null,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "The Ashes of London",
        author: "Andrew Taylor",
        genre: "Historical",
        year: 2016,
        pages: 496,
        read: true,
        isbn: "9780008119096",
        owned: true,
        series: "",
        seriesNumber: null,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "A Schooling in Murder",
        author: "Andrew Taylor",
        genre: "Historical",
        year: 2025,
        pages: null,
        read: false,
        isbn: "9780008494285",
        owned: true,
        series: "",
        seriesNumber: null,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "The Last Wish",
        author: "Andrzej Sapkowski",
        genre: "Fantasy",
        year: 1993,
        pages: 288,
        read: false,
        isbn: "9781473231061",
        owned: true,
        series: "The Witcher",
        seriesNumber: 1,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Sword of Destiny",
        author: "Andrzej Sapkowski",
        genre: "Fantasy",
        year: 1992,
        pages: null,
        read: false,
        isbn: "9781473231085",
        owned: true,
        series: "The Witcher",
        seriesNumber: 2,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Blood of Elves",
        author: "Andrzej Sapkowski",
        genre: "Fantasy",
        year: 1994,
        pages: 320,
        read: false,
        isbn: "9781473231078",
        owned: true,
        series: "The Witcher",
        seriesNumber: 3,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "The Time of Contempt",
        author: "Andrzej Sapkowski",
        genre: "Fantasy",
        year: 1995,
        pages: null,
        read: false,
        isbn: "9781473231092",
        owned: true,
        series: "The Witcher",
        seriesNumber: 4,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Memoirs of a Geisha",
        author: "Arthur Golden",
        genre: "Classic",
        year: 1997,
        pages: 448,
        read: false,
        isbn: "9780099771517",
        owned: true,
        series: "",
        seriesNumber: null,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Butter",
        author: "Asako Yuzuki",
        genre: "Crime",
        year: 2017,
        pages: 452,
        read: false,
        isbn: "9780008511715",
        owned: true,
        series: "",
        seriesNumber: null,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Warbreaker",
        author: "Brandon Sanderson",
        genre: "Fantasy",
        year: 2009,
        pages: null,
        read: false,
        isbn: "9780575097469",
        owned: true,
        series: "Cosmere Novel",
        seriesNumber: 1,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "The Binding",
        author: "Bridget Collins",
        genre: "Historical",
        year: 2019,
        pages: 448,
        read: true,
        isbn: "9780008272142",
        owned: true,
        series: "",
        seriesNumber: null,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "The Betrayals",
        author: "Bridget Collins",
        genre: "Dark Fantasy",
        year: 2020,
        pages: null,
        read: false,
        isbn: "9780008272197",
        owned: true,
        series: "",
        seriesNumber: null,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Tell Me Lies",
        author: "Carola Lovering",
        genre: "Romance",
        year: 2018,
        pages: null,
        read: false,
        isbn: "9781398717824",
        owned: true,
        series: "",
        seriesNumber: null,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "The Serpent & The Wings of Night",
        author: "Carissa Broadbent",
        genre: "Dark Fantasy",
        year: 2022,
        pages: null,
        read: true,
        isbn: "9781035040957",
        owned: true,
        series: "Nightborn Duet",
        seriesNumber: 1,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "The Ashes and the Star Cursed King",
        author: "Carissa Broadbent",
        genre: "Dark Fantasy",
        year: 2023,
        pages: null,
        read: false,
        isbn: "9781035040988",
        owned: true,
        series: "Nightborn Duet",
        seriesNumber: 2,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Flawed",
        author: "Cecelia Ahern",
        genre: "Dystopian",
        year: 2016,
        pages: 416,
        read: true,
        isbn: "9780008125127",
        owned: true,
        series: "Flawed",
        seriesNumber: 1,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Perfect",
        author: "Cecelia Ahern",
        genre: "Dystopian",
        year: 2017,
        pages: null,
        read: true,
        isbn: "9780008125165",
        owned: true,
        series: "Flawed",
        seriesNumber: 2,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "A Discovery of Witches",
        author: "Deborah Harkness",
        genre: "Fantasy",
        year: 2011,
        pages: 720,
        read: false,
        isbn: "9780755374045",
        owned: true,
        series: "The All Souls Trilogy",
        seriesNumber: 1,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Shadow of Night",
        author: "Deborah Harkness",
        genre: "Fantasy",
        year: 2012,
        pages: null,
        read: false,
        isbn: "9780755384754",
        owned: true,
        series: "The All Souls Trilogy",
        seriesNumber: 2,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "The Book of Life",
        author: "Deborah Harkness",
        genre: "Fantasy",
        year: 2014,
        pages: 656,
        read: false,
        isbn: "9780755384792",
        owned: true,
        series: "The All Souls Trilogy",
        seriesNumber: 3,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Outlander",
        author: "Diana Gabaldon",
        genre: "Adventure",
        year: 1991,
        pages: 880,
        read: false,
        isbn: "9781784751371",
        owned: true,
        series: "Outlander",
        seriesNumber: 1,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Fifty Shades of Grey",
        author: "E.L. James",
        genre: "Romance",
        year: 2011,
        pages: null,
        read: true,
        isbn: "9780099579939",
        owned: true,
        series: "Fifty Shades of Grey",
        seriesNumber: 1,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Fifty Shades Darker",
        author: "E.L. James",
        genre: "Romance",
        year: 2011,
        pages: null,
        read: true,
        isbn: "9780099579922",
        owned: true,
        series: "Fifty Shades of Grey",
        seriesNumber: 2,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Fifty Shades Freed",
        author: "E.L. James",
        genre: "Romance",
        year: 2012,
        pages: null,
        read: true,
        isbn: "9780099579946",
        owned: true,
        series: "Fifty Shades of Grey",
        seriesNumber: 3,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Grey",
        author: "E.L. James",
        genre: "Romance",
        year: 2015,
        pages: null,
        read: true,
        isbn: "9781784753252",
        owned: true,
        series: "Fifty Shades of Grey",
        seriesNumber: 4,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Darker",
        author: "E.L. James",
        genre: "Romance",
        year: 2017,
        pages: 560,
        read: true,
        isbn: "9781787460560",
        owned: true,
        series: "Fifty Shades of Grey",
        seriesNumber: 5,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Freed",
        author: "E.L. James",
        genre: "Romance",
        year: 2021,
        pages: null,
        read: true,
        isbn: "9781787468085",
        owned: true,
        series: "Fifty Shades of Grey",
        seriesNumber: 6,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Hooked",
        author: "Emily McIntyre",
        genre: "Romantasy",
        year: 2021,
        pages: null,
        read: true,
        isbn: "9781728278346",
        owned: true,
        series: "Never After",
        seriesNumber: 1,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Scarred",
        author: "Emily McIntyre",
        genre: "Romantasy",
        year: 2022,
        pages: 463,
        read: true,
        isbn: "9781728278353",
        owned: true,
        series: "Never After",
        seriesNumber: 2,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Wretched",
        author: "Emily McIntyre",
        genre: "Romantasy",
        year: 2022,
        pages: null,
        read: true,
        isbn: "9781728278360",
        owned: true,
        series: "Never After",
        seriesNumber: 3,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Twisted",
        author: "Emily McIntyre",
        genre: "Romantasy",
        year: 2023,
        pages: null,
        read: true,
        isbn: "9781728278377",
        owned: true,
        series: "Never After",
        seriesNumber: 4,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Crossed",
        author: "Emily McIntyre",
        genre: "Romantasy",
        year: 2023,
        pages: null,
        read: true,
        isbn: "9781728290829",
        owned: true,
        series: "Never After",
        seriesNumber: 5,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Hexed",
        author: "Emily McIntyre",
        genre: "Romantasy",
        year: 2024,
        pages: 400,
        read: false,
        isbn: "9781728297408",
        owned: true,
        series: "Never After",
        seriesNumber: 6,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genre: "Classic",
        year: 1960,
        pages: 309,
        read: false,
        isbn: "9780099549482",
        owned: true,
        series: "",
        seriesNumber: null,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        genre: "Fantasy",
        year: 1937,
        pages: 310,
        read: false,
        isbn: "9780261102217",
        owned: true,
        series: "",
        seriesNumber: null,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "The Philosopher's Stone",
        author: "J.K.Rowling",
        genre: "Fantasy",
        year: 1997,
        pages: 332,
        read: true,
        isbn: "9781408855652",
        owned: true,
        series: "Harry Potter",
        seriesNumber: 1,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "The Chamber of Secrets",
        author: "J.K.Rowling",
        genre: "Fantasy",
        year: 1998,
        pages: 386,
        read: true,
        isbn: "9781408855669",
        owned: true,
        series: "Harry Potter",
        seriesNumber: 2,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Prisoner of Azkaban",
        author: "J.K.Rowling",
        genre: "Fantasy",
        year: 1999,
        pages: 480,
        read: true,
        isbn: "9781408855676",
        owned: true,
        series: "Harry Potter",
        seriesNumber: 3,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Goblet of Fire",
        author: "J.K.Rowling",
        genre: "Fantasy",
        year: 2000,
        pages: 642,
        read: true,
        isbn: "9781408855683",
        owned: true,
        series: "Harry Potter",
        seriesNumber: 4,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "The Order of the Phoenix",
        author: "J.K.Rowling",
        genre: "Fantasy",
        year: 2003,
        pages: null,
        read: true,
        isbn: "9781408855690",
        owned: true,
        series: "Harry Potter",
        seriesNumber: 5,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "The Half-Blood Prince",
        author: "J.K.Rowling",
        genre: "Fantasy",
        year: 2005,
        pages: 562,
        read: true,
        isbn: "9781408855706",
        owned: true,
        series: "Harry Potter",
        seriesNumber: 6,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Deathly Hallows",
        author: "J.K.Rowling",
        genre: "Fantasy",
        year: 2007,
        pages: 642,
        read: true,
        isbn: "9781408855713",
        owned: true,
        series: "Harry Potter",
        seriesNumber: 7,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "The Silverblood Promise",
        author: "James Logan",
        genre: "Fantasy",
        year: 2024,
        pages: null,
        read: false,
        isbn: "9781529432787",
        owned: true,
        series: "",
        seriesNumber: null,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "The Ruin of Kings",
        author: "Jenn Lyons",
        genre: "Fantasy",
        year: 2019,
        pages: 720,
        read: false,
        isbn: "9781509879502",
        owned: true,
        series: "Chorus of Dragons",
        seriesNumber: 1,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "The Name of All Things",
        author: "Jenn Lyons",
        genre: "Fantasy",
        year: 2019,
        pages: 752,
        read: false,
        isbn: "9781509879557",
        owned: true,
        series: "Chorus of Dragons",
        seriesNumber: 2,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Tales of a Monstrous Heart",
        author: "Jennifer Delaney",
        genre: "Dark Fantasy",
        year: 2024,
        pages: 480,
        read: false,
        isbn: "9781399615990",
        owned: true,
        series: "",
        seriesNumber: null,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Obsidian",
        author: "Jennifer L.Armentrout",
        genre: "Romantasy",
        year: 2011,
        pages: 384,
        read: false,
        isbn: "9781399737982",
        owned: true,
        series: "Lux Series",
        seriesNumber: 2,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Onyx",
        author: "Jennifer L.Armentrout",
        genre: "Romantasy",
        year: 2012,
        pages: 384,
        read: false,
        isbn: "9781399737999",
        owned: true,
        series: "Lux Series",
        seriesNumber: 3,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Opal",
        author: "Jennifer L.Armentrout",
        genre: "Romantasy",
        year: 2012,
        pages: 400,
        read: false,
        isbn: "9781399738002",
        owned: true,
        series: "Lux Series",
        seriesNumber: 4,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Origin",
        author: "Jennifer L.Armentrout",
        genre: "Romantasy",
        year: 2013,
        pages: 400,
        read: false,
        isbn: "9781399738019",
        owned: true,
        series: "Lux Series",
        seriesNumber: 5,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Storm and Fury",
        author: "Jennifer L.Armentrout",
        genre: "Romantasy",
        year: 2019,
        pages: null,
        read: false,
        isbn: "9781335012852",
        owned: true,
        series: "The Harbinger Series",
        seriesNumber: 1,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Rage and Ruin",
        author: "Jennifer L.Armentrout",
        genre: "Romantasy",
        year: 2020,
        pages: null,
        read: false,
        isbn: "9781335012845",
        owned: true,
        series: "The Harbinger Series",
        seriesNumber: 2,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Grace and Glory",
        author: "Jennifer L.Armentrout",
        genre: "Romantasy",
        year: 2021,
        pages: null,
        read: false,
        isbn: "9781335453778",
        owned: true,
        series: "The Harbinger Series",
        seriesNumber: 3,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "From Blood and Ash",
        author: "Jennifer L.Armentrout",
        genre: "Romantasy",
        year: 2020,
        pages: 493,
        read: false,
        isbn: "9781952457760",
        owned: true,
        series: "Blood and Ash",
        seriesNumber: 1,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Ariadne",
        author: "Jennifer Saint",
        genre: "Greek Mythology",
        year: 2021,
        pages: 388,
        read: false,
        isbn: "9781472273901",
        owned: true,
        series: "",
        seriesNumber: null,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Malice",
        author: "John Gwynne",
        genre: "Fantasy",
        year: 2012,
        pages: 640,
        read: false,
        isbn: "9780330545754",
        owned: true,
        series: "The Faithful and the Fallen",
        seriesNumber: 1,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Valour",
        author: "John Gwynne",
        genre: "Fantasy",
        year: 2014,
        pages: null,
        read: false,
        isbn: "9780330545761",
        owned: true,
        series: "The Faithful and the Fallen",
        seriesNumber: 2,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Ruin",
        author: "John Gwynne",
        genre: "Fantasy",
        year: 2015,
        pages: 672,
        read: false,
        isbn: "9781447259640",
        owned: true,
        series: "The Faithful and the Fallen",
        seriesNumber: 3,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Wrath",
        author: "John Gwynne",
        genre: "Fantasy",
        year: 2016,
        pages: null,
        read: false,
        isbn: "9781447259701",
        owned: true,
        series: "The Faithful and the Fallen",
        seriesNumber: 4,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Of Mice and Men",
        author: "John Steinbeck",
        genre: "Classic",
        year: 1937,
        pages: 128,
        read: false,
        isbn: "9780141023571",
        owned: true,
        series: "",
        seriesNumber: null,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Starcrossed",
        author: "Josephine Angelini",
        genre: "Greek Mythology",
        year: 2011,
        pages: 528,
        read: true,
        isbn: "9781509891955",
        owned: true,
        series: "Starcrossed Series",
        seriesNumber: 1,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Dreamless",
        author: "Josephine Angelini",
        genre: "Greek Mythology",
        year: 2012,
        pages: null,
        read: true,
        isbn: "9781509891962",
        owned: true,
        series: "Starcrossed Series",
        seriesNumber: 2,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Goddess",
        author: "Josephine Angelini",
        genre: "Greek Mythology",
        year: 2013,
        pages: null,
        read: true,
        isbn: "9781509891979",
        owned: true,
        series: "Starcrossed Series",
        seriesNumber: 3,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Scions",
        author: "Josephine Angelini",
        genre: "Greek Mythology",
        year: 2022,
        pages: null,
        read: true,
        isbn: "9798985581027",
        owned: true,
        series: "Starcrossed Series",
        seriesNumber: 4,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Timeless",
        author: "Josephine Angelini",
        genre: "Greek Mythology",
        year: 2023,
        pages: null,
        read: true,
        isbn: "9798985581065",
        owned: true,
        series: "Starcrossed Series",
        seriesNumber: 5,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Trial by Fire",
        author: "Josephine Angelini",
        genre: "Folklore",
        year: 2014,
        pages: 372,
        read: true,
        isbn: "9781509809875",
        owned: true,
        series: "Worldwalker Series",
        seriesNumber: 1,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Fire Walker",
        author: "Josephine Angelini",
        genre: "Folklore",
        year: 2015,
        pages: null,
        read: true,
        isbn: "9781447260851",
        owned: true,
        series: "Worldwalker Series",
        seriesNumber: 2,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Witch's Pyre",
        author: "Josephine Angelini",
        genre: "Folklore",
        year: 2016,
        pages: null,
        read: true,
        isbn: "9781447260882",
        owned: true,
        series: "Worldwalker Series",
        seriesNumber: 3,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "In the Veins of the Drowning",
        author: "Kalie Cassidy",
        genre: "Dark Fantasy",
        year: 2025,
        pages: 320,
        read: false,
        isbn: "9781399632096",
        owned: true,
        series: "The Siren Mage",
        seriesNumber: 1,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "City of Gods and Monsters",
        author: "Kayla Edwards",
        genre: "",
        year: 2025,
        pages: 768,
        read: false,
        isbn: "9781405988803",
        owned: true,
        series: "House of Devils",
        seriesNumber: 1,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Never Let Me Go",
        author: "Kazuo Ishiguro",
        genre: "Dystopian",
        year: 2005,
        pages: 282,
        read: true,
        isbn: "9780571258093",
        owned: true,
        series: "",
        seriesNumber: null,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Ravenous",
        author: "Kresley Cole",
        genre: "Fantasy",
        year: 2026,
        pages: null,
        read: false,
        isbn: "9781035926626",
        owned: true,
        series: "Immortals Untold",
        seriesNumber: 1,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "The Crimson Moth",
        author: "Kristen Ciccarelli",
        genre: "Fantasy",
        year: 2024,
        pages: 416,
        read: false,
        isbn: "9780008650605",
        owned: true,
        series: "",
        seriesNumber: null,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Daughter of Smoke and Bone",
        author: "Laini Taylor",
        genre: "Fantasy",
        year: 2011,
        pages: null,
        read: false,
        isbn: "9781444722659",
        owned: true,
        series: "Daughter of Smoke and Bone",
        seriesNumber: 1,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Days of Blood and Starlight",
        author: "Laini Taylor",
        genre: "Fantasy",
        year: 2012,
        pages: null,
        read: false,
        isbn: "9781444722703",
        owned: true,
        series: "Daughter of Smoke and Bone",
        seriesNumber: 2,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Dreams of Gods and Monsters",
        author: "Laini Taylor",
        genre: "Fantasy",
        year: 2014,
        pages: 528,
        read: false,
        isbn: "9781444722758",
        owned: true,
        series: "Daughter of Smoke and Bone",
        seriesNumber: 3,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "The Hypnotist",
        author: "Lars Kepler",
        genre: "Thriller",
        year: 2009,
        pages: 616,
        read: true,
        isbn: "9780007359127",
        owned: true,
        series: "",
        seriesNumber: null,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Pestilence",
        author: "Laura Thalassa",
        genre: "Urban Fantasy",
        year: 2018,
        pages: null,
        read: true,
        isbn: "9781728292670",
        owned: true,
        series: "The Four Horsemen Series",
        seriesNumber: 1,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "War",
        author: "Laura Thalassa",
        genre: "Urban Fantasy",
        year: 2018,
        pages: null,
        read: false,
        isbn: "9781728292649",
        owned: true,
        series: "The Four Horsemen Series",
        seriesNumber: 2,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Don't Call me Baby",
        author: "Laurie Depp",
        genre: "Teenage Drama",
        year: 2007,
        pages: 256,
        read: true,
        isbn: "9780340930397",
        owned: true,
        series: "Consequences...",
        seriesNumber: 1,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "The Camera never lies",
        author: "Laurie Depp",
        genre: "Teenage Drama",
        year: 2007,
        pages: 224,
        read: true,
        isbn: "9780340930403",
        owned: true,
        series: "Consequences...",
        seriesNumber: 2,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Runway Girl",
        author: "Laurie Depp",
        genre: "Teenage Drama",
        year: 2008,
        pages: 224,
        read: true,
        isbn: "9780340930410",
        owned: true,
        series: "Consequences...",
        seriesNumber: 3,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Secrets, Lies & Videotape",
        author: "Laurie Depp",
        genre: "Teenage Drama",
        year: 2008,
        pages: 240,
        read: true,
        isbn: "9780340930427",
        owned: true,
        series: "Consequences...",
        seriesNumber: 4,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "I'm with the Band",
        author: "Laurie Depp",
        genre: "Teenage Drama",
        year: 2008,
        pages: null,
        read: true,
        isbn: "9780340930441",
        owned: true,
        series: "Consequences...",
        seriesNumber: 6,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "The Pumpkin Spice Cafe",
        author: "Laurie Gilmore",
        genre: "Romance",
        year: 2023,
        pages: 360,
        read: true,
        isbn: "9780008610678",
        owned: true,
        series: "Dream Harbour",
        seriesNumber: 1,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "The Cinnamon Bun Book Store",
        author: "Laurie Gilmore",
        genre: "Romance",
        year: 2024,
        pages: 384,
        read: true,
        isbn: "9780008641580",
        owned: true,
        series: "Dream Harbour",
        seriesNumber: 2,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "The Christmas Tree Farm",
        author: "Laurie Gilmore",
        genre: "Romance",
        year: 2024,
        pages: 356,
        read: true,
        isbn: "9780008610746",
        owned: true,
        series: "Dream Harbour",
        seriesNumber: 3,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "The Strawberry Patch Pancake House",
        author: "Laurie Gilmore",
        genre: "Romance",
        year: 2025,
        pages: 361,
        read: true,
        isbn: "9780008713348",
        owned: true,
        series: "Dream Harbour",
        seriesNumber: 4,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "The Gingerbread Bakery",
        author: "Laurie Gilmore",
        genre: "Romance",
        year: 2025,
        pages: 358,
        read: true,
        isbn: "9780008728090",
        owned: true,
        series: "Dream Harbour",
        seriesNumber: 5,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "The Daisy Chain Flower Shop",
        author: "Laurie Gilmore",
        genre: "Romance",
        year: 2026,
        pages: 384,
        read: true,
        isbn: "9780008761479",
        owned: true,
        series: "Dream Harbour",
        seriesNumber: 6,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Killing Floor",
        author: "Lee Child",
        genre: "Action",
        year: 1997,
        pages: 560,
        read: true,
        isbn: "9780553826166",
        owned: true,
        series: "Jack Reacher Series",
        seriesNumber: 1,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Die Trying",
        author: "Lee Child",
        genre: "Action",
        year: 1998,
        pages: null,
        read: true,
        isbn: "9780857500052",
        owned: true,
        series: "Jack Reacher Series",
        seriesNumber: 2,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Tripwire",
        author: "Lee Child",
        genre: "Action",
        year: 1999,
        pages: 576,
        read: true,
        isbn: "9780857500069",
        owned: true,
        series: "Jack Reacher Series",
        seriesNumber: 3,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "The Visitor",
        author: "Lee Child",
        genre: "Action",
        year: 2000,
        pages: 509,
        read: true,
        isbn: "9780857500076",
        owned: true,
        series: "Jack Reacher Series",
        seriesNumber: 4,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Echo Burning",
        author: "Lee Child",
        genre: "Action",
        year: 2001,
        pages: 608,
        read: true,
        isbn: "9780857500083",
        owned: true,
        series: "Jack Reacher Series",
        seriesNumber: 5,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Without Fail",
        author: "Lee Child",
        genre: "Action",
        year: 2002,
        pages: 592,
        read: true,
        isbn: "9780857500090",
        owned: true,
        series: "Jack Reacher Series",
        seriesNumber: 6,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Persuader",
        author: "Lee Child",
        genre: "Action",
        year: 2003,
        pages: null,
        read: true,
        isbn: "9780857500106",
        owned: true,
        series: "Jack Reacher Series",
        seriesNumber: 7,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "No Time for Goodbye",
        author: "Linwood Barclay",
        genre: "Crime",
        year: 2007,
        pages: null,
        read: true,
        isbn: "9780752893686",
        owned: true,
        series: "",
        seriesNumber: null,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Too Close to Home",
        author: "Linwood Barclay",
        genre: "Crime",
        year: 2008,
        pages: 480,
        read: true,
        isbn: "9781409102090",
        owned: true,
        series: "",
        seriesNumber: null,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Fear the Worst",
        author: "Linwood Barclay",
        genre: "Crime",
        year: 2009,
        pages: 360,
        read: true,
        isbn: "9780752883359",
        owned: true,
        series: "",
        seriesNumber: null,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Never Look Away",
        author: "Linwood Barclay",
        genre: "Crime",
        year: 2010,
        pages: 528,
        read: true,
        isbn: "9780752883366",
        owned: true,
        series: "",
        seriesNumber: null,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "The Accident",
        author: "Linwood Barclay",
        genre: "Crime",
        year: 2011,
        pages: 472,
        read: true,
        isbn: "9780752883373",
        owned: true,
        series: "",
        seriesNumber: null,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Trust your Eyes",
        author: "Linwood Barclay",
        genre: "Crime",
        year: 2012,
        pages: 511,
        read: true,
        isbn: "9781409120315",
        owned: true,
        series: "",
        seriesNumber: null,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Never Saw it Coming",
        author: "Linwood Barclay",
        genre: "Crime",
        year: 2013,
        pages: 320,
        read: true,
        isbn: "9781409137634",
        owned: true,
        series: "",
        seriesNumber: null,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "A Tap on the Window",
        author: "Linwood Barclay",
        genre: "Crime",
        year: 2013,
        pages: null,
        read: true,
        isbn: "9781409120346",
        owned: true,
        series: "",
        seriesNumber: null,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Broken Promise",
        author: "Linwood Barclay",
        genre: "Crime",
        year: 2015,
        pages: 528,
        read: true,
        isbn: "9781409146476",
        owned: true,
        series: "Promise Falls Series",
        seriesNumber: 1,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Far From True",
        author: "Linwood Barclay",
        genre: "Crime",
        year: 2016,
        pages: 517,
        read: true,
        isbn: "9781409146513",
        owned: true,
        series: "Promise Falls Series",
        seriesNumber: 2,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "The Twenty-Three",
        author: "Linwood Barclay",
        genre: "Crime",
        year: 2016,
        pages: 512,
        read: true,
        isbn: "9781409146551",
        owned: true,
        series: "Promise Falls Series",
        seriesNumber: 3,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Parting Shot",
        author: "Linwood Barclay",
        genre: "Crime",
        year: 2017,
        pages: null,
        read: false,
        isbn: "9781409163954",
        owned: true,
        series: "",
        seriesNumber: null,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "A Noise Downstairs",
        author: "Linwood Barclay",
        genre: "Crime",
        year: 2018,
        pages: 368,
        read: true,
        isbn: "9781409164005",
        owned: true,
        series: "",
        seriesNumber: null,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Elevator Pitch",
        author: "Linwood Barclay",
        genre: "Crime",
        year: 2019,
        pages: 400,
        read: false,
        isbn: "9780008332037",
        owned: true,
        series: "",
        seriesNumber: null,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Find you First",
        author: "Linwood Barclay",
        genre: "Crime",
        year: 2021,
        pages: null,
        read: false,
        isbn: "9780008332082",
        owned: true,
        series: "",
        seriesNumber: null,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Take Your Breath Away",
        author: "Linwood Barclay",
        genre: "Crime",
        year: 2022,
        pages: null,
        read: false,
        isbn: "9780008332136",
        owned: true,
        series: "",
        seriesNumber: null,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Chase",
        author: "Linwood Barclay",
        genre: "Crime",
        year: 2017,
        pages: 256,
        read: false,
        isbn: "9781510102194",
        owned: true,
        series: "",
        seriesNumber: null,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Mile High",
        author: "Liz Tomforde",
        genre: "Romance",
        year: 2022,
        pages: 570,
        read: false,
        isbn: "9781399728546",
        owned: true,
        series: "Windy City Series",
        seriesNumber: 1,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Only Ever Yours",
        author: "Louise O'Neill",
        genre: "Dystopian",
        year: 2014,
        pages: 400,
        read: false,
        isbn: "9781784294007",
        owned: true,
        series: "",
        seriesNumber: null,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "The Artist",
        author: "Lucy Steeds",
        genre: "Romance",
        year: 2025,
        pages: null,
        read: false,
        isbn: "9781399819589",
        owned: true,
        series: "",
        seriesNumber: null,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Crossfire",
        author: "Malorie Blackman",
        genre: "Dystopian",
        year: 2019,
        pages: 496,
        read: true,
        isbn: "9780241388440",
        owned: true,
        series: "Noughts and Crosses",
        seriesNumber: 5,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Endgame",
        author: "Malorie Blackman",
        genre: "Dystopian",
        year: 2021,
        pages: 480,
        read: false,
        isbn: "9780241443996",
        owned: true,
        series: "Noughts and Crosses",
        seriesNumber: 6,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "1794 The City Between the Bridges",
        author: "Niklas Natt och Dag",
        genre: "Historical",
        year: 2019,
        pages: null,
        read: false,
        isbn: "9781529304640",
        owned: true,
        series: "",
        seriesNumber: null,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "The Girl on the Train",
        author: "Paula Hawkins",
        genre: "Thriller",
        year: 2015,
        pages: null,
        read: true,
        isbn: "9781784161101",
        owned: true,
        series: "",
        seriesNumber: null,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Spark of the Everflame",
        author: "Penn Cole",
        genre: "Fantasy",
        year: 2023,
        pages: 416,
        read: true,
        isbn: "9781035428939",
        owned: true,
        series: "Kindred's Curse Saga",
        seriesNumber: 1,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Glow of the Everflame",
        author: "Penn Cole",
        genre: "Fantasy",
        year: 2023,
        pages: 624,
        read: true,
        isbn: "9781035428946",
        owned: true,
        series: "Kindred's Curse Saga",
        seriesNumber: 2,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Heat of the Everflame",
        author: "Penn Cole",
        genre: "Fantasy",
        year: 2024,
        pages: 608,
        read: true,
        isbn: "9781035432516",
        owned: true,
        series: "Kindred's Curse Saga",
        seriesNumber: 3,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Burn of the Everflame",
        author: "Penn Cole",
        genre: "Fantasy",
        year: 2026,
        pages: null,
        read: false,
        isbn: "",
        owned: false,
        series: "Kindred's Curse Saga",
        seriesNumber: 4,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "The Poppy War",
        author: "R.F. Kuang",
        genre: "Fantasy",
        year: 2018,
        pages: 527,
        read: false,
        isbn: "9780008239848",
        owned: true,
        series: "Poppy War",
        seriesNumber: 1,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Glass House",
        author: "Rachel Caine",
        genre: "Vampires/Werewolves",
        year: 2006,
        pages: 361,
        read: true,
        isbn: "9780749079512",
        owned: true,
        series: "The Morganville Series",
        seriesNumber: 1,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "The Dead Girls' Dance",
        author: "Rachel Caine",
        genre: "Vampires/Werewolves",
        year: 2007,
        pages: 380,
        read: true,
        isbn: "9780749079864",
        owned: true,
        series: "The Morganville Series",
        seriesNumber: 2,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Midnight Alley",
        author: "Rachel Caine",
        genre: "Vampires/Werewolves",
        year: 2007,
        pages: 365,
        read: true,
        isbn: "9780749079222",
        owned: true,
        series: "The Morganville Series",
        seriesNumber: 3,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Feast of Fools",
        author: "Rachel Caine",
        genre: "Vampires/Werewolves",
        year: 2008,
        pages: 367,
        read: true,
        isbn: "9780749079796",
        owned: true,
        series: "The Morganville Series",
        seriesNumber: 4,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Lord of Misrule",
        author: "Rachel Caine",
        genre: "Vampires/Werewolves",
        year: 2009,
        pages: 350,
        read: true,
        isbn: "9780749007577",
        owned: true,
        series: "The Morganville Series",
        seriesNumber: 5,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Fade Out",
        author: "Rachel Caine",
        genre: "Vampires/Werewolves",
        year: 2009,
        pages: 348,
        read: true,
        isbn: "9780749007492",
        owned: true,
        series: "The Morganville Series",
        seriesNumber: 7,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Ghost Town",
        author: "Rachel Caine",
        genre: "Vampires/Werewolves",
        year: 2010,
        pages: 480,
        read: true,
        isbn: "9780749008048",
        owned: true,
        series: "The Morganville Series",
        seriesNumber: 9,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Bite Club",
        author: "Rachel Caine",
        genre: "Vampires/Werewolves",
        year: 2011,
        pages: 448,
        read: true,
        isbn: "9780749008093",
        owned: true,
        series: "The Morganville Series",
        seriesNumber: 10,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Last Breath",
        author: "Rachel Caine",
        genre: "Vampires/Werewolves",
        year: 2011,
        pages: 448,
        read: true,
        isbn: "9780749008147",
        owned: true,
        series: "The Morganville Series",
        seriesNumber: 11,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Black Dawn",
        author: "Rachel Caine",
        genre: "Vampires/Werewolves",
        year: 2012,
        pages: 507,
        read: true,
        isbn: "9780749040550",
        owned: true,
        series: "The Morganville Series",
        seriesNumber: 12,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Bitter Blood",
        author: "Rachel Caine",
        genre: "Vampires/Werewolves",
        year: 2012,
        pages: 480,
        read: true,
        isbn: "9780749012809",
        owned: true,
        series: "The Morganville Series",
        seriesNumber: 13,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Fall of Night",
        author: "Rachel Caine",
        genre: "Vampires/Werewolves",
        year: 2013,
        pages: null,
        read: true,
        isbn: "9780749012663",
        owned: true,
        series: "The Morganville Series",
        seriesNumber: 14,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Daylighters",
        author: "Rachel Caine",
        genre: "Vampires/Werewolves",
        year: 2013,
        pages: 494,
        read: true,
        isbn: "9780749012717",
        owned: true,
        series: "The Morganville Series",
        seriesNumber: 15,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "One Dark Window",
        author: "Rachel Gillig",
        genre: "Dark Fantasy",
        year: 2022,
        pages: 392,
        read: true,
        isbn: "9780356519494",
        owned: true,
        series: "The Shepherd King",
        seriesNumber: 1,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Two Twisted Crowns",
        author: "Rachel Gillig",
        genre: "Dark Fantasy",
        year: 2023,
        pages: 430,
        read: true,
        isbn: "9780356519500",
        owned: true,
        series: "The Shepherd King",
        seriesNumber: 2,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "The Knight and the Moth",
        author: "Rachel Gillig",
        genre: "Dark Fantasy",
        year: 2025,
        pages: null,
        read: false,
        isbn: "9780356522975",
        owned: true,
        series: "Stonewater Kingdom Duology",
        seriesNumber:  1,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Gild",
        author: "Raven Kennedy",
        genre: "Dark Fantasy",
        year: 2020,
        pages: null,
        read: false,
        isbn: "9781405955003",
        owned: true,
        series: "Plated Prisoner Series",
        seriesNumber: 1,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Glint",
        author: "Raven Kennedy",
        genre: "Dark Fantasy",
        year: 2021,
        pages: null,
        read: false,
        isbn: "9781405955041",
        owned: true,
        series: "Plated Prisoner Series",
        seriesNumber: 2,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Threshing Day",
        author: "Rebecca Yarros",
        genre: "Fantasy",
        year: 2026,
        pages: 204,
        read: false,
        isbn: "9780349450612",
        owned: true,
        series: "The Empyrean Series",
        seriesNumber: 0.5,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Fourth Wing",
        author: "Rebecca Yarros",
        genre: "Fantasy",
        year: 2023,
        pages: 500,
        read: true,
        isbn: "9780349437019",
        owned: true,
        series: "The Empyrean Series",
        seriesNumber: 1,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Iron Flame",
        author: "Rebecca Yarros",
        genre: "Fantasy",
        year: 2023,
        pages: 788,
        read: true,
        isbn: "9780349437057",
        owned: true,
        series: "The Empyrean Series",
        seriesNumber: 2,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Onyx Storm",
        author: "Rebecca Yarros",
        genre: "Fantasy",
        year: 2025,
        pages: null,
        read: true,
        isbn: "9780349437095",
        owned: true,
        series: "The Empyrean Series",
        seriesNumber: 3,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "The Woman in Cabin 10",
        author: "Ruth Ware",
        genre: "Crime",
        year: 2016,
        pages: null,
        read: true,
        isbn: "9781784706111",
        owned: true,
        series: "",
        seriesNumber: null,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Dire Bound",
        author: "Sable Sorensen",
        genre: "Fantasy",
        year: 2025,
        pages: 608,
        read: false,
        isbn: "9781911751205",
        owned: true,
        series: "",
        seriesNumber: null,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "The Priory of the Orange Tree",
        author: "Samantha Shannon",
        genre: "Fantasy",
        year: 2019,
        pages: 848,
        read: false,
        isbn: "9781408883358",
        owned: true,
        series: "Roots of Chaos",
        seriesNumber: 1,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "A Day of Fallen Night",
        author: "Samantha Shannon",
        genre: "Fantasy",
        year: 2023,
        pages: null,
        read: false,
        isbn: "9781526619815",
        owned: true,
        series: "Roots of Chaos",
        seriesNumber: 2,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Among the Burning Flowers",
        author: "Samantha Shannon",
        genre: "Fantasy",
        year: 2025,
        pages: 277,
        read: false,
        isbn: "9781526686770",
        owned: true,
        series: "Roots of Chaos",
        seriesNumber: 0.5,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Days at the Torunka Cafe",
        author: "Satoshi Yagisawa",
        genre: "",
        year: 2013,
        pages: 240,
        read: false,
        isbn: "9781786585226",
        owned: true,
        series: "",
        seriesNumber: null,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "A Court of Thorns and Roses",
        author: "Sarah J. Maas",
        genre: "Romantasy",
        year: 2015,
        pages: 432,
        read: true,
        isbn: "9781526605399",
        owned: true,
        series: "ACOTAR",
        seriesNumber: 1,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "A Court of Mist and Fury",
        author: "Sarah J. Maas",
        genre: "Romantasy",
        year: 2016,
        pages: 656,
        read: true,
        isbn: "9781526617163",
        owned: true,
        series: "ACOTAR",
        seriesNumber: 2,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "A Court of Wings and Ruin",
        author: "Sarah J. Maas",
        genre: "Romantasy",
        year: 2017,
        pages: 720,
        read: true,
        isbn: "9781526617170",
        owned: true,
        series: "ACOTAR",
        seriesNumber: 3,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "A Court of Frost and Starlight",
        author: "Sarah J. Maas",
        genre: "Romantasy",
        year: 2018,
        pages: 272,
        read: true,
        isbn: "9781526617187",
        owned: true,
        series: "ACOTAR",
        seriesNumber: 4,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "A Court of Silver Flames",
        author: "Sarah J. Maas",
        genre: "Romantasy",
        year: 2021,
        pages: 768,
        read: true,
        isbn: "9781526635365",
        owned: true,
        series: "ACOTAR",
        seriesNumber: 5,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Throne of Glass",
        author: "Sarah J. Maas",
        genre: "Fantasy",
        year: 2012,
        pages: 432,
        read: false,
        isbn: "9781526635297",
        owned: true,
        series: "Throne of Glass",
        seriesNumber: 1,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Crown of Midnight",
        author: "Sarah J. Maas",
        genre: "Fantasy",
        year: 2013,
        pages: 432,
        read: false,
        isbn: "9781526635211",
        owned: true,
        series: "Throne of Glass",
        seriesNumber: 2,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "The Assassin's Blade",
        author: "Sarah J. Maas",
        genre: "Fantasy",
        year: 2014,
        pages: 448,
        read: false,
        isbn: "9781526635235",
        owned: true,
        series: "Throne of Glass",
        seriesNumber: 3,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Heir of Fire",
        author: "Sarah J. Maas",
        genre: "Fantasy",
        year: 2014,
        pages: 576,
        read: false,
        isbn: "9781526635228",
        owned: true,
        series: "Throne of Glass",
        seriesNumber: 4,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Empire of Storms",
        author: "Sarah J. Maas",
        genre: "Fantasy",
        year: 2016,
        pages: 704,
        read: false,
        isbn: "9781526635266",
        owned: true,
        series: "Throne of Glass",
        seriesNumber: 6,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Tower of Dawn",
        author: "Sarah J. Maas",
        genre: "Fantasy",
        year: 2017,
        pages: 672,
        read: false,
        isbn: "9781526635280",
        owned: true,
        series: "Throne of Glass",
        seriesNumber: 7,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "House of Earth and Blood",
        author: "Sarah J. Maas",
        genre: "Fantasy",
        year: 2020,
        pages: 803,
        read: false,
        isbn: "9781526622884",
        owned: true,
        series: "Crescent City",
        seriesNumber: 1,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "House of Sky and Breath",
        author: "Sarah J. Maas",
        genre: "Fantasy",
        year: 2022,
        pages: 801,
        read: false,
        isbn: "9781526628220",
        owned: true,
        series: "Crescent City",
        seriesNumber: 2,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "House of Flame and Shadow",
        author: "Sarah J. Maas",
        genre: "Fantasy",
        year: 2024,
        pages: 848,
        read: false,
        isbn: "9781526650344",
        owned: true,
        series: "Crescent City",
        seriesNumber: 3,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "The Essex Serpent",
        author: "Sarah Perry",
        genre: "Folklore",
        year: 2016,
        pages: null,
        read: false,
        isbn: "9781781255452",
        owned: true,
        series: "",
        seriesNumber: null,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "A Touch of Darkness",
        author: "Scarlett St. Clair",
        genre: "Romantasy",
        year: 2019,
        pages: null,
        read: true,
        isbn: "9781728261706",
        owned: true,
        series: "Hades X Persephone",
        seriesNumber: 1,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "A Touch of Ruin",
        author: "Scarlett St. Clair",
        genre: "Romantasy",
        year: 2020,
        pages: null,
        read: true,
        isbn: "9781728261690",
        owned: true,
        series: "Hades X Persephone",
        seriesNumber: 2,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "A Touch of Malice",
        author: "Scarlett St. Clair",
        genre: "Romantasy",
        year: 2021,
        pages: null,
        read: true,
        isbn: "9781728261676",
        owned: true,
        series: "Hades X Persephone",
        seriesNumber: 3,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "A Touch of Chaos",
        author: "Scarlett St. Clair",
        genre: "Romantasy",
        year: 2024,
        pages: 592,
        read: false,
        isbn: "9781728259734",
        owned: true,
        series: "Hades X Persephone",
        seriesNumber: 7,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "King of Battle and Blood",
        author: "Scarlett St. Clair",
        genre: "Romantasy",
        year: 2021,
        pages: null,
        read: false,
        isbn: "9781728261683",
        owned: true,
        series: "Adrian X Isolde",
        seriesNumber: 1,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Queen of Myth and Monsters",
        author: "Scarlett St. Clair",
        genre: "Romantasy",
        year: 2022,
        pages: null,
        read: false,
        isbn: "9781728265711",
        owned: true,
        series: "Adrian X Isolde",
        seriesNumber: 2,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "The Sleepwalkers",
        author: "Scarlett Thomas",
        genre: "Mystery",
        year: 2023,
        pages: null,
        read: false,
        isbn: "9781398529984",
        owned: true,
        series: "",
        seriesNumber: null,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "The Lies of Locke Lamora",
        author: "Scott Lynch",
        genre: "Fantasy",
        year: 2006,
        pages: 544,
        read: false,
        isbn: "9780575079755",
        owned: true,
        series: "Gentleman Bastard Series",
        seriesNumber: 1,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Red Seas under Red Skies",
        author: "Scott Lynch",
        genre: "Fantasy",
        year: 2007,
        pages: 640,
        read: false,
        isbn: "9780575079670",
        owned: true,
        series: "Gentleman Bastard Series",
        seriesNumber: 2,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "The Republic of Thieves",
        author: "Scott Lynch",
        genre: "Fantasy",
        year: 2013,
        pages: 736,
        read: false,
        isbn: "9780575084469",
        owned: true,
        series: "Gentleman Bastard Series",
        seriesNumber: 3,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "A Tongue so Sweet and Deadly",
        author: "Sophia St Germain",
        genre: "Romantasy",
        year: 2024,
        pages: null,
        read: false,
        isbn: "9781035443079",
        owned: true,
        series: "Compelling Fates Saga",
        seriesNumber: 1,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "A Promise so Bold and Broken",
        author: "Sophia St Germain",
        genre: "Romantasy",
        year: 2025,
        pages: null,
        read: false,
        isbn: "9781035443109",
        owned: true,
        series: "Compelling Fates Saga",
        seriesNumber: 2,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "A Bond so Fierce and Fragile",
        author: "Sophia St Germain",
        genre: "Romantasy",
        year: 2025,
        pages: null,
        read: false,
        isbn: "9781035443130",
        owned: true,
        series: "Compelling Fates Saga",
        seriesNumber: 3,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Twilight",
        author: "Stephenie Meyer",
        genre: "Vampires/Werewolves",
        year: 2005,
        pages: 434,
        read: true,
        isbn: "9781904233657",
        owned: true,
        series: "The Twilight Saga",
        seriesNumber: 1,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "New Moon",
        author: "Stephenie Meyer",
        genre: "Vampires/Werewolves",
        year: 2006,
        pages: 594,
        read: true,
        isbn: "9781904233886",
        owned: true,
        series: "The Twilight Saga",
        seriesNumber: 2,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
        {
        title: "Eclipse",
        author: "Stephenie Meyer",
        genre: "Vampires/Werewolves",
        year: 2007,
        pages: 628,
        read: true,
        isbn: "9781904233916",
        owned: true,
        series: "The Twilight Saga",
        seriesNumber: 3,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
        {
        title: "Breaking Dawn",
        author: "Stephenie Meyer",
        genre: "Vampires/Werewolves",
        year: 2008,
        pages: 754,
        read: true,
        isbn: "9781905654284",
        owned: true,
        series: "The Twilight Saga",
        seriesNumber: 4,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
        {
        title: "The Short Second Life of Bree Tanner",
        author: "Stephenie Meyer",
        genre: "Vampires/Werewolves",
        year: 2010,
        pages: 178,
        read: true,
        isbn: "9781907410369",
        owned: true,
        series: "The Twilight Saga",
        seriesNumber: 3.5,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Midnight Sun",
        author: "Stephenie Meyer",
        genre: "Vampires/Werewolves",
        year: 2020,
        pages: null,
        read: true,
        isbn: "9780349003641",
        owned: true,
        series: "The Twilight Saga",
        seriesNumber: null,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "The Host",
        author: "Stephenie Meyer",
        genre: "Science Fiction",
        year: 2008,
        pages: 624,
        read: true,
        isbn: "9780751540642",
        owned: true,
        series: "",
        seriesNumber: null,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Bared To You",
        author: "Sylvia Day",
        genre: "Romance",
        year: 2012,
        pages: 368,
        read: true,
        isbn: "9781405910231",
        owned: true,
        series: "CrossFire Series",
        seriesNumber: 1,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Reflected in You",
        author: "Sylvia Day",
        genre: "Romance",
        year: 2012,
        pages: 368,
        read: true,
        isbn: "9781405910255",
        owned: true,
        series: "CrossFire Series",
        seriesNumber: 2,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Entwined with You",
        author: "Sylvia Day",
        genre: "Romance",
        year: 2013,
        pages: 368,
        read: true,
        isbn: "9781405910279",
        owned: true,
        series: "CrossFire Series",
        seriesNumber: 3,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Captivated by You",
        author: "Sylvia Day",
        genre: "Romance",
        year: 2014,
        pages: null,
        read: true,
        isbn: "9781405916400",
        owned: true,
        series: "CrossFire Series",
        seriesNumber: 4,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "One with You",
        author: "Sylvia Day",
        genre: "Romance",
        year: 2016,
        pages: 480,
        read: true,
        isbn: "9781405916424",
        owned: true,
        series: "CrossFire Series",
        seriesNumber: 5,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Bride of the Shadow King",
        author: "Sylvia Mercedes",
        genre: "Romance",
        year: 2023,
        pages: null,
        read: false,
        isbn: "9781837840304",
        owned: true,
        series: "",
        seriesNumber: null,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Vow of the Shadow King",
        author: "Sylvia Mercedes",
        genre: "Romance",
        year: 2023,
        pages: null,
        read: false,
        isbn: "9781837840328",
        owned: true,
        series: "",
        seriesNumber: null,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Heart of the Shadow King",
        author: "Sylvia Mercedes",
        genre: "Romance",
        year: 2024,
        pages: null,
        read: false,
        isbn: "9781837840342",
        owned: true,
        series: "",
        seriesNumber: null,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "You Were Gone",
        author: "Tim Weaver",
        genre: "Thriller",
        year: 2018,
        pages: null,
        read: true,
        isbn: "9781405934688",
        owned: true,
        series: "",
        seriesNumber: null,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Red Queen",
        author: "Victoria Aveyard",
        genre: "Fantasy",
        year: 2015,
        pages: null,
        read: false,
        isbn: "9781409150725",
        owned: true,
        series: "Red Queen",
        seriesNumber: 1,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "The Safekeep",
        author: "Yael van der Wouden",
        genre: "Historical",
        year: 2024,
        pages: 256,
        read: false,
        isbn: "9780241999776",
        owned: true,
        series: "",
        seriesNumber: null,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "The Zorg",
        author: "Siddharth Kara",
        genre: "Historical Non-Fiction",
        year: 2025,
        pages: 224,
        read: false,
        isbn: "9781804997925",
        owned: true,
        series: "",
        seriesNumber: null,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    },
    {
        title: "Ravenous",
        author: "Kresley Cole",
        genre: "Dark Fantasy",
        year: 2026,
        pages: null,
        read: false,
        isbn: "9781035926619",
        owned: true,
        series: "",
        seriesNumber: null,
        describe() {
            return `${this.title} by ${this.author} (${this.year})`;
        }
    }
];

// One book in, one card's HTML out
function bookCard(book) {
    // Only show stars for books that have a rating
    const hasRating = typeof book.rating === "number";
    const stars = hasRating ? "★".repeat(book.rating) + "☆".repeat(5 - book.rating) : "";
    const starsLine = hasRating
        ? `<p class="mt-2 text-amber-500" aria-label="${book.rating} out of 5 stars">${stars}</p>`
        : "";

    const readBadge = book.read ? "Read" : "Not read yet";
    const shelfLabel = book.owned ? "On my shelf" : "To buy";
    const shelfColour = book.owned ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800";
    return `
        <li class="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <h3 class="text-lg font-semibold text-slate-900">${book.title}</h3>
            <p class="text-sm text-slate-600">${book.author} · ${book.year}</p>
            ${starsLine}
            <span class="mt-3 inline-block rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-800">${book.genre}</span>
            <span class="mt-3 inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-800">${readBadge}</span>
            <span class="mt-3 inline-block rounded-full ${shelfColour} px-3 py-1 text-xs font-medium">${shelfLabel}</span>
        </li>
    `;
}

// A list of books in, cards on the page
function renderBooks(list) {
    const bookList = document.getElementById("book-list");

    if (list.length === 0) {
        bookList.innerHTML = "<li>No books found for the selected genre.</li>";
        return;
    }

    bookList.innerHTML = list.map(bookCard).join("");
}

// Returns every book, or only the books in one genre
function filterByGenre(genre) {
    if (genre === "All") {
        return books;
    }
    return books.filter((book) => book.genre === genre);
}

const genreFilter = document.getElementById("genre-filter");

// Adds one dropdown option per genre found in the books array
function populateGenreFilter() {
    const genres = [...new Set(books.map((book) => book.genre))].sort();

    genres.forEach((genre) => {
        const option = document.createElement("option");
        option.value = genre;
        option.textContent = genre;
        genreFilter.appendChild(option);
    });
}

genreFilter.addEventListener("change", (event) => {
    renderBooks(filterByGenre(event.target.value));
});

// Set up the dropdown and show all books when the page first loads
populateGenreFilter();
renderBooks(books);
