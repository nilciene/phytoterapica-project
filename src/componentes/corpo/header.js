import Styles from './header.module.css'
import logo from '../imgs/logo-phytoterapica___a8ddafb15063415a28c300fa0d50c099.webp'
import {Link} from 'react-router-dom'
import daco from '../imgs/Daco_4558254.png'

function Header(){
    return(
        <div className= {Styles.tudo}>    
            <div className= {Styles.promocao}>
            <svg className= {Styles.caminhão}></svg><svg width="26" height="18" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24.8125 8.02229L23.0635 7.26536L21.5783 4.37527C21.1769 3.58394 20.3627 3.09079 19.4738 3.09652H16.9163V2.374C16.9163 1.06658 15.8727 0 14.5653 0H2.33975C1.03233 0 0.000152578 1.07231 0.000152578 2.374V13.4412C-0.011316 14.2383 0.625192 14.892 1.42226 14.9035C1.42799 14.9035 1.43373 14.9035 1.4452 14.9035H1.74912C1.74912 14.9608 1.74338 14.9837 1.74338 15.0181C1.73765 16.6582 3.06227 17.9942 4.70228 18C6.34229 18.0057 7.67839 16.6811 7.68412 15.0411C7.68412 15.0296 7.68412 15.0239 7.68412 15.0124C7.68412 14.9723 7.68412 14.9551 7.67839 14.8977H17.5586C17.5586 14.9551 17.5586 14.978 17.5586 15.0124C17.5529 16.6524 18.8775 17.9885 20.5175 17.9942C22.1575 18 23.4936 16.6754 23.4993 15.0353C23.4993 15.0239 23.4993 15.0181 23.4993 15.0067C23.4993 14.9665 23.4993 14.9493 23.4993 14.892H24.2391C25.0361 14.892 25.6841 14.244 25.6841 13.4469C25.6841 13.4412 25.6841 13.4355 25.6841 13.424V9.35265C25.6956 8.79069 25.3515 8.2574 24.8125 8.02229ZM4.71948 16.8589C3.71025 16.8589 2.89598 16.0446 2.89598 15.0353C2.89598 14.0261 3.71025 13.2118 4.71948 13.2118C5.72872 13.2118 6.54299 14.0261 6.54299 15.0353C6.54299 16.0389 5.72299 16.8589 4.71948 16.8589ZM15.7695 13.7681H7.40887C6.92719 12.7187 5.87208 12.0478 4.71948 12.0535C3.56116 12.0478 2.51178 12.713 2.0301 13.7681H1.4452C1.26743 13.7681 1.14701 13.6304 1.14701 13.4527V10.4995H15.7695V13.7681ZM15.7695 2.37974V9.35265H1.14701V2.37974C1.14701 1.70882 1.66884 1.1526 2.33975 1.1526H14.5653C15.2362 1.15833 15.7752 1.70882 15.7695 2.374V2.37974ZM16.9163 4.24912H19.4738C19.9269 4.24339 20.3512 4.48996 20.5634 4.8971L21.7102 7.11627H16.9163V4.24912ZM20.5347 16.8589C19.5255 16.8589 18.7112 16.0446 18.7112 15.0353C18.7112 14.0261 19.5255 13.2118 20.5347 13.2118C21.5439 13.2118 22.3582 14.0261 22.3582 15.0353C22.3582 16.0389 21.5439 16.8589 20.5347 16.8589ZM24.543 13.4527C24.543 13.6304 24.4226 13.7681 24.2448 13.7681H23.2241C22.5302 12.2829 20.7641 11.6406 19.2789 12.3345C18.6481 12.6269 18.1378 13.1373 17.8453 13.7681H16.9163V8.26313H22.536L24.3595 9.06594C24.4742 9.12328 24.5487 9.24943 24.543 9.37559V13.4527Z" fill="#333333"/>
</svg>
            <p>Com mais R$ 200,00 o frete é por nossa conta!</p>
            </div>
            <div className={Styles.headerlogo}>
                <Link to='/Meio'><img className={Styles.logo} src={logo}></img></Link>  

                <div className={Styles.forms}> 

                 <input className={Styles.pedido} type='text' placeholder= '  O que você procura?'></input>
        
                    <button className={Styles.desconto}>-5% NA PRIMEIRA COMPRA</button>

                    <svg className={Styles.perfil} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/></svg>

                    <svg className={Styles.carrinho} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16"><path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/></svg>
                    
                </div></div>

                <div className={Styles.link}>
                    <ul>
                        <li><Link to='/Produtos1' className={Styles.link2}>ÓLEOS ESSENCIAIS</Link></li>
                        <li><Link to='/Produtos2'className={Styles.link2}>ÓLEOS VEGETAIS </Link></li>
                        <li><Link to='/Produtos3'className={Styles.link2}>SINERGIAS </Link></li>
                        <li><Link to='/Produtos4'className={Styles.link2}>COSMÉTICOS NATURAIS </Link></li>
                        <li><Link to='/Produtos5'className={Styles.link2}>HIGIENE PESSOAL </Link></li>
                        <li><Link to='/Produtos6'className={Styles.link2}>AROMATIZADORES</Link> </li>
                        <li><Link to='/Produtos7'className={Styles.link2}>ACESSÓRIOS </Link></li>
                        <li><Link to='/Produtos8'className={Styles.link2}> OFERTAS</Link></li>
                        <li><Link to='/Produtos9'className={Styles.link2}>CONSULTOR(A) </Link></li>
                    </ul>

                </div>

               

            </div>
        
    
    )
}
export default Header