

const c_nav_bar = () => {
return (
  <div>
    <nav className="nav_con">
     
        <div className="nav_r">
          
            <div className="logo">
                <img src="src/assets/logo.svg" alt="logo" />
            </div>

            <div className="regions">
                <select name="regions" id="regions">
                    <option value="1">Москва</option>
                    <option value="2">петербург</option>
                    <option value="3">Карши</option>
                </select>
            </div>
           

        </div>
        
         <div className="nav_l">
           
            <div className="nav_l_diller">
            <a href="">Для дилеров</a>
            <button type="button" className="nav_l_button">Become a Partner</button>
            </div>
          
             <div className="nav_l_tel">
                <a href="tel:+7(800)0000000" className="nav_tel">+7 (800) 000-00-00</a>
                <select name="msk" id="msk">
                    <option value="1">МСК</option>
                    <option value="2">петербург</option>
                    <option value="3">Карши</option>
                </select>
             </div>
         
             <a href="tel:+7(800)0000000" className="nav_l_call">Заказать звонок</a>
             <div className="login">
                <a href="" id="login">Войти 
                <img src="src/assets/profile.svg" alt="user" />
                </a>
                
             </div>
         </div>
     </nav>
 </div>
    );
}

export default c_nav_bar;