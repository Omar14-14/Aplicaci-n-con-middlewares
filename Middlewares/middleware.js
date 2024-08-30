const fechita = (req, res, next) => {
    console.log("kjhkjkj");
    const fecha = new Date().toLocaleString(); 
    console.log(`Fecha y hora: ${fecha}`); 
    next(); 
};

const saludo = (req, res, next) => {
    console.log("Hola, como estas?"); 
    next(); 
};

module.exports = {
    fechita,
    saludo
};
