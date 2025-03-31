let textRemoved = true;

function toggleText() {
    const text = document.querySelector('.hero-text');
    const nav = document.querySelector('.navbar');
    const call = document.querySelector('.call');
    if (textRemoved) {
        removeText(text);
        nav.classList.add('bg-white');
        call.classList.add('cst-call');
        call.classList.remove('call');
    } else {
        addText(text);
        nav.classList.remove('bg-white');
        call.classList.remove('cst-call');
        call.classList.add('call');
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