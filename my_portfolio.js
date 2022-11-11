let sections= document.querySelectorAll(".section")
let controls= document.querySelectorAll(".controls")
let sectionBtns= document.querySelectorAll(".control")
let mainSect=  document.querySelector(".main-content")


function PgTransition(){
    //Active class buttons

    for (var i =0; i< sectionBtns.length; i++){
        sectionBtns[i].addEventListener('click',function(){
            var currBtn= document.querySelectorAll('.active-btn');
            currBtn[0].className= currBtn[0].className.replace('active-btn','')
            this.className += ' active-btn'
        })
    }
   
    mainSect.addEventListener('click',(e)=>{
        const id= e.target.dataset.id;
        if (id){
            sectionBtns.forEach((btn)=>{
                btn.classList.remove('active')
            })
            e.target.classList.add('active')

            sections.forEach((section)=>{
                section.classList.remove('active')
            })

            let ele= document.getElementById(id);
            ele.classList.add('active');
        }        


    })  
}

PgTransition();
