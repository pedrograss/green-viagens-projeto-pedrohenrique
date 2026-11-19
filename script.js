const destinos = [
    {
        cidade: "Alicante",
        pais: "Espanha",
        regiao: "Europa",
        categoria: "Internacional",
        dias: "7 dias",
        preco: 5490,
        resumo: "Aéreo + hotel à beira do Mediterrâneo.",
        imagem: "https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=800&q=80"
    },
    {
        cidade: "Porto",
        pais: "Portugal",
        regiao: "Europa",
        categoria: "Internacional",
        dias: "6 dias",
        preco: 4890,
        resumo: "Aéreo + hospedagem no centro histórico.",
        imagem: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=800&q=80"
    },
    {
        cidade: "Moscou",
        pais: "Rússia",
        regiao: "Europa",
        categoria: "Internacional",
        dias: "8 dias",
        preco: 7200,
        resumo: "Aéreo + roteiro cultural pela capital.",
        imagem: "https://images.unsplash.com/photo-1513326738677-b964603b136d?auto=format&fit=crop&w=800&q=80"
    },
    {
        cidade: "Atenas",
        pais: "Grécia",
        regiao: "Europa",
        categoria: "Internacional",
        dias: "7 dias",
        preco: 6150,
        resumo: "Aéreo + passeios históricos e arqueológicos.",
        imagem: "https://images.unsplash.com/photo-1555993539-1732b0258235?auto=format&fit=crop&w=800&q=80"
    },
    {
        cidade: "Miami",
        pais: "Estados Unidos",
        regiao: "América",
        categoria: "Internacional",
        dias: "6 dias",
        preco: 4500,
        resumo: "Aéreo + hotel próximo às praias e compras.",
        imagem: "https://images.unsplash.com/photo-1506966953602-c20cc11f75e3?auto=format&fit=crop&w=800&q=80"
    },
    {
        cidade: "Bangkok",
        pais: "Tailândia",
        regiao: "Ásia",
        categoria: "Internacional",
        dias: "10 dias",
        preco: 8390,
        resumo: "Aéreo + hotel e roteiro pelos templos.",
        imagem: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=800&q=80"
    },
    {
        cidade: "Florianópolis",
        pais: "Brasil",
        regiao: "Sul",
        categoria: "Nacional",
        dias: "5 dias",
        preco: 2390,
        resumo: "Voo + hospedagem com fácil acesso às praias da ilha.",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPWjOVtOr367g--ykRpj1i7eucnSrEZkvJyTXPtR2jL_QiTQf9Mh25m6Cf&s=10"
    },
    {
        cidade: "João Pessoa",
        pais: "Brasil",
        regiao: "Nordeste",
        categoria: "Nacional",
        dias: "6 dias",
        preco: 2150,
        resumo: "Aéreo + hotel à beira-mar e passeios litorâneos.",
        imagem: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=800&q=80"
    },
    {
        cidade: "Aracaju",
        pais: "Brasil",
        regiao: "Nordeste",
        categoria: "Nacional",
        dias: "5 dias",
        preco: 1980,
        resumo: "Voo + hotel próximo à Orla de Atalaia.",
        imagem: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
    },
    {
        cidade: "São Paulo",
        pais: "Brasil",
        regiao: "Sudeste",
        categoria: "Nacional",
        dias: "4 dias",
        preco: 1650,
        resumo: "Aéreo + hotel bem localizado para cultura e lazer.",
        imagem: "https://images.unsplash.com/photo-1543059080-f9b1272213d5?auto=format&fit=crop&w=800&q=80"
    }
];

function formatarBRL(valor) {
    return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function criarCartaoDestino(item) {
    return `
        <article class="card-destino">
            <img src="${item.imagem}" alt="Foto de ${item.cidade}, ${item.pais}">
            <div class="card-corpo">
                <span>${item.categoria} &bull; ${item.regiao} &bull; ${item.dias}</span>
                <h3>${item.cidade}, ${item.pais}</h3>
                <p>${item.resumo}</p>
                <div class="preco-destino">${formatarBRL(item.preco)}</div>
                <button type="button" class="btn-acao" onclick="window.location.href='simulador.html?destino=${encodeURIComponent(item.cidade)}'">
                    Simular este destino
                </button>
            </div>
        </article>
    `;
}

// 1. Destaques na Pagina Principal (3 itens)
const destaquesHome = document.getElementById("destaques-home");
if (destaquesHome) {
    destaquesHome.innerHTML = destinos.slice(0, 3).map(criarCartaoDestino).join("");
}

// 2. Catalogo com filtro e contador
const listaDestinos = document.getElementById("lista-destinos");
if (listaDestinos) {
    const inputBusca = document.getElementById("busca-destino");
    const selectRegiao = document.getElementById("filtro-regiao");
    const btnLimpar = document.getElementById("btn-limpar");
    const contadorItens = document.getElementById("contador-itens");
    const somaCatalogo = document.getElementById("soma-catalogo");

    function atualizarCatalogo() {
        const termo = inputBusca.value.trim().toLowerCase();
        const regiao = selectRegiao.value;

        const filtrados = destinos.filter(item => {
            const bateTexto =
                item.cidade.toLowerCase().includes(termo) ||
                item.pais.toLowerCase().includes(termo) ||
                item.regiao.toLowerCase().includes(termo) ||
                item.categoria.toLowerCase().includes(termo);
            const bateRegiao = regiao === "todos" || item.regiao === regiao;
            return bateTexto && bateRegiao;
        });

        const somaValores = filtrados.reduce((acumulador, item) => acumulador + item.preco, 0);
        contadorItens.textContent = `Exibindo ${filtrados.length} de ${destinos.length} destinos`;
        somaCatalogo.textContent = `Soma dos pacotes exibidos: ${formatarBRL(somaValores)}`;

        if (filtrados.length === 0) {
            listaDestinos.innerHTML = "<p>Nenhum destino encontrado com esse filtro.</p>";
        } else {
            listaDestinos.innerHTML = filtrados.map(criarCartaoDestino).join("");
        }
    }

    inputBusca.addEventListener("input", atualizarCatalogo);
    selectRegiao.addEventListener("change", atualizarCatalogo);
    btnLimpar.addEventListener("click", () => {
        inputBusca.value = "";
        selectRegiao.value = "todos";
        atualizarCatalogo();
    });

    atualizarCatalogo();
}

// 3. Simulador com selecao visual por fotos, crianca a 50% e a vista com 5% off
const containerOpcoesSimulador = document.getElementById("opcoes-destinos-visuais");
if (containerOpcoesSimulador) {
    const simAdultos = document.getElementById("sim-adultos");
    const simCriancas = document.getElementById("sim-criancas");
    const simClasse = document.getElementById("sim-classe");
    const simPagamento = document.getElementById("sim-pagamento");
    const simNomeEscolhido = document.getElementById("sim-nome-escolhido");
    const simCondicaoTexto = document.getElementById("sim-condicao-texto");
    const simTotal = document.getElementById("sim-total");
    const btnSeguirCadastro = document.getElementById("btn-seguir-cadastro");

    let destinoSelecionado = destinos[0].cidade;
    const params = new URLSearchParams(window.location.search);
    const destinoUrl = params.get("destino");
    const destinoSalvo = localStorage.getItem("destinoSelecionadoGreen");

    if (destinoUrl && destinos.some(d => d.cidade.toLowerCase() === destinoUrl.toLowerCase())) {
        destinoSelecionado = destinos.find(d => d.cidade.toLowerCase() === destinoUrl.toLowerCase()).cidade;
    } else if (destinoSalvo && destinos.some(d => d.cidade === destinoSalvo)) {
        destinoSelecionado = destinoSalvo;
    }

    function renderizarOpcoesVisuais() {
        containerOpcoesSimulador.innerHTML = destinos.map(item => `
            <button type="button" class="opcao-destino-card ${item.cidade === destinoSelecionado ? "selecionado" : ""}" data-cidade="${item.cidade}">
                <img src="${item.imagem}" alt="Foto de ${item.cidade}">
                <div class="opcao-destino-info">
                    <strong>${item.cidade}</strong>
                    <small>${item.pais} &bull; ${item.dias}</small>
                    <span>${formatarBRL(item.preco)}</span>
                </div>
            </button>
        `).join("");

        containerOpcoesSimulador.querySelectorAll(".opcao-destino-card").forEach(card => {
            card.addEventListener("click", () => {
                destinoSelecionado = card.getAttribute("data-cidade");
                localStorage.setItem("destinoSelecionadoGreen", destinoSelecionado);
                renderizarOpcoesVisuais();
                calcularTotal();
            });
        });
    }

    function calcularTotal() {
        const pacote = destinos.find(d => d.cidade === destinoSelecionado) || destinos[0];
        const adultos = Math.max(1, parseInt(simAdultos.value, 10) || 1);
        const criancas = Math.max(0, parseInt(simCriancas.value, 10) || 0);
        const multClasse = parseFloat(simClasse.value) || 1;
        const formaPagamento = simPagamento.value;

        // Criancas pagam metade (0.5) e a classe aplica sobre adultos + criancas
        const subtotal = ((adultos * pacote.preco) + (criancas * (pacote.preco * 0.5))) * multClasse;

        // A vista tem 5% de desconto (0.95)
        const total = formaPagamento === "vista" ? subtotal * 0.95 : subtotal;
        const textoPagamento = formaPagamento === "vista" ? "À vista (5% de desconto)" : "Parcelado";

        simNomeEscolhido.textContent = `${pacote.cidade}, ${pacote.pais}`;
        simCondicaoTexto.textContent = textoPagamento;
        simTotal.textContent = formatarBRL(total);

        localStorage.setItem("simulacaoGreen", JSON.stringify({
            destino: pacote.cidade,
            pais: pacote.pais,
            adultos,
            criancas,
            pagamento: textoPagamento,
            total: formatarBRL(total)
        }));
    }

    simAdultos.addEventListener("input", calcularTotal);
    simCriancas.addEventListener("input", calcularTotal);
    simClasse.addEventListener("change", calcularTotal);
    simPagamento.addEventListener("change", calcularTotal);

    btnSeguirCadastro.addEventListener("click", () => {
        calcularTotal();
        window.location.href = "cadastro.html";
    });

    renderizarOpcoesVisuais();
    calcularTotal();
}

// 4. Cadastro com 5 campos e validacao de 3+ regras
const formCadastro = document.getElementById("form-cadastro");
if (formCadastro) {
    const resumoBox = document.getElementById("resumo-simulacao");
    const msgCadastro = document.getElementById("msg-cadastro");
    const simulacaoSalva = JSON.parse(localStorage.getItem("simulacaoGreen") || "null");

    if (simulacaoSalva) {
        resumoBox.innerHTML = `
            Simulação vinculada: <strong>${simulacaoSalva.destino}, ${simulacaoSalva.pais}</strong><br>
            Passageiros: ${simulacaoSalva.adultos} adulto(s) e ${simulacaoSalva.criancas} criança(s) | ${simulacaoSalva.pagamento}<br>
            Valor estimado: <strong>${simulacaoSalva.total}</strong>
        `;
    } else {
        resumoBox.innerHTML = `Nenhuma simulação salva ainda. Você pode cadastrar seus dados ou acessar a <a href="simulador.html" style="color:#86efac;">Área de Simulação</a>.`;
    }

    formCadastro.addEventListener("submit", event => {
        event.preventDefault();

        const nome = document.getElementById("cad-nome").value.trim();
        const email = document.getElementById("cad-email").value.trim();
        const cpfNumeros = document.getElementById("cad-cpf").value.replace(/\D/g, "");
        const telefoneNumeros = document.getElementById("cad-telefone").value.replace(/\D/g, "");
        const dataEmbarque = document.getElementById("cad-data").value;

        const erros = [];

        if (nome.length < 5 || !nome.includes(" ")) {
            erros.push("Informe seu nome e sobrenome completos.");
        }

        if (!email.includes("@") || !email.includes(".")) {
            erros.push("Informe um endereço de e-mail válido.");
        }

        if (cpfNumeros.length !== 11) {
            erros.push("O CPF deve conter exatamente 11 números.");
        }

        if (telefoneNumeros.length < 10) {
            erros.push("Informe um telefone válido com DDD.");
        }

        if (!dataEmbarque) {
            erros.push("Selecione a data prevista de embarque.");
        }

        msgCadastro.style.display = "block";

        if (erros.length > 0) {
            msgCadastro.className = "erro-box";
            msgCadastro.innerHTML = `<strong>Corrija os seguintes pontos:</strong><br>${erros.join("<br>")}`;
        } else {
            msgCadastro.className = "confirmacao-box";
            msgCadastro.innerHTML = `<strong>Cadastro confirmado!</strong><br>Viajante: ${nome} | Embarque previsto: ${dataEmbarque}`;
            formCadastro.reset();
        }
    });
}

// 5. Perguntas frequentes (abrem e fecham) na aba Sobre
document.querySelectorAll(".faq-pergunta").forEach(botao => {
    botao.addEventListener("click", () => {
        const item = botao.closest(".faq-item");
        const aberto = item.classList.toggle("aberto");
        const icone = botao.querySelector(".faq-icone");
        if (icone) {
            icone.textContent = aberto ? "−" : "+";
        }
    });
});
