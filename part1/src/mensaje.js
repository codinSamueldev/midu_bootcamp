const Mensaje = (props) => {
    console.log(props)
    return (<h3 style={{color: props.color}}>{props.message}</h3>)
}

export default Mensaje