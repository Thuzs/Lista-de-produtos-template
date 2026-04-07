'use strict'

import produtos from "./produtos.json" with { type: "json" }


function criarCard(produtos){
    const card= document.createElement('div')
    card.className = 'card'

    const categoria = document.createElement('p')
    categoria.textContent = produtos.categoria

    const nome = document.createElement('h2')
    nome.textContent = produtos.nome
    
    const foto = document.createElement('img')
    foto.src = `./img/${produtos.imagem}`
    foto.alt = `Foto de ${produtos.nome}`

    const descricao = document.createElement('p')
    descricao.textContent = produtos.descricao

    const preco = document.createElement('h3')
    preco.textContent = produtos.preco

    let classificacao
    if(produtos.classificacao == 1){
    classificacao = document.createElement('img')
    classificacao.src = 'img/1 estrela.png'
    classificacao.alt = `Foto de 1 estrela`
    }else if (produtos.classificacao == 2){
    classificacao = document.createElement('img')
    classificacao.src = 'img/2 estrela.png'
    classificacao.alt = `Foto de 2 estrela`
    }else if(produtos.classificacao == 3){
    classificacao = document.createElement('img')
    classificacao.src = 'img/3 estrela.png'
    classificacao.alt = `Foto de 3 estrela`
    }else if(produtos.classificacao == 4){
    classificacao = document.createElement('img')
    classificacao.src = 'img/4 estrela.png'
    classificacao.alt = `Foto de 4 estrela`
    }else if(produtos.classificacao == 5){
    classificacao = document.createElement('img')
    classificacao.src = 'img/5 estrela.png'
    classificacao.alt = `Foto de 5 estrela`
    }

    card.append(categoria, nome, foto, descricao, preco, classificacao)

    return card
}
const cards = produtos.map(criarCard)

document.getElementById('container').replaceChildren(...cards)

produtos.forEach(criarCard)