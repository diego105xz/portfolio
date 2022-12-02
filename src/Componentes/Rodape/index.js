import './style.css';
import RodapeLogo from '../../assets/code-logo.svg';

function Rodape(){
    return(
        <footer>
            <div className='rodape'>
                <p>@ 2022 - Diego Melo</p>
                <div>
                    <p>Powered by</p>
                    <img src={RodapeLogo} alt="Logo-rodape"/>
                </div>
            </div>
        </footer>
    );
}

export default Rodape;