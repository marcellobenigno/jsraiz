


function renderizaProduto(produto, index) {
    return `
            <div class="col-sm-4 mb-3">
                <div class="card">
                    <div class="card loja__item">
                        <img src="${produto.imagem}" class="card-img-top" alt="img-1">
                        <div class="card-body">
                            <h5 class="card-title">${produto.nome}</h5>
                            <small>R$ ${produto.preco}</small>
                            <p class="card-text">${produto.descricao}</p>
                            <button data-index="${index}" data-value="300" class="btn btn-primary btn-add">Adicionar</button>
                        </div>
                    </div>
                </div>
            </div>
            `
}

function renderizaProdutos() {
    let html = '';
    for (let i = 0; i < produtos.length; i++) {
        html = html + renderizaProduto(produtos[i], i);
    }
    return html
}

const carrinhoItens = {};


function renderizaItemCarrinho(produtoCarrinho) {
    return `
            <div class="card carrinho__item">
                <div class="card-body">
                    <h5 class="card-title">${produtoCarrinho.nome}</h5>
                    <p class="card-text">Preço Unidade: R$ ${produtoCarrinho.preco} 
                    | Quantidade: ${produtoCarrinho.quantidade}</p>
                    <p class="card-text">Valor : R$ ${produtoCarrinho.preco * produtoCarrinho.quantidade}</p>
                    <button data-produto-id="${produtoCarrinho.id}" class="btn btn-danger btn-sm btn-remove">Remover</button>
                </div>
            </div>
            `
}

function renderizaCarrinho() {
    let html = '';
    for (let produtoID in carrinhoItens) {
        html = html + renderizaItemCarrinho(carrinhoItens[produtoID]);
    }
    document.querySelector('.carrinho__itens').innerHTML = html;
}

function renderCarrinhoTotal() {
    let total = 0;
    for (let produtoID in carrinhoItens) {
        total = total + (carrinhoItens[produtoID].preco * carrinhoItens[produtoID].quantidade);
    }
    let vazio = document.getElementById("carrinho-vazio");
    vazio.style.display = "none";

    if (total != 0) {
        document.querySelector('.carrinho__total').innerHTML = `<h6>Total: R$ <strong>${total}</strong></h6>`;
    } else {
        document.querySelector('.carrinho__total').innerHTML = '';
        vazio.style.display = "initial";
    }


}

function adicionaItemCarrinho(produto) {
    if (!carrinhoItens[produto.id]) {
        carrinhoItens[produto.id] = produto;
        carrinhoItens[produto.id].quantidade = 0;
    }

    ++carrinhoItens[produto.id].quantidade;

    renderizaCarrinho();
    renderCarrinhoTotal();
}

document.body
    .addEventListener('click', function (event) {
        const elemento = event.target;
        if (elemento.classList.contains('btn-add')) {
            const index = parseInt(elemento.getAttribute('data-index'), 10);
            const produto = produtos[index];

            adicionaItemCarrinho(produto)
        }

        if (elemento.classList.contains('btn-remove')) {
            const produtoId = elemento.getAttribute('data-produto-id');
            if (carrinhoItens[produtoId].quantidade <= 1) {
                delete carrinhoItens[produtoId];
            } else {
                --carrinhoItens[produtoId].quantidade;
            }
            renderizaCarrinho();
            renderCarrinhoTotal();
        }
    });


document.querySelector('.loja').innerHTML = renderizaProdutos();

