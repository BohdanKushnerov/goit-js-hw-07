import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");

const itemsMarkup = createGalleryItemsMarkup(galleryItems);
galleryRef.innerHTML = itemsMarkup;

function createGalleryItemsMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
                <a class="gallery__link" href="${original}">
                  <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                  />
                </a>
              </div>`;
    })
    .join("");
}

galleryRef.addEventListener("click", onImgClick);

function onImgClick(event) {
  event.preventDefault();
  // console.log(event.target.nodeName);
  console.log(event.target.dataset.source);
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}" width="800" height="600"/>`,
    {
      onShow: (instance) => {
        galleryRef.addEventListener("keydown", onEscClick);
      },
      onClose: (instance) => {
        galleryRef.removeEventListener("keydown", onEscClick);
      },
    }
  );
  instance.show();

  function onEscClick(event) {
    // console.log(event.code);
    if (event.code === "Escape") {
      instance.close();
    }
  }
}

console.log(galleryItems);
