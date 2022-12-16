var a,b,c;
a=prompt("enter the value")
b=prompt("enter the number")
document.write("A=" +a) 
document.write("b= "+b+"<br>")

function swap(a,b){
    c=a;
    a=b;
    b=c;
    document.write("A=" +a) 
    document.write("b= "+b) 
}
swap(a,b)