const firstOverlay = document.querySelector('.overlay__first')
const secondOverlay = document.querySelector('.overlay__second')
const thirdverlay = document.querySelector('.overlay__third')

const startedApp = () => {
  TweenMax.to('.overlay__first', 1.5, {
    delay: 0.1,
    backgroundColor: '#6a040f',
    top: '-100%',
    ease: Expo.easeInOut,
  })
  TweenMax.to('.overlay__second', 1.5, {
    delay: 0.5,
    backgroundColor: '#6a040f',
    top: '-100%',
    ease: Expo.easeInOut,
  })
  TweenMax.to('.overlay__third', 1.5, {
    delay: 0.9,
    backgroundColor: '#6a040f',
    top: '-100%',
    ease: Expo.easeInOut,
  })
  TweenMax.from('.logo', 0.9, {
    delay: 1.8,
    opacity: 0,
    y: '-100%',
    expo: Expo.easeInOut,
  })
  TweenMax.staggerFrom(
    '.menu__links',
    0.3,
    {
      delay: 2.2,
      opacity: 0,
      y: '-100%',
      expo: Expo.easeInOut,
    },
    0.4
  )
  TweenMax.from('.cart', 0.5, {
    delay: 3.8,
    opacity: 0,
    y: '-100%',
    expo: Expo.easeInOut,
  })
  TweenMax.from('.hero__title .hide', 0.5, {
    delay: 4,
    opacity: 0,
    y: '-100%',
    expo: Expo.easeInOut,
  })
  TweenMax.from('.hero__subtitle .hide', 0.5, {
    delay: 4.4,
    opacity: 0,
    y: '-100%',
    expo: Expo.easeInOut,
  })
  TweenMax.from('.hero__description .hide', 0.5, {
    delay: 4.7,
    opacity: 0,
    y: '-100%',
    expo: Expo.easeInOut,
  })
  TweenMax.from('.hero__price .hide', 0.5, {
    delay: 4.7,
    opacity: 0,
    y: '-100%',
    expo: Expo.easeInOut,
  })
  TweenMax.from('.hero__btn .hide', 0.5, {
    delay: 4.7,
    opacity: 0,
    x: '-100%',
    expo: Expo.easeInOut,
  })
  TweenMax.from('.chipses__doritos', 0.7, {
    delay: 4,
    top: '-100%',
    expo: Expo.easeInOut,
  })
  TweenMax.from('.chipses__backdrop', 0.7, {
    delay: 4.2,
    opacity: 0,
    left: '-100%',
    expo: Expo.easeInOut,
  })
  TweenMax.from('.chipses__chips', 0.7, {
    delay: 4.2,
    opacity: 0,
    right: '-100%',
    expo: Expo.easeInOut,
  })
  TweenMax.from('.chipses__ketchup', 0.7, {
    delay: 4.3,
    opacity: 0,
    left: '-100%',
    expo: Expo.easeInOut,
  })
  TweenMax.from('.chipses__suyaPepper', 0.7, {
    delay: 4.3,
    opacity: 0,
    right: '-100%',
    expo: Expo.easeInOut,
  })
}

startedApp()
