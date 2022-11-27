// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

// console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');

function createImages(items) {
  return items
    .map(
      item =>
        `<a class="gallery__item" href="${item.original}">
            <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
        </a>`
    )
    .join('');
}

const addImagesToHtml = createImages(galleryItems);
// console.log(addImagesToHtml);

galleryRef.innerHTML = addImagesToHtml;

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
});
