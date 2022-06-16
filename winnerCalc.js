// Each team competes 3 times, and then the average of the 3 scores is calculated (so
//     one average score per team).
//     A team only wins if it has at least double the average score of the other team.
//     Otherwise, no team wins!

// Your tasks:
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
// to the console, together with the victory points, according to the rule above.
// Example: "Koalas win (30 vs. 13)"
// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and
// Data 2
// 5. Ignore draws this time
// Test data:
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27



const calcAverage=(scr1,scr2,scr3)=>{
    return (scr1+scr2+scr3)/3;
}

const checkWinner = (sc1,sc2,sc3,sc4,sc5,sc6)=>{
    const avgDolphins=calcAverage(sc1,sc2,sc3);
    const avgKoalas=calcAverage(sc4,sc5,sc6);

    let win=(avgDolphins>=avgKoalas*2)?`Dolphins Win with ${avgDolphins} vs ${avgKoalas}`:`Koalas Win with ${avgKoalas} vs ${avgDolphins}`; 

    return win;
}

console.log(checkWinner(44,23,71,65,54,49));
console.log(checkWinner(85,54,41,23,34,27));
