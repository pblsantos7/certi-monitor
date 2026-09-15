export function validateName(name: string): void{
    if(name.trim().length === 0){
        throw new Error("Nome está vazio")
    }
}