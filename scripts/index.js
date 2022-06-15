// Открыть/Закрыть попап редактирования профиля
const popupProfileOpen = document.querySelector('.profile__info-button');
const popupProfileClose = document.querySelector('.popup__button-close_type_profile');
const popupProfile = document.querySelector('.popup_type_profile');

popupProfileOpen.addEventListener('click', ()=> {
    popupProfile.classList.add('popup_opened');
});

popupProfileClose.addEventListener('click', ()=> {
    popupProfile.classList.remove('popup_opened');
});

// Отрыть/Закрыть попап добавления карточки
const popupCardOpen = document.querySelector('.profile__button');
const popupCardClose = document.querySelector('.popup__button-close_type_card');
const popupCard = document.querySelector('.popup_type_card');

popupCardOpen.addEventListener('click', ()=> {
    popupCard.classList.add('popup_opened');
});

popupCardClose.addEventListener('click', ()=> {
    popupCard.classList.remove('popup_opened');
});

// Редактирование профиля
const form = document.querySelector('.popup__form_type_profile');
const nameInput = document.querySelector('.popup__input_type_profile-name');
const subnameInput = document.querySelector('.popup__input_type_profile-subname');

form.addEventListener('submit', function formSubmitHandler(evt) {
    evt.preventDefault();
    document.querySelector('.profile__name').innerHTML = nameInput.value;
    document.querySelector('.profile__subname').innerHTML = subnameInput.value;
    popupProfile.classList.remove('popup_opened');
});

// Массив карточек
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

// Переменные для добавления карточек при загрузке страницы
const cardsList = document.querySelector('.cards__list');
const cardTemplate = document.querySelector('#card-template').content;
// Переменные для открытия/закрытия попап просмотра фото
const popupImageOpen = document.querySelector('.popup_type_image-viewing');
const popupImageClose = document.querySelector('.popup__button-close_type_image');
const popupImage = document.querySelector('.popup_type_image-viewing');
// Переменные для наполнения попап просмотра фото содержимым
const popupImagePhoto = document.querySelector('.popup__image');
const popupImageText = document.querySelector('.popup__image-title');

// Добавление карточек при загрузке страницы
initialCards.forEach(function (element) {
    const cardElement = cardTemplate.cloneNode(true);

    cardElement.querySelector('.card__title').textContent = element.name;
    cardElement.querySelector('.card__image').src = element.link;
    // Возможность ставить лайк
    cardElement.querySelector('.card__like').addEventListener('click', function (evt) {
        evt.target.classList.toggle('card__like_active');
    });
    // Открыть попап просмотра фото
    cardElement.querySelector('.card__image').addEventListener('click', function () {
        popupImageOpen.classList.add('popup_opened');
        popupImagePhoto.src = element.link;
        popupImageText.textContent = element.name;
    });

    cardsList.append(cardElement);
});

// Закрыть попап просмотра фото
popupImageClose.addEventListener('click', () => {
    popupImage.classList.remove('popup_opened');
});