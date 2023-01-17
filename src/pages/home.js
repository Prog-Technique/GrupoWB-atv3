/* eslint-disable jsx-a11y/anchor-is-valid */
export default function Home(props) {
    const estilo = `collection-item active ${props.tema}`
    return (
        <><br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br /><br />
        <div className="collection">
            <a className={estilo}>.</a>
            <a className="collection-item">Seja bem-vindo ao</a>
            <a className="collection-item">Grupo WB</a>
            <a className={estilo}>.</a>
        </div></>
    )
}