import Card  from "./Card";

function Tours({tours, removeTour}) {
    return(
        <div className="container">
            <div>
                <h2 className="title">Wander with Am</h2>
            </div>
            
            <div className="cards">
                {
                    tours.map((tour) => {
                        return <Card key={tour.id} {...tour} removeTour={removeTour}></Card> // the best practice is whenever we use map function on a list we should always pass key there, A key is an unique identifier. Let's say there is a case where there is no unique identifier then in this scenario you can pass the index like key={index} but this is not a good practice
                    })
                }
            </div>
        </div>
    );
}

export default Tours;