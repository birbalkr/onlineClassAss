import crypto from 'crypto'

const generateCode = () => {
    const mainString = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890"
    let shorCode = ""
    for (let i = 0; i < 6; i++) {
        shorCode += mainString.charAt(Math.floor(Math.round() * 62))
    }

    return shorCode
}


export default generateCode