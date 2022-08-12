export const menuService = ({doGet, doPost}) => {

    const getAllMenu = async () => {
        try {
            return await doGet({url: '/menu'})
        } catch (e) {
            throw e
        }
    }

    const createMenu = async (newMenu) => {
        try {
            return await doPost({
                url: '/menu/list',
                data: newMenu
            })
        } catch (e) {
            throw e
        }
    }

    return {getAllMenu, createMenu}
}