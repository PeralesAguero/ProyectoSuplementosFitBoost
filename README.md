# FitBoost

## Configuración del Entorno de Desarrollo

1. Clonar el repositorio
2. Copiar el archivo `.env.example` a `.env`:
   ```bash
   cp .env.example .env
   ```
3. Editar el archivo `.env` y configurar las variables de entorno:
   - `MYSQL_PASSWORD`: Contraseña de tu base de datos MySQL local

## Variables de Entorno Requeridas

La aplicación requiere las siguientes variables de entorno:

- `MYSQL_PASSWORD`: Contraseña para la base de datos MySQL

⚠️ IMPORTANTE: Nunca subir el archivo `.env` al repositorio, ya que contiene información sensible.