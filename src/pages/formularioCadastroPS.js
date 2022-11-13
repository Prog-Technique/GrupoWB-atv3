export default function FormularioCadastroPS(props){
    const estiloBotao = `btn waves-effect waves-light ${props.tema}`
    return (
        <><br /><br /><br /><br /><br /><br /><br /><br />
        <div className="row">
            <form className="col s12">
                <div className="row">
                    <div className="input-field col s6">
                        <input id="name" type="text" className="validate" />
                        <label htmlFor="name">Nome do Produto</label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s5">
                        <input id="preco" type="text" className="validate" />
                        <label htmlFor="preco">Preço</label>
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

            <form className="col s12">
                <div className="row">
                    <div className="input-field col s6">
                        <input id="name" type="text" className="validate" />
                        <label htmlFor="name">Nome do Serviço</label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s5">
                        <input id="preco" type="text" className="validate" />
                        <label htmlFor="preco">Preço</label>
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