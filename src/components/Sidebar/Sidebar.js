import React, { Component } from "react";
import { connect } from "react-redux";
import { setVendor } from "../../store/actions/games";

class SideBar extends Component {
  state = {
    selectedVendor: ""
  };

  onChange = e => {
    this.setState({
      selectedVendor: e.target.value
    });
  };

  onFilter = () => {
    this.props.setVendor(this.state.selectedVendor);

    this.props.history.push("/dashboard");
  };

  onClear = () => {
    this.setState({
      selectedVendor: ""
    });

    this.props.setVendor("");
    this.props.onHideSidebar();
  };

  componentDidMount() {}

  render() {
    return (
      <div className="sidebar">
        <div className="sidebar__content">
          <button
            type="button"
            className="button button--dark button--full"
            onClick={this.props.onHideSidebar}
          >
            Close
          </button>
        </div>

        <div className="sidebar__divider"></div>
        <div className="sidebar__vendor">
          <div className="sidebar__vendor-title">Vendor List</div>
          {this.props.vendors.map((vendor, index) => {
            return (
              <div className="vendor" key={index}>
                <label>
                  <input
                    type="radio"
                    className="option-input radio"
                    name="example"
                    value={vendor.name}
                    onChange={this.onChange}
                  />
                  {vendor.name}
                </label>
              </div>
            );
          })}
        </div>
        <div className="sidebar__action">
          <button
            type="button"
            className="button button--dark button--full"
            onClick={this.onFilter}
          >
            Filter
          </button>

          <button
            type="button"
            className="button button--dark button--full"
            onClick={this.onClear}
          >
            Clear
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  vendors: state.games.vendors
});

const mapDispatchToProps = dispatch => ({
  setVendor: vendor => dispatch(setVendor(vendor))
});

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
