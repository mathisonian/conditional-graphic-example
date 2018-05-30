const React = require('react');

class Conditional extends React.Component {
  render() {
    const { idyll, hasError, updateProps, ...props } = this.props;
    if (props.test) {
      return <div>{props.children}</div>
    }
    return null;
  }
}

module.exports = Conditional;
