import { useState } from "react"
import Botao from "../Botao"
import CampoTexto from "../CampoTexto"
import ListaSuspensa from "../ListaSuspensa"
import "./Formulario.css"


const Formulario = (props) => {
   
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    
    const aoSalvar = (evento) =>{
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time,
        })

        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }
    
    return (
        <section className="formulario" >
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card de jogador</h2>
                <CampoTexto 
                    obrigatorio = {true} 
                    label="Nome" 
                    placeholder="Digite seu Nome" 
                    valor={nome} 
                    aoAlterado={valor => setNome(valor)} />
                <CampoTexto 
                    obrigatorio = {true} 
                    label="Main" 
                    placeholder="Digite seu Main"
                    valor ={cargo}
                    aoAlterado={valor => setCargo(valor)} />
                <CampoTexto 
                    label="Imagem" 
                    placeholder="Digite o Endereço da imagem"
                    valor = {imagem}
                    aoAlterado={valor => setImagem(valor)} />
                <ListaSuspensa 
                    obrigatorio = {true} 
                    label="Função" 
                    itens = {props.times}
                    valor = {time}
                    aoAlterado={valor => setTime(valor)}
                     />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario