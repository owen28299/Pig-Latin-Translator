function translate(string){

  var vowels = ["a","e", "i", "o", 'u'];

  var arr = string.toLowerCase().split("");
  var piglatin;

  var first = [];
  var others = [];

  for (var i in arr){
    if(vowels.indexOf(arr[i]) !== -1){
      break;
    }
    first.push(arr[i]);
  }

  if(first.length !== 0){
    others = arr.slice(i,arr.length);

    first.push("ay");
    others.push("-");

    piglatin = others.concat(first).join("");

    return piglatin;
  }

  return  string.toLowerCase() + "ay";

}

function understand(string){
  var ay = string.indexOf("ay");
  var english;

  if (ay !== string.length - 2){
    return false;
  }

  var arr = string.toLowerCase().split("");
  arr.pop();
  arr.pop();

  if (string.indexOf("-") === -1){
    return arr.join("");
  }

  var first = [];
  var others = [];

  first = arr.slice(arr.indexOf("-") + 1, arr.length);
  others = arr.slice(0, arr.indexOf("-"));

  english = first.concat(others).join("");

  return english;

}

function PLT(string){
  var words = string.split(" ");
  var direction = "toPL";

  var countay = 0;

  for (var i in words){
    if (words[i].indexOf("ay") !== -1){
      countay += 1;
    }
  }

  if (countay === words.length){
    direction = "toEng";
  }

  switch(direction){
    case("toPL"):
      words = words.map(function(element){
        return translate(element);
      });
      break;
    case("toEng"):
      words = words.map(function(element){
        return understand(element);
      });
      break;
  }

  return words.join(" ");

}

var eng1 = "this is a nice and short english phrase";
console.log('eng1', eng1);

var pl1 = PLT(eng1);
console.log('pl1', pl1);

var backToEnglish = PLT(pl1);
console.log('backToEnglish', backToEnglish);