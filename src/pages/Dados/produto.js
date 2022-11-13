import React from "react";

export default function ListaProduto(){
    return (
        <main>
            <h1>Produtos</h1>

                <div className='container-table'>
                    <table>
                        <thead>
                            <tr>
                                <th scope="col">Produto</th>
                                <th scope="col">Preço</th>
                                <th scope="col">Ações</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td data-label="Produto">Shampoo Match</td>
                                <td data-label="Preço">40.00</td>
                                <td data-label="Ações">
                                    <div className='Column'>
                                        <a href="/editar_produto/1">Editar</a> <br/>
                                        <a href="/produtos/1">Visualizar</a> <br/>
                                        <a href="#">Excluir</a>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td data-label="Produto">Condicionador Match</td>
                                <td data-label="Preço">35.00</td>
                                <td data-label="Ações">
                                    <div className='Column'>
                                        <a href="/editar_produto/2">Editar</a> <br/>
                                        <a href="/produtos/2">Visualizar</a> <br/>
                                        <a href="#">Excluir</a>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

       </main>
    );
}