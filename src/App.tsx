import React from 'react';
import './index.scss';

export interface Props {
}

export interface State {
  pic: string;
}

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      pic: "pic3.png",
    };
  }

  componentDidMount(){
    this.nextPictre()
  }

  nextPictre() {

  }

  render() {
    return (
      <div className="app">
        <div className="profile-container">
          <img className="profile-pic" src={require("./img/" + this.state.pic)} alt="Marc Deleuran"/>
        </div>
        <h1><span role="img">💙</span>Hi,</h1>
        <h2>Thank you for visiting my website <span role="img">🙏</span>.</h2>
        <p>I'm Marc, a Danish Engineer, currently working as a Senior Consultant at <a target="_blank" href="https://www.netcompany.com/">Netcompany</a>.</p>
        <p>When not helping our clients create great business critical solutions I have various hobbies.</p>
        <p>I produce various genres of Electronic Dance Music under the alias <a target="_blank" href="https://www.facebook.com/meluranmusic/">MELURAN</a>, you can find and listen to my music on <a target="_blank" href="https://open.spotify.com/artist/1sy0XAWVuDT1n8QB77zEcI">Spotify</a> and <a target="_blank" href="https://soundcloud.com/meluran">Soundcloud</a></p>
        <p>I'm also a member of Vidya Vidya where my good friend <a target="_blank" href="https://kasgermusic.com/">Kasger</a> and I make music with lots of video game references, check us out on <a target="_blank" href="https://open.spotify.com/artist/6JHtbv6BHvg4qzYzzqYlsO">Spotify</a> and <a target="_blank" href="https://soundcloud.com/vidyavidya">Soundcloud</a></p>
        <p>I also do event organizing and am a co-founder of <a target="_blank" href="https://subhive.dk/">SUBHIVE</a>. At SUBHIVE we host electronic dance music events, it is also a record label that promote underground EDM.</p>
      </div>
    );
  }
}
export default App;
