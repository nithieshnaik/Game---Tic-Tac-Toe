let box = document.querySelectorAll(".Box") ;
let resetbtn = document.querySelector(".rest" ) ;  
let ng =document.querySelector(".newg") ;
let mc=document.querySelector(".msgc") ; 
let msgs=document.querySelector(".msg") ;



let turnO = true ; 
let count=0 ;

const winpattern =[
    [0,1,2] , 
    [0,3,6] , 
    [0,4,8] ,
    [1,4,7] ,
    [2,5,8] ,
    [2,4,6] ,
    [3,4,5] ,
    [6,7,8] ,
] ;


box.forEach((Box)=>{
    Box.addEventListener("click",()=>{
        if(turnO){
            Box.innerText="O" ;
            turnO=false ;
        } else {
            Box.innerHTML="X" ; 
            turnO = true ;
        }  
        box.disabled= true ;
        count++ ;  
        checkwinner() ; 

         /*let iswinner = 
        if(count=== 9 && !iswinner){
            gameDraw() ;
        } */
    }) ;
}) ;    
 


let enable=()=>{
    for(let b of box){
        b.disabled= false ; 
        b.innerText="" ;
    }
}

let gameDraw=()=>{
  
} ;  
 

const disablebox=()=>{
    for(let b of box){
        b.disabled= true ;
    }
}
const showwinner =(winner)=>{ 
    msgs.innerText= 'Congratutations , Winner is ' + winner ; 
    mc.classList.remove("hide") ; 
    disablebox() ;

} ;


const checkwinner =()=>{
   for (let pat of winpattern){ 
     let pv1 = box[pat[0]].innerText ;
     let  pv2 = box[pat[1]].innerText ;
     let pv3 =box[pat[2]].innerText ; 

     if(pv1!="" && pv2!="" &&pv3!=""){
        if(pv1===pv2 && pv2===pv3){
            showwinner(pv1) ;
        }
     }


   }
} ; 

const rest=()=>{
    turnO=true ; 
    enable() ; 
    mc.classList.add("hide") ;


} ;

ng.addEventListener("click" , rest) ;
resetbtn.addEventListener("click" , rest) ;

