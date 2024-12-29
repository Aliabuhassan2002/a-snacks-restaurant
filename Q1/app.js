 
 /////////////////EX1
 const name=prompt("Enter Your name please : ");
let Gender=prompt("Enter your gender please");
if (Gender!="male" && Gender!="female") {
    alert(`Hello ${ name}`);    

}
else{
    if(Gender=="male"){
        alert(`Hello Mr. ${ name}`);

    }
    else if(Gender=="female"){
        alert(`Hello Ms. ${ name}`);

    }
}
let ord=prompt("Let Us know what is your order, Shawerma, zinger or burger");
alert(`We try our best to finish the ${ord} `);
console.log(`Hello ${name} Your ${ord} is ready`);
///////////////////////////Q2
let x=4;
switch (x) {
    case 1:
        console.log("ONE");
        break;
    case 2:
        console.log("TWO");
        break;
    case 3:
        console.log("THREE");
        break
    case 4:
        console.log("FOUR");
        break;
    case 5:
        console.log("FIVE");
        break;
    case 6:
        console.log("SIX");
        break;
    case 7:
        console.log("SEVEN");
        break;
    case 8:
        console.log("EIGHT");
    case 9:
        console.log("NINE");
        break;

    default:
        console.log("PLEASE TRY AGAIN");
        break;
}