
import ASCIIColorLog from 'ascii-color-log';
const log = new ASCIIColorLog();
import negocio from "../../controller/negocio"
const { insertNegocio, getNegocioById, getNegocioAtentication } = negocio 


export default (app) => {

    app.route("/negocio")
    .get((req,res,next) => {



        log.info("acessou a rota de negocios")

        next()
        
    },getNegocioById)
    .post((req,res,next) => {



        log.info("vai inserir nova negócio!")

        next()
        
    },insertNegocio)
    
    app.route("/negocio/login")
    .put((req,res,next) => {



        log.info("Vai tentar autenticar o tipo de negocio")

        next()
        
    },getNegocioAtentication)






}