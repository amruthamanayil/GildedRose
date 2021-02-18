//------------------------------//
/*To test the refactored JS code*/
/*Modified By: Amrutha Manayil  */
/*Modified Date: 17-02-2021     */
//------------------------------//

const { Shop, Item } = require("../src/gilded_rose");

/*Adding the below variable to check if Concert is over or not. 
  This is required for the item 'BackStage' whose quality becomes 0 if concert is over, otherwise quality increases.*/
const concertOver = false;

const items = [
  new Item("+5 Dexterity Vest", 10, 1),
  new Item("Aged Brie", 2, 0),
  new Item("Aged Brie", 2, 49),
  new Item("Elixir of the Mongoose", 5, 7),
  new Item("Sulfuras, Hand of Ragnaros", 0, 80),
  new Item("Sulfuras, Hand of Ragnaros", -1, 80),
  new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
  new Item("Backstage passes to a TAFKAL80ETC concert", 8, 49),
  new Item("Backstage passes to a TAFKAL80ETC concert", 1, 49),
  new Item("Conjured Mana Cake", 1, 6),
];

const days = Number(process.argv[2]) || 2;
const gildedRose = new Shop(items, concertOver); //Added the 2nd parameter concertOver.

for (let day = 0; day < days; day++) {
  console.log(`\n-------- day ${day} --------`);
  console.log("name, sellIn, quality");
  items.forEach(item => console.log(`${item.name}, ${item.sellIn}, ${item.quality}`));
  gildedRose.updateQuality();
}