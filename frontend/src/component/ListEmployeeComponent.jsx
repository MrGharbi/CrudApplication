import React, { Component } from 'react'

class ListEmployeeComponent extends Component {
    constructor(props){
        super(props);

        this.state={
            employees: []
        }
    }

    componentDidMount(){
        fetch('http://localhost:8080/api/v1/employees')
        .then((res) => res.json())
        .then(data => this.setState({employees : data}))
    }

    render() {
        return (
            <div>
                <h2 className='text-center'> Employees List</h2>
                <div className='row'>
                    <table className='table table-triped table-bordered'>
                        <thead>
                            <tr>
                                <th>Employee First Name</th>
                                <th>Employee Last Name</th>
                                <th>Employee Email Id</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employees.map(
                                    employee =>
                                    <tr key = {employee.id}>
                                        <td>{employee.fistName}</td>
                                        <td>{employee.lastName}</td>
                                        <td>{employee.emailId}</td>
                                    </tr>
                                    )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListEmployeeComponent;