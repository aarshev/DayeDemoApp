import { useState, useEffect } from "react";
import * as itemService from '../../services/itemService'
import { Item } from "../Item/Item";
import styles from './ItemList.module.css'




export const ItemList = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        itemService.getAllItems()
            .then(items => {
                for (let i = 0; i < items.length; i++) {
                    items[i]["name"] = items[i]["currency"] + i
                    if (items[i].hasOwnProperty('tapons')) {
                        items[i]["tampons"] = items[i]['tapons']
                        delete items[i]['tapons'];
                    }
                }
                setItems(items)
            });
    }, []);

    

    return (
        <>
           
            <div className={styles.container}>
                {items.length > 0
                    ? items.map((item, index) =>
                        <Item
                            key={item.name} {...item}
                        />)
                    : <h3>No items yet</h3>}


            </div>
        </>
    )
}