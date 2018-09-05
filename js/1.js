var Գաղտնաբառ=["123456!","88","56465","0548"];
var Պատասխան=["chka nkar aper jan","hivand es du ara martavari asinq","rad eli ara ","nkar es uzum mti google"];
function f1(){
    var out,x,n;
    out = document.getElementById("out");
    x=document.getElementById("Գաղտնաբառ").value;
    n="Պատ...:";
    if(x==Գաղտնաբառ[0]){
        document.getElementById("out").innerHTML = "";
        out.innerHTML=n+ " " +Պատասխան[0];
    }
    else if(x==Գաղտնաբառ[1]){
        document.getElementById("out").innerHTML = "";
        out.innerHTML+=n+ " " +Պատասխան[1];
    }
    else if(x==Գաղտնաբառ[2]){
        document.getElementById("out").innerHTML ="";
        out.innerHTML=n+ " " +Պատասխան[2];
    }
    else if(x==Գաղտնաբառ[3]){
        document.getElementById("out").innerHTML = "";
        out.innerHTML=n+ " " +Պատասխան[3];
    }
    else{
        document.getElementById("out").innerHTML ="";
       out.innerHTML= "We don't have information!";
    }
}
