const { InnerBlocks } = wp.blockEditor;
const { __ } = wp.i18n; // Import __() from wp.i18n

export default function save( props ) {
  const getTabs = ( { tabsCount, tabsSettings } ) => {
      const result = [];

      for ( let k = 1; k <= tabsCount; k++ ) {
          result.push( {
              label: tabsSettings[ 'tab_' + k ] ? tabsSettings[ 'tab_' + k ].label : sprintf( __( 'Tab %d' ), k ),
              number: k,
          } );
      }

      return result;
  };

  const { tabItems } = props.attributes;
   const tabs = getTabs( props.attributes );
  function idize(headerraw) {
    var idheader = headerraw.replace(/\s+/g, '-').toLowerCase();
    return idheader;
  }
  return (
    <div className={props.className + " container"}
    >
      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-12">
        <ul className="nav nav-tabs--vertical" id={ 'achtvier-guten-tabs-' + props.attributes.blockID } role="tablist">
          { tabs.map(tabItem=>(
               <li className = "nav-item" ><a href={ "#tab-" + tabItem.number  } className="nav-link" data-toggle="tab" role="tab">{tabItem.label}</a></li>
          ))}
        </ul>
        </div>
        <div className="col-lg-9 col-md-6 col-sm-12 tab-content">
          <InnerBlocks.Content/>
        </div>
      </div>
    </div>
  );
}
