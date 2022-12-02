import './style.css';

import NuvemLogo from '../../assets/download-cloud.svg';
import EmailLogo from '../../assets/email.svg';

function SecaoSobre(){
    return(
        <section className='secao-sobre'>
            <div className='sobre'>
                <div className='campo-foto'>
                    <div className='foto'>
                        <p>FOTO</p>
                    </div>
                </div>
                <div className='campo-sobre'>
                    <div className='campo-sobre1'>
                        <h2>Sobre mim</h2>
                        <h3>São Paulo, Brasil</h3>
                        <p>Meu Nome é Diego tenho 30 anos sou formado em Análise e densenvolvimento de Sistemas, dedico meu tempo livre para estudar e elaborar projetos Front End melhorando minhas habilidades com objetivo de conseguir uma oportunidade de iniciar minha carreira na area.</p>
                        <div className='botoes'>
                            <a className="btn-rosa1" href='#'>
                                <img src={NuvemLogo} alt='logo-nuvem'/>Curriculo
                            </a>

                            <a className="btn-azul1" href='mailto:diego-melo@uni9.edu.br'>
                                <img src={EmailLogo} alt='logo-email'/>E-mail
                            </a>  
                        </div>   
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SecaoSobre;