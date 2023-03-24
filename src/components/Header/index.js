import useUser from '../../hooks/useUser';
import './styles.css';

function Header() {
    const { name } = useUser()

    if (!name) {
        return (
            <header>
                Insira seu nome e idade para iniciar!
            </header>
        )
    }
    return (
        <header>
            Bem vindo, {name}!
        </header>
    )
}

export default Header;