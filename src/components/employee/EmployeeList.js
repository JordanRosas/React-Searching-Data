import React, { Component } from 'react'
import images from './images.jpg'
import './Employees.css'
import { Link } from "react-router-dom"
import AnimalCard from "../animals/AnimalCard"


export default class EmployeeList extends Component {
    render () {
        return (
            <React.Fragment>
            <div className="employeeButton">
                <button type="button"
                    className="btn btn-success"
                    onClick={() => {
                        this.props.history.push("/employees/new")}
                        }>
                    Admit Employee
                </button>
            </div>

            <section className="employees">
                {this.props.employees.map(employee =>
                        <div key={employee.id} className="card card--employee">
                            <div className="card-body">
                                <h5 className="card-title">
                                    <img src={images} className="icon--employee" />
                                    {employee.name}
                                    <Link className="nav-link" to={`/employees/${employee.id}`}>Details</Link>
                                <a href="#"
                                    onClick={() => this.props.deleteEmployee(employee.id)}
                                    className="card-link">Delete</a>
                                </h5>

                                <h6 className="card-subtitle mb-2 text-muted">Caretaker For</h6>
                                <div className="animals--caretaker">
                                {
                                    this.props.animals
                                        .filter(anml => anml.employeeId === employee.id)
                                        .map(anml => <AnimalCard key={anml.id} animal={anml} {...this.props} />)
                                }
                                </div>

                            </div>
                        </div>
                    )
                }
            </section>
            </React.Fragment>
        )
    }
}
// properties are being read from the parent component being kennel.js 