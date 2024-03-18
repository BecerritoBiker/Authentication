import { loginvalidation } from "./Global.js";

document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById("loginbtn");

    loginBtn.addEventListener('click', async (event) => {
        event.preventDefault(); // Evitar el comportamiento predeterminado del botón submit

        const email = document.getElementById("edtuser").value;
        const password = document.getElementById("edtpassword").value;

        try {
            // Llamar a la función de validación de inicio de sesión
            const validation = await loginvalidation(email, password);

            if (validation != null) {
                alert('Autenticación exitosa ' + email);
                // Redirigir a Home.html en la carpeta Templates
                window.location.href = "/Templates/home.html"
            } else {
                throw new Error('Error en la autenticación');
            }
        } catch (error) {
            alert(error.message);
            console.log('Error de autenticación:', error);
        }
    });
});
