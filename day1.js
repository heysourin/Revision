function Restu(bill, tip){
(bill>50 && bill<300)?tip=(bill*15)/100:tip=(bill*20)/100;

const final=(`Bill: ${bill}
Tip:${tip}
Total:${bill+tip}`);

return final+"\n";
};


//Restu(45);

const customer1=Restu(45);
const customer2=Restu(275);
const customer3=Restu(350);

console.log(customer1);
console.log(customer2);
console.log(customer3);
