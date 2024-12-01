import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { searchParams } from './js/pixabay-api';
import { checkGallery, useError } from './js/render-functions';

const form = document.querySelector('.js-form');
const gallery = document.querySelector('.gallery');
const search = document.querySelector('.form-search');
const loader = document.querySelector('.loader');

form.addEventListener('submit', handlerSearch);

function handlerSearch(event) {
  event.preventDefault();

  const query = search.value.trim();

  if (!query) return;

  search.value = '';

  loader.classList.add('visible');

  searchParams(query)
    .then(data => {
      checkGallery(gallery, data.hits);

      const newGallery = new SimpleLightbox('.gallery a');
      newGallery.refresh();
    })
    .catch(error => {
      console.log(error);
      useError(
        'Sorry, there are no images matching your search query. Please, try again!'
      );
    })
    .finally(() => {
      loader.classList.remove('visible');
    });
}
