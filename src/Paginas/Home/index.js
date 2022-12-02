import React from "react";

import Topo from "../../Componentes/Topo";
import SecaoCapa from "../../Componentes/SecaoCapa";
import SecaoSobre from "../../Componentes/SecaoSobre";
import Rodape from "../../Componentes/Rodape";

function Home(){
    return(
        <div>
            <Topo />
            <main>
                <SecaoCapa />
                <SecaoSobre />
            </main>
            <Rodape />
        </div>
    );
}

export default Home;