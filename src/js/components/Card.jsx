export const Card = ({nombre, imagen, Sinopsis, frase, dimeTuFrase}) => {

	return (
		<div className="col-12 col-sm-6 col-md-4 d-flex">
			<div className="card mb-4 shadow-sm flex-fill" >
				<div className="image-container">
					<img src={imagen} className="card-img-top " alt="..." style={{ height: "500px",width: "100%", objectPosition: "top" }} />
					<div className="card-body">
						<h5 className="card-title">{nombre}</h5>
						<p className="card-text">{Sinopsis}</p>
						<p className="card-text">{frase}</p>
						<button className="btn btn-primary" onClick={() => dimeTuFrase(frase)} >Dime tu frase!</button>
					</div>
				</div>
			</div>
		</div>
	)
}