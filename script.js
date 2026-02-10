function clickfunc() {
    window.location.href = "page-yes.html"
}

function increaseSize() {
    const JAButton = document.querySelector(".JA");

    JAButton.style.width = (JAButton.offsetWidth + 70) + 'px';
    JAButton.style.height = (JAButton.offsetHeight + 70) + 'px';

    const currentFontSize = window.getComputedStyle(JAButton).fontSize;
    const newFontSize = parseInt(currentFontSize) + 20 + 'px';
    JAButton.style.fontSize = newFontSize
}