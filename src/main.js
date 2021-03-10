import gallery from "./gallery-items.js";

const galleryItem = document.querySelector(".js-gallery");
const modalItem = document.querySelector(".js-lightbox");
const closeModalBtn = document.querySelector(
  '.lightbox button[data-action="close-lightbox"]'
);
const changeModalImage = document.querySelector(".lightbox__image");
const modalOverlay = document.querySelector(".lightbox__overlay");

const galleryMarkup = createGalleryMakrup(gallery);

galleryItem.innerHTML = galleryMarkup;
galleryItem.addEventListener("click", onGalleryItemClick);

closeModalBtn.addEventListener("click", onCloseModalBtn);

function createGalleryMakrup(images) {
  return images
    .map(({ preview, original, description }) => {
      return `
    <li class="gallery__item">
      <a
        class="gallery__link"
        href=${original}
      >
        <img
          class="gallery__image"
          src=${preview}
          data-source=${original}
          alt=${description}
        />
      </a>
    </li>`;
    })
    .join("");
}

function onGalleryItemClick(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== "IMG") {
    return;
  }

  modalItem.classList.add("is-open");
  changeModalImage.src = evt.target.dataset.source;
  changeModalImage.alt = evt.target.alt;
}

function onCloseModalBtn(evt) {
  modalItem.classList.remove("is-open");
  changeModalImage.src = "";
  changeModalImage.alt = "";
}
