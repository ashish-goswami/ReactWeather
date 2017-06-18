var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>This is a Weather Application.</p>
      <p>Here are the tools used: </p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a>
        </li>
        <li>
          <a href="https://openweathermap.org">Oper Weater Map</a>
        </li>
      </ul>
    </div>
  );
};

module.exports = About;
