//  3340 ( 2 part)

window.addEventListener('load', () => {
  $('#year').text(new Date().getFullYear())

  const html = document.querySelector('html'),
    currLangDom = document.querySelector('.curr_lang'),
    preloader = document.querySelector('.preloader'),
    langSwitcher = document.querySelector('.lang_switcher_outer'),
    langListItem = [...document.querySelectorAll('.lang_list_item')],
    userLangBrowser = navigator.language || navigator.userLanguage,
    languageParts = userLangBrowser.split('-'),
    userLang = languageParts[0],
    bonus = [...document.querySelectorAll('.bonus')],
    country = html.getAttribute('data-country')

  const hidePreloader = () => {
    html.classList.remove('hide')
    preloader.classList.remove('hide')
    setTimeout(function () {
      preloader.classList.add('hide')
      html.classList.add('hide')
    }, 200)
  }

  hidePreloader()

  const listOfLang = ['en', 'tr']

  const countryToLang = {
    en: 'en',
    tr: 'tr',
    default: 'en',
  }

  const data = {
    en: { countWB: '1500 USD' },
    tr: { countWB: '50 000 TL' },
    default: { countWB: '1500 USD' },
  }

  let lang = countryToLang[userLang] || countryToLang.default

  if (country) {
    Object.keys(data).forEach((item) => {
      item === country && html.classList.add(`curr_${country}`)
    })
  }

  listOfLang.forEach((item) => {
    html.classList.remove(item)
    html.classList.add(lang)
  })

  const changeLanguage = (item) => {
    hidePreloader()

    const lang = item.getAttribute('data-lang')

    listOfLang.forEach((item) => {
      html.classList.contains(item) && html.classList.remove(item)
    })

    html.classList.add(lang)

    langListItem.forEach((item) => {
      item.classList.remove('curr')
    })
    item.classList.add('curr')

    currLangDom.innerHTML = item.innerHTML
  }

  langListItem.forEach((item) => {
    item.classList.remove('curr')
    item.addEventListener('click', () => {
      changeLanguage(item)
    })
  })

  const currLangItem = langListItem.find(
    (item) => item.getAttribute('data-lang') === lang
  )

  if (currLangItem) {
    currLangItem.classList.add('curr')
    currLangDom.innerHTML = currLangItem.innerHTML
  } else {
    currLangDom.innerHTML = `<span>${countryToLang.default}</span>`
  }

  document.addEventListener('click', (e) => {
    !e.target.closest('.lang_switcher_outer') &&
      langSwitcher.classList.remove('act')
  })

  langSwitcher.addEventListener('click', () => {
    langSwitcher.classList.toggle('act')
  })

  bonus.forEach((item) => {
    let numberOfBonus = data[country]
      ? data[country].countWB
      : data.default.countWB

    item.textContent = numberOfBonus
    item.setAttribute('data-text', numberOfBonus)
  })

  let counter = 0

  const wheelBtns = [...document.querySelectorAll('.spin')]
  const wheelSpinner = document.getElementById('wheel__spinner')
  const popupBtn = document.getElementById('popup-btn')
  const overlay = document.getElementById('overlay')
  const popupTryAgain = document.getElementById('popup-first')
  const popupCongratulation = document.getElementById('popup-second')

  function handleButtonClick() {
    if (counter === 0) {
      wheelBtns.forEach((button) => {
        button.disabled = true
      })
      wheelSpinner.classList.remove('wheel__spinner_moving')
      wheelSpinner.classList.add('wheel__spinner_win_1')
      counter++
      setTimeout(function () {
        $(overlay).fadeIn()
        $(popupTryAgain).fadeIn()
        localStorage.spin_3340_2 = 'spin_1'
      }, 3500)
    }
  }
  wheelBtns.forEach((button) => {
    button.addEventListener('click', handleButtonClick)
  })

  popupBtn.addEventListener('click', () => {
    wheelSpinner.classList.remove('wheel__spinner_win_1')
    $(overlay).fadeOut()
    $(popupTryAgain).fadeOut()
    wheelSpinner.classList.add('wheel__spinner_win_2')
    wheelSpinner.classList.add('wheel-currency')
    counter = 2
    setTimeout(function () {
      $(overlay).fadeIn()
      $(popupCongratulation).fadeIn()
      localStorage.spin_3340_2 = 'spin_2'
    }, 3500)
  })

  switch (localStorage.spin_3340_2) {
    case 'spin_1': {
      wheelBtns.forEach((button) => {
        button.disabled = true
      })
      wheelSpinner.classList.remove('wheel__spinner_moving')
      wheelSpinner.style.transform = 'rotate(1268deg)'
      $(overlay).fadeIn()
      $(popupTryAgain).fadeIn()
      counter = 1
      break
    }
    case 'spin_2': {
      wheelBtns.forEach((button) => {
        button.disabled = true
      })
      wheelSpinner.classList.remove('wheel__spinner_moving')
      wheelSpinner.style.transform = 'rotate(2078deg)'
      wheelSpinner.classList.add('wheel-currency')
      $(overlay).fadeIn()
      $(popupCongratulation).fadeIn()
      counter = 2
      break
    }
    default:
      break
  }

  particlesJS('particles-js', {
    particles: {
      number: {
        value: 250,
        density: { enable: true, value_area: 3000 },
      },
      color: { value: '#e29824' },
      shape: {
        type: 'circle',
        stroke: { width: 0, color: '#000000' },
        polygon: { nb_sides: 3 },
      },
      opacity: {
        value: 0.9,
        random: true,
        anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
      },
      size: {
        value: 4,
        random: true,
        anim: { enable: true, speed: 3, size_min: 0, sync: false },
      },
      line_linked: {
        enable: false,
        distance: 700,
        color: '#e29824',
        opacity: 0.4,
        width: 2,
      },
      move: {
        enable: true,
        speed: 2.5,
        direction: 'top',
        random: true,
        straight: false,
        out_mode: 'out',
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 1200 },
      },
    },
    interactivity: {
      detect_on: 'window',
      events: {
        onhover: { enable: false, mode: 'repulse' },
        onclick: { enable: false, mode: 'repulse' },
        resize: true,
      },
      modes: {
        grab: { distance: 1400, line_linked: { opacity: 0.1 } },
        bubble: { distance: 400, size: 6, duration: 0.3, opacity: 1, speed: 3 },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 },
      },
    },
    retina_detect: true,
  })
})
