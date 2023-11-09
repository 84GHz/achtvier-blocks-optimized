const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const { Component, Fragment } = wp.element;
const {
    PanelBody,
    RangeControl,
    SelectControl,
} = wp.components;

const {
    RichText,
    InspectorControls,
    InnerBlocks,
} = wp.blockEditor;

function AVBootstrapTabsEdit (props){
  const getTabs = ( { tabsCount, tabsSettings } ) => {
  console.log(tabsSettings);
      const result = [];

      for ( let k = 1; k <= tabsCount; k++ ) {
          result.push( {
              label: tabsSettings[ 'tab_' + k ] ? tabsSettings[ 'tab_' + k ].label : sprintf( __( 'Tab %d' ), k ),
              number: k,
          } );
      }

      return result;
  };

  /**
   * Returns the layouts configuration for a given number of tabs.
   *
   * @param {number} attributes tabs attributes.
   *
   * @return {Object[]} Tabs layout configuration.
   */
  const getTabsTemplate = ( attributes ) => {
      const {
          tabsCount, blockID
      } = attributes;
      const result = [];
      var active = "";

      for ( let k = 1; k <= tabsCount; k++ ) {
         if( k==1) {
           active = "active";
         }

          result.push( [ 'achtvier/bettertab', { id: 'tab-' + k, active: active } ] );
          active = "";
      }
      console.log(result);
      return result;
  };



  const tabtemplate = (tabid, isactive) => [
    [ 'achtvier/bettertab', {id:tabid, active:isactive } ], // [ blockName, attributes ]
  ];


  const tabtemplate2 = (itemtabs) => {
  	function idize(headerraw) {
  		var idheader = headerraw.replace(/\s+/g, '-').toLowerCase();
  		return idheader;
  	}

  	var ret_arr = [];
    var active = true;
  	itemtabs.forEach(function(tab){
  		var singletab;
  		if (active) {
  		  singletab =  tabtemplate(idize(tab.linkid), "active");
  			active = false;
  		}
  		else {
  		  singletab =  tabtemplate(idize(tab.linkid), "");
  		}
      console.log(singletab);
      ret_arr.push(singletab[0]);
  	  });
      console.log(ret_arr);
  	return(ret_arr);
  }

  const { attributes, setAttributes } = props;

if (typeof(props.attributes.blockID)=="undefined") {
setAttributes({ blockID: props.clientId });
console.log(props.attributes.blockID);
}

function newTab() {
var output = [...tabItems];
output.push({ header: "New Tab", linkid: addid() });

return output;

}
console.log(props.attributes.tabsSettings);
const tabs = getTabs( attributes, props.clientId );
const {tabsCount} =  props.attributes;
const { tabItems } = props.attributes;
const {tabsSettings}=props.attributes;

function idize(headerraw) {
var idheader = headerraw.replace(/\s+/g, '-').toLowerCase();
return idheader;
}
function addid() {
return ((+new Date).toString(36));
}
function updateHeader(headernew, index) {
tabItems[index].header = headernew;
}
return (
  <Fragment>
            <InspectorControls>
              <PanelBody>
                <RangeControl
                  label={ __( 'Tabs' ) }
                  value={ tabsCount }
                  onChange={ ( value ) => setAttributes( { tabsCount: value } ) }
                  min={ 1 }
                  max={ 25 }
                />
              </PanelBody>
            </InspectorControls>
            <div className={ props.className } style={ { border: 'none' } }>
              <ul className="avgb-tabs-panel">
              {
                  tabs.map( ( val ) => {
                      return (
                        <span className="bettertabs-tab">

                          <RichText
                            tagName="a"
                            data-tab={ val.number }
                            placeholder={ __( 'Tab label…' ) }
                            className="bettertabs-tab"
                            value={ val.label }
                            unstableOnFocus={ () => setAttributes( { tabActive: val.number } ) }
                            onChange={ ( value ) => {
                              if ( typeof tabs[ val.number - 1 ] !== 'undefined' ) {
                                if ( typeof tabsSettings[ `tab_${ val.number }` ] === 'undefined' ) {
                                  tabsSettings[ `tab_${ val.number }` ] = {};
                                }
                                value = value.replace(/[<]br[^>]*[>]/gi,"");
                                tabsSettings[ `tab_${ val.number }` ].label = value;
                                setAttributes( { tabsSettings: Object.assign( {}, tabsSettings ) } );
                              }
                            } }
                            formattingControls={ [ 'bold', 'italic', 'strikethrough' ] }
                            inlineToolbar
                            key={ `tab_button_${ val.number }` }
                          />
                        </span>
                      );
                  } )
                }
              </ul>
                <div id={props.attributes.blockID}>

                  <InnerBlocks
                    template={ getTabsTemplate( attributes ) }
                    templateLock="all"
                    allowedBlocks={ [ 'achtvier/bettertab' ] }
                    renderAppender={ () => (
                      <InnerBlocks.ButtonBlockAppender  /> )}
                  />

                </div>
          </div>


          </Fragment>


);


}
export default AVBootstrapTabsEdit;
