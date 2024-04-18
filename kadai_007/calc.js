//0から20の乱数を生成
let num = Math.floor(Math.random() * 21);

//乱数に1を足してnum>=1になるようにする．
num = num + 1;

if(num % 3 == 0 && num % 5 == 0){
  console.log("3と5の倍数です");
}else if(num % 5 == 0){
  console.log("5の倍数です");
}else if(num % 3 == 0){
  console.log("3の倍数です");
}else{
  console.log(num);
}
