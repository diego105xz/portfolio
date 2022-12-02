import './style.css';
import logoLinkedin from '../../assets/linkedin.svg';
import logoGitHub from '../../assets/github.svg';
import programando from '../../assets/programando.gif'

function SecaoCapa(){
    return(
        <section className='secao-capa'>
            <div className='secao-capa1'>
                <div className="perfil">
                    <p>Olá, Eu sou</p>
                    <h1>Diego Melo</h1>
                    <p>Desenvolvedor front-end JR.</p>
                    <div>
                        <a className="btn-azul" href='https://www.linkedin.com/in/diego-melo-1863971b2/' target='_blank' rel="noreferrer">
                            <img src={logoLinkedin} alt='logo-linkedin'/>Linkedin
                        </a>

                        <a className="btn-rosa" href='https://github.com/diego105xz' target='_blank' rel="noreferrer">
                            <img src={logoGitHub} alt='logo-github'/>GitHub
                        </a>  
                    </div>    
                </div>
                <div className='programando'>
                    <img src={programando} alt="git-programando"/>
                </div>
            </div>
        </section>
    );
}

export default SecaoCapa;