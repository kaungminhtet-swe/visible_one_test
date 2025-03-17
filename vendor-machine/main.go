package main

import "fmt"

type Drink struct {
	Name  string
	Price float64
}

var drinks = [3]Drink{
	{"Coca Cola", 3.35},
	{"Pepsi", 2.10},
	{"Orange", 2.85},
}

const (
	INITIAL = iota
	SELECT_DRINK
	NOT_ENOUGH_MONEY
	SELECT_MORE_DRINK
	SUCCESS
	EXIT
)

func main() {
	var initailPrice float64
	var drinkNumber int
	var state = INITIAL
	var purchasedDrinks = make([]string, 0)

	fmt.Println("Welcome to the vending machine!")
loop:
	for {
		switch state {
		case INITIAL:
			fmt.Print("Insert money: ")
			fmt.Scanf("%f", &initailPrice)
			state = SELECT_DRINK

		case SELECT_DRINK:
			fmt.Println()
			for i, drink := range drinks {
				fmt.Printf("%d) %s - $%.2f\n", i+1, drink.Name, drink.Price)
			}
			fmt.Print("Select the drink: ")
			fmt.Scanf("%d", &drinkNumber)

			if drinkNumber < 1 || drinkNumber > len(drinks) {
				fmt.Println("Invalid drink number")
				state = SELECT_DRINK
				break
			}

			if initailPrice < drinks[drinkNumber-1].Price {
				state = NOT_ENOUGH_MONEY
				break
			}

			initailPrice -= drinks[drinkNumber-1].Price
			purchasedDrinks = append(purchasedDrinks, drinks[drinkNumber-1].Name)
			state = SELECT_MORE_DRINK

		case SELECT_MORE_DRINK:
			fmt.Println()
			var needMordDrinks string
			fmt.Println("Select more drinks? (y/n)")
			fmt.Scan(&needMordDrinks)

			fmt.Println(needMordDrinks)

			if needMordDrinks == "y" || needMordDrinks == "yes" {
				state = SELECT_DRINK
				break
			}

			state = SUCCESS

		case SUCCESS:
			fmt.Println()
			fmt.Println("Thanks for your purchase!")
			fmt.Println("You bought")
			for i, drink := range purchasedDrinks {
				fmt.Printf("%d) %s \n", i+1, drink)
			}
			fmt.Println("Your change is $%.2f", initailPrice)
			break loop

		case NOT_ENOUGH_MONEY:
			fmt.Println()
			fmt.Println("Not enough money")
			if len(purchasedDrinks) > 0 {
				state = SUCCESS
				break
			}

			var insertOrQuit string
			fmt.Println("Do you want to insert more money or quit? (insert/quit)")
			fmt.Scanf("%s", &insertOrQuit)

			if insertOrQuit == "quit" {
				fmt.Println("Thanks for your visit!")
				fmt.Println("Bye!")
				break loop
			}

			if insertOrQuit == "insert" {
				state = INITIAL
				break
			}

			fmt.Println("Invalid input")
			break loop
		default:
			break loop
		}
	}
}
