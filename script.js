var inputBox=document.querySelector(".inputval");
// var ac=document.querySelector(".AC");
// var del=document.querySelector(".DEL");
// var  mod=document.querySelector(".%");
// var slash=document.querySelector("./");
// var seven=document.querySelector(".7");
// var six=document.querySelector(".6");
// var five=document.querySelector(".5");
// var four=document.querySelector(".4");
// var three=document.querySelector(".3");
// var two=document.querySelector(".2");
// var one=document.querySelector(".1");
// var  nine=document.querySelector(".9");
// var eight=document.querySelector(".8");
// var zero=document.querySelector(".0");
// var add=document.querySelector(".+");
// var sub=document.querySelector(".-");
// var mul=document.querySelector(".*");
// var equal=document.querySelector(".=");
// var doublezero=document.querySelector(".00");
// var dot=document.querySelector("..");
// function 



const container=document.querySelector('.numbersfield');


// container.addEventListener('click',(e)=>{
//     console.log(e.target.textContent);
// })

let inputValue="";

function calci(event){
    let inp=event.target.textContent;
    if(inp=='AC')
        {
        inputValue="";
        }
    else if(inp=='DEL'){
          inputValue=inputValue.slice(0,-1);
    }
    else if(inp=='='){
        if(inputValue.includes('+'))
            {
                let op=inputValue.split('+');
                let sum=0;
                for(let i=0;i<op.length;i++)
                {
                    sum+=Number(op[i]);
                }
                // let op1=op[0];
                // let op2=op[1];
                inputValue=sum;
            }
            else if(inputValue.includes('-'))
            {
                let op=inputValue.split('-');
                let op1=op[0];
                let op2=op[1];
                inputValue=Number(op1)-Number(op2);
            }
            else if(inputValue.includes('*'))
            {
                let op=inputValue.split('*');
                let op1=op[0];
                let op2=op[1];
                inputValue=Number(op1)*Number(op2);
                }
                else if(inputValue.includes('%'))
                {
                    let op=inputValue.split('%');
                    let op1=op[0];
                    let op2=op[1];
                    inputValue=Number(op1)%Number(op2);
                }
                else if(inputValue.includes('/'))
                {
                    let op=inputValue.split('/');
                    let op1=op[0];
                    let op2=op[1];
                    inputValue=Number(op1)/Number(op2);
                }
               
            }
            else{
                inputValue+=inp;
            }
    inputBox.value=inputValue;

}