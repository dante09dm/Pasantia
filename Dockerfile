# etapa de compilación
FROM node:10-alpine as build-stage

ARG STAGE

WORKDIR /
COPY package*.json ./
RUN npm install
RUN npm install cors
COPY . .
RUN npm run $STAGE

# etapa de producción
FROM nginx:1.17.8-alpine as production-stage

ARG URL

COPY --from=build-stage /dist /usr/share/nginx/html

COPY /config/mysite.conf /etc/nginx/conf.d/mysite.conf

# esto lo hago porque en el build para esos 3 archivos no toma bien la BASE_URL o ningun otro parametro
RUN echo "URL -> " $URL
RUN sed -i "s|js/functions.js|$URL/emergenciasmedicasvista/js/functions.js |g" /usr/share/nginx/html/index.html
RUN sed -i "s|css/stylesSencha.css|$URL/emergenciasmedicasvista/css/stylesSencha.css|g" /usr/share/nginx/html/index.html
RUN sed -i "s|js/alerts.js|$URL/emergenciasmedicasvista/js/alerts.js |g" /usr/share/nginx/html/index.html

# aca hago reemplazo de variables de entorno en nginx
COPY docker-entrypoint.sh .
RUN ["chmod", "+x", "./docker-entrypoint.sh"]
ENTRYPOINT ["./docker-entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]
EXPOSE 80
