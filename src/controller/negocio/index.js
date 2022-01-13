import { negocio } from "../../model"
import ASCIIColorLog from 'ascii-color-log';
const log = new ASCIIColorLog();
import { encriptUTF8,encriptBase64 } from "../../apps/encript"
import cookie from "../../apps/cookie"

export default  {
    async getNegocioAtentication(req,res,next){

        try {
            
        const item = (await negocio.select("*")
        .where("nome","=",req.query.nome)
        .andWhere("senha","=", encriptBase64(req.query.senha)))[0]
            

        if(item == undefined){
        
            throw "invalid info" 
       
        }else{


            console.log(item)
    
            res.cookie("id_negocio", encriptBase64((item.id_negocio).toString()))
            .json(item)
            
        }
            
        
    } catch (error) {
        
        log.error(error)
        res.sendStatus(500)
        

    }
    },
    
    async getNegocioById(req,res,next){

        const item = await negocio.select("*")
        .where("id_negocio","=",cookie.getNegocioCookieId(req))
 
      /*   item.map((v,i,arr) => {


            item[i].senha = encriptUTF8(item[i].senha)

        }) */

        console.table(item)
        res.json(item)
    },  

    async insertNegocio(req,res,next){

        try {
            
           const sort = Math.floor(Math.random() * (99999999999 - 1 + 1)) + 1

            const item = req.query
            item.id_negocio = sort
            item.senha = encriptBase64(item.senha)
            item.criado = new Date().toISOString()
            


            console.table(item)
           
           
            const data = (await negocio.insert(item))

            res.json(data) 
            
        } catch (error) {

            res.sendStatus(500)

            log.error(error)
        }
            
            
    },



} 