FROM debian:bookworm-slim

# Définir le répertoire de travail
WORKDIR /agent

RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    ca-certificates \
    curl \
    iputils-ping \
    iproute2 \
    && rm -rf /var/lib/apt/lists/*
COPY --from=oven/bun:latest /usr/local/bin/bun /usr/local/bin/bun

# Créé le dossier d'emplacement de travail (volume)
RUN mkdir -p /agent/shared

# Copier les fichiers du projet dans le conteneur
WORKDIR /agent/opencode
COPY . .

RUN bun install

# Commande pour maintenir le conteneur allumé
CMD ["tail", "-f", "/dev/null"]


