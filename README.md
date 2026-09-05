# TODO List - Servicios web con Node.js (REST y SOAP)

## Datos académicos

| Campo | Detalle |
|---|---|
| **Universidad** | Universidad Autónoma de Chihuahua |
| **Facultad** | Facultad de Ingeniería |
| **Carrera** | Ingeniería en Computación |
| **Materia** | Desarrollo de Aplicaciones Web |
| **Docente** | Mtro. Luis Antonio Ramírez Martínez |
| **Actividad** | Tarea 3. Desarrollo de servicios web con Node.js |
| **Alumno** | Bruno Salazar |
| **Matrícula** | [385558] |
| **Fecha de entrega** | [04/09/2026] |

## Descripción

Aplicación de gestión de tareas (TODO List) desarrollada con Node.js y Express. Las tareas se administran en memoria (sin base de datos) y la lógica de negocio se reutiliza tanto por una API REST como por un servicio SOAP, ambos expuestos por el mismo servidor.

## Objetivo

Aplicar los conceptos fundamentales de administración de paquetes con NPM y exponer funcionalidades de una aplicación Node.js mediante servicios REST y SOAP, incorporando además herramientas de logging, refresco en caliente, análisis estático de código y pruebas unitarias.

## Tecnologías utilizadas

- Node.js
- Express (servidor web y API REST)
- soap (node-soap) — servicio SOAP
- Log4js — registro de eventos
- Supervisor — refresco automático en desarrollo
- ESLint — análisis estático de código
- Jest — pruebas unitarias
- Postman — pruebas manuales de los endpoints

## Requisitos previos

- Node.js (v18 o superior recomendado)
- NPM (incluido con Node.js)
- Postman (para probar los endpoints REST y SOAP)
- Git

## Instalación

```bash
git clone <https://github.com/bubuzha/tarea-3-TODO-list-node.js>
cd <tarea-3-RODO-list-node.js>
npm install
```

## Ejecución

Para iniciar la aplicación en modo normal:

```bash
npm start
```

El servidor queda disponible en `http://localhost:3000`.

- API REST: `http://localhost:3000/api/tasks`
- Servicio SOAP: `http://localhost:3000/wsdl`
- Definición WSDL: `http://localhost:3000/wsdl?wsdl`

## Scripts / comandos disponibles

| Comando | Descripción |
|---|---|
| `npm start` | Inicia la aplicación una sola vez, sin reinicio automático. Uso recomendado para producción o para probar el build final. |
| `npm run dev` | Inicia la aplicación con **Supervisor**, que la reinicia automáticamente cada vez que se detecta un cambio en el código fuente. Uso recomendado durante el desarrollo. |
| `npm test` | Ejecuta las pruebas unitarias con **Jest** sobre la lógica de administración de tareas (`src/services/taskService.js`). |
| `npm run lint` | Ejecuta **ESLint** sobre el código del proyecto para verificar que cumple con las reglas de calidad configuradas. |

## Funcionalidades / uso

### API REST

| Método | Endpoint | Descripción |
|---|---|---|
| `GET` | `/api/tasks` | Consulta todas las tareas existentes. |
| `GET` | `/api/tasks/:id` | Consulta una tarea específica por su id. |
| `POST` | `/api/tasks` | Crea una nueva tarea. Body JSON: `{ "title": "Texto de la tarea" }`. |
| `PUT` | `/api/tasks/:id` | Modifica una tarea existente. Body JSON: `{ "title": "...", "completed": true }` (ambos campos opcionales). |
| `DELETE` | `/api/tasks/:id` | Elimina una tarea existente. |

Ejemplo de prueba con `curl`:

```bash
curl -X POST http://localhost:3000/api/tasks -H "Content-Type: application/json" -d "{\"title\":\"Estudiar Node.js\"}"
```

Estas operaciones también pueden probarse con **Postman**, enviando las peticiones a `http://localhost:3000/api/tasks`.

### Servicio SOAP

El servicio SOAP se expone en `http://localhost:3000/wsdl` y su contrato (WSDL) puede consultarse en `http://localhost:3000/wsdl?wsdl`. Expone las siguientes operaciones:

- **GetTasks** — devuelve la lista completa de tareas.
- **AddTask** — recibe un `title` y crea una nueva tarea.

Para probarlo en Postman:
1. Crea una petición `POST` a `http://localhost:3000/wsdl`.
2. Agrega el header `Content-Type: text/xml`.
3. En el body (raw / XML), envía el sobre SOAP correspondiente, por ejemplo para `AddTask`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tns="http://example.com/todoapp/soap">
  <soapenv:Body>
    <tns:AddTaskRequest>
      <tns:title>Tarea de prueba</tns:title>
    </tns:AddTaskRequest>
  </soapenv:Body>
</soapenv:Envelope>
```

## Pruebas

Las pruebas unitarias cubren las operaciones de creación, consulta, actualización y eliminación de tareas sobre `taskService.js`. Se ejecutan con:

```bash
npm test
```

## Análisis de calidad de código

El proyecto usa ESLint (configuración plana en `eslint.config.js`) para verificar el código fuente. Se ejecuta con:

```bash
npm run lint
```

## Estructura general del proyecto

```text
todo-app/
|-- src/
|   |-- app.js                 # Punto de entrada: configura Express y expone REST + SOAP
|   |-- routes/
|   |   `-- tasks.js            # Rutas REST (/api/tasks)
|   |-- services/
|   |   `-- taskService.js      # Lógica de negocio reutilizada por REST y SOAP
|   |-- soap/
|   |   |-- tasks.js            # Implementación del servicio SOAP
|   |   `-- taskService.wsdl    # Contrato WSDL del servicio SOAP
|   `-- utils/
|       `-- logger.js           # Configuración de Log4js
|-- tests/
|   `-- taskService.test.js     # Pruebas unitarias con Jest
|-- logs/                       # Carpeta donde Log4js escribe app.log
|-- package.json
|-- package-lock.json
|-- eslint.config.js
|-- .gitignore
`-- README.md
```

## Autor

Bruno Salazar — [385558]
