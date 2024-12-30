///////////////////
const name=prompt("Enter Your name please : ");
function Gender_question(){

    let Gender=prompt("Enter your gender please");
    return Gender;
}
let Ge=Gender_question();
if (Ge!="male" && Ge!="female") {
    let i=0;
    while(i>-1){
        Ge=prompt("Your gender is invalid, please enter it again : ");
        if(Ge=="male" || Ge=="female")
            break;
        else{
            continue;
        }
    }
    
}
if(Ge=="male"){
    alert(`Hello Mr. ${ name}`);

}
else if(Ge=="female"){
    alert(`Hello Ms. ${ name}`);

}

let ord=prompt("Let Us know what is your order, Shawerma, zinger or burger");
alert(`We try our best to finish the ${ord} `);
console.log(`Hello ${name} Your ${ord} is ready`);
//////////////////Q1
for (let i = 0; i <6; i++) {
    alert(i);
    
}
/////////////////Q4
let x=prompt("Please enter a number in range 0 to 100");
if(parseInt(x)<0 || parseInt(x)>100){
alert("your number is out of range");
}
else{
    alert("Excelent, You choose a correct number");
}
// ///////////////Q5
let s=prompt("Please Enter a number that you want to know the sum of it :");
let sum=0;
for (let i =0 ; i <=s ; i++) {
    sum+=i;
    
}

alert(`Your sum is : ${sum}`);
//////////////////EX3
let answers=[name,Gender,ord];
for(let i =0;i<=2;i++){
    console.log(answers[i]);
}