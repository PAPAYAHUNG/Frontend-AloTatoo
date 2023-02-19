/** @type {import('tailwindcss').Config} */
// import image from './public/assets/images/bg.jpg'
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black-rgba': 'rgba(54, 54, 54, 0.55)',
        'black-rgba-morphic': 'rgba( 255, 255, 255, 0.4 )',
        'black-rgba2': 'rgba(247, 247, 247, 0.5);',
      },
      backgroundImage:{
        'hero':"url('https://lh3.googleusercontent.com/l8RbnUq4CJBetkWPTBU7UJKWbJJ_6bgVcPbW840wf50hlVIj0yuZ0Vw5GisAzpInz4ZjV2JCldAnUjAroTsFRFtu9p_L3QZG2TaF_5TWyU3uoTpkQCRu60_IHDL7y0Pq2CJZcTY12g=w2400')",
        'hero2':"url('https://lh3.googleusercontent.com/YbjgQ_Ay7icHOLM5U1dGV_r98_rREhWycdOBXXgbCNH9mXnWqC7jVQTLhBOaUndhlEPzlW4oJlhnS7widLHdBpD1ATOCg5Ef6rCO7q9Zvt6isDn9Q6PZB--N1TDwGdvivcFK0Or_dg=w2400')",
        'hero4':"url('https://lh3.googleusercontent.com/YbjgQ_Ay7icHOLM5U1dGV_r98_rREhWycdOBXXgbCNH9mXnWqC7jVQTLhBOaUndhlEPzlW4oJlhnS7widLHdBpD1ATOCg5Ef6rCO7q9Zvt6isDn9Q6PZB--N1TDwGdvivcFK0Or_dg=w2400')",
        'hero3':"url('https://lh3.googleusercontent.com/3Vyut_tUZ5r9r8aTooem58w4gAC_AAepPKQp51pxcKyxjVlTIISb5p_-zCYeBsD1xBbYtF6LvLK2gF1HHtaivZkBaW1oLRTWhRekjte26mWbZg-YvtVZTWEfgDGXo0iJeboikDsImw=w2400')"
      }
    },
  },
  plugins: [],
}