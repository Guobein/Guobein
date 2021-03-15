var data = {
    age: 18,
    name: "liuruchao",
    education: ["小学", "初中", "高中", "大学", undefined, null],
    likesFood: new Set(["fish", "banana"]),
    friends: [
          { name: "summer",  sex: "woman"},
          { name: "daWen",   sex: "woman"},
          { name: "yang",    sex: "man" }  ], 
    work: { 
            time: "2019", 
            project: { name: "test",obtain: ["css", "html", "js"]} 
          }, 
    play: function() {    console.log("玩滑板");  }
}
var deepCopy = function( extendObj ){
    var str, newObj = extendObj.constructor === Array ? [] : {};
    if(typeof extendObj !== 'object'){
        return;
    } else if(window.JSON){
        str = JSON.stringify(extendObj);
        newObj = JSON.parse(str);
    } else {
        for(var key in extendObj){
          if (!extendObj.hasOwnProperty(key)) return;
            newObj[key] = typeof extendObj[key] === 'object' ?
                    cloneObj(extendObj[key]) : extendObj[key];
        }
    }
    return newObj;
};
let obj = deepCopy(data)
console.log(obj)