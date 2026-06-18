ls -a Dockerfile .dockerignore
docker build -t ci-cd-api .
docker run -p 3000:3000 ci-cd-api
mkdir -p .github/workflows
git checkout -b feature/break-things

