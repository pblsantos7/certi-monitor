import { createCertificate, getAllCertificates, getCertificateById, updateCertificate, deleteCertificado } from "../service/certificate.service.js";
import * as readline from "node:readline/promises"
import {stdin as input, stdout as output} from "node:process"

const rl = readline.createInterface(input, output)


async function menu(){
    console.log(`
        1 - Cadastrar certificado
        2 - Listar todos os certificados
        3 - Buscar certificado por ID
        4 - Alterar certificado
        5 - deletar certificado
        6 - Sair`)
    const optionStr = await rl.question("Qual operação você deseja fazer?: ")
    const option: number = Number(optionStr)

    do {
        switch(option){
            
        }
   
    } while(option != 6)
}

