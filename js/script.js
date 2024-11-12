// Toggle active class

const navigasi = document.querySelector('.navigasi');

// ketika menu di klik

document.querySelector('#hamburger').onclick = () => {
    navigasi.classList.toggle('active');
};

// agar bisa klik dimana aja ketika keluar sidebar

const burger = document.querySelector('#hamburger')

document.addEventListener('click', function(e){
    if(!burger.contains(e.target) && !navigasi.contains(e.target)) {
        navigasi.classList.remove('active')
    }
})