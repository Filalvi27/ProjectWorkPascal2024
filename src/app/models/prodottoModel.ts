export interface prodottoModel{
    id: number
    title: string
    description: string
    price: number
    stars: number
    images: string
    idCategory: number
    category: {
        id: number
        name: string
        image: string
    }
}
