import edit from './edit';
import save from './save';


export const settings = {
  title: "Bootstrap nested container",
  icon : "editor-insertmore",
  keywords:  ['bootstrap-container','nested-container'],
  edit,
  save,
  name: "achtvier/bootstrap-nested-container",
  attributes: {
		"containervisibility": {
  	  "type": "string",
	    "default": "",
    },
	},
  category: "layout"
};
