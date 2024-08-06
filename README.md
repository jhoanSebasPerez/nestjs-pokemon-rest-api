<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

### Project taken from the course [NestJS: desarrollo backend escalable](https://fernando-herrera.com/course/nest-backend-escalable) by Fernando Herrera

## For development mode:
1. Clone the repository
2. Install all dependencies
```
npm install
```
3. Install Nest cli
```
npm i -g @nestjs/cli
```
4. Building the database
```
docker-compose up -d
```
5. Clone the file ___env.template___ and rename it to ___env___

6. Fill in the environment variables in the ___env___ file

7. Run the project in the development environment
```
npm run start:dev
```

8. Request to SEED endpoint to populate the database
```
GET http://localhost:3000/api/seed
```

### stack usado
- Mongodb
- NestJS
- Docker