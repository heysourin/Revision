
// Type 1: without assigning inside a variable: Arrow function declaration
clacuAge =(birthYr)=>{
    return 2022-birthYr;
}

console.log(clacuAge(1998));


//Type2 : Assigning inside a variable: Arrow function expression
const calcAge=(birthYear)=>{
    return 2022-birthYear;
}

console.log(calcAge(1998));



// Type 3: the parameter is passed without brackets,
const calcAg1=birthYear1=>{
    return 2022-birthYear1;
}

console.log(calcAg1(1999));



// Type 4: parameter without parenthesis and function without return statement(as it is oneliner)
const calcAge2=birthYear2=> 2022-birthYear2;

console.log(calcAge2(2000));

