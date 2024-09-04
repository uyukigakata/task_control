import { FaTasks, FaRegCheckSquare, FaRegClock } from "react-icons/fa";
import NavItem from "./NavItem/NavItem";

interface NavItemType{
    id: number;
    label: string;
    link: string;
    icon: React.ReactNode;
}

const NavList = () => {
    const navList: NavItemType[] = [
        {
            id: 1, 
            label: 'ALL Tasks', 
            link: '/', 
            icon: <FaTasks className="size-5" />
        },
        {
            id: 2, 
            label: 'Completed Tasks', 
            link: '/completed', 
            icon: <FaRegCheckSquare className="size-5" />
        },
        {
            id: 3, 
            label: 'Expired Tasks', 
            link: '/expired', 
            icon: <FaRegClock className="size-5" />
        }
    ]
    return (
    //mt-()で上下位置
    <div className="mt-24">
        
        {navList.map((item) => (
            //navlist　←　navlistコンポーネントに渡す
            <NavItem 
                key={item.id}
                label={item.label}
                link={item.link}
                icon={item.icon}
            />
        ))}
    </div>
    )
}
export default NavList
