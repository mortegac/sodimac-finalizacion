<p>
    <h1 align="center"> Ejercicio de Finalización </h1>
    <h3 align="center">gestión de pokemones favoritos</h3>
    <p align="center">
        <img src="pokemon.gif">
    </p>
</p>

En este ejercicio se dividirá en dos partes:

A .- Aplicación en react que consuma datos en una api

B .- Crear la API en nodejs utilizando expressjs



## REQUERIMIENTOS

**Aplicación Web**
1. - Crear vista para registro de usuarios

2. - Crear vista para los pokémones favoritos de un usuario. Esta vista debe validar que el usuario se encuentre autenticado.  Los datos a mostrar en esta vista son: imágen del pokémon, nombre de pokémon y nombre del usuario

3. - Para agregar como favorito un pokémon el usuario debe estar autenticado y enviar el Id del usuario a la API para que se puedan asociar.

4. - Al autenticarse, la api debe devolver el token que se deben almacenar el localStorage

5. - Crear vista para favoritos: Se deben mostrar los pokémones marcados como favoritos considerando 

6. - Logout del usuario


**Aplicación Api**
- Crear endPoint que permita agregar un pokemón como favorito.  Se debe almacenar toda la información del pokémon en la collection `favorites` en Mongo Atlas.

- Crear endPoint que permita eliminar un pokémon de favoritos

- Crear endPoint que permita crear nuevos usuario (Registro)

- Al crear un nuevo usuario se debe enviar un email de bienvenida




## Aplicación Web

En este ejercicio utilizaremos:
- [React-router](https://reactrouter.com/)

- [Context API](https://es.reactjs.org/docs/context.html)

- [Configurar Proxy](https://create-react-app.dev/docs/proxying-api-requests-in-development/)



## Api

- [Como usar Mongo Atlas (Mongo en la nube)](https://www.youtube.com/watch?v=308dK6mhPWQ&feature=youtu.be)



<h2>Instalación:</h2>

1. Asegurate de tener [nodejs](https://nodejs.org/es/) instalado

2. En tu terminal clonar el proyecto con el comando 

```
git clone https://github.com/mortegac/sodimac-finalizacion.git
```

3.- Una vez descargado a tu computador, encontrarás 2 carpetas

```
.
├── client
├── server
├── package.json
├── 
└── README.md

```
a).- **client** =  Carpeta donde se encuentra la aplicación en reactjs

b).- **server** =  Carpeta donde se encuentra la API


4.- Instalar las dependencia en cada carpeta y en la raiz del sitio

```
yarn install
cd server && yarn install
cd client && yarn install
```

5.- En la raíz de sitio se encuentra configurado un proyecto para que a través de un comando se ejecute ambos proyecto.

```
yarn start
```
