# TP-DSW
Repo de trabajo practico grupal

## Integrantes
  50430 - Munné, María Lucía.

  50775 - Giacomelli, Serena.
  
  49800 - Leonardi, Chiara.

## Tema
### Descripción
Nuestro trabajo es sobre una página de ventas de muebles y decoraciones. Nuestro proyecto se basa en que el usuario pueda buscar el producto que desee , permitiéndole comparar distintos precios y marcas. 

### Modelo
[Modelo de Dominio](https://app.diagrams.net/#G1pXzks82X4Md6nmZlfyS6OVUIWu8OxMMS#%7B%22pageId%22%3A%228lCWaEY0jHqENc2HCXR9%22%7D).

## Alcance Funcional
### Alcance Mínimo
|Req|Detalle|
|:-|:-|
|CRUD simple|1. CRUD Tipo Producto<br>2. CRUD Usuario<br>3. CRUD Marca<br>4. CRUD Sucursal<br>5. CRUD Provincia<br>6. CRUD Localidad<br>7. CRUD Compra<br>8. CRUD Oferta|
|CRUD dependiente|1. CRUD Precio {depende de} CRUD Oferta<br>2. CRUD Producto {depende de} CRUD Tipo Producto<br>3. CRUD Compra {depende de } Producto|
|Listado<br>+<br>detalle|1. Listado oferta por categoria, muestra ordenado por categoria de baño, jardín, cocina, habitación, living<br>2. Listado oferta por precio, muestra ordenado del producto más barato al más caro o viceversa<br>3. Listado por destacados, muestra los más populares primero|
|CUU/Epic|1. <br>2.  |

### Alcance Adicional Voluntario
