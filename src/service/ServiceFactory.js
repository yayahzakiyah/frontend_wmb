import { loginService } from "./LoginService"
import { menuService } from "./MenuService"
import { tableService } from "./TableService"

export const serviceFactory = (apiClient) => {
    return {
        loginService: loginService(apiClient),
        menuService: menuService(apiClient),
        tableService: tableService(apiClient)
    }
}