criar arquivo package
### npm init

gerenciar  as requisições , rotas, e urls
### npm install --save express

rodar o prjeto
### node app.js

Sequelize é uma biblioteca javascript que facilita o gerenciamento do banco de dados  SQL
### npm install --save sequelize

instalar o driver do mysql2 do banco de dados 
### npm install --save mysql2

sequelize-cli interface de linha de comando usada para criar modelos,configurações e arquivo de migração para banco de daos
### npm install --save-dev sequelize-cli

iniciar o sequelize-cli e criar o criar arquivo config
### npx sequelize-cli init

manipular variaveis de ambiente
### npm install dotenv --save

criar a models usuarios
### npx sequelize-cli model:generate --name Users --attributes name:string,email:string

para executar uma migration
### npx sequelize-cli db:migrate