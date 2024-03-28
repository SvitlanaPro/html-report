// scroll.js

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(scrollToBottomIfNeeded, 100);
});

function scrollToBottomIfNeeded() {
    // Проверяем, является ли текущая страница одной из тех, где нужна прокрутка вниз
    var pagesWithScroll = ['lab-1.3.html', 'lab-1.4.html', 'lab-1.5.html', 'lab-1.6.html']; // добавьте сюда все страницы, где нужна прокрутка вниз
    if (pagesWithScroll.includes(window.location.pathname.split('/').pop())) {
        scrollToBottom();
    }
}

function scrollToBottom() {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
}
