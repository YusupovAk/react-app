interface ProductProps {
    Img: string;
    Info2: string;
}

const Psr = (props: ProductProps) => {
    return (
        <div className="srC2" onClick={() => {}}>
            <h2 className="srT2">
                {props.Info2}
            </h2>
            <img src={props.Img} alt={"asa"} className="srI2"/>
        </div>
    )
}
    export default Psr