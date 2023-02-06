export function cleanContent(value:string):string {
    let result : string[] =[];
    let buffer : string[] =[];

    let line = value.split("\n");

    let enableClean = false;
    for(let i=0; i<line.length; i++){
        if(enableClean || line[i].trim()!=''){
            buffer.push(line[i]);
            enableClean = true;
        }
    }
    enableClean = false;
    for(let i=buffer.length-1; i>=0; i--){
        if(enableClean || buffer[i].trim()!=''){
            result.push(buffer[i]);
            enableClean = true;
        }
    }

    result.reverse();

    return result.join('\n');
}