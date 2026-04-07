#!/bin/bash

# # # # # # # # # # # # # # # # # # # # # # # # # # #
# Title : Docker Command Instruction                #
# Author: Aris Riswanto                             #
# # # # # # # # # # # # # # # # # # # # # # # # # # #

# ---
# [0] Notes
# ---

# Port Development = 9nnn (example: 9001) | domain => name-dev.alvindocs.com
# Port Production  = 8nnn (example: 8001) | domain => name.alvindocs.com
# Port Staging     = 7nnn (example: 7001) | domain => name-stag.alvindocs.com

#
#
#
#
#

# ---
# [1] Development
# ---

# if fresh code or fisrt clone from github, run yarn install
docker run --rm -v $(pwd)/src:/app --workdir /app node:16.17-alpine yarn install

# set permission 777 (full access) for src folder
chmod 777 src -R

docker-compose --env-file .env.development config                                 # Verify docker compose development config
docker-compose -p apps-alvindocscom-dev --env-file .env.development up -d         # Start all service
docker-compose -p apps-alvindocscom-dev --env-file .env.development ps            # Show service status
docker-compose -p apps-alvindocscom-dev --env-file .env.development down          # Stop and remove all service
docker-compose -p apps-alvindocscom-dev --env-file .env.development logs app -f   # Show logs container
docker-compose -p apps-alvindocscom-dev --env-file .env.development exec app bash # Login into container

#
#
#
#
#

# ---
# [2] Production
# ---

docker-compose -f docker-compose.yaml -f docker-compose.production.yaml --env-file .env.production build --no-cache     # Build image for first build
docker-compose -f docker-compose.yaml -f docker-compose.production.yaml --env-file .env.production build app --no-cache # Build image with specific service for first build
docker-compose -f docker-compose.yaml -f docker-compose.production.yaml --env-file .env.production config               # Verify docker compose production config
docker-compose -f docker-compose.yaml -f docker-compose.production.yaml --env-file .env.production up -d                # Start all service
docker-compose -f docker-compose.yaml -f docker-compose.production.yaml --env-file .env.production ps                   # Show service status
docker-compose -f docker-compose.yaml -f docker-compose.production.yaml --env-file .env.production down --volume        # Stop and remove all service
docker-compose -f docker-compose.yaml -f docker-compose.production.yaml --env-file .env.production logs app -f          # Show logs container
docker-compose -f docker-compose.yaml -f docker-compose.production.yaml --env-file .env.production exec app bash        # Login into container

# Deploying changes for production environment
docker-compose -f docker-compose.yaml -f docker-compose.production.yaml --env-file .env.production build app
docker-compose -f docker-compose.yaml -f docker-compose.production.yaml --env-file .env.production down --volume
docker-compose -f docker-compose.yaml -f docker-compose.production.yaml --env-file .env.production up -d

#
#
#
#
#

# ---
# [3] Staging
# ---

docker-compose -p apps-alvindocscom-stag -f docker-compose.yaml -f docker-compose.staging.yaml --env-file .env.staging build --no-cache     # Build image for first build
docker-compose -p apps-alvindocscom-stag -f docker-compose.yaml -f docker-compose.staging.yaml --env-file .env.staging build app --no-cache # Build image with specific service for first build
docker-compose -p apps-alvindocscom-stag -f docker-compose.yaml -f docker-compose.staging.yaml --env-file .env.staging config               # Verify docker compose staging config
docker-compose -p apps-alvindocscom-stag -f docker-compose.yaml -f docker-compose.staging.yaml --env-file .env.staging up -d                # Start all service
docker-compose -p apps-alvindocscom-stag -f docker-compose.yaml -f docker-compose.staging.yaml --env-file .env.staging ps                   # Show service status
docker-compose -p apps-alvindocscom-stag -f docker-compose.yaml -f docker-compose.staging.yaml --env-file .env.staging down --volume        # Stop and remove all service
docker-compose -p apps-alvindocscom-stag -f docker-compose.yaml -f docker-compose.staging.yaml --env-file .env.staging logs app -f          # Show logs container
docker-compose -p apps-alvindocscom-stag -f docker-compose.yaml -f docker-compose.staging.yaml --env-file .env.staging exec app bash        # Login into container

# Deploying changes for staging environment
docker-compose -p apps-alvindocscom-stag -f docker-compose.yaml -f docker-compose.staging.yaml --env-file .env.staging build app
docker-compose -p apps-alvindocscom-stag -f docker-compose.yaml -f docker-compose.staging.yaml --env-file .env.staging down --volume
docker-compose -p apps-alvindocscom-stag -f docker-compose.yaml -f docker-compose.staging.yaml --env-file .env.staging up -d

#
#
#
#
#

# ---
# [4] Push Dev
# ---

#
#
#
#
#

# ---
# [5] Push Prod
# ---

# Push :latest
docker tag nexus-pull.alvindocs.com/alvindo/apps:latest nexus-push.alvindocs.com/alvindo/apps:latest
docker push nexus-push.alvindocs.com/alvindo/apps:latest
