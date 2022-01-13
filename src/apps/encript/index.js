import buffer from 'buffer'
const { from } = buffer.Buffer


export function encriptBase64(text){
    
    
    
    const base64 = from(text,"utf8").toString("base64")

    return base64
} 


export function encriptUTF8(text){
    
    
    
    const utf8 = from(text,"base64").toString("utf8")

    return utf8
} 