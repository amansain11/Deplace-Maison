export const hamburger = ()=>{
    const ham = document.getElementById('menu-icon')
    const hamLines = document.querySelectorAll('.menu-icon-line')
    const headerWrapper = document.querySelector('.header-mobile')
    const hamMenu = document.querySelector('.ham-menu-wrapper')
    const mobileHeader = document.querySelector('.header-content-wrapper')
    const logo = document.getElementById('logo-svg')
    const transformSelectors = document.querySelectorAll('.transform-selectors')
    const transformHR = document.querySelectorAll('.hr')
    const headerBefore = document.querySelector('.background-before')

    ham.addEventListener('click', ()=>{
        hamMenu.classList.toggle('display-flex');
        headerWrapper.classList.toggle('set-height');
        mobileHeader.classList.toggle('invert-color')
        headerBefore.classList.toggle('bg-before-transform')

        if(hamMenu.classList.contains('display-flex')){
            logo.setAttribute('src','logo-white.svg')
        }
        else if(document.body.classList.contains('inkMode-color')){
            logo.setAttribute('src','logo-inkMode.svg')
        }
        else{
            logo.setAttribute('src','logo.svg')
        }

        hamLines.forEach(ham_line => {
            ham_line.classList.toggle('light-color');
        })

        hamLines[0].classList.toggle('transform-line-one')
        hamLines[1].classList.toggle('transform-line-two')
        hamLines[2].classList.toggle('transform-line-three')

        setTimeout(()=>{
            transformSelectors.forEach(selector =>{
                selector.classList.toggle('transform-translateY')
            })
            transformHR.forEach(hr => {
                hr.classList.toggle('transform-scaleX')
            })
        },500);
    })
};