import React, { Component } from "react";

export default class BaiTap extends Component {
  state = {
    chonMatKinh: {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      imgPos: "44.5%",
      height: "37"
    },
  };

  mangMatKinh = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      imgPos: "44.5%",
      height: "37"
    },
    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "./glassesImage/v2.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      imgPos: "44.5%",
      height: "36"
    },
    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: "./glassesImage/v3.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      imgPos: "44.5%",
      height: "38"
    },
    {
      id: 4,
      price: 70,
      name: "DIOR D6005U",
      url: "./glassesImage/v4.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      imgPos: "45%",
      height: "36"
    },
    {
      id: 5,
      price: 40,
      name: "PRADA P8750",
      url: "./glassesImage/v5.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      imgPos: "45%",
      height: "40"
    },
    {
      id: 6,
      price: 60,
      name: "PRADA P9700",
      url: "./glassesImage/v6.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      imgPos: "45%",
      height: "37"
    },
    {
      id: 7,
      price: 80,
      name: "FENDI F8750",
      url: "./glassesImage/v7.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      imgPos: "44.5%",
      height: "38"
    },
    {
      id: 8,
      price: 100,
      name: "FENDI F8500",
      url: "./glassesImage/v8.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      imgPos: "44.5%",
      height: "40"
    },
    {
      id: 9,
      price: 60,
      name: "FENDI F4300",
      url: "./glassesImage/v9.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      imgPos: "44.5%",
      height: "40"
    },
  ];

  renderMatKinh = () => {
    return this.mangMatKinh.map((matKinh, index) => {
      return <div
      className="col-2 mb-5" key ={index}
      onClick={() => {
        this.xemChiTiet(matKinh);
      }}
    >
      <img
        src={matKinh.url}
        style={{border: "black solid 1px", cursor: "pointer" }}
        height={50}
      ></img>
    </div>
    });
  };

  xemChiTiet = (sanPhamDuocClick) => {
    this.setState({
      chonMatKinh: sanPhamDuocClick,
    });
  };

  render() {
    let { chonMatKinh } = this.state;

    return (
      <div>
        <div className="overlay text-white py-5">
          <h1>TRY GLASSES APP ONLINE</h1>
        </div>
        <div className="container-fluid">
          <div className="row py-5 gx-0">
            <div className="col-lg-6 left">
              <img src="./glassesImage/model.jpg" height={350} atl="..."></img>
              <img
                className="tryGlass"
                src={chonMatKinh.url}
                style={{ left: chonMatKinh.imgPos }}
                height={chonMatKinh.height}
              ></img>
              <div className="overlay-text">
                <h4>{chonMatKinh.name}</h4>
                <p>{chonMatKinh.desc}</p>
              </div>
            </div>
            <div className="col-lg-6 right">
              <img src="./glassesImage/model.jpg" height={350} atl="..."></img>
            </div>
          </div>
        </div>
        <div className="container py-5" style={{ backgroundColor: "white" }}>
          <div className="row">
            {this.renderMatKinh()}
          </div>
        </div>
      </div>
    );
  }
}
