interface propsOfPlaces {
    title: string,  
    place: string,  
    country: string, 
    main: string,
    link: string
    description: string
}

function Place(props: propsOfPlaces) {
    return (
        <>
        <div style={{justifyContent: 'center', display: 'flex'}}>
            <h2> {props.title} </h2>
        </div>
        <div style={{justifyContent: 'center', display: 'flex'}}>
            <h3> {props.place}, {props.country}, <a href={props.link}  target={"_blank"} > (image link) </a> </h3>
        </div>
        {/* <img src = {props.main}> </img> */}
        <div style={{justifyContent: 'center', display: 'flex'}}>
            <img src={props.main} style={{width: "50%"}} ></img>
        </div>
        <div style={{justifyContent: 'center', display: 'flex'}}>
            <p> {props.description} </p>
        </div>
        </>
    )
}

export default Place
// const locations = [{place: "London"}, {place: "Canada"}];


