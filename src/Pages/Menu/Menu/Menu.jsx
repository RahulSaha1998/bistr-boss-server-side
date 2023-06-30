import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import desertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import useMenu from "../../../hooks/useMenu";
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';



const Menu = () => {

    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');
    

    return (
        <div>
            <Helmet>
                <title>Bistro | Menu</title>
            </Helmet>
            <Cover
            img={menuImg}
            title={"Our Menu"}
            ></Cover>

            {/* Menu Cover */}
            <SectionTitle
            subHeading={"Don't miss todays offer"}
            heading={"Today's Offer"}
            ></SectionTitle>

            {/* Offered Menu  items*/}
            <MenuCategory
            items={offered}
            ></MenuCategory>

            {/* Desert Menu  items*/}
            <MenuCategory
            items={desserts}
            title="dessert"
            img={desertImg}
            ></MenuCategory>

            {/* Pizza Menu  items*/}
            <MenuCategory
            items={pizza}
            title="pizza"
            img={pizzaImg}
            ></MenuCategory>

            {/* Salad Menu  items*/}
            <MenuCategory
            items={salad}
            title="salad"
            img={saladImg}
            ></MenuCategory>

            {/* Soup Menu  items*/}
            <MenuCategory
            items={soup}
            title="soup"
            img={soupImg}
            ></MenuCategory>
            
        </div>
    );
};

export default Menu;