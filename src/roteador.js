import { useState } from "react";
import BarraNavegacao from "./barraNavegacao";
import Home from "./pages/home";
import FormularioCadastroCliente from "./pages/formularioCadastroCliente";
import FormularioCadastroPS from "./pages/formularioCadastroPS";
import Listagens from "./pages/listagens";
import ListaCliente from "./pages/Dados/cliente";
import ListaProduto from "./pages/Dados/produto";
import ListaServico from "./pages/Dados/servico";

export default function Roteador() {
    const [tela, setTela] = useState('Home')

    const seletorView = (valor, e) => {
        e.preventDefault()
        setTela(valor)
    }

    const construirView = () => {

        if (tela === 'Home') {
            return (
                <>
                    <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Home', 'Cadastrar Cliente', 'Produto ou Serviço', 'Listagens', 'Lista Clientes', 'Lista Produtos', 'Lista Serviços']} />
                    <Home tema="purple lighten-4" />
                </>
            )
        } else if (tela === 'Cadastrar Cliente'){
            return (
                <>
                    <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Home', 'Cadastrar Cliente', 'Produto ou Serviço', 'Listagens', 'Lista Clientes', 'Lista Produtos', 'Lista Serviços']} />
                    <FormularioCadastroCliente tema="purple lighten-4" />
                </>
            )
        } else if (tela === 'Produto ou Serviço'){
            return (
                <>
                    <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Home', 'Cadastrar Cliente', 'Produto ou Serviço', 'Listagens', 'Lista Clientes', 'Lista Produtos', 'Lista Serviços']} />
                    <FormularioCadastroPS tema="purple lighten-4" />
                </>
            )
        } else if (tela === 'Listagens'){
            return (
                <>
                    <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Home', 'Cadastrar Cliente', 'Produto ou Serviço', 'Listagens', 'Lista Clientes', 'Lista Produtos', 'Lista Serviços']} />
                    <Listagens tema="purple lighten-4" />
                </>
            )
        } else if (tela === 'Lista Clientes'){
            return (
                <>
                    <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Home', 'Cadastrar Cliente', 'Produto ou Serviço', 'Listagens', 'Lista Clientes', 'Lista Produtos', 'Lista Serviços']} />
                    <ListaCliente tema="purple lighten-4" />
                </>
            )
        } else if (tela === 'Lista Produtos'){
            return (
                <>
                    <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Home', 'Cadastrar Cliente', 'Produto ou Serviço', 'Listagens', 'Lista Clientes', 'Lista Produtos', 'Lista Serviços']} />
                    <ListaProduto tema="purple lighten-4" />
                </>
            )
        } else if (tela === 'Lista Serviços'){
            return (
                <>
                    <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Home', 'Cadastrar Cliente', 'Produto ou Serviço', 'Listagens', 'Lista Clientes', 'Lista Produtos', 'Lista Serviços']} />
                    <ListaServico tema="purple lighten-4" />
                </>
            )
        }
    }

    return (
        construirView()
    )
}