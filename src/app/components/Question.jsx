import React from 'react';

class Question extends React.Component {
  render() {
    return (
      <div>
        <section className="box questions-container">
          <p className="subtitle is-5 question">
            What does <code>__init__.py</code> in Python means?
          </p>

          <div className="options-container">
            <p className="control">
              <a className="button full option">
                Option 1
              </a>
            </p>
            <p className="control">
              <a className="button full option">
                Option 2
              </a>
            </p>
            <p className="control">
              <a className="button full option is-chosen">
                Option 3
              </a>
            </p>
            <p className="control">
              <a className="button full option">
                Option 4
              </a>
            </p>
          </div>

          <div className="box-buttons control is-grouped">
            <p className="control center">
              <a className="button is-primary is-medium">
                <span>Continue</span>
                <span className="icon">
                  <i className="fa fa-chevron-right"></i>
                </span>
              </a>
            </p>
          </div>

          <progress className="progress is-small is-primary full" value="25" max="100">25%</progress>
        </section>
      </div>
    );
  }
};

export default Question;
