

if (typeof AdaptiveCards === 'undefined') throw `
    You need the Adaptive Cards library to use this attribute.`


function renderAdaptiveCard(jsonStr, { hostConfig }) {
  let ac = new AdaptiveCards.AdaptiveCard()
  ac.hostConfig(hostConfig)
  ac.parse(JSON.parse(jsonStr))
  return ac.render()
}

function icxAdaptiveCard() {
  document.querySelectorAll("*[icx-adaptive-card]")
    .forEach(el => {

      el.setAttribute("ic-transform-content",
        `return renderAdaptiveCard(content)`)
  })
}
