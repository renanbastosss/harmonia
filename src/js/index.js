const menuItens = document.querySelectorAll('.menus')

menuItens.forEach(item => {
    item.addEventListener('click', function (event) {
        const elementId = event.target.id
        const toSection = document.querySelector(`${elementId}`).offsetTop

        window.scroll({
            top: toSection - 60,
            behavior: "smooth",
        });

        const itemSelected = document.getElementById(`${elementId}`)
        itemSelected.classList.add('active')
    })
});


function changeMenuItem() {
    let home = document.getElementById('#home')
    let about = document.getElementById('#about')
    let gallery = document.getElementById('#gallery')
    let location = document.getElementById('#location')
    let contacts = document.getElementById('#contacts')
    let scroll = this.scrollY;

    if (scroll >= 0 || scroll < 300) {
        document.querySelector('.active').classList.remove('active');
        home.classList.add('active')
    }

    if (scroll >= 300) {
        document.querySelector('.active').classList.remove('active');
        about.classList.add('active')
    }

    if (scroll >= 950) {
        document.querySelector('.active').classList.remove('active');
        gallery.classList.add('active')
    }

    if (scroll >= 1450) {
        document.querySelector('.active').classList.remove('active');
        location.classList.add('active');
    }

    if (scroll > 2080) {
        document.querySelector('.active').classList.remove('active');
        contacts.classList.add('active');
    }
}

window.addEventListener('scroll', function () {
    changeMenuItem();
})

changeMenuItem();


const areaAluno = document.querySelector('.login');
const modalAlert = document.querySelector('.modal-background');

areaAluno.addEventListener('click', (event) => {
    event.preventDefault();
    modalAlert.style.display = 'block';
})

const buttonModal = document.querySelector('.modal-button');
buttonModal.addEventListener('click', closeModalAlert);

modalAlert.addEventListener('click', closeModalAlert);

function closeModalAlert() {
    modalAlert.style.display = 'none';
}


const gallery = document.querySelectorAll('.photos img');
const modalPhotos = document.querySelector('.background-modal');
const photoContainer = document.querySelector('.container-imagem img')
const closerPhoto = document.querySelector('.container-imagem span')

gallery.forEach(photo => {
    photo.addEventListener('click', () => {
        let srcPhoto = photo.getAttribute('src');

        modalPhotos.style.display = 'block';
        photoContainer.setAttribute('src', srcPhoto)
    });
});

function closeModal() {
    modalPhotos.style.display = 'none';
}

modalPhotos.addEventListener('click', closeModal);
closerPhoto.addEventListener('click', closeModal);


const pointer1 = document.querySelector('.pointer-1');
const pointer2 = document.querySelector('.pointer-2');
const pointer3 = document.querySelector('.pointer-3');
const slider = document.querySelector('.sliders-photos')

pointer1.addEventListener('click', () => {
    slider.style.marginLeft = '200vw';
    document.querySelector('.selected').classList.remove('selected');
    pointer1.classList.add('selected')
});

pointer2.addEventListener('click', () => {
    slider.style.marginLeft = '0vw';
    document.querySelector('.selected').classList.remove('selected');
    pointer2.classList.add('selected')
});

pointer3.addEventListener('click', () => {
    slider.style.marginLeft = '-200vw';
    document.querySelector('.selected').classList.remove('selected');
    pointer3.classList.add('selected')
});



const menuOpener = document.querySelector('.menu img'); 
const menu = document.querySelector('.menu nav');

menuOpener.addEventListener('click', () => {
    if (menu.style.display == 'block') {
        menu.style.display = 'none'
    } else {
        menu.style.display = 'block'
    }  
})