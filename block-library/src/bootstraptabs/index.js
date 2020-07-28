import edit from './edit';
import save from './save';
const { __ } = wp.i18n; // Import __() from wp.i18n


export const settings = {
  name: "achtvier-blocks/bettertabs",
  title: __( 'Tabs' ), // Block title.
	category: 'achtvier-blocks', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'achtvier-better-tabs' ),
	],
	attributes : {
		tabItems: {
				type: "children",
				default: [{
						header: __('Tab 1'),
            linkid: 'id1',
				}, {
						header: __('Tab 2'),
            linkid: 'id2',

				}, ]
		},
		changed: {
				type: 'boolean',
				default: false
		},
		blockID: {
				type: 'string'
		},
    tabsCount: {
       type: 'number',
       default: 2,
    },
    tabActive: {
      type: 'number',
      default: 1,
    },
    tabsSettings: {
      type: 'object',
      default: {},
    },
	},


  edit,
  save
};
