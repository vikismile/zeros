module.exports = function getZerosCount(number) {
  let sum = 0
  let power, a, round
  for (let i=1;i<=10000;i++)
  {
      power=Math.pow(5,i);     
      if (number<=power){
        a=i
        break
      }   
  }
  for (let i=a;i>=1;i--)              
  {
    round=Math.floor(number/Math.pow(5,i))
      sum=sum+round          
  }
      return sum; 
}
