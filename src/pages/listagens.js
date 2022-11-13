export default function Listagens() {
    return (
        <main>
            <h1>Listagens</h1>
            <br /><br /><br /><br /><br /><br /><br /><br />

            <div className='container-table'>
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>10 clientes que mais consumiram em quantidade</td>
                            <td data-label="Ações">
                                <div className='Column'>
                                    <a href="#">Visualizar</a>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Todos clientes por gênero</td>
                            <td data-label="Ações">
                                <div className='Column'>
                                    <a href="#">Visualizar</a>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Listagem geral de produtos e serviços mais consumidos</td>
                            <td data-label="Ações">
                                <div className='Column'>
                                    <a href="#">Visualizar</a>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>10 clientes que menos consumiram produtos ou serviços</td>
                            <td data-label="Ações">
                                <div className='Column'>
                                    <a href="#">Visualizar</a>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>5 clientes que mais consumiram em valor</td>
                            <td data-label="Ações">
                                <div className='Column'>
                                    <a href="#">Visualizar</a>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </main>

    );
}