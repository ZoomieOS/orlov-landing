const track = document.getElementById('galTrack');
const btnPrev = document.getElementById('galPrev');
const btnNext = document.getElementById('galNext');

const getStep = () => {
    return Math.max(track.clientWidth * 0.9, 300);
};

function updateButtons() {
    const maxScroll = track.scrollWidth - track.clientWidth - 1; // флоат-гард
    btnPrev.disabled = track.scrollLeft <= 0;
    btnNext.disabled = track.scrollLeft >= maxScroll;
}

btnPrev.addEventListener('click', () => {
    track.scrollBy({ left: -getStep(), behavior: 'smooth' });
});
btnNext.addEventListener('click', () => {
    track.scrollBy({ left:  getStep(), behavior: 'smooth' });
});
track.addEventListener('scroll', updateButtons);
window.addEventListener('resize', updateButtons);

updateButtons();

const burgerBtn = document.getElementById('burgerBtn');
const mobileNav = document.getElementById('mobileNav');
const navClose  = document.getElementById('navClose');

function openNav() {
    mobileNav.classList.add('open');
    burgerBtn.setAttribute('aria-expanded', 'true');
    document.documentElement.style.overflow = 'hidden';
}
function closeNav() {
    mobileNav.classList.remove('open');
    burgerBtn.setAttribute('aria-expanded', 'false');
    document.documentElement.style.overflow = '';
}

burgerBtn?.addEventListener('click', openNav);
navClose?.addEventListener('click', closeNav);

mobileNav?.addEventListener('click', (e) => {
    if (e.target === mobileNav) closeNav();
});

mobileNav?.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') closeNav();
});

window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close();
});