# 4vPizzeria

Web de pedidos para una pizzería, hecha con **Angular 22** y **Bootstrap 5**. Es el ejercicio *4V Pizza* de Desarrollo de Interfaces.

## Qué se puede hacer

- **Ver la carta** por categorías: Pizzas, Bebidas, Postres y Novedades.
- **Filtrar por ingrediente** con el buscador del navbar (por ejemplo, «bacon» o «mozzarella»).
- **Elegir la cantidad** de cada producto con los botones − y + o escribiéndola (de 1 a 99), y añadirla al pedido. Los botones se bloquean un momento al pulsarlos para evitar el doble clic.
- **Ver el carrito** en el navbar, con el número de productos del pedido.
- **Hacer el pedido**: la segunda página enseña cada producto con su cantidad y el total, y pide los datos de entrega:
  - hora de entrega en formato `HH:MM`;
  - dirección completa;
  - pago con **Tarjeta** (16 dígitos) o **Bizum** (móvil de 9 dígitos); solo se activa el campo del método elegido.

  Cada campo enseña su mensaje de error. Al pagar se vacía el pedido, se dan las gracias y el foco vuelve a la lista.

## Páginas

| Ruta | Página |
|---|---|
| `/` | **Listado**: carta, filtros y botones para añadir al pedido |
| `/formulario` | **Pedido**: resumen del pedido y datos de entrega |

Desde el navbar se pasa del Listado al Pedido con el carrito, y del Pedido al Listado con «Volver a la carta».

## Cómo está hecho

- **Diseño atómico**: los componentes están en `src/app/components`, separados en `atoms`, `molecules`, `organisms` y `pages`.
- **Comunicación entre componentes** con `input()` y `output()`.
- **Estado con signals**. El pedido se guarda en `CartService` para que no se pierda al cambiar de página.
- **Datos de los productos** en `ProductRepository` (`src/app/repositories`). No hay servidor propio: los productos están en el código.
- **Formulario** con Reactive Forms y validadores (`required` y `pattern`).
- **Estilos en SCSS**: colores, variables, animaciones y mixins compartidos en `src/styles/`, reunidos en `_main.scss`. Bootstrap se carga una sola vez en `src/styles.scss`.

## Arrancarlo

```bash
npm install
```

```bash
npm start
```

Después, abrir `http://localhost:4200`. Para generar la versión de producción:

```bash
npm run build
```

## Créditos de las imágenes

Todas las fotos son de [Wikimedia Commons](https://commons.wikimedia.org) y tienen licencias libres:

| Producto | Foto | Autor | Licencia |
|---|---|---|---|
| Pizza barbacoa | [BBQ CHICKEN PIZZA](https://commons.wikimedia.org/wiki/File:BBQ_CHICKEN_PIZZA.jpg) | Zeeshan93 | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) |
| Pizza margarita | [Pizza-napoletana](https://commons.wikimedia.org/wiki/File:Pizza-napoletana.jpg) | Fabryx98 | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) |
| Pizza cuatro quesos | [Four cheese pizza](https://commons.wikimedia.org/wiki/File:Four_cheese_pizza.jpg) | Shreya13jain | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) |
| Pizza hawaiana | [Hawaiian pizza 1](https://commons.wikimedia.org/wiki/File:Hawaiian_pizza_1.jpg) | @joefoodie from USA | [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/) |
| Pizza carbonara | [Pizza Carbonara - Dibocca](https://commons.wikimedia.org/wiki/File:Pizza_Carbonara_-_Dibocca.jpg) | Francesc Fort | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) |
| Pizza vegetal | [Vegetarian-pizza-top](https://commons.wikimedia.org/wiki/File:Vegetarian-pizza-top.jpg) | MartinThoma | [CC0](https://creativecommons.org/publicdomain/zero/1.0/) |
| Agua mineral | [Acqua Panna mineral water in a glass bottle](https://commons.wikimedia.org/wiki/File:Acqua_Panna_mineral_water_in_a_glass_bottle_-_20140408.jpg) | Smuconlaw | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) |
| Zumo de naranja | [Orange juice 1 edit1](https://commons.wikimedia.org/wiki/File:Orange_juice_1_edit1.jpg) | Departamento de Agricultura de EE. UU. (editada por Arad) | Dominio público |
| Refresco de cola | [Glass cola](https://commons.wikimedia.org/wiki/File:Glass_cola.jpg) | pic_p_ter | Dominio público |
| Cerveza | [Pint of beer with some bread](https://commons.wikimedia.org/wiki/File:Pint_of_beer_with_some_bread.jpg) | Jon Sullivan | Dominio público |
| Tiramisú | [Dessert Tiramisu](https://commons.wikimedia.org/wiki/File:Dessert_Tiramisu.jpg) | Javier Lastras | [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/) |
| Tarta de queso | [Raised slice of cheesecake](https://commons.wikimedia.org/wiki/File:Raised_slice_of_cheesecake.jpg) | Sirabellas | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) |
| Panna cotta | [Panna Cotta with caramel sauce](https://commons.wikimedia.org/wiki/File:Panna_Cotta_with_caramel_sauce.jpg) | Toben | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) |
| Brownie | [Chocolatebrownie](https://commons.wikimedia.org/wiki/File:Chocolatebrownie.JPG) | Ɱ | [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) |
| Pizza diávola | [Pizza Diavola at Alby's Pizza](https://commons.wikimedia.org/wiki/File:Pizza_Diavola_at_Alby%27s_Pizza.jpg) | JIP | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) |
| Pizza picante | [Pizza diabolo - London, UK](https://commons.wikimedia.org/wiki/File:Pizza_diabolo_-_London,_UK.jpg) | Daderot | [CC0](https://creativecommons.org/publicdomain/zero/1.0/) |
