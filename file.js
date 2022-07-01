//eventHandler no recomendado

let botonOnclick = document.querySelector(".boton");

botonOnclick.onclick = () =>{ //No hay uso de camel case en onclick
    alert("Alerta funcionando de manera correcta");
}


//eventlistener recomendado, ("accion" , "funcion flecha donde describira las acciones a hacer")

let boton1 = document.querySelector(".boton1");

boton1.addEventListener("click",()=>{
    alert("Segunda manera funcional");
})

//eventListener recomendad, ("accion" , nombre de la funcion a desarrollar por fuera)

let boton2 = document.querySelector(".boton2");

boton2.addEventListener("click", aler);

function aler(){
    alert("tercera manera funcion por fuera funcional");
    boton2.removeEventListener("click", aler); //quitar el evento 

}

//objeto event, es el unico parametro que le podemos poner a los eventos y nos dice que
//objeto ejecuto el evento

let objevent = document.querySelector(".boton3");

objevent.addEventListener("click",(evt)=>{
    console.log(evt);
})