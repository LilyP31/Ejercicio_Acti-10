/*
Crear una clase Alumno con los atributos: código, nombre, nota1, nota2 y nota3; 
y las operaciones: promedio (), condicion () y obsequio (). 
Para calcular el promedio considere la siguiente fórmula:
PROM = nota1(15%) + nota2(20%) + nota3(25%) + nota4(40%)
Para la condición determine si es “Aprobado” o “Desaprobado”
(se aprueba con nota mínima 12).
Todo alumno que apruebe con nota mayor a 17 se le obsequiará una “Mochila”.
*/

const codigo = document.getElementById("Codigo")
const nombre = document.getElementById("Nombre")
const nota1 = document.getElementById("Nota1")
const nota2 = document.getElementById("Nota2")
const nota3 = document.getElementById("Nota3")
const nota4 = document.getElementById("Nota4")
const resultado = document.getElementById("resultado")

// Activando Button // 
const calcular = document.getElementById("calcular")
const limpiar = document.getElementById("Limpiar")

// Declaramos la clase alummno //
class Alumno {
    constructor(codigo, nombre, nota1, nota2, nota3, nota4){
        this.codigo = codigo;
        this.nombre = nombre;
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.nota3 = nota3;
        this.nota4 = nota4;
    }

    promedio(){ // Dentro de la clase ya no es necesario colocar function ya que la clase ya entiende que es una funcion//

        let promedio = 0;

        return promedio = (this.nota1 * 0.15) + (this.nota2 * 0.20) + (this.nota3 * 0.25) + (this.nota4 * 0.4);
        
    }

    condicion(){

        let condicion = "";

        if(this.promedio() >= 12){
            condicion = `Felicidades estas Aprobado :D`;
        } else{
            condicion = `Lo siento, No Aprobaste :C`;
        } return condicion;
    }

    obsequio(){

        let obsequio = "";

        if(this.promedio() > 17){
            obsequio = `Felicidades ¡Te ganaste una mochila!`;
        }else{
            obsequio = `No te llevas la mochila`;
        }return obsequio;
    }
}

calcular.onclick = function(){

    let nuevo = new Alumno();

    //Objeto (.atributo) = const del documente (valor del input)
    nuevo.codigo = codigo.value;
    nuevo.nombre = nombre.value;
    nuevo.nota1 = nota1.value;
    nuevo.nota2 = nota2.value;
    nuevo.nota3 = nota3.value;
    nuevo.nota4 = nota4.value;
    


    resultado.innerText = `${nuevo.nombre} Tu promedio de notas es ${nuevo.promedio()} y ${nuevo.condicion()} y ${nuevo.obsequio()}`
}

limpiar.onclick = function(){

    codigo.value = "";
    nombre.value = "";
    nota1.value = "";
    nota2.value = "";
    nota3.value = "";
    nota4.value = "";
    resultado.innerText ="";
}

