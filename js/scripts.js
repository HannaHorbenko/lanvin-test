(function () {
    'use strict';

    $(document).ready(function () {
        $('.slider-hero').slick({
            infinite: true,
            autoplay: true,
            autoplaySpeed: 2000,
            slidesToShow: 1,
            arrows: false,

        });
    });

    let btnFilters = document.querySelectorAll('.filter__link');
    let cards = document.querySelectorAll('.card');
    console.log(btnFilters)


    function filter(category, items) {
        items.forEach((item) => {
            const isItemFiltred = !item.classList.contains(category);
            const isShowAll = category === 'all';
            if (isItemFiltred && !isShowAll) {
                item.classList.add('anime');
            }
            else {
                item.classList.remove('anime');
                item.classList.remove('hide');

            }
        })
    }
    btnFilters.forEach((button) => {
        button.addEventListener('click', () => {
            const currentCategory = button.dataset.filter
            filter(currentCategory, cards)
        })
    })

    cards.forEach((card) => {
        card.ontransitionend = function () {
            if (card.classList.contains('anime')) {
                card.classList.add('hide');
                console.log(card)
            }
        }
    })


})();
