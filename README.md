# Shop App

Tienda ficticia que obtiene y utiliza los datos de la API [fakestore](https://fakestoreapi.com/) para realizar las operaciones **CRUD:** create, read, update, delete.

## Características principales

- Consumo de API externa: La aplicación obtiene de manera individual o en grupo los productos de la [api](https://fakestoreapi.com/).
- Persistencia en Base de Datos: Los productos obtenidos de la [api](https://fakestoreapi.com/) se almacenan en una base de datos de MongoDB mediante Mongoose; ayudando a la gestión de datos y operaciones posteriores.
- Operaciones CRUD: Los usuarios finales pueden realizar operaciones básicas como Crear, Leer, Actualizar y Eliminar productos desde la interfaz de usuario.

## Tecnologías utilizadas

- Backend:
  - TypeScript
  - NodeJS
  - ExpressJS
  - Mongoose
- Frontend:
  - TypeScript
  - ReactJS
  - TailwindCSS

## Como utilizar la app

Para comenzar lo primero que se debe hacer es instalar las dependencia del proyecto con el comando **npm install**. Una vez instaladas se comenzara a configurar los archivos del backend.

### backend

Dentro de la carpeta **backend** se debe crear un archivo **.env** de donde se obtendran las variables de entorno necesarias. Una vez creado el archivo se debe incluir las siguientes variables:

```
PORT = your_port
URI = your_uri
```

> Puedes agregar el valor para la variable de entorno **PORT** por el que mejor se ajuste a tus necesidades. Recomiendo utilizar el puerto 4000 para el servidor (si es que no loo estan utilizando).

> La variable de entorno **URI** dependera de cada usuario; para obtener una deberas registrarte en la pagina de oficial de [mongodb](https://www.mongodb.com/).

Una vez terminado los pasos anteriores se debe ejecutar el siguiente comando:

```
npm run dev
```

El comando iniciara el servidor y realizara la conexion a la base de datos de mongodb. Tambien este comando se debe utilizar para iniciar el proyecto de la carpeta **frontend**. Una vez realizado los pasos anteriores la aplicación se encontrara funcionando.
