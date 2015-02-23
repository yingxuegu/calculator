/**
 * Created by guxueying on 15/02/15.
 */
function Btn(){
    this.name = "j";
    this.show = function(){
        window.alert("hhh");
    };
}

function c(){
    alert("function c");
    var a=document.getElementById("number").innerHTML;
    a= a.substring(0, a.length-1);
    document.getElementById("number").innerHTML = a;
}

function test(eventObj){
    if(eventObj.value == "AC"){
        document.getElementById("number").innerHTML='0';
    }
    else{
        if(document.getElementById("number").innerHTML == '0'){
            document.getElementById("number").innerHTML=eventObj.value;
        }
        else{
            var i = document.getElementById("number").innerHTML;
         document.getElementById("number").innerHTML=i+eventObj.value;
        }
    }

}


function result(){
    var v = document.getElementById("number").innerHTML;
    var ref = /[-+dm()]/;
    var res = /[0-9.]/;
    var f = v.split(ref);
    var s = v.split(res);
    var number=[];

    for(var i=0;i< f.length;i++){
        if(f[i]!=''){
            number[number.length]=f[i]
        }
    }

    var symbol =[];
    var stackn=[];
    var stacks=[];
    var n3;
    for(var i=0;i<v.length;i++)
    {
        if(v[i]=='+' || v[i]=='-'|| v[i]=='m' || v[i]=='d' || v[i]=='(' || v[i]==')' ){
        symbol[symbol.length] = v[i];
        }
    }
    alert("symbol: "+symbol);
    alert("number: "+number);
    stackn[0] = number[0];
    stackn[1] = number[1];
    stacks[0] = symbol[0];
    var i=0;
    var n=0;
    while(stacks.length!=0 )
    {
        var n1;
        var n2;
        var sym;
        alert("stack number: "+stackn);
        alert("stack symbol: "+stacks);
        i=i+1;
        n=n+1;
        alert("left = "+compareLeft(stacks[stacks.length-1]));
        alert("right= "+compareLeft(symbol[i]));
        if(typeof symbol[i] === 'undefined' || compareLeft(stacks[stacks.length-1])>= compareLeft(symbol[i])){
            alert("left calculating begins")
            n1=parseFloat(stackn.pop());
            alert("n1 "+n1);
            n2=parseFloat(stackn.pop());
            alert("n2 "+n2);

            sym =stacks.pop();
            alert("sym "+sym);
            n3=calculate(n1,n2,sym);
            alert("n3: "+n3);
            stackn.push(n3);
            alert(number);
            alert("n= "+n);
            if(typeof number[n+1] !== 'undefined'){
            stackn.push(number[n+1]);
            alert("add a number:"+ number[n+1]);
            }
            if(typeof symbol[i] !== 'undefined'){
            stacks.push(symbol[i]);
            alert("add another symbol "+symbol[i]);
            }
            alert("stacks length = "+stacks.length);
        }
        else if(symbol[i]=="("){
            i=1+i;
            n=1+n;
            alert("meet (");
            stacks.push(symbol[i]);
            alert("meet ( add symbol "+symbol[i]);
            stackn.push(number[n]);
            alert("meet ( add number "+number[n]);
            n=n-2;
            alert(n);

        }
        else if(symbol[i]==")"){
            alert("meet )");
            n1=parseFloat(stackn.pop());
            alert("n1 after ) : "+n1);
            n2=parseFloat(stackn.pop());
            alert("n2 after ) : "+n2);

            sym =stacks.pop();
            alert("sym after ): "+sym);
            n3=calculate(n1,n2,sym);
            alert("n3 after ): "+n3);
            stackn.push(n3);
        }
        else{
            alert("right is larger");
            stacks.push(symbol[i]);
            stackn.push(number[n+1]);

        }

        alert("loop number"+i);

    }
    document.getElementById("number").innerHTML = n3;
    }

function calculate(n1,n2,sym){
    switch(sym) {
        case "+":
            return n2+n1;
            break;
        case "-":
            return n2-n1;
            break;
        case "m":
            return n2*n1;
            break;
        case "d":
            return n2/n1;
            break;
    }

    //document.getElementById("number").innerHTML = parseFloat(f[0])+ parseFloat(f[1]);
}

function compareLeft(s){
    switch(s){
        case "+":
            return 1;
            break;
        case "-":
            return 1;
            break;
        case "m":
            return 2;
            break;
        case "d":
            return 2;
            break;
        case "(":
            return 3;
            break;
        case ")":
            return 4;
            break;
    }

}

