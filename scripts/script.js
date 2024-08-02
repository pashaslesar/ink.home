document.addEventListener('DOMContentLoaded', () => {
    const artworks = {
        france: [
            {
                img: 'images/catalog/france/amour.jpg',
                author: 'Марсель Руссо',
                title: 'Охота Амура',
                description: 'Холст, масло (50х80)',
                price: '14 500 руб'
            },
            {
                img: 'images/catalog/france/dog.jpg',
                author: 'Анри Селин',
                title: 'Дама с собачкой',
                description: 'Акрил, бумага (50х80)',
                price: '16 500 руб'
            },
            {
                img: 'images/catalog/france/dupon.jpg',
                author: 'Франсуа Дюпон',
                title: 'Процедура',
                description: 'Цветная литография (40х60)',
                price: '20 000 руб'
            },
            {
                img: 'images/catalog/france/rose.jpg',
                author: 'Луи Детуш',
                title: 'Роза',
                description: 'Бумага, акрил (50х80)',
                price: '12 000 руб'
            },
            {
                img: 'images/catalog/france/birds.jpg',
                author: 'Франсуа Дюпон',
                title: 'Птичья трапеза',
                description: 'Цветная литография (40х60)',
                price: '22 500 руб'
            },
            {
                img: 'images/catalog/france/fish.jpg',
                author: 'Пьер Моранж',
                title: 'Пейзаж с рыбой',
                description: 'Цветная литография (40х60)',
                price: '20 000 руб'
            }
        ],
        germany: [
            {
                img: 'images/catalog/germany/city.jpg',
                author: 'Курт Вернер',
                title: 'Над городом',
                description: 'Цветная литография (40х60)',
                price: '16 000 руб'
            },
            {
                img: 'images/catalog/germany/bird-germany.jpg',
                author: 'Макс Рихтер',
                title: 'Птенцы',
                description: 'Холст, масло (50х80)',
                price: '14 500 руб'
            },
            {
                img: 'images/catalog/germany/martin.jpg',
                author: 'Мартин Майер',
                title: 'Среди листьев',
                description: 'Цветная литография (40х60)',
                price: '20 000 руб'
            },
            {
                img: 'images/catalog/germany/german.jpg',
                author: 'Герман Беккер',
                title: 'Яркая птица',
                description: 'Цветная литография (40х60)',
                price: '13 000 руб'
            },
            {
                img: 'images/catalog/germany/wolf.jpg',
                author: 'Вульф Бауэр',
                title: 'Дятлы',
                description: 'Бумага, акрил (50х80)',
                price: '20 000 руб'
            },
            {
                img: 'images/catalog/germany/water.jpg',
                author: 'Вальтер Хартманн',
                title: 'Большие воды',
                description: 'Бумага, акрил (50х80)',
                price: '23 000 руб'
            }
        ],
        england: [
            {
                img: 'images/catalog/england/smith.jpg',
                author: 'Пол Смит',
                title: 'Дикий зверь',
                description: 'Акварель, бумага (50х80)',
                price: '19 500 руб'
            },
            {
                img: 'images/catalog/england/john.jpg',
                author: 'Джон Уайт',
                title: 'Скалистый берег',
                description: 'Цветная литография (40х60)',
                price: '17 500 руб'
            },
            {
                img: 'images/catalog/england/watson.jpg',
                author: 'Джим Уотсон',
                title: 'Река и горы',
                description: 'Акварель, бумага (50х80)',
                price: '20 500 руб'
            },
            {
                img: 'images/catalog/england/zillion.jpg',
                author: 'Юджин Зиллион',
                title: 'Белый попугай',
                description: 'Цветная литография (40х60)',
                price: '15 500 руб'
            },
            {
                img: 'images/catalog/england/eric.jpg',
                author: 'Эрик Гиллман',
                title: 'Ночная рыба',
                description: 'Бумага, акрил (50х80) ',
                price: '12 500 руб'
            },
            {
                img: 'images/catalog/england/cat.jpg',
                author: 'Альфред Барр',
                title: 'Рыжий кот',
                description: 'Цветная литография (40х60)',
                price: '21 000 руб'
            }
        ],
    }
    
    function showArtworks(country) {
        const container = document.getElementById('artworks-container');
        container.innerHTML = '';
        artworks[country].forEach(artwork => {
            const card = document.createElement('li');
            card.className = 'card';
            card.innerHTML = `
                <div class="img-container">
                    <img src="${artwork.img}" alt="${artwork.title}" class="catalog-image">
                </div>
                <p class="author">${artwork.author}</p>
                <b class="title">${artwork.title}</b>
                <p class="description">${artwork.description}</p>
                <p class="price">${artwork.price}</p>
                <button type="button" class="btn-cart">В корзину</button>
            `;
            container.appendChild(card);
        });

        const cartButtons = document.querySelectorAll('.btn-cart');
        const cartIcon = document.getElementById('cart-icon');

        cartButtons.forEach(button => {
            button.addEventListener("click", function() {
                cartIcon.src = "images/header/cartaddto.svg";
            });
        });
    }

    showArtworks('france');
    
    document.getElementById('btn-france').addEventListener('click', () => {
        showArtworks('france');
    });
    document.getElementById('btn-germany').addEventListener('click', () => {
        showArtworks('germany');
    });
    document.getElementById('btn-england').addEventListener('click', () => {
        showArtworks('england');
    });

    // burger-menu

    const burger = document.getElementById('burger');
    const cross = document.getElementById('cross');
    const menu = document.querySelector('.menu');
    const hero = document.getElementById('hero');

    burger.addEventListener('click', () => {
        menu.classList.toggle('active');
        burger.classList.add('visually-hidden');
        cross.classList.remove('visually-hidden');
        hero.classList.add('margin-top');
    });

    cross.addEventListener('click', () => {
        menu.classList.remove('active');
        cross.classList.add('visually-hidden');
        burger.classList.remove('visually-hidden');
        hero.classList.remove('margin-top');
    });
});