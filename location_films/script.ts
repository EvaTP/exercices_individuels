// Énumérateur pour les types de catégories
enum CategoryType {
    FICTION = "fictionnelle",
    DOCUMENTARY = "documentaire",
	CARTOON = "dessin animé"
}
// classe CATEGORY
class Category {
    private name: string;
    private type: CategoryType;

    public constructor(name: string, type: CategoryType) {
        this.name = name;
        this.type = type;
    }
    public getCategoryName(): string {
        return this.name;
    }
    public getCategoryType(): CategoryType {
        return this.type;
    }
}

// classe DIRECTOR
class Director{
	private fullName: string;
	private birthDate: Date;  // Date en maj car c'est un objet JS
	// private : on limite l'accès en lecture, on rend l'instance public
	public constructor(fullName: string, birthDate: Date){
	this.fullName = fullName;
	this.birthDate = birthDate;
	}
	public getDirectorName(): string{
		return this.fullName;
	}
	public getDirectorDob(): Date{
		return this.birthDate;
	}
}
// classe MOVIE
class Movie{
	private name: string;
	private director: Director;
	private date: Date;
	private categories: Category[];
;
	public constructor(name: string, director: Director, date: Date, categories: Category[]=[] ){
		this.name = name;
		this.director = director;
		this.date = date;
		this.categories = categories;
	}
	public getMovieName(): string{
		return this.name;
	}
	public getDirectorName(): string{
	return this.name;
	}
	public getMovieDate(): Date{
		return this.date;
	}
	public getCategories(): Category[]{
		return this.categories;
	}
};

function displayMovieInfo(movie: Movie): void{
	const movieName = movie.getMovieName();
	const releaseYear = movie.getMovieDate();
	const directorName = movie.getDirectorName();

	console.log(`Le film ${movieName} est sorti en ${releaseYear} et a été réalisé par ${directorName}`);
	//console.log(`le film ${movie.getMovieName()} est sorti le ${movie.getMovieDate} et a été réalisé par ${movie.getDirectorName()}`)
};

// instances
const jamesCameron = new Director("James Cameron", new Date(1954));
const anthonymann = new Director("Anthony Mann", new Date(1906));
const hayaomiyazaki = new Director("Hayao Miyazaki", new Date(1941));
const denisvilleneuve = new Director("Denis Villeneuve", new Date(1967));
const lucjacquet = new Director("Luc Jacquet", new Date(2005));

const titanic = new Movie("Titanic", jamesCameron, new Date(1997));
const tinstar = new Movie("Du sang dans le désert", anthonymann, new Date(1957));
const mononoke = new Movie("Princesse Mononoké", hayaomiyazaki, new Date(1997));
const contact = new Movie("Premier contact", denisvilleneuve, new Date(2016));
const empereur = new Movie("La marche de l'empereur", lucjacquet, new Date(2005));


displayMovieInfo(titanic);
displayMovieInfo(tinstar);
displayMovieInfo(mononoke);

// Création des catégories
const drame = new Category("Drame", CategoryType.FICTION);
const western = new Category("Western", CategoryType.FICTION);
const dessinanime = new Category("Dessin animé", CategoryType.CARTOON);
const scienceFiction = new Category("Science-Fiction", CategoryType.FICTION);
const documentaire = new Category("Documentaire", CategoryType.DOCUMENTARY);

// Ajout de catégories aux films
titanic.addCategory(drame);
tinstar.addCategory(western);
mononoke.addCategory(dessinanime);
contact.addCategory(scienceFiction);
empereur.addCategory(documentaire);

// Fonction pour afficher un film avec ses catégories
function displayMovieWithCategories(movie: Movie): void {
    const movieName = movie.getMovieName();
    const releaseYear = movie.getMovieDate().getFullYear();
    const directorName = movie.getDirectorName().getFullName();
    const categories = movie.getCategories().map(cat => cat.getCategoryName()).join(", ");
    
    console.log(`Le film ${movieName} est sorti en ${releaseYear} et est réalisé par ${directorName}`);
    if (categories) {
        console.log(`Catégories: ${categories}`);
    }
    console.log("---");
}

// Affichage des films avec leurs catégories
displayMovieWithCategories(empereur);
displayMovieWithCategories(titanic);
displayMovieWithCategories(mononoke);