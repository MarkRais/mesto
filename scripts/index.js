const buttonOpenEditingProfile = document.querySelector('.profile__info-button');
const buttonCloseEditingProfile = document.querySelector('.popup__button-close_type_profile');
const buttonOpenNewCard = document.querySelector('.profile__button');
const buttonCloseNewCard = document.querySelector('.popup__button-close_type_card');
const popupEditingProfile = document.querySelector('.popup_type_profile');
const popupNewCard = document.querySelector('.popup_type_card');
const formEditingProfile = document.querySelector('.popup__form_type_profile');
const profileName = document.querySelector('.profile__name');
const profileSubname = document.querySelector('.profile__subname');
const inputProfileName = document.querySelector('.popup__input_type_profile-name');
const inputProfileSubname = document.querySelector('.popup__input_type_profile-subname');
const cardsList = document.querySelector('.cards__list');
const cardTemplate = document.querySelector('#card-template').content;
const formNewCard = document.querySelector('.popup__form_type_card');
const inputNewCardTitle = document.querySelector('.popup__input_type_card-title');
const inputNewCardSrc = document.querySelector('.popup__input_type_card-src');
const popupImage = document.querySelector('.popup_type_image-viewing');
const buttonCloseImage = document.querySelector('.popup__button-close_type_image');
const popupImageText = document.querySelector('.popup__image-title');
const popupImagePhoto = document.querySelector('.popup__image');

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

// ОТКРЫТЬ/ЗАКРЫТЬ ПОПАП РЕДАКТИРОВАНИЯ ПРОФИЛЯ
buttonOpenEditingProfile.addEventListener('click', () => {
    popupEditingProfile.classList.add('popup_opened')
});
buttonCloseEditingProfile.addEventListener('click', () => {
    popupEditingProfile.classList.remove('popup_opened')
});

// ОТКРЫТЬ/ЗАКРЫТЬ ПОПАП ДОБАВЛЕНИЯ НОВОЙ КАРТОЧКИ
buttonOpenNewCard.addEventListener('click', () => {
    popupNewCard.classList.add('popup_opened')
});
buttonCloseNewCard.addEventListener('click', () => {
    popupNewCard.classList.remove('popup_opened')
});

// РЕДАКТИРОВАНИЕ ПРОФИЛЯ
function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.innerHTML = inputProfileName.value;
    profileSubname.innerHTML = inputProfileSubname.value;
    popupEditingProfile.classList.remove('popup_opened')
};
formEditingProfile.addEventListener('submit', formSubmitHandler);

// ДЕЙСТВИЯ С КАРТОЧКОЙ
function formSubmitCard (evt) {
    evt.preventDefault();
    const cardElement = cardTemplate.cloneNode(true);
    // ДОБАВИТЬ НОВУЮ
    cardElement.querySelector('.card__title').textContent = inputNewCardTitle.value;
    cardElement.querySelector('.card__image').src = inputNewCardSrc.value;
    // ЛАЙК
    cardElement.querySelector('.card__like').addEventListener('click', (evt) => {
        evt.target.classList.toggle('card__like_active')
    });
    // УДАЛЕНИЕ
    const cardsItem = cardElement.querySelector('.cards__item');
    cardElement.querySelector('.card__delete').addEventListener('click', () => {
        cardsItem.remove()
    });
    // ПРОСМОТР ФОТО
    const cardPhoto = cardElement.querySelector('.card__image');
    const cardText = cardElement.querySelector('.card__title');
    cardPhoto.addEventListener('click', () => {
        popupImagePhoto.src = cardPhoto.src;
        popupImageText.textContent = cardText.textContent;
        popupImage.classList.add('popup_opened')
    });
    buttonCloseImage.addEventListener('click', () => {
        popupImage.classList.remove('popup_opened')
    });
    cardsList.prepend(cardElement);
    popupNewCard.classList.remove('popup_opened')
};
formNewCard.addEventListener('submit', formSubmitCard);

// КАРТОЧКИ ПРИ ЗАГРУЗКЕ СТРАНИЦЫ
initialCards.forEach(function (element) {
    const cardElement = cardTemplate.cloneNode(true);
    // ДОБАВИТЬ НА СТРАНИЦУ
    cardElement.querySelector('.card__title').textContent = element.name;
    cardElement.querySelector('.card__image').src = element.link;
    // ЛАЙК
    cardElement.querySelector('.card__like').addEventListener('click', (evt) => {
        evt.target.classList.toggle('card__like_active')
    });
    // УДАЛЕНИЕ
    const cardsItem = cardElement.querySelector('.cards__item');
    cardElement.querySelector('.card__delete').addEventListener('click', () => {
        cardsItem.remove()
    });
    // ПРОСМОТР ФОТО
    cardElement.querySelector('.card__image').addEventListener('click', () => {
        popupImagePhoto.src = element.link;
        popupImageText.textContent = element.name;
        popupImage.classList.add('popup_opened')
    });
    buttonCloseImage.addEventListener('click', () => {
        popupImage.classList.remove('popup_opened')
    });
    cardsList.prepend(cardElement)
});