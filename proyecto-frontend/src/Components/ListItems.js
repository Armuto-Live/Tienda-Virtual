import Item from "./Items";
import { CardGroup } from "react-bootstrap";

const ListItem =(props)=>{
    return(
        <CardGroup>
            {props.data.map((i)=>(
                <Item elemento={i} />
            ))}
        </CardGroup>
    )
}

export default ListItem;