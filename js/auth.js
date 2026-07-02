////   <form id="loginForm">
//  y seguramente en

///   app.js
////  hacías algo como
/*
if(usuario=="admin" && clave=="1234"){
   mostrarCrud();
}
*/

export function login(usuario, clave){

    if(usuario==="admin" && clave==="1234"){

        localStorage.setItem("login","true");

        return true;

    }

    return false;

}

export function logout(){

    localStorage.removeItem("login");

}

export function isLogged(){

    return localStorage.getItem("login")==="true";

}
