
# App Finanças Pessoais

* `mobile` → Aplicativo React Native (CLI)
* `backend` → API Node.js com Prisma

Projeto pessoal desenvolvido para estudo e prática.

---

## Como executar


## Backend

```bash
cd backend
npm install
npx prisma migrate dev
npm run dev
```

API disponível em:  
http://localhost:3333

---

## Mobile

```bash
cd mobile
npm install
npx react-native run-android
```
## Configuração da API

Em ```src/services/api.js```, localhost refere-se ao próprio dispositivo/emulador, não à máquina host onde a API está rodando.

Por isso, para desenvolvimento local, utilize o IP da sua máquina na rede:

```js
baseURL: "http://SEU_IP:3333/"
```

---


# Endpoints
## Autenticação e Usuário
As rotas abaixo gerenciam o acesso e perfil. Login e Cadastro não exigem token.

| Método | Rota | Descrição | Bearer Token |
| :--- | :--- | :--- | :--- |
| `POST` | `/users` | Cadastro de novo usuário | Não |
| `POST` | `/login` | Autenticação e geração de token | Não |
| `GET` | `/me` | Detalhes do usuário autenticado | Sim |

## Operações Financeiras
Todas as rotas de movimentação exigem o header `Authorization: Bearer <token>`.

| Método | Rota | Descrição | Parâmetros |
| :--- | :--- | :--- | :--- |
| `POST` | `/receive` | Novo registro (receita/despesa) | Body JSON |
| `GET` | `/balance` | Saldo e resumo diário | `query: date` |
| `GET` | `/receives` | Listagem de registros por data | `query: date` |
| `DELETE` | `/receives/delete` | Exclusão de registro específico | `query: item_id` |
