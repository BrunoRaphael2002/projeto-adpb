/* eslint-disable react/prop-types */
import './index.css';



export default function Card(props) {
    
  return (
    <div>
         <a href={props.link} target='blank'>
        <section className='Card-itens'>
      
           
                <img src={props.imagem} alt="imagem" />
                <h1>{props.titulo}</h1>
                <p>
                    {props.paragrafo}
                </p>
                <span>{props.span}</span>
            
            
        </section>
        </a>
    </div>
  )
}
