Voici les commandes exactes à utiliser dans votre terminal une fois que le conteneur est lancé via `start.bat` :

### 1. Récuperer l'image
Pour récuperer l'image du docker du projet OpenCode, tapez la commande suivante :
```bash
docker load -i opencode.tar
```

### 2. Entrer dans le conteneur (Shell)
Pour ouvrir un terminal interactif à l'intérieur de votre conteneur `opencode_dev`, tapez la commande suivante :
```bash
docker exec -it opencode_dev bash
```

### 3. Lancer l'installation des dépendances
Une fois que vous êtes **à l'intérieur du conteneur** (votre invite de commande devrait avoir changé), lancez l'installation :
```bash
bun install
```

### 4. Lancer le serveur de développement
Toujours **à l'intérieur du conteneur**, une fois l'installation terminée, lancez le projet :
```bash
bun dev
```
