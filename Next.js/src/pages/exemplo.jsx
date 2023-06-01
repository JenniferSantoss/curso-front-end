import Layout from '@/components/Layout'
import Cabecalho from "@/components/Cabacalho";
//props é somente leitura
export default function Exemplo() {
    return (
        <>
        <Layout titulo="exemplo" />
        <Cabecalho titulo="Next.js & React"/>
        <Cabecalho titulo="Aprendendo Next.js & React "/>  
        
        </>

    )
}