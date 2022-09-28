function myfunction(){
let a = parseInt(document.getElementById("result").value)
let sum=0;

for (let i = 1; i < a; i++) {
  if(i%2===0) {
  sum= sum +i;}
}


document.getElementById("class1").innerHTML = sum;

}