# Kitchen microservice

Este servicio es uno de tres microservicios, implementados con el fin de desarrollar la solucion para el reto tecnico de Alegra.

# Responsabilidad

Este servicio se encarga de la gestión de pedidos, incluyendo el seguimiento de los cambios de estado de cada pedido y las validaciones necesarias para permitir la transición de un estado a otro. Además, proporciona funcionalidades para obtener un listado de pedidos con la capacidad de filtrarlos por estado, así como también para obtener un listado de recetas.

# Sobre el proyecto

El proyecto esta estructurado siguiendo el patron de arquitectura limpia, el cual, es un enfoque de diseño de software que busca crear sistemas altamente independientes, desacoplados y divididos en capas, lo que facilita la comprensión, el mantenimiento y la evolución del código.

### Estructura de carpetas

- Dominio: Politicas del sistema. Aqui se declaran las entidades y repositorios que existiran en la aplicacion
- Aplication: Logica empresarial del sistema. Son todos los casos de uso de la aplicacion
- Infrastructura: Todo lo ageno a la logica de negocios central de nuestra aplicacion. Conexion y configuracion de la base de datos; implementacion real de los elementos del dominio y uso de los servicios de aplicacion inyectando estas nuevas implementaciones.





## API Reference

#### Valid stock

```http
  POST /api/order
```


- __Response__: 
| Type     | Description| 
:------- | :------------ |
| `Order` |Orden generada en estado `queued` |

- __Ejemplo__
```json
{
	"status": "queued",
	"recipe": "646ec8181c2d7519cc8c1892",
	"_id": "6470e5ca5334b8c2122c0908"
}
```

#### Get orders

```http
  GET api/order/${page}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `page`      | `number` | **Required**. page |


| Query | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `status`      | `string` | **optional**. estados de ordenes separados por coma (status=preparing,queued) |



- __Response__: 
| Type     | Description| 
:------- | :------------ |
| `Page` | Responde una pagina de ordenes |



#### Get recipes

```http
  GET /api/recipe/${page}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `page`      | `number` | **Required**. page |

- __Response__: 
| Type     | Description| 
:------- | :------------ |
| `Page` | Responde una pagina de ingredientes|

#### Prepare order

```http
  PUT /api/order/prepare
```

| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `orderId`      | `string` | **Required**. Id de pedido a preparar |

- __Response__: 
| Type     | Description| 
:------- | :------------ |
| `Order` | Orden con el cambio|


#### Prepare order

```http
  PUT /api/order/finish
```

| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `orderId`      | `string` | **Required**. Id de pedido a finalizar |

- __Response__: 
| Type     | Description| 
:------- | :------------ |
| `Order` | Orden con el cambio|




## Usage

Puede usar el Dockerfile presente en la raiz del proyecto para levantar la aplicacion o puede usar docker-compose.yaml para levantar la app junto a un servicio de mongoose

Tambien puede instalar todo local utilizando
```bash
  yarn install
  yarn dev
```


## Deploy

El servicio se encuentra en [render](https://render.com/) que provee un hosting gratuito a partir de una imagen de docker y la base de datos es la capa gratuita de [MongoDB Atlas](https://www.mongodb.com/atlas/database)