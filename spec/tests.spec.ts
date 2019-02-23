import Chai from 'chai'
import { renderApp } from './helpers/renderHelpers';
import { textWithin } from './helpers/specHelpers';
const expect = Chai.expect

describe("drag and drop", () => {
  it("renders the app", async () => {
    renderApp()

    expect(textWithin("#fun-stuff")).to.contain("Here is your app!")
  })
})
