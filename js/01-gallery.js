import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
const galleryItem = galleryItems.map(
    (item) =>
    `<div class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
      />
    </a>
  </div>`
).join("");
gallery.innerHTML = galleryItem;
// import * as basicLightbox from 'basiclightbox'  
gallery.addEventListener("click",(event) => {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") return;
    // basicLightbox.create(`
    //     <img width="1400" height="900" src="${item.original}">
    // `)
    // .show()

});


// import * as basicLightbox from 'basiclightbox'

// const instance = basicLightbox.create(`
//     <div class="modal">
//         <p>
//             Your first lightbox with just a few lines of code.
//             Yes, it's really that simple.
//         </p>
//     </div>
// `)

// instance.show()