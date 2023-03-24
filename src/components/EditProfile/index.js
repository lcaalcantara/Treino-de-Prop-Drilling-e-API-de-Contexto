import { useState } from 'react';
import useUser from '../../hooks/useUser';
import './styles.css';

function EditProfile() {
    const { setName, setAge } = useUser();

    const [localName, setLocalName] = useState('');
    const [localAge, setLocalAge] = useState('');

    function handleSubmit(event) {
        event.preventDefault();

        if (!localName) {
            return;
        }

        setName(localName)
        setAge(localAge)
    }

    return (
        <form onSubmit={handleSubmit}>

            <label>
                Nome
                <input
                    placeholder="Nome"
                    value={localName}
                    onChange={(event) => setLocalName(event.target.value)}
                />
            </label>
            <label>
                Idade
                <input
                    type='number'
                    placeholder="Idade"
                    value={localAge}
                    onChange={(event) => setLocalAge(event.target.value)}
                />
            </label>

            <button>Salvar</button>
        </form>
    );
}

export default EditProfile;