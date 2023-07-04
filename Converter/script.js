

let btn = document.getElementById('btn');

function change()
{
    let degree = parseFloat(document.form.degree.value);
let type = document.form.type.value;

let result = document.getElementById('result');
 

         let temp;

         if(type=='f')
         {
            temp = (degree-32)*5/9;
         }
         else{
            temp = (degree*9/5)+32;
         }
         


result.innerHTML=temp;
}