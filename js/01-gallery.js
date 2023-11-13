import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const galleryList = document.querySelector('.gallery');
console.log(galleryList);

const markup = galleryItems.map(({ original, preview, description }) => {
   return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
        />
    </a>
</li>`
});

galleryList.insertAdjacentHTML('beforeend', markup.join(''));

galleryList.addEventListener('click', onClick); 
    
function onClick(event) {
    event.preventDefault();

    if (!event.target.classList.contains('gallery__image')) {
        return;
    }
    console.log(event.target);

    const instance = basicLightbox.create(`
    <img
    src="${event.target.dataset.source}"
    alt="${event.target.alt}"
    />
`, {
    
        onShow: () => {
            document.addEventListener('keydown', onEscKeyPress);
        },
    
        onClose: () => {
            document.removeEventListener('keydown', onEscKeyPress);
        },
    }

);

    function onEscKeyPress(event) {
    console.log(event.code);
    if (event.code === 'Escape') {
        instance.close();
    }
}
    
instance.show();

};







































