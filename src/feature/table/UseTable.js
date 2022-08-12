import { useState } from "react";
import { useDependency } from "../../shared/hook/UseDependency";

export const UseTable = () => {
    const {tableService} = useDependency();
    const {viewState, setLoading, setError} = useDependency()
    const [tables, setTables] = useState([])
    // const [isValid, setValid] = useState(false)

    const handleInputChange = (event) => {
        setTables({
            ...tables,
            [event.target.name]: event.target.value
        })
        // this.handleValidation(key, val)
    }
    
    const handleButton = async () => {
        setLoading(true);
        try{
            const response = await tableService.createTable(tables)
            setTables(response.data)
            console.log(response.data);
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false)
        }
    }

    const onGetAllTable = async() => {
        setLoading(true);
        try {
            const response = await tableService.getAllTable();
            console.log(response.data);
            setTables(response.data)
        } catch (e) {
            alert(e.message)
        } finally {
            setLoading(false)
        }
    }

    return {viewState, tables, handleInputChange, handleButton, onGetAllTable}
    
}

// clearForm = () => {
//     this.setState({
//         table: {
//             id: '',
//             tableNumber: '',
//             status: 'Unavailable'
//         },
//         error: {
//             errorid: null,
//             errortableNumber: null
//         },
//         isValidForm: false
//     })
// }

 // handleValidation = (key, value) => {
    //     let isValid;
    //     if (value === '') {
    //         this.setState({
    //             error: {...this.state.error, [`error${key}`]: 'field is required'}
    //         })
    //         isValid = false
    //     } else {
    //         this.setState({
    //             error: {...this.state.error, [`error${key}`]: ''}
    //         })
    //         isValid = true
    //     }
    //     this.handleFormValidation()
    //     return isValid
    // }
    
    // handleFormValidation = () => {
    //     this.setState((prevState) => {
    //         if (prevState.error.errorid === '' && prevState.error.errortableNumber === '') {
    //             return {isValidForm: true}
    //         } else {
    //             return {isValidForm: false}
    //         }
    //     })
    // }