
# Criação de uma API para um mini E-commerce com NodeJs

API desenvolvida no curso https://balta.io/cursos/criando-apis-com-node


## Instalação

Intalação usando o npm e execução usando o nodemon

```
    npm install 
    nodemon .\bin\server.js
```

    
## Pré-requisitos

- Node.js v8.1.2 (versão mínima)
- Express 4.15.3 (versão mínima)
- Npm 5.0.3 (versão mínima)
- Visual Studio Code (Versão mais recente disponível)
- Conta no https://mailtrap.io/
- Conta no Azure : https://azure.microsoft.com/ 
    - Criação de uma Storage Account
- Criar de um Database MongoDB: https://www.mongodb.com/atlas/database  


## Repositório Original

- https://github.com/balta-io/1972/blob/master/src/app.js



## Pacotes utilizados

- ### Nodemon :
    - Resume: Pacote utilizado para monitorar quaisquer alterações em seu código fonte e reiniciar automaticamente seu servidor. Perfeito para desenvolvimento.
    ``` npm install nodemon --save-dev ``` 
    - site: https://nodemon.io/

- ### Body Parser:
    - Resumo: Pacote que irá auxliar no parseamento para JSON das requisições
    ``` npm install body-parser --save ``` 
    - site: https://github.com/expressjs/body-parser

- ### Mongoose:
    - Resumo: Pacote utilizado para modelagem de dados usando o banco de dados MongoDB
    ``` npm install mongoose --save ``` 
    - site: https://mongoosejs.com/

- ### Guid
    - Resumo: Pacote para geração de GUID(Globally Unique Identifier)
    ``` npm install guid --save ```
    - site: https://github.com/dandean/guid

- ### MD5
    - Resumo: Usado para criptografar e descriptografar senhas, usamos esse pacote para criptografas as senhas de usuários
    ```npm install md5 --save```

- ### Nodemailer
    - Resumo: No curso foi usada para envio de email o SendGrid, mas como não tenho conta, usei para envio de email o mailtrap.io e o pacote Nodemailer para abstratir o envio de mail.
    ```npm install nodemailer --save```
    - site: https://nodemailer.com/

- ### Azure Store
    - Resumo: Para persistir as imagens nesse projeto, usamos Azure Storage para salvar nossas imagens no container do azure e salvar no banco de dados MongoDB apenas a URL da imagem, seguindo a melhor prática de não salvar imagens no servidor e nem no banco de dados da aplicação.
    ``` npm install azure-storage --save ```
    - site: https://github.com/Azure/azure-storage-node 

- ### JsonWebToken:
    - Resumo: Para autenticar nossa API usando o Jwt
    ``` npm install jsonwebtoken -save  ```
    - site: https://github.com/auth0/node-jsonwebtoken   



## 🔗 Links
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/anagabrielalds/)


