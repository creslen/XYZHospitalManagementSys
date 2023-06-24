import Card from 'react-bootstrap/Card';

function HomeCard() {
  return (
    <Card id='quote'>

          <h6>
            {' '}
           Your Health is What Matters.{' '}
          </h6>
          <footer className="blockquote-footer">
            <cite title="Source Title"><h6>XYZ Hospital</h6></cite>
          </footer>

    </Card>
    
  );
}

export default HomeCard;