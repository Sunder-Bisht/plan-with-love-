import Card from "./Card";

function Tours({ tours, removeTour }) {
  return (
    <div className="container">
      <div>
        <h1 className="title">Plan with Love</h1>
      </div>
      <div className="cards">
        {tours.map((tour) => {
          return <Card {...tour} removeTour={removeTour} key={tour.id} />;
        })}
      </div>
    </div>
  );
}
export default Tours;
