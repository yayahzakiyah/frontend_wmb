import { Component } from "react";
import MenuForm from "./component/MenuForm";

class MenuView extends Component{
    onUpdateForm = () => {
        this.setState({
            isFormUpdated: true
        })
    }

    render(){
        return(
            <>
                <MenuForm handleFormUpdate={this.onUpdateForm}/>
            </>
        )
    }
}

export default MenuView