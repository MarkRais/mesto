/* Открыть/Закрыть попап редактирования профиля */
const popupProfileOpen = document.querySelector('.profile__info-button');
const popupProfileClose = document.querySelector('.popup__button-close_type_profile');
const popupProfile = document.querySelector('.popup_type_profile');

popupProfileOpen.addEventListener('click', ()=> {
    popupProfile.classList.add('popup_opened');
});

popupProfileClose.addEventListener('click', ()=> {
    popupProfile.classList.remove('popup_opened');
});

/* Отрыть/Закрыть попап добавления карточки */
const popupCardOpen = document.querySelector('.profile__button');
const popupCardClose = document.querySelector('.popup__button-close_type_card');
const popupCard = document.querySelector('.popup_type_card');

popupCardOpen.addEventListener('click', ()=> {
    popupCard.classList.add('popup_opened');
});

popupCardClose.addEventListener('click', ()=> {
    popupCard.classList.remove('popup_opened');
});

/* Редактирование профиля */
const form = document.querySelector('.popup__form_type_profile');
const nameInput = document.querySelector('.popup__input_type_profile-name');
const subnameInput = document.querySelector('.popup__input_type_profile-subname');

form.addEventListener('submit', function formSubmitHandler(evt) {
    evt.preventDefault();
    document.querySelector('.profile__name').innerHTML = nameInput.value;
    document.querySelector('.profile__subname').innerHTML = subnameInput.value;
    popupProfile.classList.remove('popup_opened');
});

/* Шесть карточек «из коробки» */
const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

const cardsList = document.querySelector('.cards__list');
const cardTemplate = document.querySelector('#card-template').content;

initialCards.forEach(function (element) {
    const cardElement = cardTemplate.cloneNode(true);

    cardElement.querySelector('.card__title').textContent = element.name;
    cardElement.querySelector('.card__image').src = element.link;

    cardsList.append(cardElement);
});