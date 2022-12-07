import './style.css';

import Diego from '../../assets/diego.jpeg';
import NuvemLogo from '../../assets/download-cloud.svg';
import EmailLogo from '../../assets/email.svg';
import curriculo from '../../assets/Diego-Jesus-Melo.pdf';

function SecaoSobre(){
    return(
        <section className='secao-sobre' id='ir-sobre'>
            <div className='sobre'>
                <div className='campo-foto'>
                        <img className='foto' src={Diego} alt="minha-foto" />
                </div>
                <div className='campo-sobre'>
                    <div className='campo-sobre1'>
                        <h2>Sobre mim</h2>
                        <h3>São Paulo, Brasil</h3>
                        <p>Sou apaixonado por programação, em meu tempo livre gosto preparar uma grande xícara de café e me dedicar com prazer em estudar e elaborar projetos Front End. melhorando minhas habilidades, minha lógica e raciocínio.</p>
                        <div className='botoes' >
                            <a className="btn-rosa1" href={curriculo} target='_blank' rel="noreferrer">
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