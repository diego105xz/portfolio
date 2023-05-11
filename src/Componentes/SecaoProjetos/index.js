import './style.css';
import logoLink from '../../assets/link.svg';

import sorveteria from '../../assets/sorveteria.jpg';
import otica from '../../assets/otica.jpg';
import netflix from '../../assets/netflix.jpg';
import jordanShoes from '../../assets/JordanShoes.jpeg';
import codelancia from '../../assets/codelancia.jpg';
import agenciaDesign from '../../assets/agenciaDesign.jpg';

function SecaoProjetos(){
    return(
        <section className='secao-projetos' id='ir-projetos'>
            <h3>Projetos</h3>
            <div className='colecao-card'>
                <div className='card'>
                    <img className='foto-projeto' src={sorveteria} alt="capa-projeto"/>
                    <h4 className="titulo-proj">Sorveteria</h4>
                    <p className='descricao'>Projeto Site responsivo usando ReactJS componentes e SPAs.</p>
                    <p className='tecnolongias'>Tecnologias: HTML, CSS e ReactJS</p>
                    <a className="btn-azul2" href='https://diego105xz.github.io/sorveteria/' target='_blank' rel="noreferrer">
                            <img src={logoLink} alt='logo-linkedin'/>Visualizar
                    </a>
                </div>

                <div className='card'>
                    <img className='foto-projeto' src={otica} alt="capa-projeto"/>
                    <h4 className="titulo-proj">Ótica</h4>
                    <p className='descricao'>Projeto landing page responsivo e usando ReactJS</p>
                    <p className='tecnolongias'>Tecnologias: HTML, CSS e ReactJS</p>
                    <a className="btn-azul2" href='https://diego105xz.github.io/otica/' target='_blank' rel="noreferrer">
                            <img src={logoLink} alt='logo-linkedin'/>Visualizar
                    </a>
                </div>

                <div className='card'>
                    <img className='foto-projeto' src={netflix} alt="capa-projeto"/>
                    <h4 className="titulo-proj">Netlix</h4>
                    <p className='descricao'>Clone do Netflix e consumo API.</p>
                    <p className='tecnolongias'>Tecnologias: HTML, CSS, ReactJS e API</p>
                    <a className="btn-azul2" href='https://diego105xz.github.io/netflix/' target='_blank' rel="noreferrer">
                            <img src={logoLink} alt='logo-linkedin'/>Visualizar
                    </a>
                </div>
                <div className='card'>
                    <img className='foto-projeto' src={jordanShoes} alt="capa-projeto"/>
                    <h4 className="titulo-proj">Jordan Shoes</h4><br></br>
                    <p className='descricao'>Site de vendas de tênis criado com SPAs em React.</p>
                    <p className='tecnolongias'>Tecnologias: HTML, CSS E React JS</p>
                    <a className="btn-azul2" href='https://diego105xz.github.io/jordan-shoes/' target='_blank' rel="noreferrer">
                            <img src={logoLink} alt='logo-linkedin'/>Visualizar
                    </a>
                </div>
                <div className='card'>
                    <img className='foto-projeto' src={codelancia} alt="capa-projeto"/>
                    <h4 className="titulo-proj">Codelância</h4><br></br>
                    <p className='descricao'>Landing page de um blog com campo search para filtras titulos.</p>
                    <p className='tecnolongias'>Tecnologias: HTML, CSS E React JS</p>
                    <a className="btn-azul2" href='https://diego105xz.github.io/blog/' target='_blank' rel="noreferrer">
                            <img src={logoLink} alt='logo-linkedin'/>Visualizar
                    </a>
                </div>
                <div className='card'>
                    <img className='foto-projeto' src={agenciaDesign} alt="capa-projeto"/>
                    <h4 className="titulo-proj">Agência Design</h4><br></br>
                    <p className='descricao'>Landing page de uma Agencia de design responsivo com tema Dark e light.</p>
                    <p className='tecnolongias'>Tecnologias: HTML, CSS E React JS</p>
                    <a className="btn-azul2" href='https://diego105xz.github.io/agencia-design/' target='_blank' rel="noreferrer">
                            <img src={logoLink} alt='logo-linkedin'/>Visualizar
                    </a>
                </div>
            </div>
        </section>
    );
}

export default SecaoProjetos;