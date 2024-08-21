function error(mensaje) {
    document.getElementById("error").textContent = mensaje;
    document.getElementById("error").style.display = "block";
}

function limpiarError() {
    document.getElementById("error").textContent = "";
    document.getElementById("error").style.display = "none";
}

function validarTexto(texto) {
    let validacion = /^[a-z0-9\s]*$/;
    return validacion.test(texto);
}

function encriptarTexto() {
    let campoTexto = document.getElementById("encriptado").value;

    if (!validarTexto(campoTexto)) {
        error(
            "No se permiten letras mayúsculas, acentos, ni caracteres especiales."
        );
        return;
    }

    limpiarError();

    let encriptadoTexto = campoTexto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    document.getElementById("desencriptado").value = encriptadoTexto;
}

function desencriptarTexto() {
    let campoTexto = document.getElementById("desencriptado").value;

    if (!validarTexto(campoTexto)) {
        error(
            "No se permiten letras mayúsculas, acentos, ni caracteres especiales."
        );
        return;
    }

    limpiarError();

    let desencriptadoTexto = campoTexto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    document.getElementById("desencriptado").value = desencriptadoTexto;
}

function limpiar() {
    document.getElementById("encriptado").value = "";
    document.getElementById("desencriptado").value = "";
    limpiarError();
}

function copiar() {
    let campoTexto = document.getElementById("desencriptado").value;
    navigator.clipboard
        .writeText(campoTexto)
        .then(() => {
            console.log("Texto copiado al portapapeles");
        })
        .catch((err) => {
            console.error("Error al copiar el texto: ", err);
        });
}