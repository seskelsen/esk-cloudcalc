# Calculadora de Custos em Nuvem

Compare gratuitamente os custos mensais de **AWS**, **Google Cloud** e **Azure** para stacks típicas de produção: Kubernetes, SQL gerenciado, armazenamento de objetos, CDN e inferência de LLM.

Acesse em: **[seskelsen.github.io/esk-cloudcalc](https://seskelsen.github.io/esk-cloudcalc/)**

## Funcionalidades

- Comparativo mensal entre AWS, Google Cloud e Azure
- Componentes: Kubernetes, SQL gerenciado, Object Storage, CDN, Inferência de LLM
- Análise de break-even: GPU self-hosted vs APIs gerenciadas (Bedrock, Vertex AI, Azure OpenAI)
- Tabela de preços editável — substitua pelos seus preços contratados
- Tema claro/escuro
- 100% no navegador — sem backend, sem cadastro, sem coleta de dados
- Estado salvo automaticamente no navegador (localStorage)

## Aviso

> Os valores são **estimativas direcionais** baseadas em preços de tabela de abril de 2025.
> Não refletem descontos por volume, preços negociados ou variações regionais.
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
├── index.html          # Aplicação completa (SPA)
├── assets/
│   └── chart.min.js    # Chart.js 4.4.7 (hospedado localmente)
├── README.md
└── LICENSE
```

## Licença

MIT — veja [LICENSE](LICENSE).
