# Ejercicio de React para Alkemy

## Aclaración
Cumplí con los requerimientos de testear las validaciones de los campos, el correcto funcionamiento del botón enviar, y los distintos casos (fullfilled / rejected) de la petición al servidor.
Basándome en la parte del pdf que dice (cito textual) : "Algunos puntos a testear (puedes agregar lo que creas necesario)", agregué algunos test que caerían dentro de la categoría de integración. Por ejemplo, que el componente renderice cuando se visita la ruta que lo contiene, que se conecte con el backend correctamente, y que el componente dispare una redirección cuando se cumplan las condiciones.

La razón que me llevó a agregar tests extra, es que por las propias características de los requerimientos funcionales del formulario, es imposible testear todas las features del challenge sin pisar un poco el terreno del integration testing.

## Sobre los tests
El test está ubicado en /cypress/integration/RegisterForm.spec.js. Nótese por la sintaxis que los test son una mezcla de Cypress, Mocha y Chai. Cypress fue diseñado para incorporar estos frameworks de testing por defecto.
Los tests contienen explicaciones sobré qué estoy haciendo y qué estoy testeando en forma de comentarios.

## ¿Cómo correr los test?
1. Clonar el repositorio y reconstruir los módulos usando yarn.
2. Levantar el proyecto con yarn start. Es **absolutamente necesario** que el proyecto esté corriendo en localhost:3000
3. Abrir otra consola y ejecutar el comando yarn cypress run





