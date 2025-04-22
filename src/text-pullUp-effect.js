export const textPullUpEffect = ()=>{
    const HeroTextObserver = new IntersectionObserver((entries, observer)=>{
        entries.forEach(entry => {
            if(entry.isIntersecting){
                setTimeout(() => {
                    entry.target.classList.add('pullUp-effect');
                    observer.unobserve(entry.target);
                }, 3500);
            }
        })
    }, {threshold: 0});

    const textObserver = new IntersectionObserver((entries, observer)=>{
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add('pullUp-effect');
                observer.unobserve(entry.target);
            }
        })
    }, {threshold: 0});

    const logoObserver = new IntersectionObserver((entries,observer) =>{
        entries.forEach(entry => {
            if(entry.isIntersecting){
                setTimeout(()=>{
                    entry.target.firstElementChild.classList.remove('logoPull-effect');
                    observer.unobserve(entry.target);
                },1000);
            }        })
    }, {threshold: 0});

    const HeroText = document.querySelectorAll('.hero-pull-up-text');
    HeroText.forEach(text => {
        HeroTextObserver.observe(text);
    });
    
    const pullUpTexts = document.querySelectorAll('.pull-up-text');
    pullUpTexts.forEach(text => {
        textObserver.observe(text);
    });
    
    const logoWrapper = document.getElementById('logo-wrapper');
    logoObserver.observe(logoWrapper);
};