import React from "react";

export default function ListaServico(){
    return (
        <main>
            <h1>Serviços</h1>

                <div className='container-table'>
                    <table>
                        <thead>
                            <tr>
                                <th scope="col">Servico</th>
                                <th scope="col">Preço</th>
                                <th scope="col">Ações</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td data-label="Servico">Unhas</td>
                                <td data-label="Preço">35.00</td>
                                <td data-label="Ações">
                                    <div className='Column'>
                                        <a href="/editar_servico/1">Editar</a> <br/>
                                        <a href="/servicos/1">Visualizar</a> <br/>
                                        <a href="#">Excluir</a>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td data-label="Servico">Barba</td>
                                <td data-label="Preço">10.00</td>
                                <td data-label="Ações">
                                    <div className='Column'>
                                        <a href="/editar_servicos/2">Editar</a> <br/>
                                        <a href="/servicos/2">Visualizar</a> <br/>
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