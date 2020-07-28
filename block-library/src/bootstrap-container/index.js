import edit from './edit';
import save from './save';


export const settings = {
  title: "ACHTVIER CONTAINER",
  icon : "editor-insertmore",
  keywords:  ['bootstrap-container','achtvier-container'],
  edit,
  save,
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
	},
  category: "layout"
};
