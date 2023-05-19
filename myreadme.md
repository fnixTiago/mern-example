# Create json
```
npm init -y
```
# Install express
```
npm i express
```

# Configuración para el server/index.js
Debemos de agregar las siguientes líneas en el package.json:
 - ```"type":"module"``` es para poder permitir la conexión con los nodes_modules 
- ```"dev": "node server/index.js``` es para ejecutar en modo desarrollador 

```
 "type": "module",
  "scripts": {
    "dev": "node server/index.js",
    ...
  }
```
# Apollo
- Funciona en el backend con node y en front con react
## Installación 
```
npm install @apollo/server graphql
```
graphql es una biblioteca de node
## Instalación de cors
```
npm install cors
```

## Instalación de graphql-tag
```
npm install graphql-tag
```
## Crearemos una imagen mongo con docker 
```
 docker run --name graphqldb -p 27017:27017 -d mongo:5
 ```

 ### install mongoose
 Permite conectar y definir los datos que se va a guardar
 ```
 npm i mongoose
 ```

 # CREATE PROJECT
 
  - ctrl + enter : Para ejecutar apollo
El signo de ! indica que debe ser obligatorio ingresar el dato, por ejemplo ID!

````
  project(_id:ID!) Project
```