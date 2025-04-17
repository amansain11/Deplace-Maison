export const cart = ()=>{
    const cart_btn = document.querySelectorAll('.cart')
    const close_btn = document.getElementById('cart-close-icon')
    const cart = document.querySelector('.cart-menu-wrapper')
    const empty_space = document.getElementById('empty-space')
    
    cart_btn.forEach(cart_btn =>{
        cart_btn.addEventListener('click',()=>{
            cart.style.display = 'flex';
        })
    })

    close_btn.addEventListener('click', ()=>{
        cart.style.display = 'none';
    })

    empty_space.addEventListener('click',()=>{
        cart.style.display = 'none';
    })
};