// function imageComparison(selector) {
//     let comparison = $(selector)
//         .addClass("image-comparison")
//         .prepend('<div class="image-comparison__before"></div>')
//         .append('<button class="image-comparison__slider"></button>');

//     let images = comparison
//         .find("img")
//         .addClass("image-comparison__image");

//     let before = comparison
//         .find(".image-comparison__before")
//         .append(images.eq(0));

//     comparison
//         .find(".image-comparison__slider")
//         .on("dragstart", () => false)
//         .on("mousedown", function (e) {
//             let slider = $(this);
//             let doc = $(document).on("mousemove", (e) => {
//                 let offset = e.pageX - comparison.position().left;
//                 let content_width = comparison.width();
//                 let el = document.getElementsByClassName("ba-block")[0];
//                 let width = el.offsetWidth;
//                 let dif = (width - content_width) / 2 - 5;

//                 if (offset < -dif) offset = -dif;
//                 if (offset > content_width + dif) {
//                     offset = content_width + dif;
//                 }
//                 slider.css("left", offset + "px");
//                 before.css("width", offset + "px");
//             });

//             doc.on("mouseup", () => doc.off("mousemove"));
//         });
// }

// imageComparison("#image-comparison");
const sliderContainer = document.querySelector('.slider-container');
const beforeImage = document.querySelector('.slider-image.before');
const afterImage = document.querySelector('.slider-image.after');
const handle = document.querySelector('.slider-handle');

function updateSlider(position) {
  const rect = sliderContainer.getBoundingClientRect();
  const percentage = (position / rect.width) * 100;

  handle.style.left = `${percentage}%`;
  afterImage.style.clipPath = `inset(0 0 0 ${percentage}%)`;
  beforeImage.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
}

sliderContainer.addEventListener('mousemove', (event) => {
  const rect = sliderContainer.getBoundingClientRect();
  const offsetX = event.clientX - rect.left;
  updateSlider(offsetX);
});

sliderContainer.addEventListener('touchmove', (event) => {
  const rect = sliderContainer.getBoundingClientRect();
  const offsetX = event.touches[0].clientX - rect.left;
  updateSlider(offsetX);
});

