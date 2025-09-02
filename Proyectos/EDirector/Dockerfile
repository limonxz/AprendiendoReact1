# Usa una imagen base de Node.js (elige una versión LTS actualizada)
FROM node:20-alpine AS builder

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos package.json y package-lock.json (o yarn.lock)
COPY package*.json ./
COPY tsconfig*.json ./

# Instala las dependencias y verifica vulnerabilidades
RUN npm install && npm audit fix --force

# Copia el resto del código de la aplicación
COPY . .

# Expose the port your app runs on
# EXPOSE 5173

# Construye la aplicación para producción
# CMD ["npm", "start"]

# Production Stage
RUN npm run build

# Usa una imagen ligera de servidor web para servir los archivos estáticos
FROM nginx:1-alpine-slim
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 5173
CMD ["nginx", "-g", "daemon off;"]