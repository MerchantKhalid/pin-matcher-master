document.getElementById('generate-pin').addEventListener('click', function () {
    const randomNumber = Math.floor(Math.random() * 10000);
    const randomNumberStr = randomNumber + '';
    if (randomNumberStr.length == 4) {
        document.getElementById('store-pin').value = randomNumber; 
    }
    
})

document.getElementById('key-all').addEventListener('click', function (e) {
    const number = e.target.innerText;
    const calcInput = document.getElementById('calc');
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }
    } else {
        const previousNumber = calcInput.value;
        const currentNumber = number;
        calcInput.value = previousNumber + currentNumber;
        
    }
    
})

    const failMssg = document.getElementById('fail'); 
    const success = document.getElementById('success');

document.getElementById('submit-match').addEventListener('click', function () {
    
     if ((document.getElementById('store-pin').value) == (document.getElementById('calc').value)) {
         success.style.display = 'block';
         failMssg.style.display = 'none';
    }
     else {
        success.style.display = 'none';
        failMssg.style.display = 'block';
    }
       
})