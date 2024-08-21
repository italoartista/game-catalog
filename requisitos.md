# Documento de Requisitos - Sistema de Catálogo de Jogos

## Visão Geral

O sistema de catálogo de jogos permitirá aos usuários adicionar, visualizar, atualizar e remover jogos de um catálogo. O sistema será desenvolvido utilizando Express.js para gerenciar as operações de CRUD (Criar, Ler, Atualizar, Excluir) e implementará regras de negócios específicas para garantir a integridade e a qualidade dos dados.

## Requisitos Funcionais

### 1. Adicionar um Novo Jogo

**Endpoint:** `POST /games`

**Descrição:** Permite que o usuário adicione um novo jogo ao catálogo.

**Parâmetros:**
- `name` (string, obrigatório): Nome do jogo.
- `genre` (string, obrigatório): Gênero do jogo.
- `releaseDate` (string, formato ISO 8601, obrigatório): Data de lançamento do jogo.
- `platform` (string, obrigatório): Plataforma em que o jogo está disponível.
- `rating` (number, opcional): Avaliação do jogo (0 a 10).



**Resposta:**
- Status HTTP 201 Created
- Corpo da resposta: Objeto do jogo criado

**Validações:**
- Verificar se todos os parâmetros obrigatórios estão presentes.
- `releaseDate` deve ser uma data válida no formato ISO 8601.
- `rating`, se fornecido, deve estar entre 0 e 10.

### 2. Listar Todos os Jogos

**Endpoint:** `GET /games`

**Descrição:** Recupera todos os jogos do catálogo.

**Parâmetros:**
- `page` (integer, opcional): Número da página para paginação.
- `limit` (integer, opcional): Número de jogos por página.

**Resposta:**
- Status HTTP 200 OK
- Corpo da resposta: Lista de jogos com informações básicas (id, nome, gênero, data de lançamento, plataforma, avaliação).

### 3. Visualizar um Jogo Específico

**Endpoint:** `GET /games/:id`

**Descrição:** Recupera detalhes de um jogo específico baseado no ID.

**Parâmetros:**
- `id` (string, obrigatório): ID do jogo a ser recuperado.

**Resposta:**
- Status HTTP 200 OK
- Corpo da resposta: Objeto do jogo com todos os detalhes.

**Validações:**
- Verificar se o jogo com o ID fornecido existe.

### 4. Atualizar um Jogo

**Endpoint:** `PUT /games/:id`

**Descrição:** Atualiza as informações de um jogo existente.

**Parâmetros:**
- `id` (string, obrigatório): ID do jogo a ser atualizado.

**Corpo da Requisição:**
- `name` (string, opcional): Novo nome do jogo.
- `genre` (string, opcional): Novo gênero do jogo.
- `releaseDate` (string, formato ISO 8601, opcional): Nova data de lançamento.
- `platform` (string, opcional): Nova plataforma.
- `rating` (number, opcional): Nova avaliação (0 a 10).

**Resposta:**
- Status HTTP 200 OK
- Corpo da resposta: Objeto do jogo atualizado.

**Validações:**
- Verificar se o jogo com o ID fornecido existe.
- `releaseDate` deve ser uma data válida no formato ISO 8601.
- `rating`, se fornecido, deve estar entre 0 e 10.

### 5. Remover um Jogo

**Endpoint:** `DELETE /games/:id`

**Descrição:** Remove um jogo do catálogo.

**Parâmetros:**
- `id` (string, obrigatório): ID do jogo a ser removido.

**Resposta:**
- Status HTTP 204 No Content

**Validações:**
- Verificar se o jogo com o ID fornecido existe.

## Regras de Negócios

1. **Validação de Dados:**
   - Todos os dados fornecidos devem ser validados para garantir integridade e consistência.
   - `releaseDate` deve ser verificado quanto ao formato e validade.
   - `rating`, se fornecido, deve estar no intervalo de 0 a 10.

2. **Paginação:**
   - Para a listagem de jogos, deve ser implementada paginação para evitar sobrecarga de dados e melhorar a performance.
   - Os parâmetros `page` e `limit` devem ser usados para controlar a paginação.

3. **Identificação Única:**
   - Cada jogo deve ter um ID único para garantir a identificação correta durante operações de leitura, atualização e exclusão.

4. **Proteção Contra Dados Duplicados:**
   - Não deve ser permitido adicionar jogos com nomes idênticos e datas de lançamento idênticas na mesma plataforma.

5. **Autenticação e Autorização:**
   - Em um ambiente de produção, operações de CRUD devem ser protegidas por mecanismos de autenticação e autorização.

## Exemplo de Resposta de Erro

**Código de Erro:** 400 Bad Request

**Descrição:** Dados inválidos fornecidos.

**Corpo da Resposta:**
```json
{
  "error": "Invalid input data",
  "message": "The 'releaseDate' must be in ISO 8601 format."
}
