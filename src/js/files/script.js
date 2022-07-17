// ==========================================================
// COOKIE
const cookie = document.querySelector('.cookies');
const cookieShow = document.querySelector('.cookies-show');
const cookieClose = document.querySelector('.cookies-close');
const cookieBtn = document.querySelector('.cookies__btn');

// Появление куки через 1 сек
setTimeout(() => {
    cookie.classList.add('cookies-show')
}, 1000);

// Закрытие куки
function closeCookie() {
    cookie.classList.add('cookies-close');
    cookie.classList.remove('cookies-show');
}
// Вызов ф-и закрытия куки
cookieBtn.onclick = closeCookie;
