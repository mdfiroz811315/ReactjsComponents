function Header(props) {
    let headerData = "This Data is in header page"
    return (
        <div>
            <h2 className="centertext">{props.heading} <br></br> {props.name}</h2>
            <h3 className="centertext">{headerData}</h3>
        </div>
  )
  }
  
  export default Header;