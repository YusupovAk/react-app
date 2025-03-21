
import React, { useState } from 'react';

const product2 = () => {
    const [Img, setImg] = useState("src/assets/images/image 8.svg");
    const [ProductN,setProductN] = useState("Эллиптические тренажеры");
    
    return (
        <div className="product_container">
            <h2 className="product_text">
                {ProductN}
            </h2>
            <img src={Img}
             alt="Oops" className="product2_img"/>
        </div>
    )
}
export default product2;