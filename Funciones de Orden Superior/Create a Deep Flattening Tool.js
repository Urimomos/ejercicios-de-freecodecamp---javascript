function steamrollArray(arreglo){
     const stack = [...arreglo];
    const res = [];
    while (stack.length) {
      const next = stack.pop();
      if (Array.isArray(next)) {
       
        console.log(stack);
      } else {
        res.push(next);
      }
    }
    return res.reverse();
}




//console.log(steamrollArray([[["a"]], [["b"]]]));
//console.log(steamrollArray([1, [2], [3, [[4]]]]));
console.log(steamrollArray([1, [], [3, [[4]]]]));
//console.log(steamrollArray([1, {}, [3, [[4]]]]));
