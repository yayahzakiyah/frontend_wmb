import { Route, Routes } from "react-router-dom"
import { LoginView } from "../feature/login/LoginView"
import MenuView from "../feature/menu/MenuView"
import TableView from "../feature/table/TableView"
import { APP_NAVIGATION } from "../shared/constants"
import { Navigation } from "./Navigation"
import ProtectedRoute from "./ProtectedRoute"


export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<LoginView/>}/>
            <Route element={<ProtectedRoute/>}>
                <Route path={APP_NAVIGATION.MAIN} element={<Navigation/>}>
                    <Route path={APP_NAVIGATION.MENU} element={<MenuView/>}/>
                    <Route path={APP_NAVIGATION.TABLE} element={<TableView/>}/>
                </Route>
            </Route>
            <Route
                path="*"
                element={
                    <main style={{padding: "1rem"}}>
                        <p>Oopss... page not found</p>
                    </main>}
            />
        </Routes>
    )
}