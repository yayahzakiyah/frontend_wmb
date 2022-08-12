import {Component} from "react";
import { UseTable } from "../../UseTable";
import './TableForm.css'

const TableForm = () => {
        const {viewState, tables, handleInputChange, handleButton} = UseTable()
        
        return (
            <>
            <div>
                <div className="table-form-input-container">
                <div className="table-form-header">
                <h2>Table Form</h2>
                </div>
                <label>ID</label>
                <input className="table-form-input" name='id' type='text' value={tables.id} onChange={handleInputChange}/>
                <br/>
                <label>Table Number</label>
                <input className="table-form-input" name='tableNumber' type='text' value={tables.tableNumber} onChange={handleInputChange}/>
                <br/>
                <label>Status</label>
                <select className='table-form-input' name="category" onChange={handleInputChange}>
                    <option value='Available'>Available</option>
                    <option value='Unavailable'>Unavailable</option>
                </select>
                <br/>
                <button className="table-form-action" onClick={handleButton}>Add</button>
                </div>
            
            </div>
                
            </>
        )
}

export default TableForm;