// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';

//function will find dashes and capetalize the character after it

function toArray(str){
    return str.split('');
}

function noDash(strArray){
    return arr = strArray.filter(char => char != "-");
}

testStr = "list-style-image";
;

function camelize(str){
    let strArray = str.split('');
    strArray.forEach((char,i,arr) =>  {
        if(char === "-")
        {
            arr[i] = ''
            if(arr[i+1])
            {
                arr[i+1] = arr[i+1].toUpperCase();
            }
          
        }
       
        
    });
    return strArray.join('');
}
console.log(testStr);
console.log(camelize(testStr));

