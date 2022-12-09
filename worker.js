function sum(){
    sum=0;
    console.log("web");
    for(let i=1;i<100000;i++){
        sum+=i;
    }
    postMessage(sum);
    console.log("sum = ",sum);
}