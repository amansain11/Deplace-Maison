export const zoomEffect = ()=>{
    window.addEventListener('scroll',()=>{
        document.body.style.setProperty('--scroll',
            window.scrollY / (document.body.offsetHeight - window.innerHeight)  
        )  
    }, false)
};