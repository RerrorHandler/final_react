import React, { Component, Fragment } from "react";
import withContext from "../../withContext";
import { Redirect } from "react-router-dom";

const initState = {
  name: "",
  price: "",
  stock: "",
  shortDesc: "",
  description: ""
};

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = initState;
  }

  save = e => {
    e.preventDefault();
    const { name, price, stock, shortDesc, description } = this.state;
    if (name && price) {
      this.props.context.addProduct(
        {
          name,
          price,
          shortDesc,
          description,
          stock: stock || 0
        },
        () => this.setState(initState)
      );
    } else {
      this.setState({ error: "Пожалуйста, введите имя и цену" });
    }
  };

  handleChange = e =>
    this.setState({ [e.target.name]: e.target.value, error: "" });

  render() {
    const { name, price, stock, shortDesc, description } = this.state;
    const { user } = this.props.context;
    return !(user && user.accessLevel < 1) ? (
      <Redirect to="/" />
    ) : (
      <Fragment>
        <div className="hero is-primary ">
          <div className="hero-body container">
            <h4 className="title">Login</h4>
          </div>
        </div>
        <br />
        <br />
        <form onSubmit={this.save}>
          <div className="columns is-mobile is-centered">
            <div className="column is-one-third">
              <div className="field">
                <label className="label">Название продукта: </label>
                <input
                  className="input"
                  type="text"
                  name="name"
                  value={name}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div className="field">
                <label className="label">Цена: </label>
                <input
                  className="input"
                  type="number"
                  name="price"
                  value={price}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div className="field">
                <label className="label">Количество: </label>
                <input
                  className="input"
                  type="number"
                  name="stock"
                  value={stock}
                  onChange={this.handleChange}
                />
              </div>
              <div className="field">
                <label className="label">Короткое описание: </label>
                <input
                  className="input"
                  type="text"
                  name="shortDesc"
                  value={shortDesc}
                  onChange={this.handleChange}
                />
              </div>
              <div className="field">
                <label className="label">Описание: </label>
                <textarea
                  className="textarea"
                  type="text"
                  rows="2"
                  style={{ resize: "none" }}
                  name="description"
                  value={description}
                  onChange={this.handleChange}
                />
              </div>
              {this.state.error && (
                <div className="error">{this.state.error}</div>
              )}
              <div className="field is-clearfix">
                <button
                  className="button is-primary is-outlined is-pulled-right"
                  type="submit"
                  onClick={this.save}
                >
                  Подтвердить
                </button>
              </div>
            </div>
          </div>
        </form>
      </Fragment>
    );
  }
}

export default withContext(AddProduct);
