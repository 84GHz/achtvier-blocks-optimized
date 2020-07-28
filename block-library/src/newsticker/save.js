export default function save( props ) {
  const attributes = {props};
  const getLink = () => {
    if (props.attributes.showLinked) {
      return (
          <a href={ props.attributes.linkURL } className="newsticker-content">{ props.attributes.newsTickerText }</a>
      );
    }
    else return (
      <p className="newsticker-content">{props.attributes.newsTickerText}</p>

    );

  };

  return (
    <div className={props.className}>
        {getLink()}
    </div>
)
}
