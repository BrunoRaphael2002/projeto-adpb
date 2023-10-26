//import { useState } from 'react';
import './index.css';


export default function Banner() {

 // const [mudarbanner , setMudarBanner] = useState('Banner-02');

 // function ClickButton(){
  //  if(mudarbanner === 'Banner-02'){
  //  setMudarBanner('Banner')

  //}
 // else{
 //   setMudarBanner('Banner-02')
 // }
 // }

  //<section className={mudarbanner}>
         
  //<button onClick={ClickButton} className='left'> <img src="../assets/seta.png" alt="seta" /></button>
  //<button onClick={ClickButton} className='right'> <img src="../assets/seta.png" alt="seta" /></button>
  
//</section>

  return (
    <div>
       <section className='Banner'>
        <div className='bg'>


          <h1>Chã Do Cabo Branco</h1>
          <h2>Seja Bem Vindo</h2>


          
          <h4>Salmos 122</h4>
          <p >¹ Alegrei-me quando me disseram: Vamos à casa do Senhor.  Salmos 122:1</p>
        </div>
       </section>
    </div>
  )
}
