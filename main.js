var app = new Vue (
    {
        el: '#root',
        data: {
            title: 'lista della spesa',
            shoppingList: [
                'Pasta',
                'Verdura',
                'Frutta',
                'Detersivi',
                'Carne'
            ],
            placeholderList: 'Cosa manca?',
            newItem: ''
        },
        methods: {
            addItem(){
                this.shoppingList.push(this.newItem);
                this.newItem = '';
            }
        }
    }
);
