import React from 'react';
import "./Sobremim.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Sobremim = () => {
    return (
        <div className="sobremim-container align">
            <div className='sobremim-conteudo align'>
                <img className='sobremim-foto' src="/curriculo2.0/perfil.png" alt="Minha foto" />
                <p className='sobremim-texto'>Sou estudante de Ciências da Computação(7º período) e desenvolvedor Front-end React. Além disso, estou explorando o mundo do UX Design. Meu objetivo é integrar meu conhecimento em Ciências da Computação e meu crescente interesse em UX Design para contribuir significativamente no desenvolvimento de soluções tecnológicas inovadoras. Sou comprometido em todas as minhas ações, altamente criativo e estou constantemente em busca de aprimorar minhas habilidades. Atualmente, estou no processo de criar minhas primeiras aplicações React e compartilhar conhecimento à medida que o construo.
                </p>

            </div>
            <p className='email'>
                <FontAwesomeIcon icon="envelope" className='email-icone' />
                alexandrepqueiroz29@gmail.com
            </p>

        </div>
    )
}

export default Sobremim