import crypto from 'crypto'

const generateCode = () => {
    const mainString = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890"
    let shortCode = "";
    for (let i = 0; i < 6; i++) {
        shortCode += mainString.charAt(Math.floor(Math.random() * 62));
    }

    console.log(shortCode);
    
    // return shorCode
}

generateCode()


// export default generateCode