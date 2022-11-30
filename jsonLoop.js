// For the given JSON iterate overall for loops (for, for in, for of, forEach)

 /*GIVEN JSON*/ 
 const  json = {
    jsonData: [ 
        {name: "Person 1"},
        {gender: "Male"},
        {age:25},
        {height: 175},
        {ethnicity: "Indian" }]
    };

// 1. For loop

for (var i = 0; i <json.jsonData.length; i++) {

    for (var key in json.jsonData[i]){
        var resultForLoop = (json.jsonData[i][key]);
        console.log(resultForLoop);
    }
}

// 2. For...in loop

for( var key in json.jsonData){
        
    console.log (json.jsonData[key]) ;
}

//3. For...of loop

for ( var i of json.jsonData) {
    for (var key in i){
        var resultForOfLoop = i[key];
        console.log (resultForOfLoop);
    }
}

//4. For...Each loop

json.jsonData.forEach(element => {
    for (var key in element){
   var resultForEachLoop= element[key];

   console.log(resultForEachLoop);
    }
});