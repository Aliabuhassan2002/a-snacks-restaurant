///////////////////
const name=prompt("Enter Your name please : ");
let Gender=prompt("Enter your gender please");
if (Gender!="male" && Gender!="female") {
    let i=0;
    while(i>-1){
        Gender=prompt("Your gender is invalid, please enter it again : ");
        if(Gender=="male" || Gender=="female")
            break;
        else{
            continue;
        }
    }
    
}
if(Gender=="male"){
    alert(`Hello Mr. ${ name}`);

}
else if(Gender=="female"){
    alert(`Hello Ms. ${ name}`);

}


let ord=prompt("Let Us know what is your order, Shawerma, zinger or burger");
alert(`We try our best to finish the ${ord} `);
console.log(`Hello ${name} Your ${ord} is ready`);
////////////////////////////////////////////////////////DOM EX4
let age=prompt("What is your age?!");
const em=document.getElementById("lst-id");
let d=document.createElement("div");
em.appendChild(d);
d.setAttribute("id","container");
let par=document.createElement('p');
let nm=document.createTextNode(name);
par.appendChild(nm);
d.appendChild(par);
let o=document.createElement("ol");
d.appendChild(o);
let l1=document.createElement("li");
let l2=document.createElement("li");
let l3=document.createElement("li");
let g=document.createTextNode(Gender);
l1.appendChild(g);
o.appendChild(l1);
let od=document.createTextNode(ord);
l2.appendChild(od);
o.appendChild(l2);
let ag=document.createTextNode(age);
l3.appendChild(ag);
o.appendChild(l3);

//////////////////Q1
// for (let i = 0; i <6; i++) {
//     alert(i);
    
// }
/////////////////Q4
// let x=prompt("Please enter a number in range 0 to 100");
// if(parseInt(x)<0 || parseInt(x)>100){
// alert("your number is out of range");
// }
// else{
//     alert("Excelent, You choose a correct number");
// }
// // ///////////////Q5
// let s=prompt("Please Enter a number that you want to know the sum of it :");
// let sum=0;
// for (let i =0 ; i <=s ; i++) {
//     sum+=i;
    
// }

// alert(`Your sum is : ${sum}`);