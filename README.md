# TodoApp
Aplicacion TodoApp a travez de react.

**Despliegue de la aplicación utilizando Netlify: https://65519afd9fe23e06881b87e3--danitodoapp.netlify.app/**

![image](https://github.com/Daniela90-prog/TodoApp/assets/116611137/22e7584f-31d4-44b3-8c7d-c1324fd658f7)



Este proyecto utiliza react, el cual basicamente tiene la funcionalidad de una lista de tareas, en donde se puede agregar las tareas a realizar, adicional se puede enmarcar las tareas completadas , filtrar las tareas completadas y las tareas pendientes, a su vez eliminar las tareas en listadas y generar una lista nueva. 

> [!IMPORTANT]
> Este código utiliza 5 componenetes, los cuales se iran explicando a lo largo de esta documentación.
> 
> Recursos para estilos: La ventaja de utilizar tailwindcss permite que los estilos puedan ser asociados directamente a la etiqueta sin necesidad de utilizar una clase o id para poderla declarar en un archivo de formato css aparte.
> 
> https://tailwindcss.com/
> 
> https://heroicons.com/ : este recurso permite descargar los iconos a nuestro proyecto.


## Componente No.1: Todo Title

![image](https://github.com/Daniela90-prog/TodoApp/assets/116611137/a8936a7a-47b5-4201-b806-51cb7230e217)

![image](https://github.com/Daniela90-prog/TodoApp/assets/116611137/033f9fdc-7c06-4255-a9e2-2a2526a0158e)

En este componenete se establece el titulo de la aplicación, con sus correspondientes estilos utilizando la bibliotrca de estilos de tailwindcss.

## Componente No.2: Todo Input.

![image](https://github.com/Daniela90-prog/TodoApp/assets/116611137/4892e0a4-26e7-48fc-8c7c-581bdc4cf9bd)

![image](https://github.com/Daniela90-prog/TodoApp/assets/116611137/d987bfe5-6820-421f-8974-353ae13f7559)

En este componente se establece el elemento del input, el cual permite ingresar al usuario la tarea que desea realizar, en este componenete se destacan las siguientes cosas a nivel de código:

> [!IMPORTANT]
> Se utiliza el hook useState  para declarar el estado inicial del input el cual es un string vacio ( " ")
> 
> Se utiliza un condicional if para dar la funcionalidad de que al momento de que el usuario ingrese su tarea en el input y presione enter se pueda adicionar una nueva tarea.
>
> Se utiliza un contenedor (div), para definir los estilos del input.
>
> En la etiqueta input, se declara para agregar nuevas tareas.

## Componente No.3 : Todo

![image](https://github.com/Daniela90-prog/TodoApp/assets/116611137/c6baab7b-1818-44bb-9175-79069f8d5eb9)

![image](https://github.com/Daniela90-prog/TodoApp/assets/116611137/8063a7db-64b4-468c-b2b1-d32bcb4d38b9)

En este componente se da la funcionalidad al estado de las tareas ingresadas para eliminarlas o marcarlas como completadas, en este componente se destacan las siguientes cosas a nivel de codigo:

> [!IMPORTANT]
> El código contene los siguientes props:
>
> **Todo**: este objeto contiene la informacion de la tarea.
>
> **handleSetComplete**: Funcion para marcar la tarea cuando esta completada, esta tarea completada se enmarca con un icono "check" y se le dan los correspondientes estilos una vez el usuario haga "click" en la tarea selecccionada.
>
> **handleDelete** : Funcion para marcar la tarea cuando desea ser eliminada, esta tarea eliminada se acciona mediante el icono "x", el cual tiene sus correspondientes estilos.
>

## Componente No.4 : TodoFilters & FiltersContainer

![image](https://github.com/Daniela90-prog/TodoApp/assets/116611137/1b0d0779-45d8-4d96-8c84-b720bb58f6bb)

### TodoFilters

![image](https://github.com/Daniela90-prog/TodoApp/assets/116611137/f68b5aca-db83-4cc9-bcc5-d0c8c65fcc89)

### FiltersContainer

![image](https://github.com/Daniela90-prog/TodoApp/assets/116611137/00ab4caa-fb09-443c-b9d7-2af8c55cfb0e)

En este componente **TodoFilters** es la seccion para delcarar los botones ( All, Active, Completed ), los cuales permiten filtar las tareas de acuerdo a su estado actual , ha estado actual se refiere es si esta completada o progreso, en este componente se destacan las siguientes cosas a nivel de código:

> [!IMPORTANT]
> Este componente tiene los siguientes props:
>
> **total**: Numero total de tareas
> 
> **activeFilter**: Filtro activo para los elementos ( All, Active , Completed ).
>
> **showAllTodos**: Función para mostrar todas las tareas.
>
> **showActiveTodos**: Función para mostrar solo tareas activas.
>
> **showCompletedTodos**: Función para mostrar solo tareas completadas.
>
> **handleClearComplete**: Función para limpiar las tareas completadas.

En este componente **FiltersContainer** es la seccion que permite dar la funcionalidad de los botones de filtro ( All, Active, Completed ), cabe resaltar que en este componente hay una sección llamada children, la cual permite ser el componente "hijo" de **TodoFilters**, para poderle agregar esa funcionalidad al componente **TodoFilters**, en este componente se destacan los siguientes aspectos a nivel de código:


> [!IMPORTANT]
> Este componente tiene los siguientes elementos:
>
> **ItemsLeft**: Es el número que se muestra de acuerdo a las tareas restantes poe ejecutar.
>
> **FilterButtonContainer**: Representa al contenedor de botones.
>
> **FilterButton**: Representa el boton de filtro, contiene los siguientes props:
> **action**: Función a ejecutar cuando se hace click en el boton.
> **active**: Estado actual del filtro.
> **Filter**: Tipo de filtro presentado por el boton.
>
> Estos elementos descritos anteriormente son importados al componente **TodoFilters**, para poder obtener su funcionalidad inicializada.

## Componente No.5: TodoList1

![image](https://github.com/Daniela90-prog/TodoApp/assets/116611137/2763bf0b-f915-4437-90ee-00f1cf3eb0e1)

Este componenente es funcional para los elementos que contienen la lista de tareas ingresados por el usuario, en este componente se destacan los siguientes aspectos a nivel de código:

> [!IMPORTANT]
> Primeramente la constante TodoList1 se declaran las siguientes propiedades, para gestionar y mostrar las tareas: 
> todos, activeFilter, handleSetComplete, handleDelete, handleClearComplete, showAllTodos, showActiveTodos, showCompletedTodos
>
> Se utiliza un map que permite mostrar las tareas de acuerdo a la interacción que genera el usuario (si la tarea esta completada, si la tarea ha sido eliminada)
>
> Se importa el componente TodoFilters para tener esa funcionalidad dentro de este componente. 






