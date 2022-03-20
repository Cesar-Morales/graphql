### Api GraphQL - AcademiaOnline

- Creo el package.json

        npm init -y

- Instalo tsc y typescript

        npm i tsc
        npm i typescript

- Creo archivo de configuracion ts

        npx tsc --init --rootDir src --outDir build --lib dom,es6 -module commonjs -target es6 --removeComments --resolveJsonModule true

- Instalo demas dependencias produccion

        npm install express graphql ncp http graphql-import-node compression cors lodash typescript graphql-tools graphql-playground-middleware-express apollo-server-express  tsc-node graphql-tools

- A veces es necesario para IResolvers (con/sin --force)

        npm install graphql-tools@4.x

- Instalo dependencias de desarrollo

        npm install nodemon @types/compression @types/express @types/cors @types/lodash @types/node @types/graphql -D
