/*
Create a human readable time format using the Date time object
YYYY-MM-DD HH:mm
DD-MM-YYYY HH:mm
DD/MM/YYYY HH:mm
*/
const now = new Date();
const year = now.getFullYear();   
const month = now.getMonth() + 1;
const date = now.getDate();      
const hours = now.getHours();    
const minutes = now.getMinutes();

console.log(`${year}-${month}-${date} ${hours}:${minutes}`);  
console.log(`${date}-${month}-${year} ${hours}:${minutes}`);  
console.log(`${date}/${month}/${year} ${hours}:${minutes}`);  
