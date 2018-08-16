var a = [1,2,3,4,5];

var A = a.forEach(function(element) {
let ten = 10;
console.log(element);   
return {
    hi: ten * element
    }

});

1
2
3
4
5

> A
< undefined
always undefined because of forEach method provided function once for each array element thats it.

for example 

var aa = a.forEach(function(element) {
    let five = 5;
    var p = five + element;
    console.log(p);
});

6
7
8
9
10


but what about .map 

var aa = a.map(function(element) {
    console.log(element);
    return {
        hi: 10 * element
      }
});

< 1
< 2
< 3
< 4
< 5

> aa
< 0: {hi: 10}
< 1: {hi: 20}
< 2: {hi: 30}
< 3: {hi: 40}
< 4: {hi: 50}

var aa = a.map(function(element) {
    let five = 5;
    var add = five + element;
    return{
        hi:add }
    }
} );

if you forgort type 'return' it , it will always undefined because its not make any new array at all 

0:undefined
1:undefined
2:undefined
3:undefined
4:undefined

so the map object holds key pairs creates a new array with the result 

0:{hi: 6}
1:{hi: 7}
2:{hi: 8}
3:{hi: 9}
4:{hi: 10}

