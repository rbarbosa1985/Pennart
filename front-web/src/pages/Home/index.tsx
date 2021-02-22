import React from 'react';
// import { ReactComponent as MainImage } from 'core/assets/images/main.svg';
import Biamain from 'core/assets/images/biamain.jpg';
import ButtonIcon from 'core/components/ButtonIcon';
import { Link } from 'react-router-dom';
import './styles.scss';


const Home = () => {
     return (
          <div className="home-container">
               <div className="row home-content card-base border-radius-20">
                    <div className="col-6">
                         <img src={Biamain} className="main-image" />
                         {/* <MainImage className="main-image" /> */}
                    </div>
                    <div className="col-6">
                         <h1 className="text-title">Beatriz Penna</h1>
                         <p className="text-subtitle">Bia Penna, natural do Rio de Janeiro (1985) iniciou sua trajetória artística aos 8 anos de idade fazendo aulas de pintura à óleo. Em seguida, passou por diversas técnicas mas nunca saindo da área artística, tendo a Pintura como sua grande paixão. Aos 17 anos ingressou na Escola de Belas Artes da UFRJ, no curso de Pintura e em 2008 se graduou Bacharel em Pintura. Desde 2009 ministra cursos de Aquarela, Desenho Artístico e Pintura em Petrópolis, cidade onde reside. Em 2014 iniciou um projeto de Oficinas Gratuitas de Aquarela nos Jardins do Museu Imperial, que se desdobrou em alguns Minicursos gratuitos de Aquarela e Desenho Artístico, também fornecidos pela Instituição Federal. Já participou de inúmeras exposições coletivas e realizou algumas individuais, sempre proporcionando durante as mostras oficinas e workshops, pois acredita que "a experiência do fazer artístico junto à contemplação traz um novo olhar àquele que visita a exposição". Assim, segue disseminando a Arte por onde passa.</p>
                         {/* <Link to="/products"> */}
                         {/* <ButtonIcon text="inicie agora a sua busca"/> */}
                         {/* </Link> */}
                    </div>

               </div>
          </div>
     )
}

export default Home;