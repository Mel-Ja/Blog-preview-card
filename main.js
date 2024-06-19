document.addEventListener('DOMContentLoaded', function(){
    const cardTitle = document.querySelector('.card__title');
    console.log(cardTitle);
    const card = document.querySelector('.card');

    cardTitle.addEventListener('mouseover', function(){
        card.classList.add('card--shadow-hover');
    });

    cardTitle.addEventListener('mouseout', function(){
        card.classList.remove('card--shadow-hover')
    })
})