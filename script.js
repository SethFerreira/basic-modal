const btnClose = document.querySelector('.icon-close');
const modal = document.getElementById('modal');
const overlay = document.querySelector('.overlay');
const btnOpen = document.getElementById('open-modal-btn');

btnOpen.addEventListener('click', () => {
    overlay.style.display = 'flex';
    btnOpen.style.display = 'none';
});

btnClose.addEventListener('click', () => {
    overlay.style.display = 'none';
    btnOpen.style.display = 'block';
});

overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
        overlay.style.display = 'none';
    }
    btnOpen.style.display = 'block';
});
