const active = document.querySelector('.active')
const socials = document.querySelector('.socials');
const btn = document.querySelector('.btn');
const btnBack = document.querySelector('.act-btn')



btn.addEventListener('click', fun1)
btnBack.addEventListener('click', fun2)
// btnBack.asEventListener('click', fun2)

//resize event
window.addEventListener('resize', function () {
    if (window.innerWidth < 1024) {
        btn.removeEventListener('click', fun1)
        BtnBack.removeEventListener('click', fun2)
    } else {
        btn.addEventListener('click', fun1)
        btnBack.addEventListener('click', fun2)
    }
})
// btn.addEventListener('click', () => {
//     fun3();
// })

function fun1() {
    if (window.innerWidth < 1024 && socials.style.display === "none") {
        socials.style.display = "none";
        active.style.display = "flex";
    } else {
        socials.style.display = "none";
        active.style.display = "flex";
    }
}

function fun2() {
    console.log(window.innerWidth)
    if (window.innerWidth < 1024 && active.style.display === "none") {
        socials.style.display = "none";
        active.style.display = "flex";
    } else {
        socials.style.display = "flex";
        active.style.display = "none";
    }
}


// function fun4() {
//     if (socials.style.display === "flex") {
//         socials.style.display = "flex";
//         active.style.display = "none";
//     } else {
//         socials.style.display = "none";
//         active.style.display = "flex";
//     }
// }

// function fun3() {
//     let mql = window.matchMedia('(max-width: 1024px)');

//     document.querySelector(".mq-value").innerText = mql.matches;
//     if (mql = true) {
//         Btn1;
//         Btn2;
//         fun4();
//         console.log('yeah')
//     } else {
//         console.log('nope')
//     }
// }
// fun3();