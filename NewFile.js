// number 1
  for(let i = 1; i <= 100; i++){
    if(i % 2 === 0)
    console.log(i, 'EVEN')
  }


  // number 2
function between(a,b){
    for(let i = a; i <= b; i++){
      if(i % 2 === 0)
      console.log(i, 'EVEN');
      }
    }
    between(10,20)


    // number 3 answer is in the html which is A
   

// number 4
    function firstFunction(a,b){
        let sum = a+b;
        return sum;
    }
    console.log(firstFunction(6,36))


    // number 5
     function printSum(b,c){
       console.log(b+c);
     }
    printSum(10,5)


    // number 6
      let coursemate = ['Adedoyin','Adaobi','Tobi','Wale','Ojo','Henry','Adedoyin','Abby','Olayinka','Yusuf'];
      for(let b = 0; b < coursemate.length; b++ )
      console.log(coursemate[b]);


    // number 7
    // add at the end
     const number = [1,2,4];
      number.push(5, 6);
      console.log(number);


      // remove the last num
      const numbers =[1,2,3,8]
     console.log(numbers.pop());
     console.log(numbers)


     // to show the number that was deleted
     // remove at the beginning
     const element =[23.77,80,45];
    const end = element.shift()
     console.log(element)
     console.log(end)

                 
    //  add at the beginning
    let numeral = [[20,30,80],[10,50,55]]
     numeral.unshift(15);
    console.log(numeral)
