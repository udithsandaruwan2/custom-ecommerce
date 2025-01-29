import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import Rating from '../components/Rating';
import products from '../products';

function ProductScreen() {
    const { pk } = useParams();
    const product = products.find((p) => p._id === pk);

    return (
        <div>
            <Link to="/" className='btn btn-dark my-3 py-2 px-4' rounded>Go Back</Link>
        </div>

    );
}

export default ProductScreen;
