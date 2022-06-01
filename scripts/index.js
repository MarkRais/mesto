/* Переменные для открытия/закрытия popup */
let popupOpen = document.querySelector('.profile__info-button');
let popupClose = document.querySelector('.popup__button-close');
let popup = document.querySelector('.popup');

/* Открыть popup */
popupOpen.addEventListener('click', ()=> {
    popup.classList.add('popup_opened');
});

/*Закрыть popup */
popupClose.addEventListener('click', ()=> {
    popup.classList.remove('popup_opened');
});

/* Переменные для редактирования профиля */
let form = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__input_type_name');
let subnameInput = document.querySelector('.popup__input_type_subname');

/* Отправка формы */
form.addEventListener('submit', function formSubmitHandler(evt) {
    evt.preventDefault();
    document.querySelector('.profile__name').innerHTML = nameInput.value;
    document.querySelector('.profile__subname').innerHTML = subnameInput.value;
    popup.classList.remove('popup_opened');
});