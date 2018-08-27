function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget () {
  return document.querySelector('div#nested div.target')
}

function increaseRankBy(n) {
  let numbers = document.querySelectorAll('ul.ranked-list li')

  for (let i = 0; i < numbers.length; i++) {
    numbers[i].innerHTML = (parseInt(numbers[i].innerHTML) + n).toString()
  }
}

function deepestChild () {
  let firstChild = document.getElementById('grand-node')

  let secondChild = firstChild.children[0]

  while (secondChild) {
    firstChild = secondChild
    secondChild = firstChild.children[0]
  }

  return firstChild
}
