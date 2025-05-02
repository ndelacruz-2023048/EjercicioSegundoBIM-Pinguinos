export const generatePass = (req, res)=> {
    try {
        const {length, numbers = false, mayus = false, simbols = false} = req.body

        if(typeof length !== 'number'){
            return res.status(400).send(
                {
                    success: false,
                    message: 'Length cannot be number'
                }
            )
        } else if( typeof numbers !== 'boolean'){
            return res.status(400).send(
                {
                    success: false,
                    message: 'Numbers cannot be boolean'
                }
            )
        } else if( typeof mayus !== 'boolean'){
            return res.status(400).send(
                {
                    success: false,
                    message: 'Mayus cannot be boolean'
                }
            )
        } else if( typeof simbols !== 'boolean'){
            return res.status(400).send(
                {
                    success: false,
                    message: 'Simbols cannot be boolean'
                }
            )
        }

        if(!length || typeof length !== 'number' || length <=1) {
            return res.status(400).send(
                {
                    success: false,
                    message: 'Lengt cannot be negative number'
                }
            )
        } else if (!length || typeof length !== 'number' || length ===0) {
            return res.status(400).send(
                {
                    success: false,
                    message: 'Lengt cannot be number === 0'
                }
            )
        }

        let character = 'abcdefghijklmndopqrstuvwxyz'
        if(mayus) character += character.toUpperCase()
        if(numbers) character += '1234567890'
        if(simbols) character += '!@#$%^&*()_+?<>=-`~'

        if (typeof mayus !== 'boolean' || typeof numbers !== 'boolean' || typeof simbols !== 'boolean') {
            return res.status(400).send({
                success: false,
                message: 'mayus, numbers, and simbols must be boolean values'
            });
        }

        let passwordGen = ''
        for (let i = 0; i < length; i++) {
            const randomPass = Math.floor(Math.random() * character.length);
            passwordGen += character[randomPass]
        }

        const password = passwordGen
        console.log('password: ', password)
        return res.status(200).send(
            {
                success: true,
                message: 'Password: ',
                password
            }
        )
    } catch (e) {
        console.error('Error en: ', e);
        return res.status(500).send(
            {
                success: false,
                message: 'Error generate Password'
            }
        )
    }
}