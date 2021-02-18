/******************************/
//GildedRose-Refactoring-Kata //
//----------------------------//
//Modified By: Amrutha Manayil//
//Modified Date: 17-02-2021   //
/******************************/

//Added the below variable declarations as part of refactoring//
const maxQuality = 50, minQuality = 0, sulfurasQuality = 80;
const agedBrie = 'Aged Brie', backStage = 'Backstage passes to a TAFKAL80ETC concert'; 
const sulfuras = 'Sulfuras, Hand of Ragnaros', conjured = 'Conjured Mana Cake';

class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[], concertOver) { //Added this new parameter concertOver to get the status of Concert for the item Backstage.
    this.items = items;
    this.concertOver = concertOver; //Added this new variable to check the status of Concert for the item Backstage.
  }

  //This method will handle the calculation of quality for the various items in the Shop.
  updateQuality() {
    for(var i=0; i < this.items.length; i++) {  
      //Removed the previous code, and added the below as part of refactoring.//
      switch(this.items[i].name) {
        case agedBrie: //Quality increases by value 1 for each decrement in the sellIn days
          this.items[i].quality = this.calculateQuality(this.items[i].quality, 1);
          this.items[i].sellIn = this.decrementSellIn(this.items[i].sellIn);
          break;
        case backStage: //Quality increases by value 1, 2 or 3 based on sellIn date.
          this.items[i].quality = this.concertOver === true ? 0 : this.calculateQualityForBackStageItem(this.items[i].sellIn, this.items[i].quality);
          this.items[i].sellIn = this.decrementSellIn(this.items[i].sellIn);
          break;
        case sulfuras: //Quality never changes and is always 80
          this.items[i].quality = sulfurasQuality;
          this.items[i].sellIn = this.decrementSellIn(this.items[i].sellIn);
          break;
        case conjured: //Quality decreases 4 times
          this.items[i].quality = this.calculateQuality(this.items[i].quality, -4);
          this.items[i].sellIn = this.decrementSellIn(this.items[i].sellIn);
          break;
        default: //Quality decreases by value 1 for each passing day
          this.items[i].quality = this.calculateQuality(this.items[i].quality, -2);
          this.items[i].sellIn = this.decrementSellIn(this.items[i].sellIn);
      }
    } 
  } 
  
  //Added the below codes as a part of refactoring//
  //--------Begins here--------//

  //To check if the value of quality has reached the specified limits//
  validateQualityLimit(quality) {
    let validationResult = quality >= maxQuality || quality <= minQuality ? true : false
    return validationResult;
  }

  //To decrement the sellIn days after each passing day//
  decrementSellIn(sellIn) {
    return sellIn -= 1;
  }

  //To calculate the new value of quality for any given item based on the value which decides if quality increases or decreases//
  calculateQuality(quality, value) {
    let newQuality = !this.validateQualityLimit(quality + value) ? quality += value :
                      quality + value > 0 ? maxQuality : minQuality;
    return newQuality;
  }

  //To calculate quality for the item Backstage based on its special scenarios of sellin days value//
  calculateQualityForBackStageItem(sellIn, quality) {
    let newQualityBackStage = sellIn < 10 && sellIn > 5 ? this.calculateQuality(quality, 2) : 
      sellIn < 5 ? this.calculateQuality(quality, 3) : this.calculateQuality(quality, 1);
    return newQualityBackStage;
  }
  //--------Ends here--------//
} 

module.exports = {
  Item,
  Shop
}