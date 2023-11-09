var el = wp.element.createElement;

var withClientIdClassName = wp.compose.createHigherOrderComponent( function( BlockListBlock ) {
    return function( props ) {
    /*    var newProps = lodash.assign(
            {},
            props,
            {
                className:  "av-colblock" + props.attributes.gridrasterdesktop,
            }
        );*/
        var newProps = {...props, className:  "av-colblock" + props.attributes.gridrasterdesktop, }

        return el(
            BlockListBlock,
            newProps
        );
    };
}, 'withClientIdClassName' );

wp.hooks.addFilter( 'editor.BlockListBlock', 'cgb/block-bootstrap-cols', withClientIdClassName );
