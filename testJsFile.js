
function task1(){
    let num1 = 10, num2 = 2,num3=5;
    let result = num1 + num2;
    alert(result);
}
function task6(){
    let str = "hellow, World!";
    alert(str);
}
function task7(){
    let str1 = "hellow,",str2="World!";
    alert(str1+str2);
}
function task8(){

    let name = "Ваня";
    alert("Привет"+name);
}
function task9(){
    let age = 15;
    alert(`Мне ${age}`);
}
function task14(){
    let seconds = 60,minut=60,hours=24;

    let secondsInHours=seconds*minut;
    let secondsInDay= seconds*minut*hours;
    let secondsInMouthn=seconds*minut*hours*30;

    alert(`В часе ${secondsInHours} секунд
            \nВ сутках ${secondsInDay} секунд
            \nВ месяце ${secondsInMouthn} секунд`);
}
function task15(){
    let time=new Date();
    alert(`${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`);
}
function task16(){
    let num=prompt("введите число:");
    let num2=Math.pow(parseInt(num),2);
    alert(num2);
}
