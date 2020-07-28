export default function save( props ) {
  const attributes = {props};
  const fgStyle = {
    //we begin with begin after all
    backgroundColor: props.attributes.fgColor,
    width: props.attributes.counterBegin + "%"
  }
  const bgStyle = {
    backgroundColor: props.attributes.bgColor,
    height: props.attributes.counterHeight,
  }


  return (
    <div className={props.className}
    style={{
      border: props.attributes.borderWidth + "px solid " + props.attributes.borderColor
    }}
    data-delay={props.attributes.startDelay}
    data-step={props.attributes.counterStep}
    data-counterbegin={props.attributes.counterBegin}
    data-multplier={props.attributes.counterMultiplier}
    data-counterend={props.attributes.counterEnd}
    data-animationspeed={props.attributes.animationSpeed}
    data-counterdelay={props.attributes.dataDelay}
    >
      <div className="counter-wrapper">
      <div className="outerbar" style = {bgStyle}>
      <div className="innerBar"
      style = {
        fgStyle }
        dangerouslySetInnerHTML={{__html: '&nbsp;'}}
      />
      </div>

      <div className="counterlabel-textwrapper"
        style = {{ color: props.attributes.fontColor,
          padding: props.attributes.counterPadding + "px"
        }}
      >
        <span className="counter-number">
        {props.attributes.counterBegin * props.attributes.counterMultiplier}
        </span>{props.attributes.counterLabel}
      </div>
      </div>

    </div>
)
}
