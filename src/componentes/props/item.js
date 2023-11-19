import Style from './item.module.css'

function Item({produto, oleo, preco,parcela}){
    return(
        <div className={Style.caixona}>

             
                <img src={produto} alt='produto' />
            

            <h4>{oleo}</h4> 
            <h4>R$ {preco}</h4>
            <p>{parcela}</p>
        </div>

    )
}

export default Item