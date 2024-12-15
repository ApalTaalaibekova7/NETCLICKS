const cardWrapper = document.querySelector('.content-cards')
const searchInput = document.getElementById('search-input')
const searchButton = document.getElementById('search-button')

// console.log(searchButton);
// console.log(searchInput);

const films = [
    {
        id: 0,
        title: 'Жеки Чан',
        original: 'Круче некуда',
        category: 'Фантастика, приключения',
        rating: 7.8,
        link: '/film.html' , 
        image: './img/jecki.png',
    }, 
    {
        id: 1,
        title: 'Жеки Чан 2',
        original: 'Круче некуда 2',
        category: 'Криминал, приключения',
        rating: 6.8,
        link: '/film.html' , 
        image: './img/jecki.png',
    }, 
    {
        id: 2,
        title: 'Жеки Чан 3',
        original: 'Круче некуда 3',
        category: 'Экшин, приключения',
        rating: 7.8,
        link: '/film.html' , 
        image: './img/jecki.png',
    }, 
]

const render = (array) => {    
    cardWrapper.innerHTML = ''

    array.forEach((item) => {
        cardWrapper.insertAdjacentHTML('beforeend', `
           <a href="${item.link}" class="content-cards__item">
                <div class="content-cards__item--img">
                    <img src=${item.image} alt="img">
                </div>

                <div class="content-card__item--title">
                    <h5>${item.title}</h5>
                    <span>${item.original}</span>
                </div>
                <p class="content-cards__item--description">
                    ${item.category}
                </p>
                <p class="content-cards__item--rating">
                ${item.rating}
                </p>
            <a/>
            `)
        
    })
}
searchButton.addEventListener('click', () => {
    render(films.filter(( item) => item.title.includes(searchInput.value)
    ))
    
})

render(films)