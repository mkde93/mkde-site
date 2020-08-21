import * as React from "react";
import '../index.scss';
import { Link } from "react-router-dom";
import { withRouter, RouteComponentProps, StaticContext } from "react-router";

class Header extends React.Component<RouteComponentProps<{}, StaticContext>> {
  componentDidMount() {
    console.log();
  }

  onPage(key: string) {
    return this.props.history.location.pathname === key;
  }

  render() {
    return (
      <section className="header">
        <div className="menu">
          <Link to={'/profile'}><p style={this.onPage('/profile') ? { textDecoration: 'underline' } : {}}>Profile</p></Link>
          <Link to={'/cv'}><p style={this.onPage('/cv') ? { textDecoration: 'underline' } : {}}>CV</p></Link>
        </div>
      </section>
    );
  }
}
export default withRouter(Header);