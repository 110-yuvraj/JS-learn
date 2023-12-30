const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros);  it will push the second array in first array
const newHeros  = marvel_heros.concat(dc_heros);  //to add the second array in end of first array
// console.log(newHeros)

const all_new_heros = [...marvel_heros, ...dc_heros]; //it will do the same work as concat but we can give multiple arrays here
// console.log(all_new_heros)

const another_array = [1,2,3,[4,5,6],7,[3,4,[8,9]]]

// const real_another_array = another_array.flat(Infinity)  //it will flatten the whole array 
const real_another_array = another_array.flat(1)  //it will flatten the array only upto given depth in above case upto 1 depth

// console.log(real_another_array);

// console.log(Array.isArray("Yuvraj"))
// console.log(Array.from("Yuvraj"))
const years = [11,12,13,14]
console.log(`the value of ${years["2"]} and ${years["02"]} `);


