window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()

  activeMenuAtCurrentSection(home)
  activeMenuAtCurrentSection(services)
  activeMenuAtCurrentSection(about)
  activeMenuAtCurrentSection(contact)
}

function activeMenuAtCurrentSection(section) {
  // Linha alvo
  const targetLine = scrollY + innerHeight / 2

  // VERIFICAR SE A SEÇÃO PASSOU DA LINHA
  // QUAIS DADOS VOU PRECISAR?

  // O topo da seção
  const sectionTop = section.offsetTop

  // A altura da seção
  const sectionHeight = section.offsetHeight

  // O topo da seção ultrapassou a linha alvo
  const sectionTopReachOrPassedTargtLine = targetLine >= sectionTop

  // INFORMAÇÕES DOS DADOS
  console.log(
    'O topo da seção passou da linha?',
    sectionTopReachOrPassedTargtLine
  )

  // Verificar se a base está abaixo da linha alvo
  // Quais dados vou precisar?

  // A seção termina onde?
  const sectionEndsAt = sectionTop + sectionHeight

  // O final da seção passou da linha alvo
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

  console.log('O fundo da seção passou da linha?', sectionEndPassedTargetLine)

  // Limites da seção
  const sectionBoundaries =
    sectionTopReachOrPassedTargtLine && !sectionEndPassedTargetLine

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 400) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: '700'
}).reveal(
  `#home, #home img, #home .stats, #services, #services header, #services .card, #about, #about header, #about .contet, #contact header, #contact .content, footer`
)
