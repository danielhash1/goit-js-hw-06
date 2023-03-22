const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const galleryList = document.querySelector(".gallery");   // list of images


// perebor of array  
const markupHtml = images
.map((image) => 
  `<li><img class="photo" src="${image.url}" height="160" width="250" alt="${image.alt}"></li>`)  // creating elements from arr .images
  .join("");  // deleting "," after each image

galleryList.insertAdjacentHTML("beforeend", markupHtml);  // adding photos to <ul>


// styling galleryList by CSS classes
galleryList.style.backgroundcolor = "grey";
galleryList.style.gap = "15px";
galleryList.style.display = "flex";
galleryList.style.color = "white";
galleryList.style.justifyContent = "center";
galleryList.style.padding = "40px";
galleryList.style.alignItems = "center";
galleryList.style.listStyleType = "none";