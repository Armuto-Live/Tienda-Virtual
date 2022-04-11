import { Card,Button } from "react-bootstrap";

const Item =(props)=>{
    return(
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.elemento.image} />
            <Card.Body>
                <Card.Title className="text-primary" >{props.elemento.name}</Card.Title>
                <Card.Text className="text-primary" >
                    {props.elemento.name}
                    <br />
                    price: {props.elemento.price}
                </Card.Text>
                <Button variant="primary">Add</Button>
            </Card.Body>
        </Card>
    )
}

export default Item;