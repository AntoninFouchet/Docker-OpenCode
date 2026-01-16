# Utiliser l'image officielle de Bun
FROM oven/bun:latest

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers du projet dans le conteneur
COPY . .

# Ne pas lancer bun install (conformément aux contraintes)

# Commande pour maintenir le conteneur en vie sans rien faire
CMD ["tail", "-f", "/dev/null"]
