import { ael, jss, qsa, qs, onClickAway, ce } from "jss"
import Chart from "chart.js/auto"
import { chartConfig } from "./dataCenter"

jss({
  "#chart": elm => {
    const canvas = qs("canvas", elm)
    new Chart(canvas.getContext("2d"), chartConfig.config)
  },
  ".input-text.hint": elm => {
    const showHint = qs(".show-hint", elm)
    const hint = qs(".hint", elm)
    ael(showHint, "click", () => {
      hint.classList.toggle("appear")
      elm.classList.toggle("highOrder")
    })
    onClickAway(elm, () => {
      hint.classList.remove("appear")
      elm.classList.remove("highOrder")
    })
  },
  ".input-text > input[type=password]": async input => {
    let type = "text"
    const showPassword = qs(".show-password", input.parentElement)
    const eye = showPassword.innerHTML
    const eyeClosed = await (
      await fetch("assets/icons/eye-closed.svg", { cache: "force-cache" })
    ).text()
    ael(showPassword, "click", e => {
      e.preventDefault()
      input.type = type
      if (type === "text") {
        showPassword.innerHTML = eyeClosed
        type = "password"
      } else {
        showPassword.innerHTML = eye
        type = "text"
      }
    })
  },
  ".dropdown": elm => {
    const {
      children: [title, body],
    } = elm
    let height = body.offsetHeight
    body.style.height = "0px"
    elm.classList.add("closed")
    ael(title, "click", e => {
      if (body.style.height === "0px") {
        elm.classList.remove("closed")
        body.style.height = `${height}px`
        setTimeout(() => {
          body.style.height = "auto"
          // body.scrollIntoView({ behavior: "smooth", block: "center" })
        }, 200)
      } else {
        height = body.offsetHeight
        body.style.height = `${height}px`
        setTimeout(() => {
          elm.classList.add("closed")
          body.style.height = "0px"
        }, 0)
      }
    })
    onClickAway(elm, () => {
      if (body.style.height !== "0px") {
        height = body.offsetHeight
        body.style.height = `${height}px`
        setTimeout(() => {
          body.style.height = "0px"
          elm.classList.add("closed")
        }, 0)
      }
    })
  },
  ".keywords": ({ children: [inp, btn, list] }) => {
    ael(btn, "click", () => {
      setTimeout(() => {
        list.lastChild.eval = inp.eval
        inp.eval = { keyword: "" }
      }, 0)
    })
  },
})
