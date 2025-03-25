import './Gig.css';
import Button from './Button';

const Gig = (props) => {
  const handleClick = () => {
    console.log(`clicked: ${props.band}`);
  };
  return (
    <div className="gig">
      <h1>{props.band}</h1>
      <img id="AlbumCover"
        src={props.image} alt={props.album} />
      <p id="Event">
        {props.description}</p>
      <p id="Date">
        {props.date}</p>
      <p id ="Location">
        {props.location}</p>
      <Button onClick={handleClick} label="Buy Tickets"/>
    </div> 
  )
};

export default Gig