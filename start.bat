@echo off

echo Eteint le conteneur
docker compose down

echo Build et démarre le conteneur
docker compose up -d --build

echo Lancement du terminal linux du conteneur
docker exec -it opencode bash

pause
