# MibancoTechTest

Prueba tecnica para Encora apuntando a una posicion en MiBanco

## Servidor de Desarrollo

Correr la aplicacion con `ng serve` para correrlo localmente. Ruta de navegacion es `http://localhost:4200/`

## Test Unitarios
Correr el comando `ng test` para correr todos los test unitarios.

## API Usada
Se uso `https://app.freecurrencyapi.com` como API para el de sus monedas de cambio y valores, ya que la API proporcionada en el documento, no permitia cambiar la moneda base al ser un plan gratuito
La API usada es propensa a caerse o trabarse en algun punto, ya que al ser un plan gratuito, no soporte tantos request al mismo tiempo
La API no contenia la moneda Soles o PEN, asi que se adapto el caso a las monedas que contenia la API mencionada anteriormente

## Puntos Completados del reto
Se completaron todos los puntos principales del reto tecnico a excepcion del que menciona usar "Bearer Token".
Ya que no especifica el Token a usar y para ello tambien se tendria que diseñar un Login de la mano del backend que proporcionase el mencionado token para la validacion al hacer el login
