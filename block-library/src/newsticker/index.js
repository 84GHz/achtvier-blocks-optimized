import edit from './edit';
import save from './save';
const { __ } = wp.i18n; // Import __() from wp.i18n


export const settings = {
  name: "achtvier/newsticker",
  title: __( 'Newsticker' ), // Block title.
	icon: 'media-document', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'achtvier-blocks', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
  keywords: [
    __( 'newsticker' ),
  ],
  attributes: {
    showLinked: {
      type: 'boolean',
    },
    linkURL: {
      type: 'string',
    },
    newsTickerText: {
      type: 'string'
    }
  },

  edit,
  save
};
