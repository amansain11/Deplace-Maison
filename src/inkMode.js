export const inkMode = ()=>{
    const inkMode_desktop = document.getElementById('inkMode-btn')
    const inkMode_mobile = document.querySelector('.inkm-lower-part')
    const inkMode = [inkMode_desktop, inkMode_mobile]
    
    const header_desktop = document.querySelector('.header-desktop')
    const header_mobile = document.querySelector('.header-content-wrapper')
    const ham_icon_lines = document.querySelectorAll('.menu-icon-line')
    const logo_mobile = document.getElementById('logo-svg')
    const logo_desktop = document.querySelectorAll('.logo-desktop')
    const ham = document.getElementById('menu-icon')
    const explore_text_after = document.querySelectorAll('.explore-text-after')
    const explore_icon_selectors = document.querySelectorAll('.explore-icon-inkMode-selectors')
    const morquee_section = document.querySelector('.morquee-section')
    const morquee_text = document.querySelector('.morquee-text-wrapper')
    const inkMode_selctors = document.querySelectorAll('.inkMode-selector')
    const e_text_a = document.getElementById('e-text-a')
    const virgolette = document.getElementById('q-virgolette-img')
    const letter_img = document.getElementById('letter-img')
    const input_border = document.querySelector('.input-wrapper')
    const facebook_logo = document.getElementById('facebook-logo')
    const instagram_logo = document.getElementById('instagram-logo')
    const cart_menu = document.querySelector('.cart-menu')
    const cart_menu_header = document.querySelector('.cart-menu-header')
    
    inkMode.forEach(inkMode_btn => {
        inkMode_btn.addEventListener('click', ()=>{
            document.body.classList.toggle('inkMode-bg-color')
            document.body.classList.toggle('inkMode-color')

            header_desktop.classList.toggle('inkMode-bg-color')
            header_mobile.classList.toggle('inkMode-bg-color')

            morquee_section.classList.toggle('inkMode-icons-bg-color')
            morquee_text.classList.toggle('inkMode-morquee-color')

            input_border.classList.toggle('inkMode-border-color')

            cart_menu_header.classList.toggle('inkMode-border-color')
            cart_menu.classList.toggle('inkMode-bg-color')

            ham_icon_lines.forEach(line => {
                line.classList.toggle('inkMode-icons-bg-color')
            })

            explore_text_after.forEach(item => {
                item.classList.toggle('inkMode-icons-bg-color')
            })

            explore_icon_selectors.forEach(item =>{
                item.classList.toggle('inkMode-explore-icon-fill')
            })

            inkMode_selctors.forEach(selector => {
                selector.classList.toggle('inkMode-color')
            })

            if(document.body.classList.contains('inkMode-color')){
                logo_desktop.forEach(logo =>{
                    logo.setAttribute('src','logo-vert-inkMode.svg')
                })
                ham.click()
                logo_mobile.setAttribute('src','logo-inkMode.svg')
                e_text_a.style.color = 'var(--clr-card-bg)';
                virgolette.setAttribute('src','virgolette-light.svg')
                letter_img.setAttribute('src', 'letter-light.svg')
                facebook_logo.setAttribute('src','facebook-light.svg')
                instagram_logo.setAttribute('src','instagram-light.svg')
            }
            else{
                logo_desktop.forEach(logo =>{
                    logo.setAttribute('src','logo-vert.svg')
                })
                ham.click()
                logo_mobile.setAttribute('src','logo.svg')
                e_text_a.style.color = 'var(--clr-font)';
                virgolette.setAttribute('src','virgolette.svg')
                letter_img.setAttribute('src', 'letter.svg')
                facebook_logo.setAttribute('src','facebook-logo.svg')
                instagram_logo.setAttribute('src','instagram-logo.svg')
            }
        })
    })
};