function Task1(){
    let input1=document.createElement('input');
    let input2=document.createElement('input');
    let input3=document.createElement('input');

    input1.id='id1';
    input2.id='id2';
    input3.id='id3';

    let button1 =document.createElement('button');

    button1.style.width='100px';
    button1.style.height='20px';

    document.body.append(input1);
    document.body.append(input2);
    document.body.append(input3);
    document.body.append(button1);
    
    button1.onclick=Event_;
        
    
}
function Event_()
{
    let a= parseInt(document.getElementById('id1').value);
    let b= parseInt(document.getElementById('id2').value);
    let c= parseInt(document.getElementById('id3').value);
    let d=b*b-4*a*c;
    if(d<0){
        alert('нет корней');
    }
    else if(d==0)
    {
        alert(`уравнение имеет оди корень: ${-b/(2*a)}`);
    }
    else if(d>0)
    {
        alert(`x1: ${(-b-Math.sqrt(d))/(2*a)} x2:${(-b+Math.sqrt(d))/(2*a)}`);
    }
}