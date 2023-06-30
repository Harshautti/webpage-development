var carouselContainer = document.querySelector('.carousel-container');
var carouselRow = document.querySelector('.carousel-row');
var prevButton = document.querySelector('.prev-button');
var nextButton = document.querySelector('.next-button');
var currentCarouselIndex = 0;
var carouselWidth = carouselContainer.offsetWidth;

var carouselCards = Array.from(document.querySelectorAll('.carousel-card'));
carouselCards.forEach(function(card, index) {
    card.addEventListener('click', function() {
        currentCarouselIndex = index;
        moveCarouselToIndex(currentCarouselIndex);
    });
});

prevButton.addEventListener('click', function() {
    currentCarouselIndex--;
    moveCarouselToIndex(currentCarouselIndex);
});

nextButton.addEventListener('click', function() {
    currentCarouselIndex++;
    moveCarouselToIndex(currentCarouselIndex);
});

function moveCarouselToIndex(index) {
    var cardWidth = carouselRow.children[0].offsetWidth;
    var cardsInView = Math.floor(carouselContainer.offsetWidth / cardWidth);
    var totalCards = carouselRow.children.length;
    var cardsPerPage = cardsInView < totalCards ? cardsInView : totalCards;

    if (index < 0) {
        index = 0;
    } else if (index > totalCards - cardsPerPage) {
        index = totalCards - cardsPerPage;
    }

    var translation = -1 * index * cardWidth;
    carouselRow.style.transform = 'translateX(' + translation + 'px)';
}
