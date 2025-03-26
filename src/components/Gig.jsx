import './Gig.css';
import Button from './Button';
import AnimatedButton from './LikeButton';

const Gig = (props) => {
  const handleClick = () => {
    console.log(`clicked: ${props.band}`);
  };
  return (
    <div className="gig">
      <AnimatedButton />
      <h1>{props.band}</h1>
      <img className="AlbumCover"
        src={props.image} alt={props.album} />
      <p className="Event">
        {props.description}</p>
      <p className="Date">
        {props.date}</p>
      <p  className="Location">
        {props.location}</p>
      <Button onClick={handleClick} label="Buy Tickets"/>
    </div> 
  )
};

export default Gig