// La propiedad currentSlag: string;
// Nos sirve para crear el Boton y Linkear el Post
export interface blogCard {
    title: string;
    smallDescription: string;
    currentSlag: string;
    titleImage: any;
}

export interface fullBlog {
    currentSlug: string;
    title: string;
    content: string;
    titleImage: any;
}