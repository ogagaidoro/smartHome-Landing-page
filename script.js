const hamburgerBtnElement = document.getElementById('hamburger')
const closeBtnElement = document.getElementById('close')
const modalElement = document.getElementById('modal')
const registerHtmlElement = document.getElementById('register')
const mainBody = document.getElementById('main')
const headerBody = document.getElementById('header')
const footerBody = document.getElementById('footer')
const smartHome = document.getElementById('smartHomes')
const mainHeader = document.getElementById('main-header')
const bodyElement = document.getElementById('page')
const faqCards = document.querySelectorAll('.FAQs-info')

hamburgerBtnElement.addEventListener('click', openOverlay)
closeBtnElement.addEventListener('click', closeOverlay)

for (const faqCard of faqCards) {
    const crossImgElement = faqCard.querySelector('.cross')
    const minusImgElement = faqCard.querySelector('.minus')
    const faqAnswer = faqCard.querySelector('.answer')

    crossImgElement.addEventListener('click', function () {
        for (const otherFaqCard of faqCards) {
            if (otherFaqCard !== faqCard) {
                otherFaqCard.querySelector('.answer').style.display = 'none'
                otherFaqCard.querySelector('.cross').style.display = 'block'
                otherFaqCard.querySelector('.minus').style.display = 'none'
            }
        }

        faqAnswer.style.display = 'block'
        crossImgElement.style.display = 'none'
        minusImgElement.style.display = 'block'
    })

    minusImgElement.addEventListener('click', function () {
        faqAnswer.style.display = 'none'
        crossImgElement.style.display = 'block'
        minusImgElement.style.display = 'none'
    })
}