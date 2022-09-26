function cap_let (str)
{
    let nstr = "";
    int size = str.length;
    
    for (let i = 0; i < size; i++)
    {
        if (str[i] > 'Z')
        {
            nstr += (String.fromCharCode (str.charCodeAt (i) - 32));
        }
        else
        {
            nstr += str[i];
        }
        
    }
    return nstr;
}

function caesar_cipher (str)
{
    const alpsize = 26;
    let shift_count = 3;
    let size = str.length;
    let nstr = "";
    
    for (let i = 0; i < size; i++)
    {
        if (str[i] === ' ') { continue; }
        if ((String.fromCharCode (str.charCodeAt (i) - shift_count)) < 'A') 
        {
            nstr += (String.fromCharCode (str.charCodeAt (i) + alpsize - shift_count));
        }
        else
        {
            nstr += (String.fromCharCode (str.charCodeAt (i) - shift_count));
        }
    }
    return nstr;
    
}

// MAIN

let str = "Caesar cipher";
let nstr = cap_let (str);
console.log (caesar_cipher (nstr));


