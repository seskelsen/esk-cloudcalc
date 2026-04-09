# v2.0: Novos Serviços, Preços Regionais, Spot, Comparação, PWA

## 🎉 Destaques

- **Serverless (Lambda/Cloud Functions)**: Invocações + GB/segundo
- **Cache (ElastiCache/Memorystore)**: Nós + horas mensais  
- **API Gateway**: Requisições por milhão/mês
- **Preços Regionais**: EUA (1×), Europa (+5%), Brasil (+20%)
- **Análise de Spot/Preemptible**: Desconto editável + tabela comparativa
- **Comparação de Cenários**: Salve e compare lado a lado com Δ% + gráfico
- **Modo Offline (PWA)**: Service Worker + installável como app
- **PNG Export**: Baixar gráficos como imagem
- **Print-Friendly**: Botão imprimir com CSS otimizado

## 🔧 Melhorias Técnicas

- XSS protection em nomes de cenários (HTML entity encoding)
- WCAG accessibility: `role="region"` + `aria-label` em todas sections
- Removido CDN externo (Fontshare) → system fonts (mais rápido)
- og-image em PNG para melhor compatibilidade em social media
- Sitemap.xml + SEO meta tags (og:image, og:description, etc)
- localStorage v2 com fallback automático para v1 (zero data loss)
- Service Worker com estratégia cache-first + stale-while-revalidate

## 📊 Dados  

- Preços atualizados: **abril de 2026**
- Suporte a **3 regiões principais** (EUA, Europa, Brasil)
- **10 componentes de custo** (v1: 7)
- 50+ campos editáveis
- Exportação CSV com todas as seções

## 🚀 Como Usar

1. Acesse: https://seskelsen.github.io/esk-cloudcalc/
2. Edite os inputs para sua carga de trabalho
3. Selecione região de hospedagem
4. Salve múltiplos cenários e compare
5. Exporte PNG/CSV ou imprima

## 🐛 Correções

- Sintaxe HTML/JS validada (Node.js `--check`)
- Todos os 6 gráficos com suporte a PNG download
- Region multiplier aplicado corretamente a todas as linhas de custo

## 📝 Notas

- Preços são **estimativas direcionais** — consulte calculadoras oficiais para orçamentos precisos
- Spot discounts refletem histórico AWS/GCP/Azure (pode variar)
- PWA funciona offline — salve seu navegador offline primeiro, depois trabalhe sem internet

---

**Arquitetura:** SPA monolítica (HTML5 + Vanilla JS + Chart.js 4.4.7 local)  
**Build:** Zero dependencies (100% no navegador)  
**Deploy:** GitHub Pages com Actions  
**Status:** Production-ready ✅
