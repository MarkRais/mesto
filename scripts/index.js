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

// ФУНКЦИИ ОТКРЫТИЯ/ЗАКРЫТИЯ ВСЕХ ПОПАПОВ
function popupOpen(popup) {
    popup.classList.add('popup_opened')
};

function popupClose(popup) {
    popup.classList.remove('popup_opened')
};

// ОТКРЫТЬ/ЗАКРЫТЬ ПОПАП РЕДАКТИРОВАНИЯ ПРОФИЛЯ
buttonOpenEditingProfile.addEventListener('click', () => {
    inputProfileName.value = profileName.textContent;
    inputProfileSubname.value = profileSubname.textContent;
    popupOpen(popupEditingProfile)
});

buttonCloseEditingProfile.addEventListener('click', () => {
    popupClose(popupEditingProfile)
});

// ОТКРЫТЬ/ЗАКРЫТЬ ПОПАП ДОБАВЛЕНИЯ НОВОЙ КАРТОЧКИ
buttonOpenNewCard.addEventListener('click', () => {
    inputNewCardTitle.value = '';
    inputNewCardSrc.value = '';
    popupOpen(popupNewCard)
});

buttonCloseNewCard.addEventListener('click', () => {
    popupClose(popupNewCard)
});

// ЗАКРЫТЬ ПОПАП ПРОСМОТРА ФОТО
buttonCloseImage.addEventListener('click', () => {
    popupClose(popupImage)
});

// ФУНКЦИЯ РЕДАКТИРОВАНИЯ ПРОФИЛЯ
function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = inputProfileName.value;
    profileSubname.textContent = inputProfileSubname.value;
    popupClose(popupEditingProfile)
};
formEditingProfile.addEventListener('submit', formSubmitHandler);

// ФУНКЦИЯ СОЗДАНИЯ НОВОЙ КАРТОЧКИ
function createCard(name, src) {
    const newCard = cardTemplate.cloneNode(true);
    const cardImage = newCard.querySelector('.card__image');
    const cardTitle = newCard.querySelector('.card__title');
    cardImage.src = src;
    cardImage.alt = name;
    cardTitle.textContent = name;
    // ЛАЙК
    newCard.querySelector('.card__like').addEventListener('click', (evt) => {
        evt.target.classList.toggle('card__like_active')
    });
    // УДАЛЕНИЕ
    newCard.querySelector('.card__delete').addEventListener('click', (evt) => {
        evt.target.closest('.cards__item').remove()
    });
    // ПРОСМОТР ФОТО
    cardImage.addEventListener('click', () => {
        popupImagePhoto.src = src;
        popupImagePhoto.alt = name;
        popupImageText.textContent = name;
        popupOpen(popupImage)
    });
    return newCard
};

// ФУНКЦИЯ ДОБАВЛЕНИЯ НОВОЙ КАРТОЧКИ
function formSubmitCard(evt) {
    evt.preventDefault();
    cardsList.prepend(createCard(inputNewCardTitle.value, inputNewCardSrc.value));
    popupClose(popupNewCard)
};
formNewCard.addEventListener('submit', formSubmitCard);

// ФУНКЦИЯ ДОБАВЛЕНИЯ КАРТОЧЕК ИЗ МАССИВА
initialCards.forEach(function (element) {
    cardsList.prepend(createCard(element.name, element.link))
});