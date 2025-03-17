
const ads_banner = () => {
    return (
        <div className="ads_con">
            <div className="ads_text">
                <h3 className="ads_red_text">Zero Runner</h3>
                <h1 className="ads_blood_text">
                Бег с нулевой<br />
                ударной<br />
                нагрузкой 
                </h1>
                <h1 className="ads_big_text">
                на суставы
                </h1>
            <button type="button" id="ads_button_more">
                Узнать больше
            </button>
            </div>
            <div className="ads_red_ugl">
            <svg id="uch"  width="3080" height="92" viewBox="0 0 1080 92" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M750 0L1080 92H0L750 0Z" fill="#F53B49"/>
            </svg>
            </div>
            <div className="ads_image">
                <img src="src/assets/images/ads_image.png" alt="/ops" id="ads_img" />
            </div>
            <div className="buttons_two">
                <button type="button" id="ads_next" className="ads_buddon">
                    <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 6.5H1M1 6.5L6.42466 1M1 6.5L6.42466 12" stroke="#F53B49" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
            </button>
            <button type="button" id="ads_perv" className="ads_buddon">
            <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 6.5H14M14 6.5L8.57534 1M14 6.5L8.57534 12" stroke="#F53B49" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

            </button>
            </div>
        </div>
    )
}
export default ads_banner;