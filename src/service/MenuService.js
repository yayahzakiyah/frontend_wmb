import {menus} from "../data"

const MenuService = () => {
    const getMenuByCategory = async (category) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const menusByCat = []
                for (let menu of menus) {
                    if (menu.category === category) {
                        menusByCat = [...menusByCat, menu]
                    }
                }
                resolve(menusByCat)
            }, 3000)
        })
    }

    return {
        getMenuByCategory
    }
}

export default MenuService