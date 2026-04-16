# neuroai-lab

Site do NeuroAI Lab — Deep Learning aplicado à Neurociência Computacional.  
Construído com **Next.js 14**, **TypeScript**, **Tailwind CSS** e **MDX**.

---

## Stack

| Tecnologia | Uso |
|---|---|
| Next.js 14 (App Router) | Framework |
| TypeScript | Linguagem |
| Tailwind CSS v3 | Estilização |
| @tailwindcss/typography | Tipografia do blog |
| next-mdx-remote | Renderização de posts MDX |
| react-hook-form | Formulário de contato |
| gray-matter | Parsing de frontmatter MDX |
| reading-time | Estimativa de leitura |
| Resend (opcional) | Envio de e-mails |

---

## Instalação

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/neuroai-lab.git
cd neuroai-lab

# 2. Instale as dependências
npm install

# 3. Configure as variáveis de ambiente
cp .env.example .env.local
# Edite .env.local com sua RESEND_API_KEY

# 4. Inicie o servidor de desenvolvimento
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

---

## Estrutura do projeto

```
neuroai-lab/
├── app/                    # App Router (Next.js 14)
│   ├── layout.tsx          # Layout raiz com metadados SEO
│   ├── page.tsx            # Home page
│   ├── about/              # Página Sobre
│   ├── publications/       # Lista de publicações (filtros client-side)
│   ├── projects/           # Projetos de pesquisa
│   ├── blog/               # Lista de posts
│   │   └── [slug]/         # Post individual (MDX)
│   ├── contact/            # Formulário de contato
│   └── api/contact/        # API route (envio de e-mail)
├── components/
│   ├── layout/             # Navbar, Footer
│   ├── sections/           # Hero, Explainer, NeuralNetworkViz, ResearchAreas
│   └── ui/                 # Badge, Button, Card, SectionHeader
├── content/posts/          # Posts do blog em .mdx
├── data/                   # Dados estáticos tipados
│   ├── publications.ts
│   ├── projects.ts
│   └── team.ts
├── lib/
│   └── mdx.ts              # getAllPosts(), getPostBySlug()
├── public/                 # Arquivos estáticos
│   └── images/
├── tailwind.config.ts      # Paleta de cores customizada
├── next.config.ts
├── vercel.json
└── .env.example
```

---

## Como adicionar uma nova publicação

Abra [data/publications.ts](data/publications.ts) e adicione um objeto seguindo a interface `Publication`:

```ts
{
  id: 'pub-007',
  title: 'Título do paper',
  authors: ['Sobrenome, Nome', 'Colaborador, A.'],
  journal: 'Nome do periódico',
  year: 2025,
  type: 'article',          // 'article' | 'preprint' | 'chapter'
  topics: ['Tag1', 'Tag2'],
  doiUrl: 'https://doi.org/...',
  pdfUrl: '/papers/meu-paper.pdf',   // coloque o PDF em public/papers/
  codeUrl: 'https://github.com/...',
}
```

---

## Como adicionar um novo post no blog

Crie um arquivo `.mdx` em `content/posts/` com o frontmatter abaixo:

```mdx
---
title: "Título do post"
date: "2025-01-15"
excerpt: "Descrição curta exibida na listagem."
category: "Deep Learning"
tags: ["Tag1", "Tag2"]
author: "Lazaro C. T."
---

## Conteúdo em Markdown/MDX

Suporta código, tabelas, fórmulas e componentes React.
```

O slug é gerado automaticamente a partir do nome do arquivo.

---

## Deploy na Vercel

1. Importe o repositório em [vercel.com/new](https://vercel.com/new)
2. Adicione a variável de ambiente `RESEND_API_KEY` no painel da Vercel
3. A Vercel detecta automaticamente o framework Next.js — clique em **Deploy**

---

## Licença

MIT © NeuroAI Lab
