export const preLoader = ()=>{
    const loader = document.querySelector('.loader')

    setTimeout(()=>{
        loader.classList.add('shutter-up')
    },3000)
};