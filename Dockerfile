# Utiliser l'image officielle de Bun
FROM oven/bun:latest

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers du projet dans le conteneur
COPY . .

# Créé le dossier d'emplacement de travail (volume)
RUN mkdir -p /app/workspace

# Commande pour maintenir le conteneur allumé
CMD ["tail", "-f", "/dev/null"]
