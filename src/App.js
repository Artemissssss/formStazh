import { useState } from "react";
import style from "./App.module.css";

function App() {
  const [theme,setTheme] = useState(true);
  const [descr,setDescr] = useState(false);
  const [analy,setAnaly] = useState(false);
  const [stratag,setStratag] = useState(false);
  const [prod,setProd] = useState(false);
  const [reso,setReso] = useState(false);
  const [ind,setInd] = useState(false);
  const [period,setPeriod] = useState("Квартал");
  const [periodTwo,setPeriodTwo] = useState("Місяць");
  const [periodThree,setPeriodThree] = useState("Тиждень");
  const themeSwitcher = ()=>{
    document.body.style.background = !theme ? "white" : "#282932";
    document.body.style.color = !theme ? "black" : "white";
    setTheme(!theme)
  };
  const sendForm = (e) =>{
    e.preventDefault();
    e.target.reset()
  }

  return (
    <>
    <header>
      <nav className={style.navSect}>
          <h1 className={theme ? style.h1Text : style.h1TextNigth}>LOGO</h1>
          <ul className={style.pointsList}>
              <li className={descr ? style.pointsItemCh : style.pointsItem}><p className={descr ? style.pointsItemTextCh : style.pointsItemText}>Опис</p></li>
              <li className={analy ? style.pointsItemCh : style.pointsItem}><p className={analy ? style.pointsItemTextCh : style.pointsItemText}>Аналіз</p></li>
              <li className={stratag ? style.pointsItemCh : style.pointsItem}><p className={stratag ? style.pointsItemTextCh : style.pointsItemText}>Стратегія</p></li>
              <li className={prod ? style.pointsItemCh : style.pointsItem}><p className={prod ? style.pointsItemTextCh : style.pointsItemText}>Продукт</p></li>
              <li className={reso ? style.pointsItemCh : style.pointsItem}><p className={reso ? style.pointsItemTextCh : style.pointsItemText}>Ресурси</p></li>
              <li className={ind ? style.pointsItemCh : style.pointsItem}><p className={ind ? style.pointsItemTextCh : style.pointsItemText}>Індикація</p></li>
          </ul>
          <div className={theme ?  style.ligthTheme : style.darkTheme} onClick={themeSwitcher}></div>
      </nav>
    </header>
    <main>
      <form className={style.form} onSubmit={sendForm}>
        <div className={style.formItem}></div>
        <div className={style.formItemInputWrap}>
          <div className={style.formItemWrapDiv}>
          <label className={style.formItemLabel} for="descr">ㅤㅤㅤОпишіть вашу ідею в 2-3 реченнях</label>
          <div className={style.formItemWrapBox}>
            <div className={style.formItemCheck} style={{background: descr?"#39CA06" : "#D9D9D9"}}></div>
            <input type="text" name="descr" onFocus={(e) => {e.target.style.borderColor = theme ? "black" : "white"}} onBlur={(e) => e.target.style.borderColor = "#A6A6A6"} style={{caretColor: theme ? "black" :"white"}} className={style.formItemInput} onChange={(e)=> e.target.value.length !== 0 ? setDescr(true) : setDescr(false)} required/>
          </div>
          </div>
          <div className={style.formItemWrapDiv}>
          <label className={style.formItemLabel} for="descr">ㅤㅤㅤЯкий найперспективніший напрямок дій?</label>
          <div className={style.formItemWrapBox}>
            <div className={style.formItemCheck} style={{background: analy?"#39CA06" : "#D9D9D9"}}></div>
            <input type="text" name="descr" onFocus={(e) => {e.target.style.borderColor = theme ? "black" : "white"}} onBlur={(e) => e.target.style.borderColor = "#A6A6A6"} style={{caretColor: theme ? "black" :"white"}} className={style.formItemInput} onChange={(e)=> e.target.value.length !== 0 ? setAnaly(true) : setAnaly(false) } required/>
          </div>
          </div>
          <div className={style.formItemWrapDiv}>
          <label className={style.formItemLabel} for="descr">ㅤㅤㅤЩо ви хочете реалізувати за найближчий період?</label>
          <div className={style.formItemWrapBox}>
            <div className={style.formItemCheck} style={{background: stratag?"#39CA06" : "#D9D9D9"}}></div>
            <input type="text" name="descr" onFocus={(e) => {e.target.style.borderColor = theme ? "black" : "white"}} onBlur={(e) => e.target.style.borderColor = "#A6A6A6"} style={{caretColor: theme ? "black" :"white"}} className={style.formItemInput} onChange={(e)=> e.target.value.length !== 0 ? setStratag(true) : setStratag(false)} required/>
          </div>
          </div>
          <div className={style.formItemWrapDiv}>
          <label className={style.formItemLabel} for="descr">ㅤㅤЯку цінність і кому ви пропонуєте?</label>
          <div className={style.formItemWrapBox}>
            <div className={style.formItemCheck} style={{background: prod?"#39CA06" : "#D9D9D9"}}></div>
            <input type="text" name="descr" onFocus={(e) => {e.target.style.borderColor = theme ? "black" : "white"}} onBlur={(e) => e.target.style.borderColor = "#A6A6A6"} style={{caretColor: theme ? "black" :"white"}} className={style.formItemInput} onChange={(e)=> e.target.value.length !== 0 ? setProd(true) : setProd(false)} required/>
          </div>
          </div>
          <div className={style.formItemWrapDiv}>
          <label className={style.formItemLabel} for="descr">ㅤㅤЯкі ресурси вам для цього необхідні?</label>
          <div className={style.formItemWrapBox}>
            <div className={style.formItemCheck} style={{background: reso?"#39CA06" : "#D9D9D9"}}></div>
            <input type="text" name="descr" onFocus={(e) => {e.target.style.borderColor = theme ? "black" : "white"}} onBlur={(e) => e.target.style.borderColor = "#A6A6A6"} style={{caretColor: theme ? "black" :"white"}} className={style.formItemInput} onChange={(e)=> e.target.value.length !== 0 ? setReso(true) : setReso(false)} required/>
          </div>
          </div>
          <div className={style.formItemWrapDiv}>
          <label className={style.formItemLabel} for="descr">ㅤㅤㅤЯкі показники вам необхідно контролювати для успіху?</label>
          <div className={style.formItemWrapBox}>
            <div className={style.formItemCheck} style={{background: ind?"#39CA06" : "#D9D9D9"}}></div>
            <input type="text" name="descr" onFocus={(e) => {e.target.style.borderColor = theme ? "black" : "white"}} onBlur={(e) => e.target.style.borderColor = "#A6A6A6"} style={{caretColor: theme ? "black" :"white"}} className={style.formItemInput} onChange={(e)=> e.target.value.length !== 0 ? setInd(true) : setInd(false)} required/>
          </div>
          </div>
          <div className={style.formItemWrapDiv}>
          <label className={style.formItemLabel} for="descr" style={{fontSize:"22px", fontWeight:"500"}}>ㅤㅤㅤЗалиште свою пошту для збереження даних і зворотнього звʼязку</label>
          <div className={style.formItemWrapBox}>
            <div className={style.formItemCheck} style={{background:"transparent"}}></div>
            <input type="email" name="descr" className={style.formItemInput} required style={{color:"inherit",caretColor: theme ? "black" :"white",paddingRight:"220px",border:"2px solid #A6A6A6"}}/>
            <div className={style.submitWrap}>
              <button className={style.submitForm}>Надіслати</button>
            </div>
          </div>
          </div>
        </div>
        <div className={style.formItem}>
          <div className={style.selectTimeWrap}>
            <div className={style.symbolChWrap}>
              {theme ? (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="9" viewBox="0 0 16 9" fill="none" className={style.symbolCH}>
<path d="M9.44115 7.50231C8.76407 8.20596 8.42553 8.55778 8 8.55778C7.57447 8.55778 7.23593 8.20596 6.55885 7.50231L2.59865 3.38675C1.20669 1.94018 0.510706 1.2169 0.769617 0.608449C1.02853 0 2.03229 0 4.0398 0H11.9602C13.9677 0 14.9715 0 15.2304 0.608449C15.4893 1.2169 14.7933 1.94018 13.4014 3.38675L9.44115 7.50231Z" fill="#1D1D1D"/>
</svg>) : (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="9" viewBox="0 0 16 9" fill="none" className={style.symbolCH}>
  <path d="M9.44115 7.50231C8.76407 8.20596 8.42553 8.55778 8 8.55778C7.57447 8.55778 7.23593 8.20596 6.55885 7.50231L2.59865 3.38675C1.20669 1.94018 0.510706 1.2169 0.769617 0.608449C1.02853 0 2.03229 0 4.0398 0H11.9602C13.9677 0 14.9715 0 15.2304 0.608449C15.4893 1.2169 14.7933 1.94018 13.4014 3.38675L9.44115 7.50231Z" fill="white"/>
</svg>)}
            </div>
            <input className={style.selectTime} type="text" value={period} style={{borderColor:theme ? "#000":"white"}} readonly/>
            <div className={style.selectTimeCh} style={{borderColor:theme ? "#000":"white"}}>
                <p className={style.selectTimeChItem} onClick={()=>{setPeriod(periodTwo);setPeriodTwo(period)}}>{periodTwo}</p>
                <p className={style.selectTimeChItem} onClick={()=>{setPeriod(periodThree);setPeriodThree(period)}}>{periodThree}</p>
            </div>
          </div>
        </div>
      </form>
    </main>
    </>
  );
}

export default App;
