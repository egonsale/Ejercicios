/*Modo estricto nos prohibe hacer ciertas cosas,
nos hara ver los errores si es que las hay */

'use strict';

/*verificar palabras reservadas */

// let hasDriversLicense=false;
// const passTest=True;

// if(passTest) hasDriversLicense=true;
// if(hasDriversLicense) console.log('Tengo un carro');

// function logger(){
//     console.log('Mi nombre es Erika');
// }
// //llamar o invocar a la funcion-ejecutar
// logger();
// logger();
// logger();

/**PRIMERA PRACTICA */

// function frutaPro(manzana,naranja){
//     console.log(manzana,naranja);
//     const jugo='Un Jugo con '+manzana+' manzanas y '+ naranja +' de naranja';
//     return jugo;
// }

// const jugoFruta=frutaPro(5,0);
// console.log(jugoFruta);

// const jugoNaranja=frutaPro(2,4);
// console.log(jugoNaranja);

/**SEGUNDA PRACTICA */

// function anoNAcimiento1(fechaNac){
//     const anno=2037-fechaNac;
//     return anno;
// }

// const anno1=anoNAcimiento1(1991);
// console.log(anno1);

// /**mismo resultado, pero diferente */

// const anoNAcimiento2=function (fechaNac){
//     return 2037-fechaNac;
// }

// const anno2=anoNAcimiento2(1991);
// console.log(anoNAcimiento1-anoNAcimiento2);

/**SEGUNDA PRACTICA : FUNCION FLECHAS-ARROW*/

// const calcAnno3=fechaNac=>2037-fechaNac;
// const anno3=calcAnno3(1991);
// console.log(anno3);

// const anoJubilacion=(fechaNac, nombre)=>{
//     const anno=2037-fechaNac;
//     const jubilacion=65-anno;
//     // return jubilacion;
//     return nombre + ' se jubila en '+ jubilacion+' años';
// }

// console.log(anoJubilacion(1991, 'Erika'));
// console.log(anoJubilacion(1980, 'Yanil'));

/**TERCERA PRACTICA : FUNCION QUE LLAMA OTRA FUNCION*/
// const cortarFruta = function (fruta){
//     return fruta*4;
// };

// function cortarFruta (fruta){
//     return fruta*3;
// }

// function frutaPro(manzana,naranja){
//     const corteManzana=cortarFruta(manzana);
//     const cortesNaranja=cortarFruta(naranja);

//     const jugo='Un Jugo con '+corteManzana+' trozos de manzanas y '+ cortesNaranja +' trozos de naranja';
//     return jugo;
// }

// console.log(frutaPro(2,3));

/**QUINTA PRACTICA : */

// const calcularEdad=function(fechaNac){
//     return 2037-fechaNac;
// }
//  const anoJubilacion=function(fechaNac, nombre){
//     const anno=2037-fechaNac;
//     const jubilacion=65-anno;
//      // return jubilacion;
//     if(jubilacion>0){
//         console.log(nombre + ' se jubila en '+ jubilacion+' años');
//         return jubilacion;
        
//     } else{
//         console.log(nombre + ' ya se jubilo ');
//         return -1;
        
//     }


    
//     }

//     console.log(anoJubilacion(1991,'Ana'));
//     console.log(anoJubilacion(1970,'Anamaria'));

/**DESAFIO 1: */
// const calcProm=(a,b,c)=>(a+b+c)/3;
// console.log(calcProm(3,4,5));

// let puntosDel=calcProm(44,23,71);
// let puntosKoa=calcProm(65,54,49);

// console.log(puntosDel,puntosKoa);


// const verificarGan=function(promDel,promKoa){
//     if(promDel>=2*promKoa){
//         console.log('Los Delfines ganaron con un '+promDel+' vs '+promKoa);
//     } else if(promKoa>=2*promDel){
//         console.log('Los Koalas ganaron con un '+promKoa+' vs '+promDel);
//     } else{
//         console.log('Ninguno gano');
//     }
// }
// verificarGan(puntosDel,puntosKoa);
// verificarGan(576,111);

// /**DESAFIO 2: */

//  puntosDel=calcProm(85,54,41);
//  puntosKoa=calcProm(23,34,27);
//  console.log(puntosDel,puntosKoa);
//  verificarGan(puntosDel,puntosKoa);

// /**---------------------- */
//  /**TEMA SIGUIENTE:ARRAY */
//  /**---------------------- */

//  const amigo1='Miguel';
//  const amigo2='Yanil';
//  const amigo3='Clinton';

//  const amigos=['Miguel','Yanil','Clinton'];
//  console.log(amigos);

//  const edades= new Array(1991,1984,2008,2020);

//  console.log(amigos[0]);
//  console.log(amigos[2]);

//  console.log(amigos.length);
//  console.log(amigos[amigos.length-1]);

//  amigos[2]='Ana';
//  console.log(amigos);

// //  amigos=['Hazel','Rosa'];
// const nombre='Jonas';
// const jonas=[nombre,'Manuel',2037-1991,'profesor',amigos];
// console.log(jonas);


// /**EJERCICIO2 */

// const calcularEdad=function (fechaNac){
//     return 2037-fechaNac;
// }

// const annos = [1990, 1967, 2002, 2010, 2018];

// const anno1=calcularEdad(annos[0]);
// const anno2=calcularEdad(annos[1]);
// const anno3=calcularEdad(annos[annos.length-1]);

// console.log(anno1,anno2,anno3);

// const ages=[calcularEdad(annos[0]),calcularEdad(annos[1]),calcularEdad(annos[annos.length-1])];
// console.log(ages);

/**ARRAYS 2 
 * --------------------------------------------------
*/
// const amigos=['Miguel','Yanil','Clinton'];

// //AGREGAMOS ELEMENTOS
// const nuevaLog=amigos.push('Manuel');
// console.log(amigos);
// console.log(nuevaLog);


// amigos.unshift('Manuel');
// console.log(amigos);


// //ELIMINAMOS ELEMENTOS

// amigos.pop();
// const popped=amigos.pop();
// console.log(popped);
// console.log(amigos);

// amigos.shift(); //primero
// console.log(amigos);

// console.log(amigos.indexOf('Yanil'));
// console.log(amigos.indexOf('Bob'));

// amigos.push(23);
// console.log(amigos.includes('Yanil'));
// console.log(amigos.includes('Bob'));
// console.log(amigos.includes(23));

// if (amigos.includes('Yanil')){
//     console.log('Tú tienes un amigo llamado Yanil');
// }

//CHALLENCE-MATRICES*------------------------------------------
//----------------------------------------------------

// const calcTip=function(cuenta){
//     return cuenta>=50 && cuenta<=300 ? cuenta*0.15 : cuenta*0.2;
// }
// // const calcTip = cuenta=>cuenta >= 50 && <=300 ? cuenta*0.15 : cuenta*0.2;

// const cuentas=[125,555,44];

// const tips=[calcTip(cuentas[0]),calcTip(cuentas[1]),calcTip(cuentas[2])];
// // const total=cuentas*tips;
// const total=[cuentas[0]+tips[0],cuentas[1]+tips[1],cuentas[2]+tips[2]]

// console.log(cuentas,tips,total);


//INTRODUCCION A OBJETOS:ARRAY*------------------------------------------
//----------------------------------------------------

// const jonasArray=[
//     'Jonas',
//     'Ramos',
//     2037-1991,
//     'profesor',
//     ['Maria','Rosa','Sara']
// ];

// const jonas={
//     firstName:'Jonas',
//     lastName:'Ramos',
//     edad:2037-1991,
//     trabajo: 'profesor',
//     amigos:['Maria','Rosa','Sara']
// };

// console.log(jonas);

// console.log(jonas.lastName);
// // console.log(jonas.['apellido']); NO FUNCIONA
// const nameKey='Name';
// console.log(jonas['first'+nameKey]);
// console.log(jonas['last'+nameKey]);

// const interesIn = prompt('Que sabes sobre Jonas? Elige nombre, apellido, edad, trabajo y amigos');
// console.log(jonas[interesIn]);

// if(jonas[interesIn]){
//     console.log(jonas[interesIn]);
// } else{
//     console.log('Respuesta incorrecta! Elige nombre, apellido, edad, trabajo y amigos');
// }

// jonas.location= 'Portugal';
// jonas['twitter']='@jonastw';
// console.log(jonas);


/**CHALLENCE3
 * -----------------------------------------------------------------
 * -----------------------------------------------------------------
*/
// console.log(jonas.firstName+ ' tiene ' + jonas.amigos.length + ' amigos y su mejor amigo se  llama: ' + jonas.amigos[0]);


/**CHALLENCE3
 * -----------------------------------------------------------------
 * -----------------------------------------------------------------
---------------------------------------------------------------------
*/

const jonas={
    firstName:'Jonas',
    lastName:'Ramos',
    birthYeah: 1991,
    trabajo: 'profesor',
    amigos:['Maria','Rosa','Sara'],
    licencia: false,
    // calcEdad: function (birthYeah){
    //     return 2037 - birthYeah;
    // calcEdad: function (){
    //     console.log(this);
//     //     return 2037 - jonas.edad;
    calcEdad: function (){
        this.edad=2037-this.birthYeah;
        return this.edad;

    },
    /**AÑADIMOS CODIGO */

    suma:function(){
        return this.firstName+ ' tiene '+this.calcEdad()+' años y el '+this.licencia+' tiene licencia de conducir';
    }
};


// // console.log(jonas['calcEdad'](1991));



// console.log(jonas.calcEdad()); 
// console.log(jonas.edad); 
// console.log(jonas.suma()); 



/**JONAS ES UN PROFESOR DE 46 AÑOS Y TIENE LICENCIA DE CONDUCIR O NO, lo de arriba */


/**CHALLENCE 4-------------------------------
 * ------------------------------------------
 * ------------------------------------------
 */

// const mark={
//     nombreCom:'Mark Collen',
//     peso:78,
//     altura:1.69,
//     calcBMI: function(){
//         this.bmi=this.peso/this.altura**2;
//         return this.bmi;
//     }

// }
// const jhon={
//     nombreCom:'Jhon Smith',
//     peso:92,
//     altura:1.95,
//     calcBMI: function(){
//         this.bmi=this.peso/this.altura**2;
//         return this.bmi;
//     }

// }

// mark.calcBMI();
// jhon.calcBMI();
// console.log(mark.bmi,jhon.bmi);


// /**SEGUNDA PARTE DEL DESAFIO */

// if(mark.bmi>jhon.bmi){
//     console.log('El BMI de '+mark.nombreCom+' es de (' +mark.bmi+') y es mas alto que el de '+jhon.nombreCom+' que es de ('+jhon.bmi+')')

// } else{
//     console.log('El BMI de '+jhon.nombreCom+' es de (' +jhon.bmi+') y es mas alto que el de '+mark.nombreCom+' que es de '+mark.bmi+')')
// }




 /**BUCLES-------------------------------
 * ---el for sigue funcionando mientras la condicion es verdadera---------------------------------------
 * ------------------------------------------
 */

//  for(let rep=1; rep<=10; rep++){
//     console.log('Esta es la repeticion N°: '+rep);
//  }

//  const jonas=[
//     'Jonas',
//     'Ramos',
//     2037-1991,
//     'profesor',
//     ['Maria','Rosa','Sara'],
//     true
// ];

// const types=[];

// for(let i=0;i<jonas.length;i++){
//     //leemos datos
//     console.log(jonas[i],typeof jonas[i]);
//     //rellenamos los datos
//     // types[i]=typeof jonas[i];
//     //OTRA MANERA
//     types.push(typeof jonas[i]);
// }
// /**TIPO DE DATO */

// console.log(types);
// /**-------------- */
// const years=[1991,2007,1969,2020];
// const ages=[];
// console.log('prueba');

// for(let i=0; i<years.length ; i++){
//     ages.push(2037-years[i]);
// }

// console.log(ages);

// /**CONTINUAR Y ROMPER */

// console.log('SOLO CADENAS');

// for(let i=0;i<jonas.length;i++){
//     if(typeof jonas[i]!=='string') continue;
    
//     console.log(jonas[i],typeof jonas[i]);

// }
// console.log('SOLO NUMEROS');

// for(let i=0;i<jonas.length;i++){
//     if(typeof jonas[i]==='number') break;

//     console.log(jonas[i],typeof jonas[i]);

// }


/**DETRAS HACIA DELANTE */

// const jonas=[
//     'Jonas',
//     'Ramos',
//     2037-1991,
//     'profesor',
//     ['Maria','Rosa','Sara'],
//     true
// ];

// for(let i=jonas.length-1;i>=0;i--){
//     console.log(jonas[i]);

// }

// /**BUCLE DENTRO DE OTRO BUCLE */

// for(let ejercicio=1; ejercicio<4;ejercicio++){
//     console.log('-----EMPIEZA EL EJERCICIO'+ejercicio);

//     for(let rep=1; rep<6; rep++){
//         console.log('Ejercicio N° '+ejercicio+': Repeticion del bucle'+rep);
//     }
// }

/**USO DEL WHILE */

// for(let rep=1; rep<6; rep++){
//     console.log(' Repeticion del bucle'+rep);
// }

// let rep=1;
// while(rep<=10){
//     //console.log('While: escrito con while '+ rep);
//     rep++
// }

// let dice=Math.trunc(Math.random()*6)+1;
// console.log(dice);

// while(dice!==6){
//     console.log('Lanzaste un '+dice);
//     dice=Math.trunc(Math.random()*6)+1;
//     if(dice===6)
//     console.log('Bucle esta apunto de terminar...');
// }

/**50. CHALLENCE -----------------------
 * ------------------------------------
 * ------------------------------------
*/

const calcTip=function(cuenta){
    return cuenta>=50 && cuenta<=300 ? cuenta*0.15 : cuenta*0.2;
    cuenta*0.2;
}
const cuentas=[22,295,176,440,37,105,10,1100,86,52];
const tips=[];
const total=[];

for(let i=0; i<cuentas.length;i++){
    const tip=calcTip(cuentas[i]);
    //almacena en el push?
    tips.push(tip);
    total.push(tip+cuentas[i]);
}

console.log(cuentas, tips, total);

const calcProm=function(arr){
    let sum=0;
    for(let i=0; i<arr.length;i++){
        //sum=sum+arr[i];
        sum+=arr[i];
    }
    //console.log(sum);
    return sum/arr.length;
}

//calcProm([2,3,6]);
console.log(calcProm([2,3,7]));
console.log(calcProm(total));
console.log(calcProm(tips));