let minNum=1;
let maxNum=100;
let value = Math.floor(Math.random()*((maxNum-minNum+1)+minNum));

let attempts=0;
let Guess;
let running= true;

while(running){
    Guess=  window.prompt(`Guess the number between ${minNum} and ${maxNum}`)
    Guess = Number(Guess) ;// as guess will be a string
    console.log(Guess)

    if(isNaN(Guess)){
        window.alert("Please enter a valid Number ❌")
    }
    else if(Guess<minNum || Guess>maxNum){
        window.alert("Please enter number within given range")
    }
    else{
        attempts++
        if(Guess<value){
            window.alert("Number is too low ! Try Again")
        }
        else if(Guess>value){
            window.alert("Number is too high ! Try Again")
        }
        else{
            window.alert(`Correct ✅ The number is ${value}. You took ${attempts} attempts`)
            running=false;
        }
    }

}



