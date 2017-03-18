var React = require('react');
var {Link, IndexLink} = require('react-router');

 var Navigation = React.createClass({
  render: function () {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Timer App</li>
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Timer</IndexLink>
            </li>
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Countdown</IndexLink>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li className="menu-text">
              Created in: <a href="https://www.udemy.com/user/andrewmead/" target="_blank">React Course</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = Navigation;
