/**
 * Tooltip Char Counter.
 *
 * Copyright (c) 2021 babygang
 *
 * Released under the MIT license
 * https://opensource.org/licenses/mit-license.php
 */

// def css
const style = document.createElement('style')
document.head.appendChild(style);

style.media = 'screen';
style.type = 'text/css';
style.innerHTML = `#char-counter {
  position: fixed;
  background: lemonchiffon;
  border: darkgray solid 1px;
  padding: 10px;
  display: none;
}`


// append tooltip
const tooltip = document.createElement('div')
tooltip.setAttribute('id', 'char-counter')
document.body.appendChild(tooltip)

const offset = 15
document.body.addEventListener("mousemove", e => {
  tooltip.style.left = e.clientX + offset + "px";
  tooltip.style.top = e.clientY + offset + "px";
})


// add event
const inputCountEvent = (e) => {
  const str = e.target.value.replace(/\s/g, "").length + '文字'
  tooltip.style.display = 'block'
  tooltip.innerText = str
}

document.querySelectorAll('textarea, input[type=text]').forEach(element => {
  element.addEventListener('focus', inputCountEvent)
  element.addEventListener('input', inputCountEvent)

  element.addEventListener('blur', e => { tooltip.style.display = 'none' })
})
