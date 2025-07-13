import React from "react";


import { Card } from "./Card";
import { Jumbotron } from "./Jumbotron";
import { NavBar } from "./NavBar";


//ccomponente principal Home.
const Home = () => {
	//aqui la función que recibe una frase y la imprime en consola.
	const dimeTuFrase = (frase) => {
		console.log(frase);
	}




	return (
		<div className="container pt-5">
			<NavBar />
			<Jumbotron />
			<h1 className="text-center mb-4">"Saga Baldur´s Gate"</h1>
			<div className="row">
				<Card 
				nombre= "Baldur's Gate" 
				imagen="https://static.wikia.nocookie.net/baldursgategame/images/0/09/Baldur%27s_Gate_box.jpg/revision/latest?cb=20180521111438" 
				frase="Quien lucha contra monstruos debe procurar no convertirse él mismo en un monstruo ...cuando miras al abismo, el abismo también te mira a ti."
				Sinopsis="Sigue al personaje principal, un huérfano criado en un monasterio, que se embarca en una aventura para descubrir su verdadera identidad y detener una conspiración que amenaza la región de la Costa de la Espada."
				dimeTuFrase={dimeTuFrase}


				/>
				<Card
				nombre= "Baldur's Gate II" 
				imagen="https://i.3djuegos.com/juegos/8457/baldurs_gate_ii_throne_of_bhaal/fotos/ficha/baldurs_gate_ii_throne_of_bhaal-1916529.jpg" 
				frase="¡Hey, no te olvides de mí!"
				Sinopsis="Poco después de los eventos del primer juego, el protagonista y sus compañeros capturados por el mago Jon Irenicus. Irenicus,interesado en el poder oculto del protagonista, quien resulta ser un engendro de Bhaal. Centrado en la huida de la prisión, la búsqueda de Imoen y la confrontación con Irenicus."
				dimeTuFrase={dimeTuFrase}

				/>
				<Card 
				nombre= "Baldur's Gate III" 
				imagen="https://i.3djuegos.com/juegos/16670/baldur__039_s_gate_3/fotos/ficha/baldur__039_s_gate_3-5271587.jpg" 
				frase="¡Y a mi bolsillo!"
				Sinopsis="Infectados por un parásito que les otorga poderes pero también impulsa a luchar contra la corrupción y el destino. La historia centrada en la búsqueda de una cura, mientras se enfrentan a diablos, deidades y otras fuerzas en los Reinos Olvidados. Las decisiones determinarán el destino de sus personajes y del mundo."
				dimeTuFrase={dimeTuFrase}

				/>
			</div>
			</div>
		);
		};

			export default Home;