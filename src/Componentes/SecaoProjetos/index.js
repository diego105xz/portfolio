import './style.css';
import logoLink from '../../assets/link.svg';

import sorveteria from '../../assets/sorveteria.jpg';
import otica from '../../assets/otica.jpg';
import srlei from '../../assets/srlei.jpg';
import ps5 from '../../assets/ps5.jpg';


function SecaoProjetos(){
    return(
        <section className='secao-projetos' id='ir-projetos'>
            <h3>Projetos</h3>
            <div className='colecao-card'>
                <div className='card'>
                    <img className='foto-projeto' src={sorveteria} alt="capa-projeto"/>
                    <h4>Sorveteria</h4>
                    <p className='descricao'>Projeto Site responsivo usando ReactJS componentes e SPAs.</p>
                    <p className='tecnolongias'>Tecnologias: HTML, CSS e ReactJS</p>
                    <a className="btn-azul2" href='https://diego105xz.github.io/sorveteria/' target='_blank' rel="noreferrer">
                            <img src={logoLink} alt='logo-linkedin'/>Visualizar
                    </a>
                </div>

                <div className='card'>
                    <img className='foto-projeto' src={otica} alt="capa-projeto"/>
                    <h4>Ótica</h4>
                    <p className='descricao'>Projeto landing page responsivo e usando ReactJS</p>
                    <p className='tecnolongias'>Tecnologias: HTML, CSS e ReactJS</p>
                    <a className="btn-azul2" href='https://diego105xz.github.io/otica/' target='_blank' rel="noreferrer">
                            <img src={logoLink} alt='logo-linkedin'/>Visualizar
                    </a>
                </div>

                <div className='card'>
                    <img className='foto-projeto' src={srlei} alt="capa-projeto"/>
                    <h4>Senhor Lei</h4>
                    <p className='descricao'>Projeto de uma landing page com propriedade background-attachment: fixed intercalando entre divs dando esse efeito, quando rolado a barra de scroll da impreessão que o fundo está mudando de imagem.</p>
                    <p className='tecnolongias'>Tecnologias: HTML e CSS</p>
                    <a className="btn-azul2" href='https://diego105xz.github.io/justica/' target='_blank' rel="noreferrer">
                            <img src={logoLink} alt='logo-linkedin'/>Visualizar
                    </a>
                </div>
                <div className='card'>
                    <img className='foto-projeto' src={ps5} alt="capa-projeto"/>
                    <h4>Playstation</h4>
                    <p className='descricao'>Projeto landing page Ps5, efeito houver.</p>
                    <p className='tecnolongias'>Tecnologias: HTML e CSS</p>
                    <a className="btn-azul2" href='https://diego105xz.github.io/ps5/' target='_blank' rel="noreferrer">
                            <img src={logoLink} alt='logo-linkedin'/>Visualizar
                    </a>
                </div>
            </div>
        </section>
    );
}

export default SecaoProjetos;