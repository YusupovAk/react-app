import Psr from "./products/p_sr";

const productsPage = () => {
    let pic = ["src/assets/images/PB4.png","src/assets/images/PB5.png","src/assets/images/PB6.png","src/assets/images/PB7.png"]
    let str = ["Функциональный тренинг","Wellness, СПА, Массаж","Спортивная медицина и реабилитация","Свободные веса"]
    let str2 = ["Грузоблочные тренажеры","Тренажеры на свободных весах"]
    let pic2 = ["src/assets/images/PB2.png","src/assets/images/PB3.png"]
    return (
        <>

        <h2 className="PpText">Профессиональные кардиотренажеры</h2>
        <div className="row1">
        
        <img src="src/assets/images/PB1.png" alt="" id="imgPB" />
        {pic2.map((Img: string, index: number) =>(
            <Psr key={index} Img={Img} Info2={str2[index % str2.length]}/>
        ))}
        </div>

        <div className="row2">
        {pic.map((Img: string, index: number) => (
            <Psr key={index} Img={Img} Info2={str[index % str.length]}/>
        ))}
        </div>
        <button type="button" id="PPButton">Все категории</button>

        </>
    )
}
export default productsPage