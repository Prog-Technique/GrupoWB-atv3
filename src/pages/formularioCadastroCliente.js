export default function FormularioCadastroCliente(props){
    const estiloBotao = `btn waves-effect waves-light ${props.tema}`
    return (
        <><br /><br /><br /><br /><br /><br /><br /><br />
        <div className="row">
            <form className="col s12">
                <div className="row">
                    <div className="input-field col s6">
                        <input id="name" type="text" className="validate" />
                        <label htmlFor="name">Nome</label>
                    </div>

                    <div className="input-field col s5">
                        <input id="social_name" type="text" className="validate" />
                        <label htmlFor="social_name">Nome social</label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s6">
                        <input id="genero" type="text" className="validate" />
                        <label htmlFor="genero">Gênero</label>
                    </div>

                    <div className="input-field col s5">
                        <input id="telefone" type="text" className="validate" />
                        <label htmlFor="telefone">Telefone</label>
                    </div>

                </div>

                <div className="row">
                    <div className="input-field col s6">
                        <input id="cpf" type="text" className="validate" />
                        <label htmlFor="cpf">CPF</label>
                    </div>

                    <div className="input-field col s5">
                        <input id="emissaocpf" type="date" className="validate" />
                        <label htmlFor="emissaocpf">Data de emissão do CPF</label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s6">
                        <input id="rg" type="text" className="validate" />
                        <label htmlFor="rg">RG</label>
                    </div>

                    <div className="input-field col s5">
                        <input id="emissaorg" type="date" className="validate" />
                        <label htmlFor="emissaorg">Data de emissão do RG</label>
                    </div>
                </div>

                <div className="row">
                    <div className="col s12">
                        <button className={estiloBotao}type="submit" name="action">Submit
                            <i className="material-icons right">send</i>
                        </button>
                    </div>
                </div>
            </form>
        </div></>
    )
}