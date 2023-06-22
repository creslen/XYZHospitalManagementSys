import Card from 'react-bootstrap/Card';

function HomeCard() {
  return (
    <Card id='quote'>
      <Card.Header>XYZ Hospital</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            {' '}
           Your Health is What Matters.{' '}
          </p>
          <footer className="blockquote-footer">
            <cite title="Source Title">Anonymous</cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
    
  );
}

export default HomeCard;