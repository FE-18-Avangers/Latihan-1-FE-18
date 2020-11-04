import React, { Component } from "react";
import { Link } from "react-router-dom";

import Img_1 from "../img/img_1.jpg";

export default class Register extends Component {
  render() {
    return (
      <>
        <div className="container" style={{ marginTop: 60 }}>
          <h2 className="text-center mb-3">Register</h2>
          <div className="row">
            <div className="col-md-6">
              <img
                src={Img_1}
                className="img-fluid"
                alt="Responsive image"
                width="560"
                style={{ borderRadius: 4 }}
              />
            </div>
            <div className="col-md-6 align-self-center my-3">
              <form>
                <div className="form-group">
                  <label for="nama">Nama</label>
                  <input
                    type="text"
                    className="form-control"
                    id="nama"
                    placeholder="Fill your Name, Please"
                    required
                  />
                </div>
                <div className="form-group">
                  <label for="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Fill your Email, Please"
                    required
                  />
                </div>
                <div className="form-group">
                  <label for="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Fill your Password, Please"
                    required
                  />
                </div>
                <div className="form-group">
                  <label for="phone">Phone Number</label>
                  <input
                    type="number"
                    className="form-control"
                    id="phone"
                    placeholder="Fill your Phone Number, Please"
                    required
                  />
                </div>
                <div className="text-center">
                  <Link
                    to="/navbar"
                    type="submit"
                    class="btn btn-primary text-center px-5"
                  >
                    Sign Up
                  </Link>
                  <p className="mt-1" style={{ fontSize: 14 }}>
                    Sudah punya akun?{" "}
                    <Link to="/" style={{ textDecoration: "none" }}>
                      {" "}
                      Kesini segera
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}
