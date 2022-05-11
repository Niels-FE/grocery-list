import { React, Component } from 'react';
import GroceryList from './GroceryList';
import ShoppingCartList from './ShoppingCartList';

class NewContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            groceryItems: [
                { id: 1, title: "Eggs" },
                { id: 2, title: "Cheese" },
                { id: 3, title: "Garlic" },
            ],
            shoppingListItems: [
                { id: 1, title: "Eggs", count: 1 },
            ],
        };
        this.addToShoppingCart = this.addToShoppingCart.bind(this);
        this.removeFromShoppingCart = this.removeFromShoppingCart.bind(this);
        this.addToGroceryList = this.addToGroceryList.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    addToGroceryList() {
        this.setState(prevState => {
            const item = {
                title: document.getElementById('groceryList').value,
                id: prevState.groceryItems.length + 1,
            }
            return prevState.groceryItems.push({ id: item.id, title: item.title })
        })
    }

    handleKeyPress(event) {
        if (event.key == 'Enter') {
            this.addToGroceryList()
        }
    }

    addToShoppingCart(item) {
        this.setState((prevState) => {
            let newShoppingList = prevState.shoppingListItems;
            let append = true;

            newShoppingList.forEach(shopItem => {
                if (shopItem.id == item.id) {
                    shopItem.count = shopItem.count + 1;
                    append = false;
                }
            })
            if (append) {
                newShoppingList.push({ id: item.id, title: item.title, count: 1 })
            }
            return {
                newShoppingList
            };

        })
    }
    removeFromShoppingCart(item) {
        this.setState(() => {
            return { shoppingListItems: [] }
        })
    }

    render() {
        window.testvar = this.state.shoppingListItems
        return (
            <section
                key="0"
                className="grid grid-cols-2 mt-16">
                <GroceryList
                    items={this.state.groceryItems}
                    addToShoppingCart={this.addToShoppingCart}
                    addToGroceryList={this.addToGroceryList}
                    handleKeyPress={this.handleKeyPress}
                />
                <ShoppingCartList
                    items={this.state.shoppingListItems}
                    removeFromShoppingCart={this.removeFromShoppingCart}
                />
            </section>
        )
    }

}

export default NewContainer;