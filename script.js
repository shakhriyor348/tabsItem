let tabHeader = document.querySelector('.tab-header');
let tabIndicator = document.querySelector('.tab-indicator');
let tabsPane = tabHeader.querySelectorAll('.tab-header-item');
 

tabsPane.forEach((item, i) => {
    item.addEventListener('click', () => {
        tabIndicator.style.top = `calc(calc(100% / 4) * ${i}`
    })
})

