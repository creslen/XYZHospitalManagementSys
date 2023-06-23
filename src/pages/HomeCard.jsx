import Card from 'react-bootstrap/Card';

function HomeCard() {
  return (
    <Card id='quote'>
      <Card.Header><h5>XYZ Hospital</h5></Card.Header>  
        <blockquote className="blockquote mb-0">
          <h6>
            {' '}
           Your Health is What Matters.{' '}
          </h6>
          <footer className="blockquote-footer">
            <cite title="Source Title"><h6>Anonymous</h6></cite>
          </footer>
        </blockquote>
    </Card>
    
  );
}

export default HomeCard;