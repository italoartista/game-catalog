class Pedido { 
    constructor(id, nome, valor, item) {
        this.id = id;
        this.nome = nome;
        this.valor = valor;
        this.item = item;
    }
}


class Item { 
    constructor(id, nome, quantidade) {
        this.id = id;
        this.nome = nome;
        this.quantidade = quantidade;
    }
}


const pedido = new Pedido(1, 'Carlos', 100, new Item(1, 'Camisa', 2));
const item = new Item(1, 'Camisa', 2);