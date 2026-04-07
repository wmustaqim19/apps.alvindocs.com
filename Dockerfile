# # # # # # # # # # # # # # # # # # # # # # # # # # #
# ENV [development] =============================   #
# # # # # # # # # # # # # # # # # # # # # # # # # # #

# no development content

# # # # # # # # # # # # # # # # # # # # # # # # # # #
# ENV [production] =============================    #
# # # # # # # # # # # # # # # # # # # # # # # # # # #
# STAGE [1]
ARG NODE_VERSION
ARG NGINX_VERSION
FROM node:${NODE_VERSION} AS builder

ENV NODE_ENV production

# Add a work directory
WORKDIR /app

# Cache and Install dependencies
COPY ./src/package.json .
COPY ./src/yarn.lock .
RUN yarn install --production
RUN yarn add redux-devtools-extension

# Copy app files
COPY ./src .

# Build the app
RUN yarn build


# STAGE [2]
# Bundle static assets with nginx
FROM nginx:${NGINX_VERSION} as production

ENV NODE_ENV production

# Copy built assets from builder
COPY --from=builder /app/build /usr/share/nginx/html

# Change timezone
RUN mv /etc/localtime /etc/localtime.orig && \
  ln -sf /usr/share/zoneinfo/Asia/Jakarta /etc/localtime

# Add your nginx.conf
# COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY ./nginx/templates/default.template.conf /etc/nginx/templates/default.conf.template

# Expose port
EXPOSE 80

# Start nginx
# CMD ["nginx", "-g", "daemon off;"]

