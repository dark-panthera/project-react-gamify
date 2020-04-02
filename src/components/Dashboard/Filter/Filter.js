import React, { Component, Fragment } from "react";

class Filter extends Component {
  state = {
    text: '',
    selected: ''
  };

  onTextChange = e => {
    this.setState({
      text: e.target.value
    });
  };

  onSelectChange = e => {
    if (e.target.value !== "select") {
      this.setState({
        selected: e.target.value
      });
    }
  };

  onClick = e => {
      e.preventDefault();
    alert('clicked');
  };

  render() {
    return (
      <div>
        <div className="filter">
          <div className="content-container">
            <div className="filter__text">
              <h4>Filter</h4>
            </div>
          </div>
        </div>
        <div className="filter__container">
          <div className="content-container">
            <form className="grid" onSubmit={this.onClick}>
              <div className="grid-label-text">
                <label>Filter</label>
              </div>
              <div className="grid-text-input">
                <input
                  type="text"
                  className="text-input"
                  placeholder="Search"
                  value={this.state.text}
                  onChange={this.onTextChange.bind(this)}
                />
              </div>

              <div className="grid-label-select">
                <label>Sort</label>
              </div>
              <div className="grid-select-input">
                <select
                  value={this.state.selected}
                  onChange={this.onSelectChange}
                >
                  <option value="select">Select</option>
                  <option value="date">Date</option>
                  <option value="name">Name</option>
                </select>
              </div>

              <div className="grid-button">
                <button className="button button--primary">Filter</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Filter;
