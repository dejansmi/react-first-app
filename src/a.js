
  constructor(props) {
    super(props);
    this.state = {
      inputValue: 1000,
      value: "",
      listArray: ["A", "B", "C"],
      imageName: "",
      imgList: ["https://upload.wikimedia.org/wikipedia/commons/b/b6/Small_red_rose.jpeg",
        bookPicture, garbagePicture, bookPicture, schoolPicture, animalsSignPicture,
        bookPicture, garbagePicture, bookPicture, schoolPicture, carYellowPicture,
        bookPicture, garbagePicture, bookPicture, schoolPicture, animalsSignPicture,
        "https://upload.wikimedia.org/wikipedia/commons/b/b6/Small_red_rose.jpeg",
        bookPicture, garbagePicture, bookPicture, schoolPicture, animalsSignPicture, carYellowPicture
      ]
    };
    this.addToListArray = this.addToListArray.bind(this)

    // This binding is necessary to make `this` work in the callback
    this.updateInputValue = this.updateInputValue.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.moveImgList(),
      this.state.inputValue
    );

  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }


  updateInputValue = (event) => {
    this.setState({ inputValue: event.target.value });
  }

  addToListArray = (event) => {
    this.setState(prevState => ({
      listArray: [...prevState.listArray, String.fromCharCode(66 + this.state.listArray.length)]
    }));
    console.log(this.state.listArray);
  }

  moveImgList = (event) => {
    this.setState(prevState => ({
      imgList: [...prevState.imgList.slice(1), ...prevState.imgList.slice(0, 1)]
    }));
    console.log(this.state.listArray);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (

      <div className="App container-fluid">
        <div className="col-12 fixed-top container-fluid" >
          <div className="col-12 d-flex Color align-items-end" >
            <img src={ping} className=" Opacity " alt="Primer" />
            <div id="BankRecomanded" className="col-2 d-flex align-items-end align-text-top">Preporučuje</div>
            <div id="dA" className="d-flex">
              <ListImg list={this.state.imgList} />
            </div>
          </div>
          <div className="col-12 d-flex ColorGray align-items-end HeaderSize" >
            <div className="row col-12 H80 mt-0 pt-0 d-flex  align-self-center">
              <div className="col-0 col-sm-1 col-md-2"> </div>
              <div className="col-3 col-sm-1 h_100 pt-0 pb-0 d-flex flex-column">
                <CheckBox label="Proizvodi" small checked />
                <CheckBox label="Kompanije" small />
              </div>


              <div className="d-flex col-6">
                <button className="btn d-flex  form-control ColorWhite align-self-center" type="button" >
                  <i className="material-icons align-self-center">search</i><input className="form-control" type="text" value={this.state.value} onChange={this.handleChange} placeholder="Unesite želju da je ispunimo" />
                </button>
              </div>

            </div>
          </div>
        </div>

      </div>


      <div className="container">
        <h1>Header 1</h1>
        <h2>Header 1.2</h2>
      </div>
      <input type="number" value={this.state.inputValue} onChange={this.updateInputValue} />
      <div>{this.state.inputValue}</div>
      <button onClick={this.addToListArray}>Dodaj u red</button>
      <button onClick={this.moveImgList}>Pomeri</button>
      <PripremaCarusel period={this.state.inputValue} listArray={this.state.listArray} />

      <div className="container">
        <h2>Contextual Link Colors</h2>
        <p>Hover over the links.</p>
        <nav className="navbar bg-dark fixed-bottom col-6">
          <NavLink active to="/prva" >Prva</NavLink>
          <NavLink active to="/druga">Druga</NavLink>
          <NavLink active to="/treca" >Treca</NavLink>
          <NavLink active to="/cetvrta">Cetvrta</NavLink>
          <span className="text-white">Postu kupovina srba</span>
        </nav>
        <p>dfsd dfds df dsfd</p>
        <p>dfsd dfds df dsfd</p>
        <p>dfsd dfds df dsfd</p>
        <p>dfsd dfds df dsfd</p>
        <p>dfsd dfds df dsfd</p>
        <p>dfsd dfds df dsfd</p>
        <p>dfsd dfds df dsfd</p>
        <p>dfsd dfds df dsfd</p>
        <p>dfsd dfds df dsfd</p>
        <p>dfsd dfds df dsfd</p>
      </div>
      <div className="App-header">
        <img src={logo} className="App-logo img-responsive" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </div>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
        </p>

    )};
