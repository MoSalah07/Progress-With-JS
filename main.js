let numberOne = document.querySelector( '#number-1' ),
    numberTwo = document.querySelector( '#number-2' ),
    numberThree = document.querySelector( '#number-3' ),
    counter = 0,
    count = 0,
    count_3 = 0;

setInterval( _ => { 
    if(counter == 60) {
        clearInterval();
    } else {
        counter += 1;
        numberOne.textContent = `${ counter } %`;
    }
}, 30 );

setInterval( _ => { 
    if(count== 77) {
        clearInterval();
    } else {
        count += 1;
        numberThree.textContent = `${count} %`
    }
}, 30 );

setInterval( _ => { 
    if(count_3== 50) {
        clearInterval();
    } else {
        count_3 += 1;
        numberTwo.textContent = `${count_3} %`
    }
},30 );

