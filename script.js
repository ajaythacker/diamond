// Code goes here
console.log("---------------------------")
var alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var diamondAlphabet="F";
var position = alphabets.indexOf(diamondAlphabet);
console.log(position);
var arr = alphabets.split('',position+1);
console.log(arr);
console.log("---------------------------")

var count = 0;
var i=0;
var midSpace=0;
while (count<=position)
{
  
  print(position - i,arr[i], midSpace)
  i++;
  midSpace+=2;
  count++;
}

while(count > 1)
{
  midSpace-=2;
  //console.log('i',i)
  //console.log('position',position)
  print(position-(i-2),arr[i-2], midSpace)
  i--;
  count--;
}
//

function print(leadingSpace,characterToPrint,trailingSpace){
    console.log(' '.repeat(leadingSpace) + characterToPrint + ' '.repeat(trailingSpace) +  (characterToPrint != 'A' ? characterToPrint : ''));
  
}
