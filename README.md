# TP-DSW

## Integrantes
  50430 - Munné, María Lucía.

  50775 - Giacomelli, Serena.
  
  49800 - Leonardi, Chiara.

## Tema
### Descripción
Nuestro trabajo es sobre una página de ventas de muebles y decoraciones. Nuestro proyecto se basa en que el usuario pueda buscar el producto que desee , permitiéndole comparar distintos precios y marcas. 

### Modelo
[Modelo de Dominio](https://app.diagrams.net/#G1pXzks82X4Md6nmZlfyS6OVUIWu8OxMMS#%7B%22pageId%22%3A%228lCWaEY0jHqENc2HCXR9%22%7D)

## Alcance Funcional
### Alcance Mínimo
|Req|Detalle|
|:-|:-|
|CRUD simple|1. CRUD Tipo Producto<br>2. CRUD Usuario<br>3. CRUD Marca<br>4. CRUD Sucursal<br>5. CRUD Provincia<br>6. CRUD Localidad<br>7. CRUD Compra<br>8. CRUD Oferta<br>9. Producto|
|CRUD dependiente|1. CRUD Precio {depende de} CRUD Oferta<br>2. CRUD Producto {depende de} CRUD Tipo Producto<br>3. CRUD Compra {depende de } Producto<br>4. CRUD Sucursal {depende de} Producto<br>5.CRUD Oferta{ depende de} Producto|
|CUU/Epic|1. Registrar usuario<br>2. Mostrar productos<br>3. Elegir productos<br>4. Realizar compra<br>5. Realizar Pago|

### Alcane Voluntario
|Listado + detalle|
|:-|
|1. Listado por categoria, muestra ordenado por categoria de baño, jardín, cocina, habitación, living<br>2. Listado por precio ascendente, muestra ordenado del producto más barato al más caro <br>3. Listado por precio descendente, muestra ordenado del producto más caro al más barato<br>4. Listado por destacados, muestra los más populares primero|
