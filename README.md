# Notas Markdown Backend

Bienvenido al repositorio del backend de la aplicación Notas Markdown. Este servidor, desarrollado en Express, proporciona la funcionalidad esencial para la interfaz que se encuentra en este [respositorio](https://github.com/g-susvs/notas-markdown).

## Características Principales:

#### Arquitectura Hexagonal:

Diseñado con una estructura de arquitectura hexagonal que sigue un enfoque de vertical slicing. Esta organización asegura que cada entidad tenga sus propios archivos, facilitando la comprensión y el mantenimiento del código.

#### Patrón Repository:

Implementa el Patrón Repository para lograr que cada entidad sea independiente de la base de datos, mejorando la flexibilidad y facilitando las actualizaciones y mantenimiento a largo plazo.

#### Autenticación JWT:

Todas las solicitudes de la API relacionadas con notas requieren autenticación mediante JSON Web Tokens (JWT). Esto garantiza la privacidad y control de acceso, asegurando que cada usuario tenga acceso adecuado a sus propias notas.

## Configuración:

Ejecuta el siguiente comando para instalar los paquetes necesarios:

```sh
npm install
```

En la raíz del proyecto, crea un archivo llamado `.env` y agrega la siguiente variable de entorno:

```
MONGO_CNN=mongodb+srv://USER:PASSWORD@mycluster.l8ftf.mongodb.net/notes-app
```

Inicia el proyecto con el siguiente comando:

```
npm run dev
```
