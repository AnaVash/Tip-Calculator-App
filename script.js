//Inputs

const billInput = document.querySelector(".bill-inp");
const optionalTipRate = document.querySelector(".custom-tip-input");
const peopleAmount = document.querySelector(".inp-people");
const errorMessage = document.querySelector(".error");
const activebtn = document.querySelector("btn:nth-child(3)");


//Outputs

const tip = document.querySelector(".tip-amount");
const amount = document.querySelector(".total-amount");

// Buttons
const tipRate = document.querySelectorAll(".btn");
const activeBtn = document.querySelector(".active");
const resetBtn = document.querySelector(".reset");


//EventListeners

billInput.addEventListener("input", BillValue);
optionalTipRate.addEventListener("input", CustimerTip);
peopleAmount.addEventListener("input", People);
tipRate.forEach((button) => {
    button.addEventListener("click", TipRate)
});
resetBtn.addEventListener("click", Reset);

//Values

let billValue;
let peopleValue;
let tipValue;


//functions

function BillValue(){
    billValue = parseFloat(billInput.value);

    CalculateTip();
}

function CustimerTip(){
    tipValue = parseFloat(optionalTipRate.value);

    tipRate.forEach((button)=>{
        button.classList.remove("active");
    })
   CalculateTip();
}

function People(){
    peopleValue = parseFloat(peopleAmount.value);
    console.log(peopleValue);

    if(peopleValue < 1){
        errorMessage.style.display = 'flex';
        peopleAmount.style.border = '2px solid red';
    
    }else{
        errorMessage.style.display = 'none';
        peopleAmount.style.border = 'none';
    }
    CalculateTip();
}

function TipRate(event){

    tipRate.forEach((el) => {
        el.classList.remove("active");
        if(event.target.innerHTML === el.innerHTML){
        el.classList.add("active");
        tipValue = parseFloat(event.target.innerHTML);

        optionalTipRate.value = optionalTipRate.innerHTML;
    }
})
    CalculateTip();
   
}

function CalculateTip(){
    if(peopleValue >=1){
   let totalTip = (billValue * (tipValue / 100)) / peopleValue;
   let totalAmount = (billValue / peopleValue) + totalTip;
   console.log(totalTip);
   console.log(totalAmount);

   tip.innerHTML = "$" + totalTip.toFixed(2);
   amount.innerHTML = "$" + totalAmount.toFixed(2);
    }
}

function Reset(){
    billInput.value = '0';
    peopleAmount.value = '0';
    optionalTipRate.value = "";
    tipRate.forEach(btn => {
        btn.classList.remove("active");
    })
    tip.innerHTML = `$${(0.0).toFixed(2)}`;
    amount.innerHTML = `$${(0.0).toFixed(2)}`;
    errorMessage.style.display = 'none';
    peopleAmount.style.border = 'none';

    billValue = null;
    peopleValue = null;
    tipValue = null;
}

