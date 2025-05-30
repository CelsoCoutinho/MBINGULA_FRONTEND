import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';
import './Read.css';

function Read() {
    const [data, setData] = useState({});
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:3000/getAtividadeById/${id}`)
            .then(res => {
                setData(res.data);
            })
            .catch(err => console.log(err));
    }, [id]);

    return (
        <div className='read-container'>
            <div className="read-content">
                <h3 className="read-title">Dados da Atividade</h3>
                <div className="read-field">
                    <strong className="orange-text">ID: </strong> {data.id}
                </div>
                <div className="read-field">
                    <strong className="orange-text">Tema: </strong> {data.tema}
                </div>
                <div className="read-field">
                    <strong className="orange-text">Data: </strong> {data.data}
                </div>
                <div className="read-field">
                    <strong className="orange-text">Hora: </strong> {data.hora}
                </div>
                <div className="read-field">
                    <strong className="orange-text">Descrição: </strong> {data.descricao}
                </div>
                <div className="read-button-container">
                    <Link to="/Back-office/pages/atividade" className='read-button'>Voltar</Link>
                </div>
            </div>
        </div>
    );
}

export default Read;
