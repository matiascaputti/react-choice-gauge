import React from 'react';
import Gauge from './Gauge.jsx';
import Question from './Question.jsx';

class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        <section className="hero is-primary">
          <div className="hero-body header">
            <div className="container">
              <div className="columns is-vcentered">
                  <div className="logo is-hidden-mobile"></div>
                  <div className="column">
                    <h1 className="title is-2"><strong>Pymeter</strong></h1>
                    <p className="subtitle">get your <strong>Python</strong> level and improve your skills</p>
                  </div>
              </div>
            </div>
          </div>
        </section>

        <section className="content">
          <Gauge
            value={100}
            size={30}
            radius={150}
            sections={["#3498db", "#1abc9c", "#2ecc71", "#f1c40f", "#e67e22", "#e74c3c"]}
            arrow={{height: 110, width: 12, color: "#515151"}}
            legend={['PY1', 'PY2', 'PY3', 'PY4', 'PY5', 'PY6']}
            label="15%"
          />

          <Question />
        </section>

        <footer className="footer">
          <div className="has-text-centered">
            <span className="powered-by">powered by</span>
            <img src="https://s13.postimg.org/wflosfalj/logo.png" />
          </div>
        </footer>
      </div>
    );
  }
};

export default App;
