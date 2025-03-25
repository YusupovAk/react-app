import { useState } from "react"
import Acsi from "./products/aksiya_protuct"

const aksiya = () => {
    const [count, setCount] = useState(false)
    return (
	<section className="acsiya">
        <div className="text_a">
            <h2 className="A_Text">Акция</h2>
            <a href="">Новинки</a>
            <a href="">Мы рекомендуем</a>
        </div>
        <div className="conAksiya">
        <Acsi/>
        <Acsi/> 
        <Acsi/>
        <Acsi/>
        {count && (
            <>

                <Acsi/>
                <Acsi/>
            </>
        )}
        
        </div>
        <button type="button" className="see" onClick={ () => setCount(true)}>Все товары по акции</button>

    </section>
)}
export default aksiya