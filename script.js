
let ans=document.getElementById("ans");

let btns=document.querySelectorAll(".button");
Array.from(btns).forEach((btn)=>{
    
    btn.addEventListener('click',(e)=>{
        try {

            if ( e.target.innerHTML == "=") {
                ans.innerHTML=eval(ans.innerHTML);
           }
    //        else if ( e.target.innerHTML == "=") {
    //         ans.innerHTML.forEach(element => {
                
    //         });
    //    }
           else if ( e.target.innerHTML == "C") {
               ans.innerHTML="";
          }
           else{
               ans.innerHTML = ans.innerHTML + e.target.innerText;
           }
            
        } catch (error) {
            ans.innerHTML = error;
        }
        
        
    })
})



