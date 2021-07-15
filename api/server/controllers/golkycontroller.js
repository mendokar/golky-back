const msg = require("../utils/utils");
var result;

    async function getDataTest(req, res){
        result = new msg.Util()
        .setOrigen("general-golky-services")
        .build();
        const {text} = req.params;
        try {            
            result.success = true;
            result.message = "Ejecución Exitosa";
            result.response = {
                data: {text:text},
                description: "Recepcion de parametro y envio exitoso.",
            };
        return res.json(result);
        } catch (error) {
            result.success = false;
            result.message = "Error:" + error;
            return res.send(result);
        }
    }


module.exports = {
    getDataTest
};