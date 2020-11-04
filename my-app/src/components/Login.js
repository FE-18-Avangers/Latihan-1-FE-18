import React, { Component } from "react";
import { Link } from "react-router-dom";

import Img_1 from "../img/img_1.jpg";

export default class Login extends Component {
  render() {
    return (
      <>
        <div className="container" style={{ marginTop: 60 }}>
          <h2 className="text-center mb-3">Login</h2>
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
                <div className="text-center">
                  <Link
                    to="/navbar"
                    type="submit"
                    class="btn btn-primary text-center px-5"
                  >
                    Sign in
                  </Link>
                  <p className="mt-1" style={{ fontSize: 14 }}>
                    Belum punya akun?{" "}
                    <Link to="/register" style={{ textDecoration: "none" }}>
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
