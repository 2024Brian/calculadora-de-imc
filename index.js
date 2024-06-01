function calcularimc(){
    let peso1 = document.getElementById('peso1').value;
    let altura1 = document.getElementById('altura1').value;
    
    if(altura1 !== '' && altura1!== ''){
    altura1=altura1/100;
    let bmi=peso1/(altura1*altura1)
    let result = document.getElementById('result');
    result.textContent='Tu IMC es: ' + bmi.toFixed(2);

    if(bmi<18.5){
        result.textContent+='-bajo peso';
    }else if(bmi<25){
        result.textContent+='-normal';
    }else if(bmi<30){
        result,textContent+='-sobrepeso'
    }else{
        result.textContent+='-obesidad'
    }
    }
}