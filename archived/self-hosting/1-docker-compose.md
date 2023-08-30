---
sidebar_position: 1
sidebar_label: "Docker compose"
---

# Docker compose

Runtime.land uses docker compose to develop in local. You can use the following command to start:

```bash
docker network create land_serverless_network --driver bridge
docker compose -f deploy/docker-compose/docker-compose.yml up -d
```

It will start a local runtime.land instance with a redis instance and a mysql instance. The storage disk is mounted to with `./redis_data`, `./mysql_data` and `./link_data` directories in current directory.

Then you can visit `http://web.127-0-0-1.nip.io` to access the runtime.land dashboard page. After you deploy a project, you can visit `http://<your-project-deployment>.runtime.127-0-0-1.nip.io` to access your project.

:::tip

Rutime.land use [traefik](https://traefik.io/) to proxy requests to services.
You can visit `http://traefik.127-0-0-1.nip.io` to access the traefik dashboard page.
The default username and password is `admin` and `admin`.

:::

## Configuration

The dashboard page is configured by environment variables. You can change it in `deploy/docker-compose/.env` file.

```bash
REDIS_PASSWORD=*********************
REDIS_DIR=./redis_data

MYSQL_DATABASE=land-serverless
MYSQL_HOST=mysql
MYSQL_PORT=3306
MYSQL_USER=root
MYSQL_PASSWORD=*********************
MYSQL_DATA_DIR=./mysql_data

LAND_SERVER_HTTP_ADDR=0.0.0.0:38779
LAND_SERVER_STORAGE_DIR=./land_data
LAND_SERVER_DOMAIN=api.127-0-0-1.nip.io
LAND_SERVER_PROD_DOMAIN=runtime.127-0-0-1.nip.io
LAND_SERVER_PROD_PROTOCOL=http

LAND_RUMTIME_HTTP_ADDR=0.0.0.0:38889
LAND_RUMTIME_STORAGE_DIR=./land_data
LAND_RUNTIME_DOMAIN=runtime.127-0-0-1.nip.io

LAND_WEB_API_ADDR=http://api.127-0-0-1.nip.io
LAND_WEB_DOMAIN=web.127-0-0-1.nip.io

TRAEFIK_DASHBOARD_DOMAIN=traefik.127-0-0-1.nip.io
# echo $(htpasswd -nb admin admin) | sed -e s/\\$/\\$\\$/g
TRAEFIK_DASHBOARD_BASIC_AUTH=admin:$$apr1$$nQU/fkhC$$Lm3ArG/m8aUsPr9a/uMqS1
```
