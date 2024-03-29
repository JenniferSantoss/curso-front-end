import Navegador from "@/components/Navegador"


export default function Inicio() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            flexWrap: 'wrap'
        }}>
            <Navegador texto="Estiloso" destino="/estiloso"/>
            <Navegador texto="Exemplo" destino="/exemplo" /> 
            <Navegador texto="Componente com Estado" destino="/estado" />          
            <Navegador texto="Integração" destino="/integracao"/>
        </div>
    )
}