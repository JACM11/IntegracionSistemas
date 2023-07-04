<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

## Correr Aplicacion

### API GATEWAY

```bash
# * la version de la API es v2 ej: http://localhost:3000/v2/auth/signup

```

```bash

cd api-gateway

npm install

# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```



### Microservicio Equipos

```bash

cd microservice-flights

npm install

# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Despligue con Docker

```bash
# development
# * Tomar en cuenta que cada proyecto se debe haber corrido npm run build para que exista la carpeta /dist
# * Docker se desplegara en el puerto 80
# * la version de la API es v2 ej: http://localhost/v2/auth/signup
docker-compose -f docker-compose.dev.yml up --build -d

# deploy from Docker hub
docker-compose -f docker-compose.prod.yml up --build -d
```



## Consumo de la api en postman

# GET
![image](https://github.com/JACM11/IntegracionSistemas/assets/70069630/ed755c62-018f-4452-9a77-5aef40a11bc5)

# POST

![image](https://github.com/JACM11/IntegracionSistemas/assets/70069630/74636c8e-9183-444d-b5b8-b90c0f985eb4)


# UPDATE
![image](https://github.com/JACM11/IntegracionSistemas/assets/70069630/13ee6421-cf4d-4d64-a9dd-d54e24d464fc)
![image](https://github.com/JACM11/IntegracionSistemas/assets/70069630/6734ec88-b6d3-45c0-9453-9526420f0a46)



# DELETE
![image](https://github.com/JACM11/IntegracionSistemas/assets/70069630/e59e261e-842b-47b7-a8fe-cbba88579781)
![image](https://github.com/JACM11/IntegracionSistemas/assets/70069630/92bea768-c293-4d93-9e62-176fc32cbc6d)

