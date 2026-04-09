# Calculadora de Custos em Nuvem

Compare gratuitamente os custos mensais de **AWS**, **Google Cloud** e **Azure** para stacks típicas de produção: Kubernetes, SQL gerenciado, armazenamento de objetos, CDN e inferência de LLM.

Acesse em: **[seskelsen.github.io/esk-cloudcalc](https://seskelsen.github.io/esk-cloudcalc/)**

## Funcionalidades

- Comparativo mensal entre AWS, Google Cloud e Azure
- Componentes: Kubernetes, SQL gerenciado, Object Storage, CDN, Inferência de LLM, **Serverless, Cache, API Gateway**
- **Preços regionalizados:** EUA, EU e Brasil (+20%)
- **Análise de Spot/Preemptible:** compare on-demand vs spot instances com descontos
- **Comparação de cenários:** salve múltiplos cenários e compare custo/performance
- Análise de break-even: GPU self-hosted vs APIs gerenciadas (Bedrock, Vertex AI, Azure OpenAI)
- Tabela de preços editável — substitua pelos seus preços contratados
- Tema claro/escuro + Offline (PWA com Service Worker)
- Exportar como CSV, PNG ou Imprimir
- 100% no navegador — sem backend, sem cadastro, sem coleta de dados
- Estado salvo automaticamente no navegador (localStorage)

## 🆕 Novidades — Versão 2.0 (Abril 2026)

### Serviços novos
- **Serverless (Lambda/Cloud Functions):** invocações + duração (GB/s)
- **Cache (ElastiCache/Memorystore):** nós + horas mensais
- **API Gateway:** requisições por mês

### Funcionalidades novas
- **Seletor de região:** EUA, EU, Brasil — aplicado a todos os preços (+5% EU, +20% Brasil)
- **Análise de Spot/Preemptible:** desconto editável (AWS 68%, GCP 60%, Azure 65%)
- **Comparação de cenários:** salve dois cenários e compare lado a lado (Δ%, gráfico)
- **Modo offline (PWA):** funciona sem internet, instálavel como app no desktop/mobile
- **PNG export:** baixar gráficos como imagem (compartilhar no Slack, email, etc)
- **Print-friendly:** botão de imprimir com CSS optimizado para papel

### Melhorias  
- Preços atualizados para abril de 2026
- Removido CDN externo (Fontshare) — usa system fonts (mais rápido, zero rastreamento)
- XSS protection em nomes de cenários
- Acessibilidade WCAG: `role="region"` em todas as sections, skip-link melhorado
- Sitemap e Open Graph para SEO

## Aviso

> Os valores são **estimativas direcionais** baseadas em preços de tabela de **abril de 2026**.
> Não refletem descontos por volume, preços negociados ou variações regionais não-oficializadas.
> Consulte as calculadoras oficiais para orçamentos precisos:
> - [AWS Pricing Calculator](https://calculator.aws/pricing/2/home)
> - [Google Cloud Pricing Calculator](https://cloud.google.com/products/calculator)
> - [Azure Pricing Calculator](https://azure.microsoft.com/pricing/calculator/)

## Como usar localmente

Basta abrir o `index.html` no navegador — não há dependências externas de runtime.

```bash
# Clone o repositório
git clone https://github.com/seskelsen/esk-cloudcalc.git
cd esk-cloudcalc

# Abra no navegador (qualquer um desses)
open index.html          # macOS
start index.html         # Windows
xdg-open index.html      # Linux
```

## Estrutura

```
esk-cloudcalc/
├── index.html                    # Aplicação completa (SPA, v2.0)
├── sitemap.xml                   # XML sitemap para SEO
├── assets/
│   ├── chart.min.js              # Chart.js 4.4.7 (local)
│   ├── og-image.png              # Preview image (1200×630)
│   ├── favicon.svg               # Ícone do navegador
│   ├── manifest.json             # PWA Web App Manifest
│   └── sw.js                     # Service Worker (offline cache)
├── package.json                  # Dev dependencies (sharp para build)
├── README.md
└── LICENSE
```

## Licença

MIT — veja [LICENSE](LICENSE).
