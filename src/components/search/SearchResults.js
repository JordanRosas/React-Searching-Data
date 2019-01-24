import React, { Component } from 'react'

export default class SearchResults extends Component {

    render () {
      console.log(this.props)
        return (
        <React.Fragment>
            <section className="search-results">
            <h3>{Object.keys(this.props)[0]}</h3>
                {this.props.animals.map(result => (
                  <p key={result.id}>{result.name}</p>
                ))}
                <h3>{Object.keys(this.props)[1]}</h3>
                {this.props.employees.map(result => (
                  <p key={result.id}>{result.name}</p>
                ))}
                <h3>{Object.keys(this.props)[2]}</h3>
                {this.props.locations.map(result => (
                  <p key={result.id}>{result.name}</p>
                ))}
            </section>
        </React.Fragment>
        )
    }
}