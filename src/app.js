const connection = require("./db/connection");
const {addMusic, listMusic, updateMusic, deleteMusic} = require("./utils");

const command = process.argv[2]; 

const app = async () => {
    const newMusic = {
        band: process.argv[3],
        song: process.argv[4],
        genre: process.argv[5]
    };
    if (command === "add"){
    await connection(addMusic, newMusic);
    } else if (command === "list") {
        await connection(listMusic);
    }else if (command === "update") {
        const newMusic2 = {
            band: process.argv[3],
            newBand: process.argv[4]
        };
        await connection(updateMusic, newMusic2);
    }else if (command === "delete"){
        await connection(deleteMusic, process.argv[3])
    }else {
        console.log("invalid input")
        
    }
    
 }

app();