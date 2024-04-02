# equipo-interno-elite-app
Código Fuente de front end de app para prueba técnica

# EquipoInternoEliteApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.10.
Version de nodeJS: v18.12.1

# Debe tener instalado angular cli, nodeJS y ionic/angular para ejecutar el sitio en web:
npm i -g @angular/cli@15.2.10
npm i -g @ionic/cli

# Al clonar código desde repositorio, requiere:
1. Descargar dependencias, ejecutar:
npm install

2. Ejecute sitio en web: ng serve

# APK
En el archivo readme del api python se explica generación url HTTPS:

Esta ruta se reemplaza en las url del archvio environment.prod.ts del front, ejemplo:
Estas rutas https son un ejemplo ya que son dinámicas y cambian al iniciar ngrok.
apiUrlRegisterUser: 'https://4c9b-2800-bf0-82ab-149-8d3a-88e3-f54e-4818.ngrok-free.app/register',
apiUrlLoginUser: 'https://4c9b-2800-bf0-82ab-149-8d3a-88e3-f54e-4818.ngrok-free.app/login',

Una vez actualizado se genera apk, preparando plataformas. Ejecuta en la terminal raiz del proyecto:
ionic build –prod
ionic capacitor add android (si no encuentra la carpeta android)
ionic capacitor sync (actualizar cambios)
npx cap open android (abre aplicacion android studio con proyecto cargado)

En android studio:
1.Menú superior  build -- clean proyect
2.Menú superior  build--make project
3.Mení superior  build --- buil bundle apk -- build apk

Y se genera apk instalable con  api actualizadas para registro y login
1.Regístrese con nombre, correo y contraseña.
2.Se muestra alerta registro exitoso e inicie sesión con sus credenciales de correo y contraseña
3.Con sesión exitosa ingresa automáticamente a la lista de "Digimons"

Nota: si se generó apk (se comparte url en correo adjunto), pero api de registro y login es bloqueado por android por http.
