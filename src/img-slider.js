export const slider = ()=>{
    let slider = document.querySelector('.slider');
    let innerSlider = document.querySelector('.slider-inner');

    let pressed = false;
    let startX;
    let x;

    const observer = new IntersectionObserver((entries, observer)=>{
        entries.forEach(entry =>{
            if(entry.isIntersecting){
                entry.target.firstElementChild.classList.remove('left-50-percent')
                setTimeout(() => {
                    innerSlider.style.transition = 'unset';
                }, 1000);
                observer.unobserve(entry.target)
            }
        })
    }, {threshold: 0});

    observer.observe(slider);

    // ======================
    // Desktop Mouse Events
    // ======================

    slider.addEventListener('mousedown', (e)=>{
        pressed = true;
        startX = e.offsetX - innerSlider.offsetLeft;
        slider.style.cursor = 'grabbing';
    })

    slider.addEventListener('mouseenter', ()=>{
        slider.style.cursor = 'grab';
    })

    slider.addEventListener('mouseup', ()=>{
        slider.style.cursor = 'grab';
    })

    window.addEventListener('mouseup', ()=>{
        pressed = false;
    })

    slider.addEventListener('mousemove', (e)=>{
        if(!pressed) return;
        e.preventDefault();

        x = e.offsetX;

        innerSlider.style.left = `${x - startX}px`;
        checkboundary();
    })

    // ======================
    // Mobile Touch Events
    // ======================

    slider.addEventListener('touchstart', (e) => {
        pressed = true;
        startX = e.touches[0].clientX - innerSlider.offsetLeft;
    });

    slider.addEventListener('touchend', () => {
        pressed = false;
    });

    slider.addEventListener('touchmove', (e) => {
        if (!pressed) return;
        x = e.touches[0].clientX;
        innerSlider.style.left = `${x - startX}px`;
        checkboundary();
    });
    
    // ======================
    // Boundaries
    // ======================

    function checkboundary(){
        let outer = slider.getBoundingClientRect();
        let inner = innerSlider.getBoundingClientRect();

        if(parseInt(innerSlider.style.left) > 0){
            innerSlider.style.left = '0px';
        }
        if(inner.right < outer.right){
            innerSlider.style.left = `-${inner.width - outer.width}px`;
        }
    } 
};