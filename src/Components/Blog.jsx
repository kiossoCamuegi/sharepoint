import React from 'react'
import { GoArrowUpRight } from "react-icons/go";
import { Link } from 'react-router-dom';
import ImageLazyLoading from './ImageLazyLoading';

function Blog() {
   return (
      <div className='blog'>
         <div className="wrapper">
            <div className="space">
               <div> <h1>Fique atento as noticias sobre nós no país e no mundo !</h1></div>
               <div className="txt" >
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, molestias! Natus reprehenderit iusto at consectetur autem laboriosam temporibus dolor labore, omnis ipsum eum, numquam quidem pariatur sapiente? Rerum, rem eveniet.</p>
                  <button className="btn bg-main">Saiba mais <GoArrowUpRight /></button>
               </div>
            </div>
            <div className="blog-boxes">
               <div className="v-boxes">
                  <article>
                     <div className="image">
                        <ImageLazyLoading source="https://www.marketplace.org/wp-content/uploads/2022/07/GettyImages-1326355733-e1658867294544.jpg?fit=2879%2C1619" />
                     </div>
                     <div className="step">Nova</div>
                     <h1>17 Anos a Prestar Serviços de Excelência ...</h1>
                     <p>Com o rigor que nos caracteriza, queremos fomentar a confiança junto dos nossos clientes, proporcionando os serviços mais avançados e adequados às necessidades presentes e futuras....</p>
                  </article>
                  <article>
                     <div className="image">
                        <ImageLazyLoading source="https://cdn.thewirecutter.com/wp-content/media/2023/11/androidtablets-2048px-05928-3x2-1.jpg?auto=webp&quality=75&crop=3:2&width=1024" />
                     </div>
                     <div className="step">Nova</div>
                     <h1>17 Anos a Prestar Serviços de Excelência ...</h1>
                     <p>Com o rigor que nos caracteriza, queremos fomentar a confiança junto dos nossos clientes, proporcionando os serviços mais avançados e adequados às necessidades presentes e futuras....</p>   </article>
               </div>
               <article className='vt-box'>
                  <div className="image">
                     <ImageLazyLoading source="https://www.einhell.pt/fileadmin/corporate-media/products/do-it-yourself/stationary-machines/air-compressors/einhell-diy-stationary-machines-compressors-content-large-tank.jpg" />
                  </div>
                  <div className="text">
                     <div className="step">Nova</div>
                     <h1>17 Anos a Prestar Serviços de Excelência ...</h1>
                     <p>Com o rigor que nos caracteriza, queremos fomentar a confiança junto dos nossos clientes, proporcionando os serviços mais avançados e adequados às necessidades presentes e futuras....</p>
                  </div>
               </article>
            </div>

         </div>
      </div>
   )
}

export default Blog