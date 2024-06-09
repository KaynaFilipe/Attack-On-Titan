
window.addEventListener('scroll', function () {
    let scroll = document.querySelector('.scrollTop');
    scroll.classList.toggle('active', window.scrollY > 400);
});

function backTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const cardIds = ['card1', 'card2', 'card3', 'card4', 'card5', 'card6', 'card7', 'card8', 'card9', 'card10', 'card11', 'card12', 'card13', 'card14', 'card15', 'card16', 'card17', 'card18', 'card19', 'card20', 'card21'];
    cardIds.forEach(id => {
        const card = document.getElementById(id);

        if (card) {
            card.addEventListener('click', function () {
                console.log("Card clicado:", id);
                card.classList.toggle('clicked');
                console.log("Classe 'clicked' adicionada:", card.classList.contains('clicked'));
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var videos = document.querySelectorAll('.videomusic');
    videos.forEach(function (video) {
        video.volume = 0.5;
    });
});