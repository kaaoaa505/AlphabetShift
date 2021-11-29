function solve(s: string): string{
    let output: string = '';

    for(let i = 0; i < s.length; i++){
        if(s.charAt(i) == 'z'){
            output += 'a';
        }else{
            output += String.fromCharCode(s.charCodeAt(i) + 1);
        }
    }

    return output;
}
const s = 'crazy';

console.log(solve(s));