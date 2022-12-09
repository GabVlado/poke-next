const toggleFavorite = (id:number) =>{
    //console.log('toggleFavorites llamado')


    let favorites: number[]  = JSON.parse(localStorage.getItem('favorites')  || '[]')
    //console.log(favorites)
    if(favorites.includes(id)){
        favorites = favorites.filter( pokeId => pokeId !== id)
    } else {
        favorites.push(id)
    }

    localStorage.setItem('favorites', JSON.stringify(favorites) )

}

//Funcion que verifica si el pokemon existe en favoritos localStorage
const existPokeInFavorites  = ( id:number ): boolean => {

    if ( typeof window === 'undefined') return false;

    const favorites: number[]  = JSON.parse(localStorage.getItem('favorites')  || '[]')


    return favorites.includes(id);

}


const pokemons = (  ): number[] => {
    return JSON.parse(localStorage.getItem('favorites') || '[]')

}


export default  {
    existPokeInFavorites,
    toggleFavorite,
    pokemons
}
