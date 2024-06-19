
const btn = document.querySelector('.button');
const spinerIcon = document.querySelector('.spiner');
const btnText = document.querySelector('.btn-text');

btn.addEventListener('click', () => {

    btn.style.cursor = 'wait';
    btn.classList.add('checked')
    btnText.textContent = `Loading`;
    spinerIcon.classList.add('spin');

    setTimeout(() => {
        btn.style.pointerEvents = 'none'
        spinerIcon.classList.replace('spiner', 'check');
        spinerIcon.classList.replace('ri-loader-4-fill', 'ri-check-line');
        btn.classList.add('succses');
        btnText.textContent = `Done`;
    }, 4000)
});