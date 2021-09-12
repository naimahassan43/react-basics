import React from "react";

class Button extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    const { change: currentChange, locale: currentLocale } = this.props;
    const { change: nextChange, locale: nextLocale } = nextProps;
    if (currentChange === nextChange && nextLocale === currentLocale) {
      return false;
    }
    return true;
  }

  render() {
    const { change, locale } = this.props;

    return (
      <button type="button" onClick={() => change(locale)}>
        Click Here
      </button>
    );
  }
}
export default Button;
