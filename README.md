# Markdown Links

## Preámbulo

[Markdown](https://es.wipedia.org/wiki/Markdown) es un lenguaje de marcado
ligero muy popular entre developers. Es usado en muchísimas plataformas que
manejan texto plano (GitHub, foros, blogs, ...), y es muy común
encontrar varios archivos en ese formato en cualquier tipo de repositorio
(empezando por el tradicional `README.md`).

Estos archivos `Markdown` normalmente contienen _links_ (vínculos/ligas) que
muchas veces están rotos o ya no son válidos y eso perjudica mucho el valor de
la información que se quiere compartir.


## Introducción

Necesitas revisar si los links de tus archivos .md estan funcionando correctamente o están rotos?

Con la ayuda de Nodejs hemos creado md.Links con esta herramienta podras busar los archivos .md dentro de tus carpetas y ver la cantidad de links que en ellas se encuentran , ademas de la direccion web y si estan funcionando o no , en caso de no estar funcionando te mostrara el error para que puedas solucionarlo.



## Instalación
npm i md-links-majomarquez



## Usabilidad
const mdLinks =require('./md-Links');
node index.js <path-to-folder>

Retornaria de la siguiente manera:
From total links 2
This link is Working  https://nodejs.org/api/http.html#http_http_get_options_callback
Error catched FIX ME! request to https://nodjs.org/ failed, reason: certificate has expired


