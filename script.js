const btn_q0 = document.querySelector("#btn_q0");
const btn_q1 = document.querySelector("#btn_q1");
const btn_q2 = document.querySelector("#btn_q2");
const btn_q3 = document.querySelector("#btn_q3");
const btn_q4 = document.querySelector("#btn_q4");
const btn_q5 = document.querySelector("#btn_q5");
const btn_q6 = document.querySelector("#btn_q6");
const btn_q7 = document.querySelector("#btn_q7");

let enRepro = false, viniCol = false, volPlus = false, volMin = false, spePlus = false, speMin = false;

let estados ={ 
    q0:()=>{
        btn_q0.disabled = true;
        btn_q1.disabled = false;
        btn_q2.disabled = true;
        btn_q3.disabled = true;
        btn_q4.disabled = true;
        btn_q5.disabled = true;
        btn_q6.disabled = true;
        btn_q7.disabled = true;


        document.querySelector(".q1__torna").style.opacity = "0";//Desactiva el led
        document.querySelector(".vinyl").style.animationPlayState = "paused";
    },
    q1:()=>{

        btn_q0.disabled = false;
        btn_q1.disabled = true;
        btn_q2.disabled = false;
        btn_q3.disabled = true;
        btn_q4.disabled = true;
        btn_q5.disabled = true;
        btn_q6.disabled = true;
        btn_q7.disabled = true;
        if(viniCol){btn_q3.disabled = false;}
        document.querySelector(".q1__torna").style.opacity = "1";//Prende el led
    },
    q2:()=>{
        btn_q0.disabled = false;
        btn_q1.disabled = true;
        btn_q2.disabled = true;
        btn_q3.disabled = false;
        btn_q4.disabled = true;
        btn_q5.disabled = true;
        btn_q6.disabled = true;
        btn_q7.disabled = true;
        document.querySelector(".vinyl").style.opacity = "1";
        viniCol = true;
    },
    q3:()=>{

        if(enRepro){
            document.querySelector(".palanca").style.opacity = "1";
            document.querySelector(".palanca-on").style.opacity = "0";
            document.querySelector(".vinyl").style.animationPlayState = "paused";
            enRepro = false;
        }else{
            
            document.querySelector(".palanca").style.opacity = "0";
            document.querySelector(".palanca-on").style.opacity = "1";
            document.querySelector(".vinyl").style.animationPlayState = "running";
            enRepro = true;
        }
        btn_q0.disabled = false;
        btn_q1.disabled = true;
        btn_q2.disabled = true;
        btn_q3.disabled = false;
        btn_q4.disabled = false;
        btn_q5.disabled = false;
        btn_q6.disabled = false;
        btn_q7.disabled = false;
        
    },
    q4:()=>{
        btn_q0.disabled = false;
        btn_q1.disabled = true;
        btn_q2.disabled = true;
        btn_q3.disabled = false;
        btn_q4.disabled = false;
        btn_q5.disabled = false;
        btn_q6.disabled = false;
        btn_q7.disabled = false;

        if(spePlus){
            document.querySelector(".slide").style.transform = "translateY(0px)";
            document.querySelector(".slide").style.transitionDuration = "1s";
            spePlus = false;           
        }else{
            document.querySelector(".slide").style.transform = "translateY(-50px)";
            document.querySelector(".slide").style.transitionDuration = "1s";
            spePlus = true;
        }
        if(spePlus){btn_q3.disabled = true;}

    },
    q5:()=>{
        btn_q0.disabled = false;
        btn_q1.disabled = true;
        btn_q2.disabled = true;
        btn_q3.disabled = false;
        btn_q4.disabled = false;
        btn_q5.disabled = false;
        btn_q6.disabled = false;
        btn_q7.disabled = false;

        if(speMin){
            document.querySelector(".slide").style.transform = "translateY(0px)";
            document.querySelector(".slide").style.transitionDuration = "1s";
            speMin = false;           
        }else{
            document.querySelector(".slide").style.transform = "translateY(50px)";
            document.querySelector(".slide").style.transitionDuration = "1s";
            speMin = true;
        }
        if(speMin){btn_q3.disabled = true;}
     
    },
    q6:()=>{
        btn_q0.disabled = false;
        btn_q1.disabled = true;
        btn_q2.disabled = true;
        btn_q3.disabled = false;
        btn_q4.disabled = false;
        btn_q5.disabled = false;
        btn_q6.disabled = false;
        btn_q7.disabled = false;

        if(volPlus){
            document.querySelector(".poten").style.transform = "rotate(0deg)";
            document.querySelector(".poten").style.transitionDuration = "1s";
            volPlus = false;

        }else{
            document.querySelector(".poten").style.transform = "rotate(90deg)";
            document.querySelector(".poten").style.transitionDuration = "1s";
            volPlus = true;
        }
        if(volPlus){btn_q3.disabled = true;}         
    },
    q7:()=>{
        btn_q0.disabled = false;
        btn_q1.disabled = true;
        btn_q2.disabled = true;
        btn_q3.disabled = false;
        btn_q4.disabled = false;
        btn_q5.disabled = false;
        btn_q6.disabled = false;
        btn_q7.disabled = false;

        if(volMin){
            document.querySelector(".poten").style.transform = "rotate(0deg)";
            document.querySelector(".poten").style.transitionDuration = "1s";
            volMin = false;

        }else{
            document.querySelector(".poten").style.transform = "rotate(-90deg)";
            document.querySelector(".poten").style.transitionDuration = "1s";
            volMin = true;
        }
        if(volMin){btn_q3.disabled = true;}

    }
};

estados.q0();

btn_q0.addEventListener("click",()=>{
    estados.q0();
});
btn_q1.addEventListener("click",()=>{
    estados.q1();
});
btn_q2.addEventListener("click",()=>{
    estados.q2();
});
btn_q3.addEventListener("click",()=>{
    estados.q3();
});
btn_q4.addEventListener("click",()=>{
    estados.q4();
});
btn_q5.addEventListener("click",()=>{
    estados.q5();
});
btn_q6.addEventListener("click",()=>{
    estados.q6();
});
btn_q7.addEventListener("click",()=>{
    estados.q7();
});