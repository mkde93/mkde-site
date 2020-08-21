import React from 'react';
import './index.scss';

export interface Props {
}

export interface State {
  pic: string;
}

class CV extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      pic: "pic2.png",
    };
  }

  componentDidMount() {
    this.nextPictre()
  }

  nextPictre() {

  }

  render() {
    return (
      <div className="app">
        <h1><span role="img">📑</span>CV</h1>
        <h2><span role="img">💼</span>Experience</h2>
        <ul className="list">
          <li>Jan 2020 - Now | <b>Seniour Consultant</b> @Netcompany</li>
          <li>Nov 2017 - Dec 2020 | <b>Consultant</b> @Netcompany</li>
        </ul>
        <h2><span role="img">👨‍🎓</span>Education</h2>
        <ul className="list">
          <li>2017 - <b>Master of Science In Engineering</b> <u>Sound and Music Computing</u></li>
          <li>2015 - <b>Bachelkor of Science</b> <u>Computer Science</u></li>
        </ul>
        <h2><span role="img">💙</span>I love working with</h2>
        <ul className="list">
          <li>Java</li>
          <li>React</li>
          <li>Typescript</li>
          <li>Webpack</li>
          <li>Music</li>
        </ul>
        <h2><span role="img">📝</span>Contact</h2>
        <p>marc@mkde.dk</p>
      </div>
    );
  }
}
export default CV;
