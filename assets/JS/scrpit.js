const btnMenu = () => {
    const btnMobile = document.getElementById('btn-menu');
    const nav = document.getElementById('nav-bar');
    function toggleMenu(event) {
        if (event.type === 'touchstart') event.preventDefault();
        nav.classList.toggle(`active`);
    }

    btnMobile.addEventListener(`click`, toggleMenu);
    btnMobile.addEventListener(`touchstart`, toggleMenu);

    const navLinks = document.querySelectorAll('#nav-bar a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
        });
    });
}

const scrollSmooth = () => {
    const menuItems = document.querySelectorAll(`.nav-bar .nav-link[href^="#"]`);

    menuItems.forEach(item => {
        item.addEventListener(`click`, scrollTOIdOnClick);
    })

    function scrollTOIdOnClick(event) {
        event.preventDefault();
        const element = event.target;
        const id = element.getAttribute(`href`);
        const section = document.querySelector(id).offsetTop;

        window.scroll({
            top: section - 70
        })
    }
}

const btnTop = () => {
    const btn = document.getElementById(`btn-top`);

    btn.addEventListener(`click`, function () {
        window.scrollTo(0, 0);
    })

    document.addEventListener(`scroll`, ocultar);

    function ocultar() {
        if (window.scrollY > 200) {
            btn.style.display = `flex`;
        } else {
            btn.style.display = `none`;
        }
    }

    ocultar();
}


const typeWriter = () => {
    const title = document.querySelector(`.home-title`);
    const p1 = document.querySelector(`.home-text .sub1`);
    const p2 = document.querySelector(`.home-text .sub2`);

    const typing = element => {
        if (element == title){
            element.innerHTML = `Olá, eu sou o Guilherme`
            const textArray = element.innerHTML.split('');
            element.innerHTML = ``;

            textArray.forEach((letter, i) => {
                setTimeout(() => element.innerHTML += letter, 75 * i);
            });
        } else if (element == p1) {
            element.innerHTML = `Desenvolvedor Front-end e Futuro Full-stack`
            const textArray = element.innerHTML.split('');
            element.innerHTML = ``;

            textArray.forEach((letter, i) => {
                setTimeout(() => element.innerHTML += letter, 75 * i);
            });
        } else if (element == p2) {
            element.innerHTML = `Bem-vindo ao meu portfólio`
            const textArray = element.innerHTML.split('');
            element.innerHTML = ``;

            textArray.forEach((letter, i) => {
                setTimeout(() => element.innerHTML += letter, 75 * i);
            });
        }
    }

    typing(title);
    setTimeout(() => typing(p1), 1900);
    setTimeout(() => typing(p2), 5275);
}

typeWriter();
scrollSmooth();
btnMenu();
