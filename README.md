https://pedrograss.github.io/green-viagens-projeto-pedrohenrique/
# Green Viagens — Projeto Acadêmico SENAI

Sistema web de **5 telas interligadas** desenvolvido em **HTML5**, **CSS3** e **JavaScript** para consulta de pacotes de viagem, simulação de valores e cadastro de usuários, com foco em navegação simples e leitura confortável[cite: 2, 4, 5, 6].

## Tema e Proposta

A **Green Viagens** apresenta uma plataforma digital de agência de viagens com opções de destinos internacionais e capitais brasileiras[cite: 4, 5, 11]. O projeto permite explorar pacotes, simular orçamentos com regras de cálculo dinâmicas e preencher um formulário de cadastro com validação no navegador[cite: 2, 4, 5, 11].

## Estrutura das 5 Telas

- **Início (`index.html`)**: Apresentação da proposta da agência, atalhos rápidos e seção com **3 destinos em destaque**[cite: 2, 4, 11].
- **Catálogos (`catalogo.html`)**: Vitrine gerada via JavaScript a partir de um array de objetos com 10 destinos (Alicante, Porto, Moscou, Atenas, Miami, Bangkok, Florianópolis, João Pessoa, Aracaju e São Paulo), com filtro por texto e região, contador de itens exibidos e soma dos valores[cite: 2, 4, 5, 10].
- **Área de Simulação (`simulador.html`)**: Seleção visual por cartões com foto de cada destino, cálculo de adultos, crianças (**50% de desconto / metade do valor**), classe do voo (Econômica ou Executiva +50%) e forma de pagamento (**à vista com 5% de desconto** ou parcelado)[cite: 4, 5, 9].
- **Cadastrar Usuário (`cadastro.html`)**: Exibe o resumo da simulação salva no `localStorage` e reúne **5 campos** (`Nome completo`, `E-mail`, `CPF`, `Telefone com DDD` e `Data prevista de embarque`) com validação em JavaScript[cite: 2, 4, 5, 8].
- **Sobre nós (`sobre.html`)**: Apresenta comparativo em tabela, lista ordenada em 4 passos e perguntas frequentes (**FAQ**) que abrem e fecham ao clicar[cite: 2, 4, 5, 7].

## Arquivos do Projeto

- `index.html`[cite: 4]
- `catalogo.html`[cite: 4]
- `simulador.html`[cite: 4]
- `cadastro.html`[cite: 4]
- `sobre.html`[cite: 4]
- `style.css` — Variáveis CSS (`:root`), layout com Flexbox e Grid, estados `:hover` e `:focus` e responsividade até `600px`[cite: 2, 4, 6].
- `script.js` — Array de objetos dos destinos, filtragem (`.filter()`), somatório (`.reduce()`), cálculo da simulação, persistência com `localStorage`, validação de formulário e controle das perguntas frequentes[cite: 2, 4, 5].

- **Início (`index.html`)**: `![Tela Inicial](prints/index.png)`
- **Catálogos (`catalogo.html`)**: `![Tela Catálogo](prints/catalogo.png)`
- **Simulador (`simulador.html`)**: `![Tela Simulador](prints/simulador.png)`
- **Cadastro (`cadastro.html`)**: `![Tela Cadastro](prints/cadastro.png)`
- **Sobre nós (`sobre.html`)**: `![Tela Sobre nós](prints/sobre.png)`

## Autor

**Pedro Henrique da Silva** — Projeto prático do curso técnico (SENAI)[cite: 4, 7].
