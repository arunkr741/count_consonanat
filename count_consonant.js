function runProgram(input){
   input=input.split(/[\r\n]+/)
   var n = Number(input[0])
   var z = 1
   var x = 2
   for(var i = 0;i<n;i++){
       var nm = input[z].split(" ").map(Number)
       z+=nm[0]+1
       var cnt = 0
       if(((nm[0]*2)-1)!=nm[0]){
           if((nm[0]==1) && (nm[1]==1)){
           cnt=1
           }
            else{
                cnt=-1
            }
       } else{
           var index = nm[1]-1
           for(var j=0;j<nm[0];j++){
               var arry = input[x+j].split(" ")
               if(index>0){
                   if(cont(arry[index])){
                       cnt++
                   }
                   index--;
               }
               else{
                   if(cont(arry[index])){
                       cnt++
                   }
                   index++
               }
           }
       }
       x+=nm[0]+1
       console.log(cnt)
    }



   }
   function cont(char){
       var vowel = ["a","e","i","o","u"]
       var constant = true
       vowel.forEach(function(el){
           if(el==char){
               constant=false
           }
       })
       return constant
   }
   
   process.stdin.resume();
   process.stdin.setEncoding("ascii");
   let read = "";
   process.stdin.on("data", function (input) {
       read += input;
   });
   process.stdin.on("end", function () {
       read = read.replace(/\n$/,"")
      runProgram(read);
   });
   
   process.on("SIGINT", function () {
       read = read.replace(/\n$/,"")
       runProgram(read);
       process.exit(0);
   });