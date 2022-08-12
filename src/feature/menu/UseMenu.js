import { useEffect, useState } from "react";
import { useDependency } from "../../shared/hook/UseDependency";
import { useViewState } from "../../shared/hook/UseViewState"

export const UseMenu = () => {
    const {menuService} = useDependency();
    const {viewState, setLoading, setError} = useViewState()
    const [menus, setMenus] = useState([])

    const [isShowingForm, setShowingForm] = useState(false)

    const handleShowForm = (isShowing) => {
        setShowingForm(isShowing)
    }

    useEffect(() => {
        onGetAllMenu()
    }, [menus]);

    const handleInputChange = (event) => {
        setMenus({
            ...menus,
            [event.target.name]: event.target.value
        })
    }

    const handleButton = async () => {
        setLoading(true);
        try{
            const response = await menuService.createMenu(menus)
            setMenus(response.data)
            console.log(response.data);
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false)
        }
    }

    const onGetAllMenu = async() => {
        setLoading(true);
        try {
            const response = await menuService.getAllMenu();
            console.log(response.data);
            setMenus(response.data)
        } catch (e) {
            alert(e.message)
        } finally {
            setLoading(false)
        }
    }
    

    return {viewState, menus, handleInputChange, handleButton, onGetAllMenu, handleShowForm, isShowingForm}
}