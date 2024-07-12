# Prueba Técnica para Desarrollador Angular 16

Este proyecto es una aplicación de Angular que demuestra operaciones CRUD con usuarios, incluyendo pruebas unitarias y pruebas end-to-end usando Cypress.

## Prerrequisitos

Antes de comenzar, asegúrate de tener los siguientes requisitos:

- **Node.js y npm**: Descarga e instala desde [Node.js](https://nodejs.org/).
- **Git**: Descarga e instala desde [Git](https://git-scm.com/).
- **Angular CLI**: Instala globalmente ejecutando:

  ````sh
  npm install -g @angular/cli

<!-- 1.Clonar el Repositorio: -->
## Configuración del Proyecto

1. Clona el repositorio:

   ```sh
    git clone https://github.com/Osman-Suastegui/prueba-tecnica-angular.git
2. Instalar Dependencias:
    
   ```sh
   npm install

3. Servir la Aplicación Angular:

   ```sh
   ng serve

4. Ejecutar Pruebas Unitarias:
 
   ```sh
   ng test

5. Ejecutar Pruebas End-to-End con Cypress:

   ```sh
   npx cypress open
6. Arquitectura del sistema

        |-- app
            |-- modules
                |-- home
                    |-- [+] components
                    |-- [+] pages
                    |-- home-routing.module.ts
                    |-- home.module.ts
            |-- core
                |-- [+] authentication
                |-- [+] footer
                |-- [+] guards
                |-- [+] interceptors
                |-- [+] mocks
                |-- [+] services
                |-- [+] header
                |-- core.module.ts
            |
            |-- shared
                |-- [+] components
                |-- [+] directives
                |-- [+] pipes
                |-- [+] models
        |-- assets