const skillSection = document.querySelector("#skill-section"); 
const progress = document.querySelectorAll(".progress-bar"); 
window.addEventListener("scroll",()=>{ 
  const secTionPosition = skillSection.getBoundingClientRect().top; 
  const screenPositon =window.innerHeight; 
   if (secTionPosition <screenPositon) {
        function showProgress(){ 
          progress.forEach(progressInc=>{ 
          const value = progressInc.dataset.progress; 
          progressInc.style.opacity="1"; 
          progressInc.style.width = `${value}%`
        


          })
      
      
      
      
        }    showProgress()
   } else {
      function hide(){ 
        progress.forEach(p=>{ 
          p.style.opacity = 1; 
          p.style.width = 0;
        })
      } 
      hide();
   }
    


})

const typed = new Typed('.element', {
    // Waits 1000ms after typing "First"
    strings: [ 
           ' ',
          ' a Designer',
          ' a Web Developer',
           
        ], 
        typeSpeed: 50, 
        backSpeed: 50,
        backDelay: 1600,
        loop: true,

  }); 
//contact 

const formBtn = document.querySelector("#formBtn"); 
  formBtn.addEventListener("click",(e)=>{ 
    e.preventDefault();
    const email = document.querySelector("#exampleInputEmail1"); 
   const password = document.querySelector("#exampleInputPassword1") ; 
    

   if (email.value == "" && password.value == "") {
       alert(" Your Input Box is Empty Fill Up  The box")
   } else {
      email.value = "" ;
      password.value = ""; 
     const text = document.createElement("h1") 
      const newText = document.createTextNode("Thank You for being submitted ")  
       const replyBtn = document.createElement("button"); 
      const textBtn = document.createTextNode("+"); 
      text.appendChild(newText); 
      replyBtn.appendChild(textBtn); 
      text.appendChild(replyBtn); 
      const h5 = document.querySelector("#h5"); 
      h5.appendChild(text)
       replyBtn.addEventListener("click",()=>{ 
        text.remove();
       })
  
    } 
   
  }) 

  //darck color mode 

  const darkBtn = document.querySelector("#dark-mode"); 
     darkBtn.addEventListener("click", ()=>{ 

      const darkcolor = document.querySelector(".dark-color"); 
          darkcolor.classList.toggle("darkOn")
       const social = document.querySelector(".social-link"); 
           social.style. background ="white";
     })  

     //loader  

    //  window.addEventListener("load", ()=>{  

    //      const load = document.querySelector(".loader"); 
    //         load.className+= " hidden";

    //  }) 


     window.addEventListener("load", ()=>{ 
         const load = document.querySelector(".loader");
    
          setTimeout(()=>{ 
           load.style.display = "none";

         },1000)
     }) 


    
