let textRemoved = true;

function toggleText() {
    const text = document.querySelector('.hero-text');
    if (textRemoved) {
        removeText(text);
    } else {
        addText(text);
    }
}

function removeText(text) {
    text.classList.add('d-none');
    text.classList.remove('d-block');
    textRemoved = false;
}

function addText(text) {
    text.classList.add('d-block');
    text.classList.remove('d-none');
    textRemoved = true;
}
