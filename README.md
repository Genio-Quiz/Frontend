# Como rodar o projeto?

Para rodar o projeto você vai precisar:

- Crie uma pasta na sua área de trabalho e arreste ela para o icone do vscode
- No vscode use o comando Crtl + Shift + " para abrir o terminal 
## Comandos para rodar o projeto no terminal

```bash
git clone https://github.com/Genio-Quiz/Frontend #Faça isso para clonar o repo no seu pc
cd Frontend # para abrir no seu a pasta nov que foi criada
npm install node # isso serve para instalar o node_modules no projeto
npm run dev # Esse é um comando para abrir o projeto no navegador, clique no link que aparece no terminal para abrir a pagina
```

# Como dar commit?

Para dar commit você vai precisar:

- No vscode use o comando Crtl + Shift + " para abrir o terminal no vscode

```bash
cd Frontend #Só de esse comando se você ainda não está na pasta
git init #Isso vai iniciar o git
git remote add origin https://github.com/Genio-Quiz/Frontend 
git add .
git checkout -b dev
git commit -m "docs: insira mensagem"
git push -u origin dev
```
