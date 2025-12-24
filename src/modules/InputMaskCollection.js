import getAttrNameFromSelector from "@/utils/getAttrNameFromSelector";
import IMask from "imask";
const rootSelector = '[data-js-input-mask]'

class InputMask {
  selectors = {
    root: rootSelector,
  }

  constructor(rootElement) {
    this.rootElemet = rootElement
    this.init()
  }

  init() {
    const mask = this.rootElemet.getAttribute(
      getAttrNameFromSelector(this.selectors.root)
    )

    IMask(this.rootElemet, {mask})
  }
}

class InputMaskCollection {
  constructor() {
    this.init()
  }

  init () {
    document.querySelectorAll(rootSelector).forEach((element) => {
      new InputMask(element)
    })
  }
}

export default InputMaskCollection