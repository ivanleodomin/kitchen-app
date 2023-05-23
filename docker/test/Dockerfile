# Base de imagen Node.js para desarrollo
FROM node:14 as development

# Establecer directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos de la aplicación al contenedor
COPY ./ /app

# Instalar dependencias, incluyendo las de desarrollo
RUN yarn install

# Comando para iniciar la aplicación en modo de desarrollo
CMD ["yarn", "dev"]
