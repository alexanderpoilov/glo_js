'use strict';

const books = document.querySelectorAll('.book'),
    bookTwo = document.querySelectorAll('.book')[0],
    bookTwoChapters = bookTwo.querySelectorAll('li'),
    bookThree = document.querySelectorAll('a')[4],
    bookFive = document.querySelectorAll('.book')[5],
    bookFiveChapters = bookFive.querySelectorAll('li'),
    bookSix = document.querySelectorAll('.book')[2],
    bookSixChatters = bookSix.querySelectorAll('li'),
    bookSixChatterEight = document.createElement('li');

books[0].before(books[1]);
books[5].after(books[2]);
books[3].before(books[4]);

document.body.style.backgroundImage = 'url(../image/you-dont-know-js.jpg)';

bookThree.textContent = 'Книга 3. this и Прототипы Объектов';

document.querySelector('.adv').style.display = 'none';

bookTwoChapters[0].before(bookTwoChapters[1]);
bookTwoChapters[3].after(bookTwoChapters[6]);
bookTwoChapters[4].before(bookTwoChapters[8]);
bookTwoChapters[10].before(bookTwoChapters[2]);

bookFiveChapters[0].before(bookFiveChapters[1]);
bookFiveChapters[2].before(bookFiveChapters[9]);
bookFiveChapters[2].after(bookFiveChapters[3]);
bookFiveChapters[4].after(bookFiveChapters[2]);
bookFiveChapters[5].before(bookFiveChapters[6]);
bookFiveChapters[5].before(bookFiveChapters[7]);

bookSixChatterEight.textContent = 'Глава 8: За пределами ES6';
bookSixChatters[8].after(bookSixChatterEight);

