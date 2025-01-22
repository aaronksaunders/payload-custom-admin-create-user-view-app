create payload project, select postgres as database

create local database, it will be need to create the migrations, be sure to also set .env variables for teh URL and the secret

modify the package.json, make sure you have these three entries
```
  "scripts": {
    "build": "cross-env NODE_OPTIONS=--no-deprecation next build",
    "migrate": "cross-env NODE_OPTIONS=--no-deprecation payload migrate",
    "start": "cross-env NODE_OPTIONS=--no-deprecation payload migrate && next start"
  },
```

create the initial migration
```
npx payload migrate:create
```


create project in railway

add the postgres database service

add database_url as a shared variable for the project


add new service "Volume"

specify mount path
```
/app/media
```
