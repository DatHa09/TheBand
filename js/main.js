const slider_img = document.getElementById("image");

const get_heading_content = document.querySelector(".text_heading");
const get_desc_content = document.querySelector(".text_desc");

const buy_Btns = document.querySelectorAll(".js_buy_ticket");

const modal = document.querySelector(".js_modal");

const modal_container = document.querySelector(".js_modal_container");

const closeModal = document.querySelector(".js_modal_close");

const imageArr = [
  {
    url: "./assets/img/slider/ny.jpg",
    heading: "New York",
    descriptions: "The atmosphere in New York is lorem ipsum.",
  },
  {
    url: "./assets/img/slider/la.jpg",
    heading: "Los Angeles",
    descriptions: "We had the best time playing at Venice Beach!",
  },
  {
    url: "./assets/img/slider/chicago.jpg",
    heading: "Chicago",
    descriptions: "Thank you, Chicago - A night we won't forget.",
  },
];

// set default values for url image, heading and descriptions for slider element
slider_img.src = imageArr[0].url;
get_heading_content.innerText = imageArr[0].heading;
get_desc_content.innerText = imageArr[0].descriptions;

let index = 1;
function autoSlideShowImage() {
  slider_img.src = imageArr[index].url;
  get_heading_content.innerText = imageArr[index].heading;
  get_desc_content.innerText = imageArr[index].descriptions;
  if (index + 1 === imageArr.length) {
    index = 0;
  } else {
    index = index + 1;
  }
}

setInterval(autoSlideShowImage, 5000);

for (let buyBtn of buy_Btns) {
  buyBtn.onclick = (e) => {
    modal.classList.add("open");
  };
}

closeModal.onclick = () => {
  modal.classList.remove("open");
};

modal.onclick = () => {
  modal.classList.remove("open");
};

// prevent bubbling event by stopPropagation
modal_container.onclick = (e) => {
  e.stopPropagation();
};
