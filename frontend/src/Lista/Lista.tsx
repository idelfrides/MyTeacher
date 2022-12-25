
import { Button } from '@mui/material';
import { useState } from 'react';
import { Professor } from '../@types/professor';
import { Descricao, Foto, Valor, Informacoes, ItemLista, ListaStyled, Nome, ListaVazia } from './Lista.style';
import { FormatterService } from '../services/FormatterService';

interface ListaProps {
    professores: Professor[],
    onSelect: (professor: Professor) => void
}

const Lista = (props: ListaProps) => {
    
    const contadorEstado = useState(0)
    return (
        <div>
            {props.professores.length > 0 ? (
                <ListaStyled>
                    {props.professores.map(professor => (
                        <ItemLista key={professor.id}>
                            <Foto src={professor.foto}></Foto>
                            <Informacoes>
                                <Nome>{professor.name}</Nome>
                                <Valor>{FormatterService.valorMonetario(professor.valor_hora)} por hora</Valor>
                                <Descricao>{FormatterService.limitarTexto(professor.descricao, 100)}</Descricao>
                                <Button onClick={() => { props.onSelect(professor) }} sx={{ width: "70%" }}>Marcar Aula com {professor.name}</Button>
                            </Informacoes>
                        </ItemLista>
                    ))}
                </ListaStyled>
            ) : (
                <ListaVazia>No itens found!!! </ListaVazia>
            )}
        </div>
    )
}

export default Lista;