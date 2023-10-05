import { useState } from 'react';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css'

const Formulario = (props) =>{

    const aoSalvar = (e) =>{
        e.preventDefault();
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');


    return(
        <section className='formulario'>
            <form onSubmit={aoSalvar}>

                <h2>Preencha os dados para criar o card de colaborador</h2>

                <CampoTexto 
                    required={true} 
                    label="Nome" 
                    placeholder="Digite seu Nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />

                <CampoTexto 
                    required={true} 
                    label="Cargo" 
                    placeholder="Digite seu Cargo"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />

                <CampoTexto 
                    required={true} 
                    label="Imagem" 
                    placeholder="Digite o endereço de imagem"
                    valor={imagem}
                    aoAlterado={valor=>setImagem(valor)}
                />
                <ListaSuspensa 
                    required={true} 
                    itens={props.times} 
                    label="Time"
                    valor = {time}
                    aoAlterado={valor=>setTime(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>

    )
}

export default Formulario;