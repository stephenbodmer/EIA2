
namespace weihnachtsfreude {

  export interface christmasData{
    name: string;
    price: number;
    beschr?: string;              //durch ? wird die Angabe optional
  }

  export let baumData: christmasData[] = [
    {name:"Blaufichte", price:30},
    {name:"Douglasie", price:40},
    {name:"Nordmanntanne", price:25},
    {name:"Rotfichte", price:15}
  ];

  export let halterungData: christmasData[] = [
    {name:"keine", price:0},
    {name:"Premium", price:50},
    {name:"Classic", price:42},
    {name:"Standard", price:25},
    {name:"billigscheiß", price:10}
  ];

  export let schmuckData: christmasData[] = [
    {name:"Kugeln", price:15},
    {name:"Sterne", price:9},
    {name:"Engel", price:13},
    {name:"Lametta", price:3},
    {name:"Überraschung", price:99}
  ];

  export let farbData: christmasData[] = [
    {name:"rot", price:2},
    {name:"grün", price:1},
    {name:"gold", price:5},
    {name:"pink", price:1},
    {name:"blau", price:2},
  ];

  export let versandData: christmasData[] = [
    {name:"Premium", price:15, beschr:"DHL"},
    {name:"Standard", price:3, beschr:"DHL"},
    {name:"Premium", price:10, beschr:"DPD"},
    {name:"Standard", price:5, beschr:"DPD"},
  ];

  export let zahlungData: christmasData[] = [
    {name:"PayPal", price:0},
    {name:"Kreditkarte", price:5},
    {name:"Überweisung", price:2}
  ];
}
