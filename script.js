function mostrarMensaje1(){
    let number1 = 'hola mundo me encuentro desarrollando';
    let number2 = 'con javascript';
    alert(number1);
    alert(number2);
    alert(`${number1}, ${number2}`);}
    
    function mostrarMensaje2(){
        
        let nota = prompt('Ingrese su primer nota');
        nota = parseInt(nota);
        let nota1 = prompt('Ingrese segunda nota');
        nota1 = parseInt(nota1);
        let nota2 = prompt('ingrese la tercera nota');
        nota2 = parseInt(nota2);
        let nota3 = prompt('Ingrese cuarto nota');
        nota3 = parseInt(nota3);
    
        alert('El prmedio es '+(nota+nota1+nota2+nota3)/4);
    
    }
    function mostrarMensaje3(){
        const base =prompt('Ingrese la base del rectangulo');
        const altura = prompt('Ingrese el altura del rectangulo');
        const area = base*altura;
        const perimetro = (2*base)+(2*altura);
         alert('la base de la altura es :'+base);
         alert('el perimetro del rectangulo es :'+ altura)
    }
    function  mostrarMensaje4(){
      let base = prompt('Ingresar la base del triangulo');
      base= Number(base);
      let altura = prompt('Ingrese la altura del triangulo');
      altura = Number(altura);
      let altura2 = prompt('Ingrese la altura 2 del trinagulo');
      altura2 = Number(altura2);
      let c = (base + altura+altura2)/2;
      let area = Math.sqrt(c * (c-base)*(c-altura)*(c-altura2));
      alert('la base del triangulo es :'+base);
      alert('la altura del triangulo es :'+altura);
      alert('el area del rectangulo es :'+area);
    }
    function mostrarMensaje5(){
      let pi = Math.PI;
      let radio = parseInt(prompt('Ingrese el area de un circulo'));
      let area = pi + Math.pow(radio,2);
      alert('El valor del area de la circunferencia es :'+ area.toFixed(2));
    
    }
    function mostrarMensaje6(){
        let hora = parseInt(prompt('ingrese el sueldo de una hora'));
        let dia =hora*8;
        let semanal;
        const sueldoSemanal = hora+dia;
        alert('el sueldo del dia es :'+sueldoSemanal+' soles diarios');
        alert('el sueldo semanal del hombre es :'+sueldoSemanal*7+' soles semanales');
    }
    function mostrarMensaje7(){
        let unaPulgada = 0.0254;
        let pulgadasMtrs = parseInt(prompt('Ingrese cuantos metros realizaados en pulgadas desea'))
        alert('Elegio '+pulgadasMtrs+' metros para las telas en pulgadas');
        pulgadasMtrs = unaPulgada;
        const tela  = pulgadasMtrs*unaPulgada+'m';
        alert('total de las telas en pulgadas elegido por metros seria :'+tela);
    }
    function mostrarMensaje8(){
        alert('no resuelto')
    
    
    }
    function mostrarMensaje9(){
         let edad;
         alert('se les intrevista alas personas(18 años en adelante trabajan)')
         edad = parseInt(prompt('ingrese su edad'));
         if(edad >= 18){
           alert('si trabaja')
         }
         else{
           alert('no trabaja')
         }
    }
    function mostrarMensaje10(){
        let edad;
        let cesarMayor =19;
        let juanMayor = 18;
        let luisMenor = 10;
         
         let edades = parseInt(prompt('ingresa la edad de mayor 18 años para saber la edad menor o menor para saber la edad'));
        
        if(edades>= 18 ){
            alert('juan'+juanMayor+' y cesar '+cesarMayor+' son mayores de edad');
        }else{
            alert('es menor es luis :'+luisMenor);
        }
    
    }
    function mostrarMensaje11(){
        const bono = parseInt(prompt('introduzca cuantos años  trabajado para recibir el bono correspondiente'));
        
        if(bono){
            if(bono == 1){
                alert('usted recibira 100$')
    
            }else if(bono == 2){
                alert('usted recibira $200')
    
            }else if(bono == 3){
                alert('usted recibira $300')

            }else if(bono == 4){
                alert('usted recibira $400')

            }else if(bono == 5){            
                alert('usted recibira $1000 por trabajar 5 años')
            }else if(bono >5){
                alert('usted recibira $1000 por trabajar mas de 5 años')
            }
            else {
            alert('usted no se encuentra en el bono')
        }
    }
}
    function mostrarMensaje12(){
        const salario=1500;
        const incremento =10;
        const anual = salario*12;
        alert(`El salario mensual :${salario}. el salario anual es : ${anual}`);
        const anual2 = anual+180;
        alert(`el salario anual ${anual2}, durante 6 años anuales`)
        
        const recibido = 'el incremento de 10% es: '+anual / incremento;
        alert(recibido)
        const total = 'El total recibido por 6 años es: '+(anual2*6);
        alert(total);    
    }
    function mostrarMensaje13(){
        let alumnos=parseInt(prompt('ingrese la nota del alumno de jaimito'+''));
        let alumno=parseInt(prompt('ingrese la nota del alumno de lucho'+''));
        
        let jaimito =alumnos;
        let lucho = alumno;
        if(alumnos){
            
            if(lucho <14){
                alert('lucho aprobado: '+alumnos)
            }else{
                alert(' lucho no aprobado: '+alumnos)
            }
        }if(alumno){
            if(alumno){
            
            if(jaimito <14){
                alert('jaimito aprobado: '+alumno)
            }else{
                alert('jaimito  no aprobado: '+alumno)
            }
            }
        }
    }         
    function mostrarMensaje14(){
        alert('no resuelto')

    }
    function mostrarMensaje15(){
        const votar = prompt('introduzca su edad para que puedas votar para las elecciones');
        parseInt(votar);
        if(votar >=18){
            alert('usted si puede votar en las elecciones');
        }
        else{
            alert('usted aun es menor de edad')
        }
    }
  