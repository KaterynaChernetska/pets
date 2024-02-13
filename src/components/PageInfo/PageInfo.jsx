import "./PageInfo.scss";

const PageInfo = (props) => {
    // console.log(props)
    return (
        <div className={`container ${props.color}`}>{props.children}</div>
    )
}

export default PageInfo;