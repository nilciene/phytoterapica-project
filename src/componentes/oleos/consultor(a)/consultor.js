import Style from './consultor.module.css'
import Item from '../../props/item';

import f1 from '../../imgs/Captura de tela 2023-11-15 084131.png'
import f2 from '../../imgs/kit argila ofertad.png'
import f3 from '../../imgs/kit-oleos-essenciais-basicos.webp'
import f4 from '../../imgs/Kit_Deles_1000x1000px.webp'
import f5 from '../../imgs/ofertas maleuca.png'
import f6 from '../../imgs/ofertas sabonetes.png'

function Produtos4(){
    return(
        <div className={Style.caixona}>
            
            <div className={Style.caixa}>
                
                <Item
                produto={f2}
                oleo=' kits argilas'
                preco='R$ 69,00'/>
                <Item
                produto={f3}
                oleo=' kit oleos essencias'
                preco='R$ 49,00'/>
                <Item
                produto={f4}
                oleo=' kit deles'
                preco='R$ 99,00'/>
                    <Item
                produto={f5}
                oleo=' kits oleos maleleuca'
                preco='R$ 49,00'/>
                    <Item
                produto={f6}
                oleo=' kit sabonetes '
                preco='R$ 89,00'/>
                
                    
            
   
            </div>
        </div>
    )
}

export default Produtos4