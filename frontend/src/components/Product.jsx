import PropTypes from 'prop-types';
import Rating from './Rating'
import { Card } from 'react-bootstrap';

function Product({ product }) {
  return (
    <Card className='my-3 p-3 rounded'>
        <Card.Img src={product.image} alt={product.name} />
      <Card.Body>

          <Card.Title as='div'>
            <strong>{product.name} - {product._id}</strong>
          </Card.Title>


        <Card.Text as='div'>
          <div className='my-3'>
            <Rating value={product.rating} text={` ${product.numReviews} reviews`} color='#f8e825' />
          </div>
        </Card.Text>

        <Card.Text as='h3'>${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
}

// PropTypes validation
Product.propTypes = {
  product: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    numReviews: PropTypes.number.isRequired,
  }).isRequired,
};

export default Product;
