const $tabla = documento. getElementById("tablas")

let izquierda = 10
sea derecha = 10
dejar resultado

for(sea i = 1; i<=izquierda; i++){

    creamos un elemento "articulo" en el dom
    const $article = documento. createElement("artículo")

    for(sea j = 1; j<=derecha; j++){

        obtenemos el resultado de la multiplicacion
        resultado = i*j

        creamos un "elemento" p
        const $p = documento. createElement("p")

        el elemento p va a ser igual a la multiplicacion
        $p. textContent = '${i} X ${j} = ${resultado}'

        el elemento p lo agregamos como hijo al article
        $article. appendChild($p)
        

        el elemento article lo agregamos como hijo al seccion
        $tabla. appendChild($article)
    }
    resultado = 0;
}
