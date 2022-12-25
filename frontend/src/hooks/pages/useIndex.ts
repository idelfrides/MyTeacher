import { useEffect, useState } from 'react';
import { Professor } from '../../@types/professor';
import { ApiService } from '../../services/ApiService';

export function useIndex() {
    const [listaProfessores, setlistaProfessores] = useState<Professor[]>([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [profSelecionado, setprofSelecionado] = useState<Professor | null>(null);
    const [message, setMessage] = useState('');

    useEffect(() => {
        ApiService.get("/professores").then((payload) => {
            setlistaProfessores(payload.data)
        })
    }, []);

    useEffect(() => {
        limparFormulario();
    }, [profSelecionado]);

    function marcarAula() {
        if (profSelecionado != null) {
            if (validarDados()) {
                ApiService.post("professores/" + profSelecionado.id + "/aulas",
                    {
                        name,
                        email
                    }).then(() => {
                        setprofSelecionado(null);
                        setMessage("Aula cadastada com sucesso!");
                    }).catch((error) => {
                        setMessage(error.response?.data.message);
                    })
            } else {
                setMessage("Preencha os campos com dados válidos...")
            }
        }
    }

    function validarDados() {
        return (name.length > 3 && email.length >= 10);
    }

    function limparFormulario() {
        setName("");
        setEmail("");
    }

    return {
        listaProfessores,
        name,
        setName,
        email,
        setEmail,
        profSelecionado,
        setprofSelecionado,
        marcarAula,
        message,
        setMessage
    }
}