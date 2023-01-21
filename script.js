
  (function(){

    const togglerbutton=document.querySelector('.toggler')
    togglerbutton.addEventListener('click',(event)=>{
        let sidebar=document.querySelector('.sidebar')
        sidebar.classList.toggle('active')
    });

  })()