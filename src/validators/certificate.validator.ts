export function validateName(name: string): void{
    if(name.trim().length === 0){
        throw new Error("Nome está vazio!")
    }
}

export function validateIssuer(issuer: string): void{
    if(issuer.trim().length === 0){
        throw new Error("Nome está vazio!")
    }
}

export function validateDataEmission(date: Date): void{
    if(isNaN(date.getTime())){
        throw new Error("Data inválida")
    }

    const dateCopy = new Date(date.getTime())
    dateCopy.setHours(0, 0, 0, 0)

    const today = new Date()
    today.setHours(0, 0, 0, 0)

    if(dateCopy> today){
        throw new Error("Data não pode ser maior do que a de hoje!")
    }
}

export function validateDateExpiration(dateExpiration: Date, dateEmission: Date): void{
    if(isNaN(dateExpiration.getTime())){
        throw new Error ("Data inválida")
    }

    const copyDateExpiration = new Date(dateExpiration.getTime())
    copyDateExpiration.setHours(0, 0, 0, 0)

    const copyDateEmission = new Date (dateEmission.getTime())
    copyDateEmission.setHours(0, 0, 0, 0)

    if(copyDateEmission >= copyDateExpiration){
        throw new Error("Data de expiração não pode ser igual ou menor que data de emissão! ")
    }

}