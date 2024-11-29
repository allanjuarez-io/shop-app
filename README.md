# Shop App

Aplicación que utiliza el stack **MERN**(MongoDB, ExpressJS, ReactJS, NodeJS) su objetivo es simular una tienda ficticia la cual permita realizar operaciones **CRUD**(Create, Read, Update, Delete). Los datos se obtienen a traves de la API [fakestoreapi](https://fakestoreapi.com/)

## Características principales

- Consumo de API externa: La aplicación obtiene de manera individual o en grupo los productos de la [api](https://fakestoreapi.com/).
- Persistencia en Base de Datos: Los productos obtenidos de la [api](https://fakestoreapi.com/) se almacenan en una base de datos de MongoDB mediante Mongoose; ayudando a la gestión de datos y operaciones posteriores.
- Operaciones CRUD: Los usuarios finales pueden realizar operaciones básicas como Crear, Leer, Actualizar y Eliminar productos desde la interfaz de usuario construida en ReactJS.

## Tecnologías utilizadas

- Backend:
  - typescript
  - node
  - express
  - mongoose
  - cors
  - cross-env
  - dotenv
- Frontend:
  - typescript
  - react
  - tailwindcss

## Como utilizar la app

Para comenzar lo primero que se debe hacer es instalar las dependencias del proyecto con el comando **npm install** y una vez instaladas se debe configurar archivos del cliente y del servidor para que el proyecto funcione.

### Server

Dentro de la carpeta **server** se deben crear un dos archivos:

- **.env**
- **.env.production**

Cada uno de estos archivos contiene las variables de entorno necesarias para el proyecto. Dentro de los archivos se debe incluir las siguientes variables:

```
NODE_ENV = production
SERVER_PORT = 4000
URI = your_uri
```

La variable de entorno **URI** se obtiene a traves de la pagina de oficial de [mongodb](https://www.mongodb.com/) donde se debe realizar un registro o iniciar sesion con una cuenta para generar un nuevo cluster el cual otorgara una nueva URI.

> **NOTA:** El valor del servidor no necesariamente tiene que ser "4000", se puede cambiar deacuerdo a las necesidades de cada usuario; sin embargo, si se decide realizar el cambio del puerto por default tambien se debera cambiar la variable de entorno **VITE_DEVELOPMENT_API_URL** del proyecto **client** para que coincidan con la url de desarrollo de la api. ejemplo -> http://localhost:<OTRO_PUERTO>/api

Una vez que se tengan listas las variables de entorno se debe ejecutar el siguiente comando:

```
npm run dev
```

El comando iniciara el servidor y este realizara la conexion a la base de datos y la llenara si no tiene documentos.

### Client

Dentro de la carpeta **client** se debe de crear el archivo **.env**, el cual contendra las siguietes variables de entorno:

```
VITE_PRODUCTION_API_URL = <deploy_url>/api
VITE_PRODUCTION_CLIENT_URL = <deploy_url>/api

VITE_DEVELOPMENT_API_URL = http://localhost:4000/api
VITE_DEVELOPMENT_CLIENT_URL = http://localhost:3000
```

Dentro del proyecto se utilizaran dependiendo el entorno en que se encuentren, por ejemplo las variables que inician con **VITE_PRODUCTION** solo se utilizan con el build de la aplicación (o deploy); en <deploy_url> se debe reemplazar por la url donde se realice el deploy, por ejemplo -> https://my-app.onrender.com/api

Las variales que inician con **VITE_DEVELOPMENT** solo se utilizan del lado del cliente y estas no necesariamente deben ser cambiadas a menos que cambies el puerto de desarrollo dentro de la configuración del archivo vite.config.ts y el puerto del proyecto **server**
