function slider(){

    const slider=document.querySelector("#muestra-slider");
    const btnIzq=document.querySelector("#muestra-btn__izq");
    const btnDer=document.querySelector("#muestra-btn__der");
    let sliderSection=document.querySelectorAll(".muestra-slider__section");
    let sliderSectionLast=sliderSection[sliderSection.length-1];

    slider.style.width = `${sliderSection.length * 100}%`; 
    slider.insertAdjacentElement('afterbegin',sliderSectionLast);//corre el último elemento al principio  
    function siguiente(){
        let primera=document.querySelectorAll(".muestra-slider__section")[0];
        slider.style.marginLeft="-200%";
        slider.style.transition="all 0.5s";
        setTimeout(function(){
            slider.style.transition="none";
            slider.insertAdjacentElement('beforeend',primera);
            slider.style.marginLeft="-100%";
        },500);
    }
    function anterior(){
        let sliderSection=document.querySelectorAll(".muestra-slider__section");
        let ultima=sliderSection[sliderSection.length-1];
        slider.style.marginLeft="0%";
        slider.style.transition="all 0.5s";
        setTimeout(function(){
            slider.style.transition="none";
            slider.insertAdjacentElement('afterbegin',ultima);
            slider.style.marginLeft="-100%";
        },500); 
    }
  
    btnDer.addEventListener('click',function(){
        siguiente();
    });
    btnIzq.addEventListener('click',function(){
        anterior();
    });
    setInterval(function(){
        siguiente();
    },4000);
}
slider();


