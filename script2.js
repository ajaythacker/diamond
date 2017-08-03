// Code goes here
console.log("---------------------------")
var alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var diamondAlphabet="F";
var diamondCharacters = alphabets.indexOf(diamondAlphabet);
//console.log(diamondCharacters); //5

var arr = alphabets.split('',diamondCharacters+1);
//console.log(arr);


var count = 0;
var i=1;
var midSpace=1;
 print(diamondCharacters,arr[0], 0)
 
while (count<diamondCharacters)
{
  
  print(diamondCharacters - i,arr[i], midSpace)
  i++;
  midSpace+=2;
  count++;
  
  if (i >= diamondCharacters){
    midSpace-=2;
    
  }
  
}


while(count > 1)
{
  midSpace-=2;
  //console.log('i',i)
  //console.log('position',position)
  print(diamondCharacters-(i-2),arr[i-2], midSpace)
  i--;
  count--;
}
print(diamondCharacters,arr[0], 0)
console.log("---------------------------")
//

function print(leadingSpace,characterToPrint,trailingSpace){
    console.log(' '.repeat(leadingSpace) + characterToPrint + ' '.repeat(trailingSpace) +  (characterToPrint != 'A' ? characterToPrint : ''));
  
}
