export function validateName(name: string): void{
    if(name.trim().length === 0){
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
        throw new Error("Data não pode ser maior do que hoje!")
    }
}