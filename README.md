# "Lechuza Mensajera" / Caesar Cipher Secret Messages 

## Preámbulo

Estás buscando una manera de mantener tu privacidad y tus mensajes seguros? Claro! En esta época donde todas nuestras comunicaciones pasan por internet y diferentes dispositivos como estar seguros de que nuestros mas intimos secretos no caerán en manos equivocadas, no te preocupes, has llegado al lugar correcto, solo sigue leyendo ;) 

## Introducción

Esta aplicación funciona por medio del código "Cifrado Cesar" que consiste en elegir un número de desplazamiento y luego mover todas las letras hacia la derecha a una nueva posición.

Por ejemplo si usáramos un desplazamiento de 3:

* Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

De esta forma aun si alguien logra entrar a revisar tus mensajes no podrá leerlos si no tiene la clave que será el número de desplazamientos, cool no? 

### Qué puedo hacer con este archivo?

La descarga directa de este archivo te permitirá:

* elegir una clave indicando cuántas posiciones queremos que el cifrado
  desplace cada carácter
* insertar un mensaje (texto) que queremos cifrar
* ver el resultado del mensaje cifrado
* insertar un mensaje (texto) a descifrar
* ver el resultado del mensaje descifrado


### ¿Qué encotrarás en este proyecto? 

* README.md: Con instrucciones a utilizar
* src/cifrar.html: Esta es la página que debes abrir en tu navegador para usar el cifrado. 
* src/cipher.js: acá debes implementar dos funciones:
* cipher.js: archivo javascrip con código completo ejecutable sin errores, incluye función cifrar (code) y descifrar (decode)
    
* src/index.js: archivo javascrip que incluye manejo de DOM para interactuar con el usuario. 
* test/cipher.spec.js: este archivo contiene los tests que puedes ejecutar para ver que todo funcione correctamente.


## ¿Cómo funciona? 

1. Debes tener instalado un editor de texto en tu equipo (como VisualCode, Atom, etc.)
2. Para ejecutar los comandos debes tener instalada una terminal como Gitbash
3. Haz un fork de este proyecto desde tu cuenta de github, lo que te creará tu propio repositorio remoto. 
4. Clona esta carpeta para crear tu propio repositorio local. 
5. Asegurate de instalar node y npm por medio del comando "npm install" en la terminal. 
6. Si todo ha ido bien, deberías poder ejecutar los test solo con el comando `npm test`.


## ¿Qué esperamos para más adelante? 

Esta versión es un demo de proyecto, el futuro de esta aplicación se ve muy prometedor, estamos trabajando en incluir muchas más funciones para mejorar este servicio. Dentro del plan tenemos incluir un chat directo para poder incluir a tus contactos y enviar mensajes cifrados directo dentro de la aplicación sin tener que hacer el molesto "copi paste" a cada momento, también buscamos implementar un login que se ve como un ingreso a una página de juegos para ofrecerte una buena coartada y así no ser tan evidente que estas mandando mensajes en clave por si alguién que no deseas que se entere encuentra abierta la página. Configuraciones que nos gustaria incluir además son mensajes que se auto-destruyen, tiempo máximo de sesión iniciada sin actividad, tiempo máximo de refrescado de claves, etc. todo esto para proporcionar la mejor seguridad para tus mensajes secretos. Además ninguno de tus mensajes deberán quedar almacenados en nuestros servidores por lo que nadie podrá acceder a ellos literalmente. 

Si te gusta el proyecto puedes descargarlo o enviarnos comentarios! 
Saludos 
Mariel Quezada alumna Laboratoria 2018 