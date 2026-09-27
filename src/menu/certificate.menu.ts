import { createCertificate, getAllCertificates, getCertificateById, updateCertificate, deleteCertificado } from "../service/certificate.service.js";
import { validateName, validateIssuer, validateDataEmission, validateDateExpiration } from "../validators/certificate.validator.js";
import * as readline from "node:readline/promises"
import { stdin as input, stdout as output } from "node:process"

const rl = readline.createInterface(input, output)


async function menu() {
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
        switch (option) {
            case 1:
                try {

                    const name = await rl.question("Nome do certificado: ")
                    validateName(name)

                    const issuer = await rl.question("Emissor: ")
                    validateIssuer(issuer)

                    const dateEm = await rl.question("Data de emisão (aaaa-mm-dd): ")
                    const dateEmission = new Date(dateEm)
                    validateDataEmission(dateEmission)

                    const dateEx = await rl.question("Data de expiraçõ (aaaa-mm-dd): ")
                    const dateExpiration = new Date(dateEx)
                    validateDateExpiration(dateExpiration, dateEmission)

                    createCertificate(name, issuer, dateEmission, dateExpiration)
                    console.log("Certificado criado com sucesso")

                } catch (error) {
                    if (error instanceof Error) {
                        console.log(error.message)
                    }
                }
                break

            case 2:
                const certificates = getAllCertificates()
                certificates.forEach(certificate => {
                    console.log(`Nome: ${certificate.name}
                    Emissor: ${certificate.issuer}
                    Data de emissão: ${certificate.dateEmission.toLocaleDateString('pt-BR')}
                    Data de expiração: ${certificate.dateExpiration.toLocaleDateString('pt-BR')}
                    `)
                })
                break

        }
    } while (option != 6)
}

