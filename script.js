let textRemoved = true;

function toggleText() {
    const text = document.querySelector('.hero-text');
    const nav = document.querySelector('.navbar');
    if (textRemoved) {
        removeText(text);
        nav.classList.add('bg-white');
    } else {
        addText(text);
        nav.classList.remove('bg-white');
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


const redirectContact = () => {
    window.location.href = "contact.html";
}