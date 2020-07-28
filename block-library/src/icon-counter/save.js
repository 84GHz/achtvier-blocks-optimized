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
  const getIcons2 = ( number, iconfile ,width, rightmargin) => {
    if (typeof(iconfile)=="undefined" ) {
      return null;
    }

    let counter = []
    let children = []
    for (let i = 0; i < number; i++) {

          children.push(<span
            style={{
              marginRight: rightmargin
            }}
            ><img className={"icon-counter-icon"}
          src = {iconfile}
          style={{width: width + "px"}}
          /></span>);
      }
      counter.push(<div className={"icon-counter-inner"}>{children}</div>);
      return counter
  }

  return (
    <div className={props.className}
    style={{
      border: props.attributes.borderWidth + "px solid " + props.attributes.borderColor,
      backgroundColor: props.attributes.bgColor
    }}
    data-delay={props.attributes.startDelay}
    data-step={props.attributes.counterStep}
    data-counterbegin={props.attributes.counterBegin}
    data-multplier={props.attributes.counterMultiplier}
    data-counterend={props.attributes.counterEnd}
    data-animationspeed={props.attributes.animationSpeed}
    data-counterdelay={props.attributes.dataDelay}
    data-countericon={props.attributes.mediaURL}
    data-countericonwidth={props.attributes.iconWidth}
    data-iconmargin={props.attributes.iconRightMargin}
    >
    <div className="icon-counter-wrapper">
      {getIcons2(props.attributes.counterBegin, props.attributes.mediaURL, props.attributes.iconWidth, props.attributes.iconRightMargin)}
    </div>

    </div>
  )
}
