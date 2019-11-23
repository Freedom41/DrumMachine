import React from 'react';
import './App.css';
class Drum extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Q: { q: new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"), id: "Q" },
      W: { w: new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"), id: "W" },
      E: { e: new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"), id: "E" },
      A: { a: new Audio("https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"), id: "A" },
      S: { s: new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"), id: "S" },
      D: { d: new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"), id: "D" },
      Z: { z: new Audio("https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"), id: "Z" },
      X: { x: new Audio("https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"), id: "X" },
      C: { c: new Audio("https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"), id: "C" },
      display: "Press any key to hear a sound!."
    };
    this.playAudio = this.playAudio.bind(this);
    this.onKey = this.onKey.bind(this);
  }

  onKey(event) {
    if (event.keyCode === 81) {
      const qq = document.getElementById('Q').getElementsByClassName('clip')[0];
      qq.play();
      this.setState({ display: "Heater 1" });
    }
    if (event.keyCode === 87) {
      const ww = document.getElementById('W').getElementsByClassName('clip')[0];
      ww.play();
      this.setState({ display: "Heater 2" });
    }
    if (event.keyCode === 69) {
      const ee = document.getElementById('E').getElementsByClassName('clip')[0];
      ee.play();
      this.setState({ display: "Heater 3" });
    }
    if (event.keyCode === 65) {
      const aa = document.getElementById('A').getElementsByClassName('clip')[0];
      aa.play();
      this.setState({ display: "Kick n Hat" });
    }
    if (event.keyCode === 83) {
      const ss = document.getElementById('S').getElementsByClassName('clip')[0];
      ss.play();
      this.setState({ display: "Heater 4" });
    }
    if (event.keyCode === 68) {
      const dd = document.getElementById('D').getElementsByClassName('clip')[0];
      dd.play();
      this.setState({ display: "Heater 6" });
    }
    if (event.keyCode === 90) {
      const zz = document.getElementById('Z').getElementsByClassName('clip')[0];
      zz.play();
      this.setState({ display: "DSC OH" });
    }
    if (event.keyCode === 88) {
      const xx = document.getElementById('X').getElementsByClassName('clip')[0];
      xx.play();
      this.setState({ display: "RP4 Kick" });
    }
    if (event.keyCode === 67) {
      const cc = document.getElementById('C').getElementsByClassName('clip')[0];
      cc.play();
      this.setState({ display: "Give us a light" });
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.onKey);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKey);
  }

  playAudio(e) {
    if (e.target.id === "Q") {
      const qq = document.getElementById('Q').getElementsByClassName('clip')[0];
      qq.play();
      this.setState({ display: "Heater 1" });
    }
    if (e.target.id === "W") {
      const ww = document.getElementById('W').getElementsByClassName('clip')[0];
      ww.play();
      this.setState({ display: "Heater 2" });
    }
    if (e.target.id === "E") {
      const ee = document.getElementById('E').getElementsByClassName('clip')[0];
      ee.play();
      this.setState({ display: "Heater 3" });
    }
    if (e.target.id === "A") {
      const aa = document.getElementById('A').getElementsByClassName('clip')[0];
      aa.play();
      this.setState({ display: "Kick n Hat" })
    }
    if (e.target.id === "S") {
      const ss = document.getElementById('S').getElementsByClassName('clip')[0];
      ss.play();
      this.setState({ display: "Heater 4" });
    }
    if (e.target.id === "D") {
      const dd = document.getElementById('D').getElementsByClassName('clip')[0];
      dd.play();
      this.setState({ display: "Heater 6" });
    }
    if (e.target.id === "Z") {
      const zz = document.getElementById('Z').getElementsByClassName('clip')[0];
      zz.play();
      this.setState({ display: "DSC OH" });
    }
    if (e.target.id === "X") {
      const xx = document.getElementById('X').getElementsByClassName('clip')[0];
      xx.play();
      this.setState({ display: "RP4 Kick" });
    }
    if (e.target.id === "C") {
      const cc = document.getElementById('C').getElementsByClassName('clip')[0];
      cc.play();
      this.setState({ display: "Give us a light" });
    }
  }
  render() {

    return (
      <div id="outer">
        <div id="display">
          <p> {this.state.display} </p>
        </div>
        <div id="drum">
          <button onClick={this.playAudio} onKeyPress={this.onKey} className="drum-pad" id={this.state.Q.id}> <audio src={this.state.Q.q.src} className="clip" id={this.state.Q.id}> </audio> Q </button>
          <button onClick={this.playAudio} onKeyPress={this.onKey} className="drum-pad" id={this.state.W.id}> <audio src={this.state.W.w.src} className="clip" id={this.state.W.id}> </audio> W </button>
          <button onClick={this.playAudio} onKeyPress={this.onKey} className="drum-pad" id={this.state.E.id}> <audio src={this.state.E.e.src} className="clip" id={this.state.E.id}> </audio> E </button>
          <br />
          <button onClick={this.playAudio} onKeyPress={this.onKey} className="drum-pad" id={this.state.A.id}> <audio src={this.state.A.a.src} className="clip" id={this.state.A.id}> </audio>A</button>
          <button onClick={this.playAudio} onKeyPress={this.onKey} className="drum-pad" id={this.state.S.id}> <audio src={this.state.S.s.src} className="clip" id={this.state.S.id}> </audio> S </button>
          <button onClick={this.playAudio} onKeyPress={this.onKey} className="drum-pad" id={this.state.D.id}> <audio src={this.state.D.d.src} className="clip" id={this.state.D.id}> </audio> D </button>
          <br />
          <button onClick={this.playAudio} onKeyPress={this.onKey} className="drum-pad" id={this.state.Z.id}> <audio src={this.state.Z.z.src} className="clip" id={this.state.Z.id}> </audio> Z </button>
          <button onClick={this.playAudio} onKeyPress={this.onKey} className="drum-pad" id={this.state.X.id}> <audio src={this.state.X.x.src} className="clip" id={this.state.X.id}> </audio> X </button>
          <button onClick={this.playAudio} onKeyPress={this.onKey} className="drum-pad" id={this.state.C.id}> <audio src={this.state.C.c.src} className="clip" id={this.state.C.id}> </audio> C </button>
          <br />
        </div>
      </div>

    );
  };
}

export default Drum;
