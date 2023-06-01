import Link from "next/link";
import styles from '../styles/Navegador.module.css'

export default function Navegador(props) {
    return (
        <Link href={props.destino}>
            <div href={styles.navegador}>
            {props.texto}
            </div>
            
        </Link>
    )
}