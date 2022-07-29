import { Component } from "react";
import { Navbar, Container } from "react-bootstrap";
import Menu from "../Component/Menu";
import Table from "../Component/Table";

class MainPage extends Component{
    constructor(props){
        super(props)
        this.state={
            menus:[{
                id:'1',
                menuName:'Pecel Lele',
                price:'12000'
            }],
            tables: [{
                id:'1',
                tableNo: "001",
                status: "Available",
            }],
        }
    }

    handleSubmitMenu = (menu) => {
        this.setState({
            menus : [...this.state.menus, menu]
        })
    }

    handleSubmitTable = (table) => {
        this.setState({
            tables : [...this.state.tables, table]
        })
    }

    handlePage = (navbar) =>{
        this.setState({
            navbar : navbar
        })
    }

  render() {
    let pageView = ''
    if (this.state.navbar === 'menus'){
      pageView = <Menu menus={this.state.menus} cbSubmitMenu={this.handleSubmitMenu}/>
    } else if (this.state.navbar === 'tables'){
      pageView = <Table tables={this.state.tables} cbSubmitTable={this.handleSubmitTable}/>
    } else {
      pageView = <h1 className="title">Welcome to WMB</h1>
    }
    return (
      <div>
         <Navbar className="header" bg='dark' variant='dark' expand ='lg'>
          <Container>
            <Navbar.Brand>WMB</Navbar.Brand>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <Navbar.Collapse id = 'basic-navbar-control'>
            <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" onClick={() => this.handlePage('')}>Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" onClick={() => this.handlePage('menus')}>Menu</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" onClick={() => this.handlePage('tables')}>Table</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" onClick={() => this.handlePage('')}>Logout</a>
                  </li>
                </ul>
            </Navbar.Collapse>
          </Container>
         </Navbar>
         <div className="page">
            {pageView}
         </div>
      </div>
    );
  }
}

export default MainPage