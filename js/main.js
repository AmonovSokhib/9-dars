

var elForm = document.querySelector(".js-form");
var elInput = document.querySelector(".js-input");
var elResult = document.querySelector(".js-result");
var elResult1 = document.querySelector(".js-result1");
var elResult2 = document.querySelector(".js-result2");
var elResult3 = document.querySelector(".js-result3");
var elResult4 = document.querySelector(".js-result4");
        var v1 = 3.6;
        var v2 = 20.1;
        var v3 = 70;
        var v4 = 800;
    function piyoda(s){
        return s / v1;
    }
    function velosiped(s){
        return s / v2;
    }
    function mashina(s){
        return s / v3;
    }
    function samalyot(s){
        return s / v4;
    }

    elForm.addEventListener("submit", function(evt){
        evt.preventDefault();
        var s = Number(elInput.value); 
        if(s <= 0 || isNaN(s) ){
            elResult.textContent = "Iltimos faqat 0 dan katta son kiriting";
            elResult.style.color ="red"
            jsinput.classList.remove("is-valid")
            jsinput.classList.add("is-invalid")
        }
        else{
            jsinput.classList.remove("is-invalid")
            jsinput.classList.add("is-valid")
        };
        elResult1.textContent = `${piyoda(s).toFixed(0)} soat`;
        elResult2.textContent = `${velosiped(s).toFixed(0)} soat`;
        elResult3.textContent = `${mashina(s).toFixed(0)} soat`;
        elResult4.textContent = `${samalyot(s).toFixed(0)} soat`;
    } )



