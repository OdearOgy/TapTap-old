
//scroll animation
function getElementY(query) {
  return window.pageYOffset + document.querySelector(query).getBoundingClientRect().top
}

function doScrolling(element, duration) {
	let startingY = window.pageYOffset
  let elementY = getElementY(element)
  let targetY = document.body.scrollHeight - elementY < window.innerHeight ? document.body.scrollHeight - window.innerHeight : elementY
	let diff = targetY - startingY
  let easing = function (t) { return t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1 }
  let start

  if (!diff) return
	window.requestAnimationFrame(function step(timestamp) {
    if (!start) start = timestamp
    let time = timestamp - start
    let percent = Math.min(time / duration, 1)
    percent = easing(percent)

    window.scrollTo(0, startingY + diff * percent)
    if (time < duration) {
      window.requestAnimationFrame(step)
    }
  })
}

document.getElementById('scrolling').addEventListener('click', doScrolling.bind(null, '#section-id', 1000));
document.getElementById('scrollToMap').addEventListener('click', doScrolling.bind(null, '#map', 1000));




//slider
// var swiper_rev = new Swiper('.shape_abaj', {
//     slidesPerView: 1,
//     autoplay: 3000,
//     speed: 800,
//     spaceBetween: 8,
//     paginationClickable: true,
//     nextButton: '.swiper-button-next',
//     prevButton: '.swiper-button-prev'
//
// });
