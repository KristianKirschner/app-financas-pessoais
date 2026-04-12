# App Finanças Pessoais

* `mobile` → Aplicativo React Native (CLI)
* `backend` → API Node.js com Prisma

Projeto pessoal desenvolvido para estudo e prática de React Native e Node.js

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

