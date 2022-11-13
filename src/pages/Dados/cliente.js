import React from "react";

export default function ListaCliente(){
    return (
        <main>
            <h1>Clientes</h1>

            <div className='container-table'>
                <table>
                    <thead>
                        <tr>
                            <th scope="col">Nome</th>
                            <th scope="col">Gênero</th>
                            <th scope="col">Ações</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td data-label="Nome">Amanda</td>
                            <td data-label="Gênero">Feminino</td>
                            <td data-label="Ações">
                                <div className='Column'>
                                <a href="/editar_cliente/1">Editar</a> <br />
                                <a href="/clientes/1">Visualizar</a> <br />
                                <a href="#">Excluir</a>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td data-label="Nome">Gabriel</td>
                            <td data-label="Gênero">Masculino</td>
                            <td data-label="Ações">
                                <div className='Column'>
                                <a href="/editar_cliente/2">Editar</a> <br />
                                <a href="/clientes/2">Visualizar</a> <br />
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