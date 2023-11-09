import edit from './edit';
import save from './save';
import deprecated from './deprecated';

export const settings = {
  title: "Rasterkonstrukt",
  icon : "editor-insertmore",
  keywords:  ['bootstrap-container','achtvier-container'],
  edit,
  save,
  deprecated,
  name: "cgb/block-bootstrap-container",
  attributes: {
		"containerwidth": {
  	  "type": "string",
	    "default": " container-fluid",
    },
		"containervisibility": {
  	  "type": "string",
	    "default": "",
    }, 
    "internalcaption" : {
      "type" : "string"
     }
	},
  category: "layout"
};
