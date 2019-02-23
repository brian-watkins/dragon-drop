import Chai from 'chai'
import { renderApp } from './helpers/renderHelpers';
import { textWithin, findAll, find, wait, dragOver } from './helpers/specHelpers';
const expect = Chai.expect

describe("drag and drop", () => {
  beforeEach(async () => {
    await renderApp()
  })

  it("shows a list of fruit", async () => {
    const fruits = findAll("[data-fruit]")
    expect(fruits[0].textContent).to.equal("Apple")
    expect(fruits[1].textContent).to.equal("Pear")
    expect(fruits[2].textContent).to.equal("Grapes")
    expect(fruits[3].textContent).to.equal("Banana")
  })

  it("reorders the list of fruit", async () => {
    const fruit = find("[data-fruit='1']")
    const target = find("[data-fruit='3']")

    await dragOver(fruit, target)

    const reorderedFruits = findAll("[data-fruit]")

    expect(reorderedFruits[0].textContent).to.equal("Pear")
    expect(reorderedFruits[1].textContent).to.equal("Grapes")
    expect(reorderedFruits[2].textContent).to.equal("Apple")
    expect(reorderedFruits[3].textContent).to.equal("Banana")
  })

  it("adds a fruit to the cart", async () => {
    const fruit = find("[data-fruit='2']")
    const cart = find("#cart")

    await dragOver(fruit, cart)

    const cartItems = findAll("[data-cart-item]")
    expect(cartItems[0].textContent).to.equal("Pear")
  })
})
