# API_Escola_de_Ingles.Alura

Bem-vindo ao repositório da API da Escola de Inglês. Este projeto é desenvolvido em Node.js, usando o Sequelize como ORM e um banco de dados SQL. Ele fornece rotas para gerenciar níveis, pessoas, matriculas e turmas no contexto da escola.

## Como Baixar e Testar Localmente

Siga as instruções abaixo para baixar e testar o projeto em sua própria máquina:

### Pré-requisitos

Antes de começar, certifique-se de que você tenha instalado:

- Node.js
- NPM
- Banco de Dados MySQL

### Passos para Instalação

1. Clone este repositório para o seu computador:

   ```bash
   git clone https://github.com/seu-usuario/escola-de-ingles-api.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd escola-de-ingles-api
   ```

3. Instale as dependências do projeto:

   ```bash
   npm install
   ```

4. Configure o Banco de Dados:

   - Crie um banco de dados no seu sistema de banco de dados SQL e atualize as informações de conexão no arquivo `config/database.js`.

5. Execute as Migrações do Banco de Dados:

   ```bash
   npx sequelize db:migrate
   ```

6. Inicie o servidor:

   ```bash
   npm run start
   ```

7. O servidor estará rodando em http://localhost:3000.

### Uso da API

A API fornece as seguintes rotas:

#### Níveis

- `GET /niveis`: Obter todos os níveis.
- `GET /niveis/:id`: Obter um nível específico.
- `POST /niveis`: Criar um novo nível.
- `PUT /niveis/:id`: Atualizar um nível existente.
- `DELETE /niveis/:id`: Apagar um nível.
- `POST /niveis/:id/restaura`: Restaurar um nível excluído.

#### Pessoas

- `GET /pessoas`: Obter todas as pessoas.
- `GET /pessoas/ativas`: Obter todas as pessoas ativas.
- `GET /pessoas/:id`: Obter uma pessoa específica.
- `GET /pessoas/:estudanteId/matricula/:matriculaId`: Obter uma matrícula específica.
- `GET /pessoas/:estudanteId/matricula`: Obter todas as matrículas de um estudante.
- `GET /pessoas/matricula/lotada`: Obter turmas com matrículas lotadas.
- `GET /pessoas/matricula/:turmaId/confirmadas`: Obter matrículas confirmadas em uma turma.
- `POST /pessoas`: Criar uma nova pessoa.
- `POST /pessoas/:estudanteId/matricula`: Criar uma nova matrícula para um estudante.
- `POST /pessoas/:id/restaura`: Restaurar uma pessoa excluída.
- `POST /pessoas/:estudanteId/cancela`: Cancelar uma matrícula de um estudante.
- `POST /pessoas/:estudanteId/matricula/:matriculaId/restaura`: Restaurar uma matrícula excluída.
- `PUT /pessoas/:id`: Atualizar uma pessoa existente.
- `PUT /pessoas/:estudanteId/matricula/:matriculaId`: Atualizar uma matrícula existente.
- `DELETE /pessoas/:id`: Apagar uma pessoa.
- `DELETE /pessoas/:estudanteId/matricula/:matriculaId`: Apagar uma matrícula.

#### Turmas

- `GET /turmas`: Obter todas as turmas.
- `GET /turmas/:id`: Obter uma turma específica.
- `POST /turmas`: Criar uma nova turma.
- `PUT /turmas/:id`: Atualizar uma turma existente.
- `DELETE /turmas/:id`: Apagar uma turma.
- `POST /turmas/:id/restaura`: Restaurar uma turma excluída.

### Testando as Rotas

Você pode usar ferramentas como Postman, Insomnia ou simplesmente o seu navegador para testar as rotas da API. Certifique-se de incluir os dados necessários ao fazer solicitações POST ou PUT.

## Contribuições

Se você deseja contribuir para este projeto, sinta-se à vontade para fazer um fork do repositório e enviar suas contribuições por meio de pull requests.

Projeto desenvolvido como exercicio para o curso de ORM Sequelize da Alura.
