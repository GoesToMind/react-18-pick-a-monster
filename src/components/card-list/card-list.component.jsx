import Card from '../card/card.component';
import './card-list.styles.css';

const CardList = ({ robots }) => (
  <div className="card-list">
    {robots.map((robot) => {
      return <Card robot={robot} key={robot.id} />;
    })}
  </div>
);

export default CardList;
