<!DOCTYPE html>
<html lang="es-ES">
    <head>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width"/>
        <title> Introduccion a Java Scrip </title>
        <style type="text/css">
            button{
                font-family: "helvetica neue", helvetica, sans-serif;
                letter-spacing: 1px;
                text-transform: uppercase;
                font-weight: 5;
                text-align: center;
                border: 3px solid rgb(200 200 0);
                background: rgba(0,217,217, 0.6);
                color: rgb(100, 0, 0 / 1);
                box-shadow: 1px 1px 2px rgb(0, 0, 200 / 1);
                border-radius: 10px;
                padding: 2px 10px;
                cursor: pointer;
            }
        </style>
    </head>
    <body>
        <button type="button">Nombre: kihara</button>
        <script type="text/javascript">
            const button = document.querySelector("button");

            button.addEventListener("click", actualizarNombre);

            function actualizarNombre(){
                const nombre = prompt("Ingresar nuevo nombre");
                button.textContent = `Nombre: ${nombre}`;
            }
        </script>
    </body>
</html>