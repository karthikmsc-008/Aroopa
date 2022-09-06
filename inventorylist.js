function inventory() {
  return {
    items: [],
    add: function(item) {
        if(this.items.includes(item)) {
            return
        }
        this.items.push(item);
    },
    remove: function(item) {
        if (this.items.includes(item)) {
            let index = this.items.indexOf(item)
            if (index > -1) {
                this.items.splice(index, 1)
            }
        }
    },
    getList: function() {
        return console.log(this.items)
    }
  }

}
const a = new inventory();
let n=5;
a.add('shirt');
a.add('Trouser');
a.getList();
a.remove('Trouser');
a.getList();
