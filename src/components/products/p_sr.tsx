interface ProductProps {
    Img: string;
    Info2: string;
}

const Psr = (props: ProductProps) => {
    return (
        <div className="srC">
            <h2 className="srT">
                {props.Info2}
            </h2>
            <img src={props.Img} alt={"asa"} className="srI"/>
        </div>
    )
}
    export default Psr