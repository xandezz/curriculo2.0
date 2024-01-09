import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import './Home.css';
import Button from '../components/Button';

const Home = () => {
    const [nome, setNome] = useState(() => {
        return sessionStorage.getItem('nome') || '';
    });
    
    const [desabilitado, setDesabilitado] = useState(() => {
        return sessionStorage.getItem('desabilitado') || '';
    });
    
    const [escritaCompleta, setEscritaCompleta] = useState(false);
    const [escritaCompletaWelcome, setEscritaCompletaWelcome] = useState(true);
    const [novoTextoVisivel, setNovoTextoVisivel] = useState(false);

    const textToTypeRef = useRef(null);
    const welcomeTextRef = useRef(null);

    const typeWrite = (element, callback) => {
        const textoArray = element.textContent.split('');
        element.textContent = '';
        textoArray.forEach((letra, i) => {
            setTimeout(() => {
                element.textContent += letra;
                if (i === textoArray.length - 1) {
                    setTimeout(() => {
                        callback();
                        setEscritaCompleta(true);
                    }, 500);
                }
            }, 75 * i);
        });
    };


    const handleButtonClick = () => {
        if (desabilitado === '') {
            setDesabilitado('desabilitado');
            setNovoTextoVisivel(true);
            setEscritaCompleta(false);
            setEscritaCompletaWelcome(false);
        } else {
            setNome('');
            setDesabilitado('');
            setNovoTextoVisivel(false);
            setEscritaCompleta(false);
            setEscritaCompletaWelcome(false);
        }
    };

    useEffect(() => {
        if (textToTypeRef.current) {
            typeWrite(textToTypeRef.current, () => {
                setEscritaCompleta(true);
            });
        }
    }, [desabilitado]);

    useEffect(() => {
        if (welcomeTextRef.current && novoTextoVisivel) {
            typeWrite(welcomeTextRef.current, () => {
                setEscritaCompletaWelcome(true);
            });
        }
    }, [novoTextoVisivel]);

    useEffect(() => {
        sessionStorage.setItem('desabilitado', desabilitado);
    }, [desabilitado]);

    useEffect(() => {
        sessionStorage.setItem('nome', nome);
    }, [nome]);

    useEffect(() => {
        sessionStorage.setItem('escritaCompletaWelcome', JSON.stringify(escritaCompletaWelcome));
    }, [escritaCompletaWelcome]);



    return (
        <div className='conteudo-principal align destaque'>

            <p ref={textToTypeRef} className={`text-gradiente texto-principal ${desabilitado} `}>
                Olá, eu me chamo Alexandre Pereira e você como se chama????
            </p>

            <>
                {desabilitado === '' ? ( 
                    escritaCompleta && (
                        <div className='align'>
                            <input
                                type="text"
                                placeholder='Digite seu nome'
                                className='input-convidado text-gradiente '
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                                onKeyDown={(e) => { if (e.key === 'Enter') handleButtonClick() }}
                                name='nome-convidado'
                                id='nome-convidado'
                                autoComplete='off'
                            /> 
                            <Button 
                            className={'text-gradiente button-convidado'}
                            onClick={handleButtonClick}
                            type={'button'}
                            texto={"Enviar"}
                            />
                        </div>
                    )
                )
                    :
                    (
                        <div className='container-boasvindas'>
                            {escritaCompletaWelcome && (<div className='item-container-boasvindas'></div>)}
                            <p ref={welcomeTextRef} className='text-gradiente texto-principal'>
                                Olá {nome}, seja bem-vindo(a) ao meu portfólio, fique à vontade para dar uma olhada nos meus projetos!
                            </p>                {escritaCompletaWelcome && (
                                <div className={` ${desabilitado === '' ? 'desabilitado' : ''}`}>
                                    <Link className='text-gradiente button-convidado ' to='/projects'>Projetos</Link>
                                    {/* <button className='text-gradiente button-convidado'onClick={handleButtonClick}type='button'>Alterar nome</button>-->*/}
                                    <div className="sobremim-container">
                                        <h1>Sobre mim</h1>
                                        <div className='sobremim-conteudo'>
                                            <img className='sobremim-foto' src="
                                perfil.jpeg" alt="Minha foto" />
                                            <p>Sou estudante de Ciências da Computação(6º período) e desenvolvedor Front-end React. Além disso, estou explorando o mundo do UX Design. Meu objetivo é integrar meu conhecimento em Ciências da Computação e meu crescente interesse em UX Design para contribuir significativamente no desenvolvimento de soluções tecnológicas inovadoras. Sou comprometido em todas as minhas ações, altamente criativo e estou constantemente em busca de aprimorar minhas habilidades. Atualmente, estou no processo de criar minhas primeiras aplicações React e compartilhar conhecimento à medida que o construo.</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    )
                }
            </>
        </div>
    );
};

export default Home;