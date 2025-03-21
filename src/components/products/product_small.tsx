
interface ProductProps {
    Img: string;
    Info2: string;
}

const s_product = (props: ProductProps) => {
    console.log(props.Img,props.Info2);
    
    return(
        <div className="s_product">
            <h2 className="product_text_s">
                {props.Info2}
            </h2>
            <img src={props.Img}
             alt="Oops" className="product2_img_s"/>
        </div>
    )
}
export default s_product;