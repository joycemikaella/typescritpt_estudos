interface IContato {
    id: number
    nome: string
    fone: string
    email: string
}

var ct1: IContato

ct1 = { id: 1, nome: 'joyce', fone: '123', email: 'joyce@gmail.com' }

console.log(ct1.nome)
console.log(ct1.email)
console.log(ct1)

interface Ipessoa {
    id: number
    nome: string
}

interface IpessoaFisica {
    cpf: string
}

interface IpessoaJuridica {
    cnpj: string
}