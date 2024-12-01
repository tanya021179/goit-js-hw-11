import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const API_KEY = '47379465-d19c322484d0cfa984d66258f';

const form = document.querySelector('.js-form');
const gallery = document.querySelector('.gallery');
const search = document.querySelector('.form-search');
const loader = document.querySelector('.loader');

form.addEventListener('submit', handlerSearch);

function handlerSearch(event) {
  event.preventDefault();
  console.log('handel ok');

  const query = search.value.trim();

  if (!query) return;

  search.value = '';

  loader.classList.add('visible');

  console.log('loader ok');

  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  fetch(`https://pixabay.com/api/?${params}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then(data => {
      gallery.innerHTML = '';
      if (data.hits.length === 0) {
        iziToast.error({
          msg: 'Sorry, there are no images matching your search query. Please, try again!',
        });
        return;
      }
      gallery.insertAdjacentHTML('beforeend', createMarkup(data.hits));
      const newGallery = new SimpleLightbox('.gallery a');
      newGallery.refresh();
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      loader.classList.remove('visible');
      console.log('loader ok ok');
    });
}

function createMarkup(arr) {
  return arr
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
      <li class="gallery-item">
      <a class="gallery-link" href="${largeImageURL}">   
      <img class="gallery-image" src="${webformatURL}" alt="${tags}" width="360"/>
      </a>
      <div class="facts">
      <p>Likes: <spaan>${likes}</spaan></p>
      <p>Views: <spaan>${views}</spaan></p>
      <p>Comments: <spaan>${comments}</spaan></p>
      <p>Downloads: <spaan>${downloads}</spaan></p>
      </div>
      </li>
    `
    )
    .join('');
}
