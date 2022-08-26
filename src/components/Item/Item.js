import { useState } from 'react';
import XMLParser from 'react-xml-parser';
import styles from './Item.module.css'



export const Item = ({
    price,
    productImage,
    tampons,
    currency,
    name
}) => {

    const [radio, setRadio] = useState('')
    //making all the data in the same format
    if (!Array.isArray(tampons)) {
        tampons = new XMLParser().parseFromString(tampons).children;
        for (let i = 0; i < tampons.length; i++) {
            let tempObj = {};
            for (let elem of tampons[i].children) {
                tempObj[elem.name] = elem.value;
            }
            tampons[i] = tempObj;
        }
    }

    function handleRadioChange(e){
        setRadio(e.target.value);
    }

    return (
        <div className={styles.wrapper}>
            <img className={styles.img} src={productImage} alt="" />
            <div className={styles.pinkLine}></div>
            <p>Price: <span>{price}</span> {currency}</p>
            <p><span>Choose an option:</span></p>
            <div className={styles.radioWrapper}>
                {tampons.map((item, index) => (
                    <div key={name+index}>
                        <input type="radio" id={name+index} name={name} value={"product" + index} onChange={handleRadioChange}></input>
                        <label>  Size: <span>{item.size}</span>, Coating: <span>{item.coating}</span>, Amount: <span>{Number(item.amount)}</span></label>
                    </div>
                ))}
            </div>
            <div className={styles.btnDiv}>
                <button disabled={radio ? false : true} className={radio ? styles.btn : styles.disableBtn}>Add to basket</button>
            </div>
        </div>
    )
}