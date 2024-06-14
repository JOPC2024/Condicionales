function condiciones(numEjer)
{
//Deberas realizar los ejercicios anexados abajo:
    if(Number.isInteger(numEjer))
    {
    //1. Solicitar al usuario que responda a la pregunta (“¿Eres bellisimo/a?”), en caso de contestar sí, responder “Ciertamente”, en caso de contestar no, responder: “No te creo”.
        if(numEjer==1)
        {
            uno();
        }
    //2. Solicitar al usuario un número, y determinar si es divisible entre dos o no. Mostrando al usuario un mensaje de “x número es divisible entre 2” o “x núm no es divisible entre 2”.
        else if(numEjer==2)
        {
            dos();
        }
    //3. Crear un programa que determine si un número introducido en un Prompt es par o no, la respuesta será mostrada en un Alert.
        else if(numEjer==3)
        {
            tres();
        }
    //4. Solicitar al usuario un número de cliente. Si el número es el 1000, imprimir 'Ganaste un premio', en caso contrario mostrar el número y el mensaje “Lo sentimos, sigue participando”.
        else if(numEjer==4)
        {
           cuatro();
        }
    //5. Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es menor. No considerar el caso en que ambos números son iguales.
        else if(numEjer==5)
        {
            cinco();
        }
    //6. Solicitar al usuario que ingrese tres números y mostrar cuál de los tres es el número mayor. Considerar el caso en que 2 números sean iguales.
        else if(numEjer==6)
        {
            seis();
        }
    //7. Requerir al usuario que ingrese un día de la semana e imprimir un mensaje si es lunes, otro mensaje diferente si es viernes, otro mensaje diferente si es sábado o domingo. Si el día ingresado no es ninguno de esos, imprimir otro mensaje.
        else if(numEjer==7)
        {
            siete();
        }
    //8. Solicitar al usuario una calificación (entre 1 y 10). Luego se debe comprobar que el número efectivamente esté en ese rango, si no lo está imprima un mensaje de error. Si lo está, imprima “reprobado” si la calificación es inferior a 6, “regular” si está entre 6 y 8, “bien” si es 9, y por último, “excelente” si es 10.
        else if(numEjer==8)
        {
            ocho();
        }
    //9. Escribe un programa que responda a un usuario que quiere comprar un helado en una conocida marca de comida rápida cuánto le costará en función del topping que elija.
    //El helado sin topping cuesta 50 MXN.
    //El topping de oreo cuesta 10 MXN.
    //El topping de KitKat cuesta 15 MXN.
    //El topping de brownie cuesta 20 MXN.
    //En caso de no disponer del topping solicitado por el usuario, el programa le indicará “no tenemos este topping, lo sentimos.” y a continuación le informará el precio del helado sin ningún topping.
        else if(numEjer==9)
        {
            nueve();
        }
    //10. Un conocido portal de educación en tecnología está ofreciendo programas para aprender a desarrollar aplicaciones. Escribe un programa que le indique a la persona interesada cuánto deberá pagar mensualmente de acuerdo a la opción elegida.
    //El programa educativo contempla 3 diferentes niveles, cada uno con su costo mensual: Course: $4999 MXN
    //Carrera $3999 MXN
    //Master: $2999 MXN
    //Adicionalmente preguntar si cuenta con alguna beca y aplicar el descuento correspondiente al precio final.
    //Beca Facebook: 20% de descuento.
    //Beca Google: 15% de descuento.
    //Beca Jesua: 50% de descuento.
    //Finalmente, además del precio mensual con descuento, indicar al usuario cuánto gastaría en total por el curso elegido, tomando en cuenta las siguientes duraciones:
    //Course: 2 meses
    //Carrera 6 meses
    //Master: 12 meses
        else if(numEjer==10)
        {
            diez();
        }
    //11. Realizar un programa que ayude a calcular el total a pagar de acuerdo a la distancia recorrida por un vehículo con cargo extra por los litros consumidos, tomando en consideración lo siguiente:
    //Si el vehículo es “coche”, el precio kilometro ha de ser 0.20, si es “moto” ha de ser 0.10 y si es “autobús” 0.5.
    //Si los litros consumidos están entre 0 y 100 se ha de añadir 5 al costo total, si es mayor la cantidad de litros consumidos se ha de añadir 10 al total. Considere qué:
    //total a pagar = (precio kilometro x kms recorridos) + extra por litros consumidos.
        else if(numEjer==11)
        {
            once();
        }
    }
    else
    {
        alert('el ejercicio que escojiste no existe');
    }

    function uno()
    {
        let respuesta = prompt("¿Eres bellisimo/a?");
        if(respuesta.toLowerCase() == 'si' || respuesta.toLowerCase() == 'sí')
        {
            alert('Ciertamente');
        }
        else if(respuesta.toLowerCase() == 'no')
        {
            alert('No te creo');
        }
        else
        {
            alert('respuesta no valida, vuelva a intentar');
        }
    }
    
    function dos()
    {
        let numero = prompt('Favor de introducir un numero');
        numero = parseInt(numero);
        if(Number.isInteger(numero))
        {
            if(numero % 2 == 0)
            {
                alert(`${numero} es divisible entre 2`);
            }
            else
            {
                alert(`${numero} no es divisible entre 2`);
            }
        }
        else
        {
            alert('No introdujiste un numero, favor de volver  a intentarlo');
        }
    }
    
    function tres()
    {
        let numero = prompt('Favor de introducir un numero');
        numero = parseInt(numero);
        if(Number.isInteger(numero))
        {
            if(numero % 2 == 0)
            {
                alert(`${numero} es par`);
            }
            else
            {
                alert(`${numero} es impar`);
            }
        }
        else
        {
            alert('No introdujiste un numero, favor de volver  a intentarlo');
        }
    }
    
    function cuatro()
    {
        let numero = prompt('Introduce un numero cualquiera')
        numero = parseInt(numero);
        if(Number.isInteger(numero))
        {
            if(numero == 1000)
            {
                alert('Ganaste un premio');
            }
            else
            {
                alert('Lo sentimos, sigue participando');
            }
        }
        else
        {
            alert('No introdujiste un numero, favor de volver  a intentarlo');
        }
    }
    
    function cinco()
    {
        let n1 = prompt('Introduce un numero cualquiera');
        let n2 = prompt('Introduce un segundo numero'); 
        n1 = parseInt(n1);
        n2 = parseInt(n2);
        if(Number.isInteger(n1) && Number.isInteger(n2))
        {
            if(n1 > n2)
            {
                alert(`${n1} es mayor a ${n2}`);
            }
            else if(n1 < n2)
            {
                alert(`${n2} es mayor a ${n1}`);
            }
            else
            {
                alert('los 2 numeros introducidos son iguales');
            }
        }
        else
        {
            alert('No introdujiste un numero, favor de volver  a intentarlo');
        }
    }
    
    function seis()
    {
        let n1 = prompt('Introduce un numero cualquiera');
        let n2 = prompt('Introduce un segundo numero'); 
        let n3 = prompt('Introduce un tercer numero');
        n1 = parseInt(n1);
        n2 = parseInt(n2);
        n3 = parseInt(n3);
        if(Number.isInteger(n1) && Number.isInteger(n2) && Number.isInteger(n3))
        {
            if(n1 > n2 && n1 > n3)
            {
                alert(`${n1} es el numero mayor `);
            }
            else if(n2 > n1 && n2 > n3)
            {
                alert(`${n2} es el numero mayor`);
            }
            else if(n3 > n1 && n3 > n2)
            {
                alert(`${n3} es el numero mayor`);
            }
            if( n1 == n2)
            {
                alert(`${n1} son iguales ${n2}`);
            }
            else if(n1 == n3)
            {
                alert(`${n1} son iguales ${n3}`);
            }
            else if(n2 == n3)
            {
                alert(`${n2} son iguales ${n3}`);
            }
        }
        else
        {
            alert('No introdujiste un numero, favor de volver  a intentarlo');
        }
    }
    
    function siete()
    {
        let dia = prompt("Introduce un dia de la semana");
        dia = dia.toLowerCase();
        if(dia == 'lunes')
        {
            alert('escogiste el primer dia de la semana')
        }
        else if(dia == 'viernes')
        {
            alert('escogiste el quinto dia de la semana');
        }
        else if(dia == 'sabado' || dia == 'domingo')
        {
            alert('escogiste un dia del fin de semana');
        }
        else
        {
            alert('escogiste un dia de la semana diferente')
        }
    }
    
    function ocho()
    {
        let numero = prompt('Introduce un numero en el rango de 1 a 10');
        numero = parseInt(numero)
        if(Number.isInteger(numero))
        {
            if(numero >= 1 && numero <= 10)
            {
                if(numero < 6)
                {
                    alert('reprobado');
                }
                else if(numero >= 6 && numero <= 8)
                {
                    alert('regular');
                }
                else if(numero == 9)
                {
                    alert('bien');
                }
                else if (numero == 10)
                {
                    alert('excelente');
                }
            }
            else
            {
                alert('el numero que introdujo no esta en rango solicitado');
            }
        }
        else
        {
            alert('el dato que introdujo no es un numero, vuelva a intentarlo');
        }
    }
    
    function nueve()
    {
        let pedido = prompt('Bienvenido a McDonalds \n ¿Que tipo de topping desea para su helado? \n 1.- Oreo \n 2.- KitKat \n 3.- Brownie \n');
        let precio = 50
        if(pedido.toLowerCase() == 'oreo' || pedido.toLocaleLowerCase() == '1')
        {
            alert(`el costo de su helado con topping Oreo es de ${precio+10}`);
        }
        else if(pedido.toLowerCase() == 'kitkat' || pedido.toLocaleLowerCase() == '2')
        {
            alert(`el costo de su helado con topping KitKat es de ${precio+15}`);
        }
        else if(pedido.toLowerCase() == 'brownie' || pedido.toLocaleLowerCase() == '3')
        {
            alert(`el costo de su helado con topping Brownie es de ${precio+20}`);
        }
        else
        {
            alert(`no tenemos ese topping, lo sentimos. \n el costo de su helado es de ${precio}`);
        }  
    }
    
    function diez()
    {
        let curso = prompt("Bienvenido a DEVF \nA continuacion se le presentaran los diferentes planes que manejamos\n por favor escoja una de las siguientes opciones:\n1.- Course (Costo mensual $4999MXN)\n2.- Carrera (Costo mensual $3999MXN)\n3.- Master (Costo mensual $2999MXN) ");
        let beca = prompt('En el caso de contar un con una beca, favor de apoyarnos indicandonos cual de las siguientes opciones:\n1.- Facebook\n2.- Google\n3.- Jesua\n4.- No cuento con Beca');
        let precio = 0;
        let descuento = 0;
        curso = curso.toLocaleLowerCase();
        beca = beca.toLocaleLowerCase();
        if(beca == 'facebook' || beca == '1')
        {
            descuento = 0.2;
        }
        else if(beca == 'google' || beca == '2')
        {
            descuento = 0.15;
        }
        else if(beca == 'jesua' || beca == '3')
        {
            descento = 0.50;
        }
        if(curso == 'course' || curso == '1')
        {
            precio = 4999 - (4999 * descuento);
            alert('el costo del curso por mes es de: $'+precio+'MXN\ncon una duracion de 2 meses pagando un total de: $'+precio*2+'MXN');
        }
        else if(curso == 'carrera' || curso == '2')
        {
            precio = 3999 - (3999 * descuento);
            alert('el costo del curso por mes es de: $'+precio+'MXN\ncon una duracion de 6 meses pagando un total de: $'+precio*6+'MXN');
        }
        else if(curso == 'master' || curso == '3')
        {
            precio = 2999 - (2999 * descuento);
            alert('el costo del curso por mes es de: $'+precio+'MXN\ncon una duracion de 12 meses pagando un total de: $'+precio*12)+'MXN';
        }
    }
    
    function once()
    {
        let vehiculo  = prompt('Bienvenido al sistema de cotizacion de envios\npor favor seleccione de las opciones a continuacion la que desea:\n1.- coche\n2.- moto\n3.- autobus');
        let kms = prompt('a continuacion introduzca los kilometros a recorrer:');
        let total = 0;
        vehiculo = vehiculo.toLocaleLowerCase()
        kms = parseInt(kms);
        if(Number.isInteger(kms))
        {
            if(vehiculo == '1' || vehiculo == 'coche')
            {
                total = (0.2 * kms) + (kms/(1/0.2) > 100 ? 10 : 5);
            }
            else if(vehiculo == '2' || vehiculo == 'moto')
            {
                total = (0.1 * kms) + (kms/(1/0.1) > 100 ? 10 : 5);
            }
            else if(vehiculo == '3' || vehiculo == 'autobus')
            {
                total = (0.5 * kms) + (kms/(1/0.5) > 100 ? 10 : 5);
            }
            else
            {
                alert('el vehiculos que escogiste no es aceptado, vuelve a intentarlo');
            }
            alert('el total a pagar es de: $'+total+'MXN');
        }
        else
        {
            alert('los kilometros introducidos son incorrectos, vuelve a intentarlo');
        }

    }
}