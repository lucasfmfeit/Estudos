const data = require("./data")



function getNome(data){
    const newData = []
    for (const times of data) {
        newData.push(times.nome)
    }
    return newData
}


function getTime(data, nome){
    for (let index = 0; index < data.length; index++) {
        const time = data[index];
        if (time.nome === nome) {
            return time
        }
        
    }
    return "Não existe"
}



const todosNomes1 = getNome(data)
const Time = getTime(data, "Corinthians")
console.log(Time.nome)
// for (const i of todosNomes1) {
//     console.log(`${i}, está na série B`)
// }

