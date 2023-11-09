const {
	InnerBlocks,

} = wp.blockEditor;

const deprecated = [
    {
        migrate(attributes){
            if ( ! attributes.internalcaption ) {
                attributes = {
                    ...attributes,
                    internalcaption: ""
                };
            }
   
            return {
                ...attributes,
            };
        },
        attributes: {
            "containerwidth": {
                "type": "string",
                "default": " container-fluid",
            },
                "containervisibility": {
                "type": "string",
                "default": "",
            }
        },
        


    }
]
export default deprecated;