# From the project root folder:

## 1. Launch the project and build
To launch the project and build, type the following command:
```bash
docker compose up -d --build
```
## 2. Launch the Linux terminal from the container
To launch the Linux terminal from the container, type the following command:
```bash
docker exec -it opencode_dev bash
```

## 3. Install Bun for dependencies
To start the Bun installation, type the following command:
```bash
bun install
```

## 4. Launch the OpenCode command line interface
To launch the OpenCode command line interface, type the following command:
```bash
bun dev
```

## 5. Display containers 
To list the containers, type the following command:
```bash
docker ps
```

## 6. After modification, perform a commit 
To commit your changes, type the following command:
```bash
docker commit <container_id> opencode-docker:v2
```
## 7. Create the image from the path where the tar file is located
To save the image, type the following command:
```bash
docker save -o opencode-docker.tar opencode-docker:v2
```


# From the OpenCode Docker image:

## 1. Retrieve the image
To retrieve the OpenCode project Docker image, type the following command:
```bash
docker load -i opencode.tar
```

## 2. Launch the Linux terminal from the container
To launch the Linux terminal from the container, type the following command:
```bash
docker exec -it opencode_dev bash
```

## 3. Launch the development server
Once inside the container and installation is complete, launch the project:
```bash
bun dev
```
