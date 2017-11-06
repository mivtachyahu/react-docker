#!/bin/bash
docker-compose build
docker-compose up -d --force-recreate
docker exec -it reactdocker_node_1 /bin/bash
