preceso construccion API

1. creamos proyecto
2. crear git y conexion github
3. instalar dependencias
4. crear servidor con express
5. ruta principal
6. crear rutas generales
    - raiz
    - api/usuarios
    - api/mascotas
    - api/registro
    - api/login
7. controlador para registro (post)
8. verificamos el endpoint api/registro usando (POSTMAN)
9. middlewares para parsear datos del body
10. comprobar que se reciben los datos desde body
11. creamos base da datos en moongo
12. conectamos a la base da datos
13. creamos modelo de datos de suarios
14. actualizamos el controlador de registro para que cree nuevos usuarios
15. encriptar las contraseñas con bcrypt
16. controlador para login
17. usamos bscrypt para desencryptar la contraseña y la comparamos 
18. si el usuario existe le devolvemos un token (jsonwebtoken)
    token:
        - info de codificacion
        -payload (info que queremos encriptar)
        -palabra secreta para la encriptacion
19. creamos endpoint mascotas y verificamos si el usuario puede acceder 
20.crear un middleware auth que en la peticion se envia un token y lo compara con los usuarios

-->21. otro middleware para verificar el rol y si tiene acceso a los al endpoint
-->22. endpoint para subir archivos al server
-->23. manipular archivos en el server usando "js-extra"
