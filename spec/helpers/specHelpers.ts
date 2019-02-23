import { assert } from 'chai'

export const textWithin = (selector: string) : string => {
  return find(selector).textContent
}

export const find = (selector: string) : HTMLElement => {
  const element = document.querySelector(selector) as HTMLElement
  if (!element) {
    assert.fail(`Could not find element with selector: ${selector}`)
  }
  return element
}

export const findWithin = (parent: HTMLElement, selector: string) : HTMLElement => {
  if (!parent) {
    assert.fail('Could not find child within null element')
  }
  const child = parent.querySelector(selector) as HTMLElement
  if (!child) {
    assert.fail(`Could not find child element with selector: ${selector}`)
  }
  return child
}

export const findAll = (selector: string) : Array<HTMLElement> => {
  let elements: Array<HTMLElement> = []
  document.querySelectorAll(selector)
    .forEach((el:HTMLElement) => elements.push(el))

  if (elements.length == 0) {
    assert.fail(`Could not find elements with selector: ${selector}`)
  }

  return elements
}

export const click = (selector: string) => {
  const element = find(selector)
  find(selector).click();
}

export const fill = (selector: string, content: string) => {
  const element = find(selector) as HTMLTextAreaElement
  element.value = content
  element.dispatchEvent(new Event('input', {bubbles: true, cancelable: true}))
}

export const dragOver = async (dragElement: HTMLElement, dragTarget: HTMLElement) => {
  const downEvent = new MouseEvent('pointerdown', {
    bubbles: true,
    cancelable: true,
    // clientX: 10,
    // clientY: 10
  })
  
  dragElement.dispatchEvent(downEvent)

  await wait()

  const dragStartEvent = new MouseEvent('dragstart', {
    bubbles: true,
    cancelable: true,
    // clientX: 10,
    // clientY: 10
  })

  dragElement.dispatchEvent(dragStartEvent)

  await wait()

  const dragOverEvent = new MouseEvent('dragover', {
    bubbles: true,
    cancelable: true,
    // clientX: 10,
    // clientY: 10
  })

  dragTarget.dispatchEvent(dragOverEvent)

  await wait()

  const mouseUpEvent = new MouseEvent('pointerup', {
    bubbles: true,
    cancelable: true,
    // clientX: 10,
    // clientY: 10
  })

  dragElement.dispatchEvent(mouseUpEvent)

  await wait()
}

export const wait = (timeout: number = 0) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, timeout)
  })
}
