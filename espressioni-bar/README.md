# Espressioni Bar — Landing Page (Next.js + Tailwind)

## Como rodar localmente
1. Instale as dependências:
   ```bash
   npm install
   ```
2. Rode o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
3. Abra: http://localhost:3000

## Como trocar imagens
- Coloque suas fotos em `/public/assets/portfolio/bar/`
- Atualize os nomes em `pages/index.js` nas constantes:
  - `HERO_IMAGE`
  - `MENU_IMAGES`
  - `GALLERY_IMAGES`

## Deploy na Vercel (ZIP)
1. Compacte esta pasta inteira (`espressioni-bar`) em ZIP, **ou** use o ZIP fornecido por mim.
2. Na Vercel: Novo Projeto → **Upload** → selecione o ZIP.
3. A Vercel detecta Next.js automaticamente e publica.
4. Você receberá uma URL como `https://espressioni-bar.vercel.app`.
5. Em *Settings → Domains*, adicione seu domínio se desejar.

## Pixel/GA4
O código já dispara eventos com `track()`. Basta ter o Pixel/GA4 inseridos no layout da sua aplicação (via `_document.js` ou snippet no projeto Vercel).
