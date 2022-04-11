import ListItem from "./ListItems";


const PageHome =(props)=>{
    return(
        <div>
            <ListItem data={props.data} />
            
        </div>
    )
}



export default PageHome;