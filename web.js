let navigation = performance.getEntriesByType("navigation") [0];
if (navigation && navigation.type === "reload") {
    history.replaceState(
        null, 
        "", 
        window.location.pathname + window.location.search
    );
}

function openOverlay() {
    hamburgerBtnElement.style.display = 'none'
    closeBtnElement.style.display = 'block'
    modalElement.style.display = 'flex'
    registerHtmlElement.style.display = 'block'
    modalElement.style.backgroundColor = '#2559f6'
    registerHtmlElement.style.backgroundColor = '#2559f6'
    modalElement.style.height = '100vh'
    registerHtmlElement.style.height = '100vh'
    mainHeader.style.display = 'none'
    mainBody.style.display = 'none'
    footerBody.style.display = 'none'
    window.location.hash = "page"
    headerBody.style.backgroundColor = "#2559f6"
}
// CLOSE
function closeOverlay() {
    hamburgerBtnElement.style.display = 'block'
    closeBtnElement.style.display = 'none'
    modalElement.style.display = 'none'
    registerHtmlElement.style.display = 'none'
    smartHome.style.display = 'block'
    mainHeader.style.display = 'block'
    mainBody.style.display = 'block'
    headerBody.style.display = 'block'
    footerBody.style.display = 'block'
}

window.addEventListener("resize", function () {
    const isDesktop = window.innerWidth >= 900
    if (isDesktop) {
        hamburgerBtnElement.style.display = 'none'
        closeBtnElement.style.display = 'none'
        modalElement.style.display = 'flex'
        registerHtmlElement.style.display = 'flex'
        mainHeader.style.display = 'block'
        mainBody.style.display = 'block'
        footerBody.style.display = 'block'
    } else {
        hamburgerBtnElement.style.display = 'block'
        closeBtnElement.style.display = 'none'
        modalElement.style.display = 'none'
        registerHtmlElement.style.display = 'none'
        smartHome.style.display = 'block'
        mainHeader.style.display = 'block'
        mainBody.style.display = 'block'
        footerBody.style.display = 'block'
    }

    wasDesktop = isDesktop;
})