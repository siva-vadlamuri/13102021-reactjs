import React, { Component } from "react";

export default class Pagination extends Component {
  state = {
    pageNumber: 1,
    userData: [],
  };
  // static getDerivedStateFromProps(){
  //   // sync up props with
  //  }
  getUsersData = async () => {
    const response = await fetch(
      `https://dummyapi.io/data/v1/user?page=${this.state.pageNumber}&limit=10`,
      {
        method: "GET",
        headers: {
          "app-id": "61421a5a6a9b4d3ad64b8cb1",
        },
      }
    );
    const { data } = await response.json();
    this.setState({ userData: data });
    console.log(data);
  };
  componentDidMount() {
    this.getUsersData();
  }
  componentDidUpdate(prevsProps, prevsState) {
    // this.getUsersData();
    console.log(this.state);
    console.log(prevsState);
    // 1!=2
    if (prevsState.pageNumber !== this.state.pageNumber) {
      this.getUsersData();
    } else {
      return;
    }
  }
  componentWillUnmount() {
    console.log("Component will unmount");
  }
  handleButtonClick = (num) => {
    num = parseInt(num);
    this.setState({ pageNumber: num });
  };

  render() {
    return (
      <div>
        {this.state.userData && this.state.userData.length > 0 ? (
          <div>
            <div className="container mt-4">
              <div>
                <div className="row">
                  {this.state.userData.map((user) => (
                    <div className="col-md-6 mt-3">
                      <div className="card p-5">
                        <div className="row">
                          <div className="col-md-4">
                            <img
                              src={user.picture}
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                          <div className="col-md-8">
                            <div>
                              <p>Id : {user.id}</p>
                              <strong>
                                {user.title} {user.firstName} {user.lastName}
                              </strong>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="container">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    this.handleButtonClick(num);
                  }}
                >
                  {num}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <section>
            <img
              src="https://miro.medium.com/max/1400/1*CsJ05WEGfunYMLGfsT2sXA.gif"
              alt="Loader Gif"
            />
          </section>
        )}
      </div>
    );
  }
}
