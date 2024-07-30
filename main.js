function Escola(nome, matricula, cargo) {
    this.nome = nome;
    this.matricula = matricula;
    this.cargo = cargo;
}

function Professor(nome, matricula, materia) {
    Escola.call(this, nome, matricula, "Professor");
    this.materia = materia;
    
}

function Aluno(nome, matricula, serie) {
    Escola.call (this, nome, matricula, "Aluno");
    this.serie = serie;
    
}

const pessoa1 = new Escola ("Rafael", 123456, "Diretor");
const pessoa2 = new Professor("Daniela", 654321, "Matemática");
const pessoa3 = new Aluno("João", 321456, "Primeiro ano");

console.log(pessoa1);
console.log(pessoa2);
console.log(pessoa3);



