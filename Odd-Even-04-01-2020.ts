class testing04{

OddEven(){

 var num = document.getElementById('num').value;

 if (num % 2 == 0){

  document.getElementById('result').innerHTML = num + '  Is Even Number';   

 }else

 {

  document.getElementById('result').innerHTML = num + '  Is Odd Number';

}

}

}

var testing = new testing04()


