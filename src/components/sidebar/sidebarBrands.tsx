import React, { useContext } from 'react';
import './sidebar.scss';
import { brandsData } from '../../modals/sidebarData';
import { Context } from '../../App';


const SidebarBrands = () => {
    const { brands, setColors, dispatch } = useContext<any>(Context);

    const handleChose = (index: number) => {
        dispatch({
            type: 'brands',
            index
        })
    }
    return (<nav className="nav">
        <ul className="nav-items">
            {
                brands.map((item: any, index: any) =>
                    <li key={index} className={`nav_items_item ${item?.active ? 'nav_items_item__active' : ''}`}><a onClick={() => handleChose(index)}>{item?.name}</a></li>
                )
            }
        </ul>
    </nav>)
}

export default SidebarBrands