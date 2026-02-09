@echo off

podman machine start

echo Eteint le conteneur
podman compose down

echo Build et démarre le conteneur
podman compose up -d --build

echo Lancement du terminal linux du conteneur
podman exec -it opencode bash

pause

