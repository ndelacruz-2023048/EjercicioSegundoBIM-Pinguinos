
export const PasswordV = async(req, res) =>{
    const data = req.body
    try {
        const password = data.password
        const message = []
        if (password.length == 0) {
            message.push('La constraseña esta vacia')
            return res.send(message)
        }
        if (password.length < 8) {
            message.push('La constraseña es muy corta')
        }
        if (!/[A-Z]/.test(password)){
            message.push('Le falta mayuscula')
        }
        if(!/[a-z]/.test(password)){
            message.push('La contraseña carece de algun caracter en minuscula')
        }
        if(!/[0-9]/.test(password)){
            message.push('La contraseña carece de algun caracter numeral')
        }
        if(/[ ]/.test(password)){
            message.push('La contraseña no debe llevar espacios')
        }
        if(!/[°!"#$%&/()=?'=¿¡_,.:;{}[@*+´¨`^-]/.test(password)){
            message.push('La contraseña carece de algun caracter especial')
        }

        if(message.length === 0){
            message.push('La contraseña ha sido aprobada')
        }
        return res.send(message)
    } catch (error) {
        console.error(err)
        return res.status(500).send(
            {
                success: true,
                message: 'General error',
                err
            }
        )
    }
}
