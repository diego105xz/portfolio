import Topo from '../../Componentes/Topo';
import SecaoCapa from "../../Componentes/SecaoCapa";
import SecaoSobre from "../../Componentes/SecaoSobre";
import SecaoExperiencia from "../../Componentes/SecaoExperiencia";
import SecaoProjetos from "../../Componentes/SecaoProjetos";
import Rodape from "../../Componentes/Rodape";

function Home(){
    return(
        <div>
            <Topo />
            <main>
                
                <SecaoCapa />
                <SecaoSobre />
                <SecaoExperiencia />
                <SecaoProjetos />
            </main>
            <Rodape />
        </div>
    );
}

export default Home;