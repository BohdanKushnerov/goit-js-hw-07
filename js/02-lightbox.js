import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");

const itemsMarkup = createGalleryItemsMarkup(galleryItems);
galleryRef.innerHTML = itemsMarkup;

function createGalleryItemsMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<li>
                <a class="gallery__item" href="${original}">
                  <img 
                    class="gallery__image" 
                    src="${preview}" 
                    alt="${description}" 
                  />
                </a>
              </li>`;
    })
    .join("");
}

const lightbox = new SimpleLightbox('.gallery a', {
  /* options */
  captionsData: 'alt',
  captionPosition: "bottom",
  captionDelay: 250,
});

console.log(galleryItems);
