const produtos = [
    {
        id: 1,
        nome: 'JSRaiz para FW',
        preco: 336,
        descricao: 'O melhor curso de JS',
        imagem: 'http://picsum.photos/501'
    },
    {
        id: 2,
        nome: 'WTDD',
        preco: 400,
        descricao: 'Aprenda Django',
        imagem: 'http://picsum.photos/502'
    },
    {
        id: 3,
        nome: 'Python Birds',
        preco: 530,
        descricao: 'OO com Python',
        imagem: 'http://picsum.photos/503'
    },
    {
        id: 4,
        nome: 'Laravel - Caelum',
        preco: 560,
        descricao: 'PHP do jeito certo',
        imagem: 'http://picsum.photos/504'
    },
];


function renderizaProduto(produto) {
    return `
            <div class="col-sm-4 mb-3">
                <div class="card">
                    <div class="card loja__item">
                        <img src="${produto.imagem}" class="card-img-top" alt="img-1">
                        <div class="card-body">
                            <h5 class="card-title">${produto.nome}</h5>
                            <small>R$ ${produto.preco}</small>
                            <p class="card-text">${produto.descricao}</p>
                            <button data-value="300" class="btn btn-primary">Adicionar</button>
                        </div>
                    </div>
                </div>
            </div>
            `
}

function renderizaProdutos() {
    let html = '';
    for (let i = 0; i < produtos.length; i++) {
        html = html + renderizaProduto(produtos[i]);
    }
    return html
}

document.querySelector('.loja').innerHTML = renderizaProdutos();
