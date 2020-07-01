document.write("javaScript is a high level, interpreted, programming language used to make web pages more interactive.Have you ever thought that your website is missing something? Maybe it’s not engaging enough or it’s not as creative as you want it to be. JavaScript is that missing piece which can be used to enhance web pages, applications, etc to provide a more user-friendly experience.JavaScript is the language of the web, it is used to make the web look alive by adding motion to it. To be more precise, it’s a programming language that let’s you implement complex and beautiful things/design on web pages. When you notice a web page doing more than just sit there and gawk at you, you can bet that the web page is using JavaScript.");
var  a=10;
var b=20;
document.write("<br>");
document.write("<br>");
 var message="the value of a is :";

document.write(message);
document.write(a);
document.write("<br>");
document.write("The value of b is ");
document.write(b);
console.log(a);
console.log(b);
document.write("<br>");

document.write(" <h3>reading and printing arrays</h3><br>");




var array=[1,2,3,4,5];
document.write(array[3]);
console.log(array[3].toString());




document.write("<br>");
var  grades = [70,90, 85, 75, 80];
var total=0;
document.write("<br>");
for( var i=0;i<=grades[i];i++)
{
  total=total+grades[i];

} 

var a=total/5;
document.write("<br>");
document.write("total of marks is ");
document.write(total);
document.write("<br>"); 
document.write("the average of numbers are");
document.write(a);
console.log(total);
document.write("<br>"); 

function sum(arr)
{
    var s=0;

    for ( var i=0;i<=arr[i];i++)
    {
        s=s+arr[i];
    }
    document.write("total=" );


    document.write(s);
    document.write("<br>"); 
    document.write("average=" );
    
    document.write(s/5);
    document.write("<br>"); 
    document.write(" the result of searching is:"); 


}
sum([1,2,3,4,5]);

function search() {
    var str = "Is this all there is?";
    var word1 = /[h]/g; 
    var result = str.match(word1);
    document.write(result);

}
search(); 
document.write("<br>"); 
    document.write(" the rounding off 3.8    is:"); 

document.write(Math.round(3.8));
document.write("<br>"); 

document.write(" the power of 3 to 4     is:"); 

document.write(Math.pow(3, 4));
document.write("<br>"); 
document.write(" the absolute of -3 and 4     is:"); 
document.write(Math.abs(-3, 4));
document.write("<br>"); 
document.write(" the ceil of 4 and 4     is:"); 
document.write(Math.ceil(4,4));
document.write("<br>"); 
document.write(" the sin of 90 degree   is:"); 


document.write(Math.sin(90 * Math.PI / 180));
document.write("<br>"); 
document.write(" the squareroot of 64  is:"); 
document.write(Math.sqrt(64));


function validate()
{
    var num=document.forms.num.value;  
    
    if ( num=="" || isNaN(num)){  
        document.getElementById("numloc").innerHTML="Enter Numeric value only";  
        return false;  
      }else{  
        return true;  
        }  


    }
