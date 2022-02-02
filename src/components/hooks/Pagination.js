import React, { useEffect, useState } from "react";

function Pagination() {
  //   state = {
  //     pageNumber: 1,
  //     userData: [],
  //   };

  const [pageNumber, setPageNumber] = useState(1);
  const [userData, setUserData] = useState([]);
  const getUsersData = async () => {
    const response = await fetch(
      `https://dummyapi.io/data/v1/user?page=${pageNumber}&limit=10`,
      {
        method: "GET",
        headers: {
          "app-id": "61421a5a6a9b4d3ad64b8cb1",
        },
      }
    );
    const { data } = await response.json();
    // this.setState({ userData: data });
    setUserData(data);
    console.log(data);
  };

  const handleButtonClick = (num) => {
    num = parseInt(num);
    // this.setState({ pageNumber: num });
    setPageNumber(num);
  };

  //   If you are not giving any depency array the useEffect will called everytime when the state is updated
  useEffect(() => {
    //   infinete loop
    getUsersData();
    return () => {
      console.log("Component Will Unmount");
      setUserData([]);
    };
  }, [pageNumber]);

  return (
    <div>
      {userData && userData.length > 0 ? (
        <div>
          <div className="container mt-4">
            <div>
              <div className="row">
                {userData.map((user) => (
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
                  handleButtonClick(num);
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

export default Pagination;
