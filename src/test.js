findnum=(arr, num)=>{
if(arr.includes(num,0)===true){
     console.log("yes")
}
else{console.log("no")}
} 
findnum([1,2,3,4,5], 3)

oddnumbers=(l,r)=>{
for(let i=l; i<=r; i++){
      if(i%2===1){
            console.log(i)
      }
}
}
oddnumbers(3,23)

findSum=(ar)=>{
let sum=ar.reduce((total, num)=>{

})
}
 solve=(a0, a1, a2, b0, b1, b2)=> {
      let suma=0
      let sumb=0
     if(a0<b0 ){
        sumb+=1 
     }
      else if(a0>b0){suma+=1};
      if(a1<b1){
          sumb+=1
          
      } else if(a1>b1){suma+=1};
      if(2<b2 ){
        sumb+=1 
     }
      else if(a2>b2){suma+=1}
     
     
  console.log (suma + ' ' + sumb);
  }

  solve(2,1,4,1,1,3)