class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
        //=================================//
        //Handling the special items first.//
        //=================================//
        
        if (this.items[i].name === 'Aged Brie' || 
            this.items[i].name === 'Backstage passes to a TAFKAL80ETC concert' || 
            this.items[i].name === 'Sulfuras, Hand of Ragnaros' || 
            this.items[i].name === 'Conjured'
           ) {
            
            //=============================================//
            //Handling Aged Brie and Backstage items below.//
            //=============================================//
            
            if(this.items[i].name === 'Aged Brie' || 
               this.items[i].name === 'Backstage passes to a TAFKAL80ETC concert'
              ) {
                if(this.items[i].sellIn > 0) {
                    if(this.items[i].quality > 0) {
                        if(this.items[i].name = 'Aged Brie') {
                            if((this.items[i].quality + 1) >= 50) {
                                this.items[i].quality = 50;
                            }
                            else {
                                this.items[i].quality = this.items[i].quality + 1;
                            }     
                        }
                        else { 
                            //=================================================================================================//
                            //Handling Backstage item below. It is mentioned in the requirement that, if concert is over, Quality //becomes 0. Hence, assuming that a boolean variable 'concertOver' was defined and is true when Concert //is over and false otherwise. I haven't defined it as it is mentioned in the requirement that we can //make changes only to the updateQuality() method.
                            //=================================================================================================//
                            
                            if(concertOver === false) {
                                if(this.items[i].sellIn <= 10) { //If sell date is 10 days or less
                                    if(this.items[i].sellIn > 5) { //but greater than 5, then increase quality by 2.
                                        if((this.items[i].quality + 2) >= 50) {
                                            this.items[i].quality = 50;
                                        }
                                        else {
                                            this.items[i].quality = this.items[i].quality + 2;
                                        }
                                    }
                                    else { //If sellin days is 5 or less than 5, then, increase quality by 3. But max quality for           any item except Sulfuras cannot exceed 50.//
                                        if((this.items[i].quality + 3) >= 50) {
                                            this.items[i].quality = 50;
                                        }
                                        else {
                                            this.items[i].quality = this.items[i].quality + 3;
                                        }
                                    }
                                }
                                else { 
                                    //P.S.: If sellin days is more than 10, then assuming quality will still be twice like aged //brie, as nothing has been particularly specified in the requirerments for more than 10 days.//
                                    
                                    if((this.items[i].quality + 2) >= 50) {
                                        this.items[i].quality = 50;
                                    }
                                    else {
                                        this.items[i].quality = this.items[i].quality + 2;
                                    }
                                }
                            }
                            else { //If concert is over, then quality drops to 0//
                                this.items[i].quality = 0;
                            }
                        }        
                    }
                    else { 
                        this.items[i].quality = 0;
                    }
                }
                else {
                    this.items[i].sellIn = 0;
                }  
            } //End of handling Aged Brie and Backstage.
            
            //=====================================//
            //Handling Sulfuras and Conjured below.
            //=====================================//
            
            else { 
                if(this.items[i].name === 'Conjured') {
                    if(this.items[i].sellIn > 0) {
                        if(this.items[i].quality > 0) {
                            if((this.items[i].quality - 4) >= 0) {  //P.S.: Requirement says 'Quality degrades twice as fast as //normal items'. My understanding abou this is, value should decrement by 4 units, because normal items //degrades quality twice or by 2 units.// 
                                this.items[i].quality = this.items[i].quality - 4;
                            }
                            else {
                                this.items[i].quality = 0;
                            }
                        }
                        else {
                            this.items[i].quality = 0;
                        }
                    }
                    else {
                        this.items[i].sellIn = 0;
                    }
                }
                
                //================================================================================================================//
                //Handling Sulfuras below. When item is sulfuras, then, it never needs to be sold. So, we can set the sellin days to 0. And quality is always 80.
                //================================================================================================================//
                else { 
                    this.items[i].sellIn = 0;
                    this.items[i].quality = 80;
                } 
            }
        }
        //=====================================================//
        //For all other items considered as normal items.//
        //Quality degrades twice, meaning, decrement by 2 units.
        //=====================================================//
        else { 
            if(this.items[i].sellIn > 0) {
                if(this.items[i].quality > 0) {
                    if((this.items[i].quality - 2) >= 0) {
                        this.items[i].quality = this.items[i].quality - 2;
                    }
                    else {
                        this.items[i].quality = 0;
                    }
                    
                }
                else {
                    this.items[i].quality = 0;
                }
                
            }
            else {
              this.items[i].sellIn = 0;
            }
        }
    } //End of for loop.
    
    return this.items;
  }
}
exports = {
  Item,
  Shop
}
