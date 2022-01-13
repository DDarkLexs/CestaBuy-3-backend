import { encriptUTF8 } from "./encript"

export default {

    getNegocioCookieId(req){


    return /* 0// */ encriptUTF8(req.cookies.id_negocio)
    },

    getFuncionarioCookieId(req){


        return 0 //req.cookies.id_funcionario
    }






}