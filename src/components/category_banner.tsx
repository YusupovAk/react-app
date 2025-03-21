import Psr from "./products/p_sr";
import Product from "./products/product"
import Product2 from "./products/product copy";
import Sproduct from "./products/product_small"

const c_banner = () => {
    let Small = ["src/assets/images/image 8 (1).png","src/assets/images/image 8.png","src/assets/images/small 4.png","src/assets/images/small5.png"]
    let Ifo2 = ["Велотренажеры","Горнолыжные тренажеры","Силовые тренажеры","Гребные тренажеры"]
    let StL = ["src/assets/images/St1.png","src/assets/images/St2.png","src/assets/images/Sr3.png","src/assets/images/St4.png"]
    let StIfo = ["Батуты","Игровые столы","Массажные кресла","Фитнес аксессуары "]
    return (
        <div className="c_banner">
            <h2><b>Тренажеры для дома</b></h2>
            <div className="products">
                <Product/>
                <Product2/>
            <div className="octance">

                {Small.map((Img: string, index: number) => (
                    <Sproduct key={index} Img={Img} Info2={Ifo2[index % Ifo2.length]}/>
                ))}    
            </div>
            
            </div>
            <div className="St">
               <br /> {StL.map((Img: string, index: number) =>(
                    <Psr key={index} Img={Img} Info2={StIfo[index % StIfo.length]} />
                ))}
            </div>
        </div>
    )
}

export default c_banner;