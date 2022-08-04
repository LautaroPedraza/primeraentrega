const cotizarSeguro=() => { {
    let marca= document.querySelector('#marca').value;
    let year= document.querySelector('#year').value;
    let basico= document.querySelector('#basico').value;
    let completo= document.querySelector('#completo').value;

    let divResumen=document.querySelector('#resumen');
    let divResultado=document.querySelector('#resultado');

    let plan='';

    if(basico.checked){
        plan='basico';
    } else if(completo.checked){
        plan='completo';
    }

    if(marca === '' ||
        year === '' ||
        plan === ''){
        mostrarError('#msj-error-cotizador','FALTA SELECCIONAR OPCIONES');
            return;
        }
        let cotizacion={marca,year, plan};
        document.querySelector('#msj').style.display='none';
        
        divResumen.style.backgroundColor='#FFF';
        divResumen.style.display='block';

        divResumen.innerHTML=<div style='Text-align:center'>
                                </div>
        setTimeout(() => {
            divResumen.style.backgroundColor='#red';
            divResumen.innerHTML=
                                <><h2>Resumen de Cotizacion</h2><ul>
                    <li>Marca: ${marca}</li>
                    <li>Plan: ${plan}</li>
                    <li> Año del Auto: ${year}</li>
                </ul></>
                ;
                let cotizacionFinal=cotizar(cotizacion);
                divResultado.style.display='block';
                divResultado.className='divResultado';
                divResultado.innerHTML=<p class='textoCotizacion'>$ ${cotizacionFinal}</p>
        },3000);
        const cotizar=(cotizacion)=>{
            const {marca, year,plan}=cotizacion;
            let resultado=3000;

            const diferenciaYear=diferencia(year);
            resultado=((diferenciaYear*3)*resultado)/100;

            resultado=calcularMarca(marca)*resultado;
            const incrementoPlan=obtenerPlan(plan);
            resultado=parseFloat(incrementoPlan*resultado).toFixed(2);
            return resultado
        }

        const obtenerPlan=plan=>{
            return (plan ==='basivo')?1.20:1.50;
        }

        const calcularMarca=marca=>{
            let incremento;

            switch(marca){
                case 'volkswagen': incremento=1.30; break;
                case 'chevrolet': incremento=1.25; break;
                case 'audi': incremento=1.45; break;
                case 'bmw': incremento=1.50; break;
            }
            return incremento;
        }
        const diferencia=(year)=>{
            return new Date().getFullYear(),year;

        }
    }

    const mostrarError=(elemento, mensaje)=>{
        divError=document.querySelector(elemento);
    }


}   