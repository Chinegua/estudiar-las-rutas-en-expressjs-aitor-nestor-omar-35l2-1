
# Primeros pasos en ExpressJS


## Instalando ExpressJS


Suponiendo que ya haya instalado Node.js, cree un directorio que contenga su aplicación y haga que sea su directorio de trabajo.

Usa el comando npm init para crear el fichero package.json para tu aplicación.

Ahora instalamos express en la aplicación

```
npm install express
```

Para añadirlo a las dependencias `--save`



## Introducción a ExpressJS

Direccionamiento se refiere a determinar cómo una aplicación responde a una solicitud de cliente a un extremo determinado, que es un URI (o ruta) y un método de solicitud HTTP específico (GET, POST, etc.).
Cada ruta puede tener una o más funciones del manejador, que se ejecutan cuando la ruta es correspondida
La definición de ruta tiene la siguiente estructura

```javascript
app.METHOD(PATH, HANDLER)
```

Dónde:

  * app es una instancia de express.
  * METHOD es un método de solicitud HTTP, en minúsculas.
  * PATH es una ruta de acceso en el servidor.
  * HANDLER es la función ejecutada cuando se compara la ruta.


__Ejemplos:__

Responda con Hello World! en la página inicial:
```javascript
app.get('/', function (req, res) {
  res.send('Hello World!')
})
```
Responda a la solicitud POST en la ruta raíz (/), la página de inicio de la aplicación:
```javascript
app.post('/', function (req, res) {
  res.send('Got a POST request')
})
```
Responda a una solicitud PUT en la ruta /user:
```javascript
app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user')
})
```
Responda a una solicitud DELETE en la ruta /user:

```javascript
app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user');
});
```
Para obtener más detalles sobre el direccionamiento, consulte la [guía](express_avanzada.md)
