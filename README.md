# Premium Mobile App Prototype

App mobile prototype gerado via Figma Make — React + Vite + Tailwind v4 + shadcn/ui.

## Rodar localmente

```bash
npm install
npm run dev
```

## Deploy na Vercel

Este projeto já está configurado para a Vercel com:
- `vercel.json` com SPA rewrites para o React Router
- `tsconfig.json` para build TypeScript
- `react` e `react-dom` nas `dependencies`

### Via CLI:
```bash
npm i -g vercel
vercel
```

### Via GitHub:
1. Faça push para um repositório GitHub
2. Importe no [vercel.com](https://vercel.com)
3. Configurações detectadas automaticamente:
   - **Framework:** Vite
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
4. Clique em **Deploy**

## Estrutura

```
src/
├── app/
│   ├── App.tsx
│   ├── routes.tsx
│   └── components/
│       ├── ui/         # shadcn/ui components
│       ├── figma/      # Figma-specific helpers
│       ├── Home.tsx
│       ├── Login.tsx
│       ├── Register.tsx
│       ├── Layout.tsx
│       ├── Search.tsx
│       ├── Chat.tsx
│       ├── Orders.tsx
│       ├── Profile.tsx
│       ├── AllCategories.tsx
│       └── ServiceDetails.tsx
├── styles/
│   ├── index.css
│   ├── theme.css
│   └── tailwind.css
└── main.tsx
```
