#!/bin/bash

# Função para iniciar ou reiniciar o MongoDB
start_mongodb() {
    echo "Iniciando o MongoDB..."
    sudo docker start mongodb || sudo docker run -d -p 27017:27017 --name mongodb mongo:4.4
}

# Função para iniciar ou reiniciar o backend
start_backend() {
    echo "Iniciando o backend..."
    sudo fuser -k 3001/tcp
    cd backend
    go run main.go &
    cd ..
}

# Função para iniciar ou reiniciar o frontend
start_frontend() {
    echo "Iniciando o frontend..."
    sudo fuser -k 3000/tcp
    cd frontend
    npm run dev &
    cd ..
}

# Iniciar ou reiniciar todos os serviços
start_mongodb
start_backend
start_frontend

echo "Todos os serviços foram iniciados."