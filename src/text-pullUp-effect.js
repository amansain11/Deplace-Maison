export const textPullUpEffect = ()=>{
    const observer = new IntersectionObserver((entries, observer)=>{
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add('pullUp-effect');
                observer.unobserve(entry.target);
            }
        })
    }, {threshold: 0});
    
    const pullUpTexts = document.querySelectorAll('.pull-up-text');
    pullUpTexts.forEach(text => {
        observer.observe(text);
    });
};