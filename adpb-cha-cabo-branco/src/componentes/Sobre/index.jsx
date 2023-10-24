import './index.css';
import Card from '../pastores';

export default function Sobre() {
  return (
    <div className='background'>
     

        <section className='Card '>
        <Card 
        link='https://www.adpb.org.br'
        imagem='../assets/presidente.png'
        titulo='José Carlos de Lima'
        paragrafo='Pastor presidente da ADPB, COMADEP, UMADENE'
        span='Pastor Presidente'
        />
            

       

        <Card 
        imagem= '../assets/severino.png'
        titulo='Severino Pereira'
        paragrafo='Pastor Dirigente da ADPB Chã do Cabo Branco'
        span='Pastor Dirigente'
        />

        <Card 
        imagem='../assets/genario.png'
        titulo='Genario'
        paragrafo='Pastor Vice Dirigente da ADPB Chã do Cabo Branco'
       span='Pastor Vice Dirigente'
        />
        </section>

        <section className="limitar-sessao Sobre">
            
            <h1>Chã do Cabo Branco</h1>
            <img src="../assets/igreja.jpg" alt="igreja" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo minus ut est, architecto laboriosam iure labore amet sapiente inventore maiores nam sunt eum consequuntur, expedita nobis saepe dolor! Quis, velit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam dignissimos, necessitatibus commodi accusantium saepe aliquam odio exercitationem nesciunt reprehenderit animi ducimus tempore temporibus cum eligendi! Consequuntur expedita veritatis autem rem.</p>


        </section>
    </div>
  )
}
