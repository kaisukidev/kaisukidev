import { styled } from "styled-components";

export function Portfolio() {
  return (
    <div>
      <p> This section is dedicated to my projects and contributions in the field of e-commerce. Throughout my career as a Technology Coordinator, I have had the opportunity to participate in various challenging projects, where I could apply my knowledge and skills to drive the success of companies and enhance the customer experience.</p>
      <p>Here are some of the projects I have been involved in, each representing a unique opportunity to showcase my expertise in e-commerce. Each provided link will allow you to dive into each project, experiencing the quality and unique experience that each one offers.</p>
      <Wrapper className="lg:flex lg:max-w-xl lg:justify-between">
        <ul>
          <li><a target="_blank" className="lg:text-white text-sky-500" href="https://waaw.com.br">WAAW By Alok</a></li>
          <li><a target="_blank" className="lg:text-white text-sky-500" href="https://www.stockstoreoficial.com.br">Stock Store - Stock Car</a></li>
          <li><a target="_blank" className="lg:text-white text-sky-500" href="https://www.farmadelivery.com.br">Farma Delivery</a></li>
          <li><a target="_blank" className="lg:text-white text-sky-500" href="https://shoppingleblon.com.br">Shopping Leblon</a></li>
          <li><a target="_blank" className="lg:text-white text-sky-500" href="https://www.exploremode.com.br">Explore Mode</a></li>
        </ul>
        <ul>
          <li><a target="_blank" className="lg:text-white text-sky-500" href="https://www.saraiva.com.br">Saraiva</a></li>
          <li><a target="_blank" className="lg:text-white text-sky-500" href="https://www.lachocole.com.br">La Chocole</a></li>
          <li><a target="_blank" className="lg:text-white text-sky-500" href="https://www.santalolla.com.br">Santa Lolla</a></li>
          <li><a target="_blank" className="lg:text-white text-sky-500" href="https://www.ironstudios.com.br">Iron Studios</a></li>
          <li><a target="_blank" className="lg:text-white text-sky-500" href="https://www.tamashii.com.br">Tamashii</a></li>
          <li><a target="_blank" className="lg:text-white text-sky-500" href="https://www.japanstore.com.br">Japan Store</a></li>
        </ul>
        <ul>
          <li><a target="_blank" className="lg:text-white text-sky-500" href="https://www.thenorthface.com.br">The North Face</a></li>
          <li><a target="_blank" className="lg:text-white text-sky-500" href="https://www.fjallraven.com.br">Fjallraven</a></li>
          <li><a target="_blank" className="lg:text-white text-sky-500" href="https://www.araujo.com.br">Drogaria Araujo</a></li>
          <li><a target="_blank" className="lg:text-white text-sky-500" href="https://www.hopelingerie.com.br">Hope</a></li>
          <li className="font-bold">Among others...</li>
        </ul>
      </Wrapper>
    </div>
  )
}

const Wrapper = styled.div`
  a{
    &:hover{
      color: rgb(14 165 233);
    }
  }
`