#!/usr/bin/env sh
set -eu
envsubst '${SERVER_NAME}' < /etc/nginx/conf.d/mysite.conf > /etc/nginx/conf.d/default.conf
exec "$@"