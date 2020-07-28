import edit from './edit';
import save from './save';
const { __ } = wp.i18n; // Import __() from wp.i18n


export const settings = {
  name: "achtvier/bar-counter",
  title: __( 'Bar Counter' ), // Block title.
  category: 'achtvier-blocks', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
  parent: ['achtvier/counter-wrapper'],
  keywords: [
    __( 'counter tab' ),
  ],
  attributes: {

    counterBegin: {
      type: 'number',
      default: 0
    },
    counterEnd: {
      type: 'number',
      default: 50
    },
    counterLabel: {
      type: 'string',
      default: "%"
    },
    counterMultiplier: {
      type: 'number',
      default: 1
    },
    animationSpeed: {
      type: 'number',
      default: 10
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
    counterHeight : {
      type: 'number',
      default: 50
    },
    startDelay : {
      type: 'number',
      default: 0
    },
    fontColor: {
      type: 'string',
      default: '#fff'
    },
  },

  edit,
  save
};
