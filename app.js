document.addEventListener("keypress", function(event) {
    console.log(event.keyCode);
    var x = event.which||event.keyCode;

    // Numbers
    if (x==48){
        document.calc.txt.value +='0';
    }
    else if (x==49){
        document.calc.txt.value +='1';
    }
    else if (x==50){
        document.calc.txt.value +='2';
    }
    else if (x==51){
        document.calc.txt.value +='3';
    }
    else if (x==52){
        document.calc.txt.value +='4';
    }
    else if (x==53){
        document.calc.txt.value +='5';
    }
    else if (x==54){
        document.calc.txt.value +='6';
    }
    else if (x==55){
        document.calc.txt.value +='7';
    }
    else if (x==56){
        document.calc.txt.value +='8';
    }
    else if (x==57){
        document.calc.txt.value +='9';
    }

    // Operators
    else if (x==42){
        document.calc.txt.value +='*';
    }
    else if (x==43){
        document.calc.txt.value +='+';
    }
    else if (x==45){
        document.calc.txt.value +='-';
    }
    else if (x==46){
        document.calc.txt.value +='.';
    }
    else if (x==47){
        document.calc.txt.value +='/';
    }
    else if (x==37){
        document.calc.txt.value +='%';
    }
    else if (x==13){
        document.calc.txt.value = eval(calc.txt.value);
    }
    else if (x==32){
        document.calc.txt.value ='';
    }

});