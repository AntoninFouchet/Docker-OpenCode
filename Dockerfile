FROM debian:bookworm-slim

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers du projet dans le conteneur
COPY . .

# Créé le dossier d'emplacement de travail (volume)
RUN mkdir -p /app/workspace

RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    ca-certificates \
    git \
    curl \
    iputils-ping \
    iproute2 \
    unzip \
    && rm -rf /var/lib/apt/lists/*
COPY --from=oven/bun:latest /usr/local/bin/bun /usr/local/bin/bun

# Commande pour maintenir le conteneur allumé
CMD ["tail", "-f", "/dev/null"]
