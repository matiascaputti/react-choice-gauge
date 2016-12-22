import React from 'react';
import ArcGauge from './ArcGauge.jsx';

class Gauge extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      width: 300,
      history: null,
      value: props.value,
      size: props.size,
      radius: props.radius,
      sections: props.sections,
      arrow: props.arrow,
      label: props.label,
      legend: props.legend
    }

    this.handleClick = this.handleClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    let history = this.state.history || new Array(100).fill(0);

    if (history.length > 100) {
      history.shift();
    }

    history.push(nextProps.value);

    this.setState({
      history: history,
      width: React.findDOMNode(this).offsetWidth
    })
  }

  handleClick() {
    this.setState({ value: Math.floor((Math.random() * 100) + 1) });
  }

  render() {
    let cls = 'gauge';
    return (
      <div>
        <section className={cls + ' box questions-container'}>
          <ArcGauge
            value={this.state.value}
            size={this.state.size}
            radius={this.state.radius}
            sections={this.state.sections}
            arrow={this.state.arrow}
            label={this.state.label}
            legend={this.state.legend}
            width={this.state.width}
          />
        </section>

        <article className="message is-primary">
          <div className="message-body">
            <p className="title">Well done!</p>
            <p className="subtitle is-6">
              We strongly recommend you to attend to our
              <strong>Advanced Python programming</strong> course!
            </p>
          </div>
        </article>

        <hr />

        <div className="box-buttons control is-grouped">
          <p className="control center" onClick={this.handleClick}>
            <a className="button is-medium">
              <span>Share</span>
              <span className="icon">
                <i className="fa fa-share"></i>
              </span>
            </a>
          </p>
          <p className="control center" onClick={this.handleClick}>
            <a className="button is-medium">
              <span>Tweet</span>
              <span className="icon">
                <i className="fa fa-twitter"></i>
              </span>
            </a>
          </p>
          <p className="control center" onClick={this.handleClick}>
            <a className="button is-primary is-medium">
              <span>Apply now</span>
              <span className="icon">
                <i className="fa fa-check"></i>
              </span>
            </a>
          </p>
        </div>
      </div>
    );
  }
};

export default Gauge;
