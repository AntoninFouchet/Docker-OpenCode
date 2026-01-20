Voici les commandes exactes à utiliser dans votre terminal une fois que le conteneur est lancé via `start.bat` :

### Récuperer l'image
Pour récuperer l'image du docker du projet OpenCode, tapez la commande suivante :
```bash
docker load -i opencode.tar
```

### Créer une image
Pour créer une image du projet OpenCode, tapez les commandes suivantes :
```bash
docker commit <container_id> opencode-docker:v2
docker save -o opencode-docker.tar opencode-docker:v2
```

