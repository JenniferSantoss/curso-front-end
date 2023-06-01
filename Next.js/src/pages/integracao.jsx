import Layout from '@/components/Layout'
import { useState } from 'react'

export default function Integracao(){

    const [codigo, setCodigo] = useState(1)
    const [cliente, setCliente] = useState({})

    function obterCliente() {
        fetch('http://localhost:3000/api/clientes/123')
            .then(resp => resp.json())
            .then(dados => setCliente(dados))
    }


    return (

        <Layout titulo="Mais um exemplo">
        <div>
            <input type="number" value={codigo}
                onChange={e => setCodigo(e.target.value)}/>
            <button onClick={obterCliente}>Obter Cliente</button>
        </div>
        <ul>
                <li>Código: {cliente.id} </li>
                <li>Nome: {cliente.nome}</li>
                <li>Email: {cliente.email}</li>
            </ul>
        </Layout>

    )
}

