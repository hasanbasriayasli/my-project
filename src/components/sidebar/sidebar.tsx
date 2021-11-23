import  { Dispatch, SetStateAction } from 'react';
import SidebarColors from './sidebarColors';
import SidebarSorting from './sidebarSorting';
import SidebarBrands from './sidebarBrands';
import './sidebar.scss'
import { Sorting } from '../../modals/Sorting';

interface Props{
    sorting: Sorting[],
    setSorting: Dispatch<SetStateAction<Sorting[]>>
}
const Sidebar = ({sorting, setSorting}: Props) => {
    return (
        <div className="sidebar">
            <p className="sidebar_title">Renk</p>
            <div className="sidebar_item">
                <SidebarColors />
            </div>
            <p className="sidebar_title">Sıralama</p>
            <div className="sidebar_item">
                <SidebarSorting sorting={sorting} setSorting={setSorting}/>
            </div>
            <p className="sidebar_title">Marka</p>
            <div className="sidebar_item">
                <SidebarBrands/>
            </div>
        </div>
    )
}

export default Sidebar;
