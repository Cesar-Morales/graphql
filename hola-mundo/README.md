### Api GraphQL - Hola MUndo

- Creo el package.json

        npm init -y

- Instalo tsc y typescript

        npm i tsc
        npm i typescript

- Creo archivo de configuracion ts

        npx tsc --init --rootDir src --outDir --lib dom,es6 -module commonjs --removeComments --target es6

- Instalo demas dependencias produccion

        npm install express express-graphql graphql ncp http graphql-import-node compression cors graphql-tools graphql-playground-middleware-express ts-node graphql-tools@4.x

- Instalo dependencias de desarrollo

        npm install @types/compression @types/express @types/cors @types/express-graphql @types/node @types/graphql nodemon -D

## USO

URL = http://localhost:9000/graphql

        {
                hola
                ana: holaConNombre(nombre: " Ana")
                graphql: holaConNombre(nombre: " GraphQL")
                holaAlCUrsoGraphQL
        }
