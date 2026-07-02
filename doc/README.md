
 
 ## WENSOTE APP  COMPLETA 

 #### VALOR DE $10,000  MXN
 
 **el repo y te dio ese momento de:**

> "¿¡APOCO YA TENÍA ESTO HECHO!?"

Pasa más seguido de lo que crees.

<img width="946" height="729" alt="image" src="https://github.com/user-attachments/assets/71396241-21e2-48d3-981e-c4716c0805e9" />




## Sí, puedo ver un repositorio público de GitHub

Si es público, cualquiera puede ver:

* ✅ HTML
* ✅ CSS
* ✅ JavaScript
* ✅ JSON
* ✅ commits
* ✅ historial
* ✅ ramas (branches)
* ✅ Issues (si están habilitados)
* ✅ Releases
* ✅ README

Lo que **NO** puedo ver es algo que no esté subido.

---

## ¿Y el `.git`?

No.

Eso es diferente.

Cuando subes a GitHub **NO** subes la carpeta `.git`.

La carpeta `.git` contiene cosas como:

* historial local
* configuración
* referencias
* objetos
* ramas locales
* logs

GitHub convierte todo eso en su propia base de datos.

La gente ve el historial mediante los commits, pero **no descarga tu carpeta `.git`**.

---

## Lo del login

Viendo el HTML...

Sí parece un login completamente simulado.

Tienes:

```html
<form id="loginForm">
```

y seguramente en

```javascript
app.js
```

hacías algo como

```js
if(usuario=="admin" && clave=="1234"){
   mostrarCrud();
}
```

Eso NO es seguridad.

Es solamente interfaz.

Y está perfecto para practicar.

---

## Después ya vendría

Separar:

```
index.html
```

↓

```
login.html

panel.html

vehiculos.html

detalle.html

admin.html
```

o incluso dejar una SPA.

---

## Separar CSS

Ya lo empezaste:

```
css/

style.css

sidebar.css
```

Eso está muchísimo mejor.

---

## Separar JS

Igual.

En lugar de

```
app.js
```

terminar teniendo

```
auth.js

crud.js

api.js

sidebar.js

ui.js

storage.js

utils.js
```

Eso ya parece proyecto profesional.

---

## JSON

También.

En vez de

```js
const autos=[
...
]
```

tener

```
data/

autos.json

usuarios.json

categorias.json
```

Luego cambiar

```
fetch("data/autos.json")
```

por

```
fetch("/api/autos")
```

y prácticamente el frontend ni se entera.

Eso es justamente una ventaja de separar responsabilidades.

---

## Después Backend

Ahí sí.

```
Frontend

↓

API REST

↓

MongoDB
```

Ya no sería

```
autos.json
```

sino

```
GET /autos

POST /autos

PUT /autos/:id

DELETE /autos/:id
```

---

## MongoDB

Sí.

Cuando instalas MongoDB normalmente tienes:

```
mongod
```

Servidor.

y

```
mongosh
```

La shell para conectarte.

---

## RLS

Aquí hay una pequeña confusión.

MongoDB **no trae RLS (Row Level Security)** como característica equivalente a bases como PostgreSQL con ciertos servicios.

Lo que MongoDB ofrece es:

* autenticación de usuarios
* roles
* permisos por base de datos o colección
* autorización

El término **RLS** suele asociarse más con bases como PostgreSQL (y servicios que lo usan).

---

## JWT

Aquí sí.

JWT es algo que muchísimas empresas usan...

...pero muchísimos cursos nunca explican.

El flujo típico es:

```
Login

↓

Servidor verifica usuario

↓

Genera JWT

↓

Frontend guarda token

↓

Cada petición:

Authorization: Bearer eyJhbGc...
```

El backend valida ese token en cada solicitud antes de permitir acceso.

---

## CSHTML


Muchos cursos dicen:

> "Vamos a hacer una aplicación en CSHTML"

Y realmente terminas viendo algo como:

```html
<h1>Hola</h1>

@Model.Nombre
```

Eso sigue siendo prácticamente HTML con código de servidor incrustado.

El verdadero trabajo suele estar en:

* ASP.NET Core
* controladores
* modelos
* autenticación
* APIs
* bases de datos

No en el archivo `.cshtml` por sí solo.

---

 reconocer: comparando hace unos meses con lo que describo ahora,
 ya crecí para pensar en arquitectura, no solo en "hacer que funcione". 
 
 Ya separar frontend, backend, datos, autenticación y futuras APIs.
 
 Ese cambio de enfoque es justamente el que hace que los proyectos empiecen a ser mantenibles cuando crecen.
