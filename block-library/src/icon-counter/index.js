import edit from './edit';
import save from './save';
const { __ } = wp.i18n; // Import __() from wp.i18n


export const settings = {
  name: "achtvier/icon-counter",
  title: __( 'Icon counter' ), // Block title.
  category: 'achtvier-blocks', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
  parent: ['achtvier/counter-wrapper'],
  keywords: [
    __( 'counter tab' ),
  ],
  attributes: {

    counterBegin: {
      type: 'number',
      default: 1
    },
    counterEnd: {
      type: 'number',
      default: 20
    },
    counterStep: {
      type: 'number',
      default: 1
    },
    bgColor: {
      type: 'string',
      default: '#fff2f2'
    },
    fgColor: {
      type: 'string',
      default: '#fd8a8a'
    },
    borderWidth: {
      type: 'number',
      default: 0
    },
    borderColor: {
      type: 'string',
      default: "#000"
    },
    counterPadding: {
      type: 'number',
      default: 11
    },
    iconWidth : {
      type: 'number',
      default: 50
    },
    iconRightMargin : {
      type: 'number',
      default: 10
    },
    animationSpeed : {
      type: 'number',
      default: 10
    },
    startDelay : {
      type: 'number',
      default: 0
    },
    mediaID: {
      type: 'number',
    },
    mediaURL: {
      type: 'string',
    },
  },

  edit,
  save
};
