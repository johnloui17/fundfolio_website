- add grid
- add grid 
- add placeholder image
- [x]   products cta fontsize:20px
- [x]   headers fontsize : our way size
- [x]   contact bcg alignment issue
- [x]   logo overlapping header in our #ourproducts
- [x]   add spacing between sections
- [x]   our way
  - [x]   dont change font-size 
- [x]   Add recaptcha to form
- [ ]   add background
- [x]   add yc
- [x]   add google analytics
- [x] youtube
- [x] background color
- [ ] set page offsets to trigger auto select of header tabs

what is the scene?
- after the form is submitted there are  2 states that has to be rendered?
  - white font  
  - Initial (ghost)
    - border only
    - arrow icon
  - Submitting
    - bck => opacity = 0.1
    - loader
    - disable button
  - Submitted
    - green gradient
    - tick icon
    - enable button
- on all fields filled && valid input => change background (ghost=>primary)
  - setButtonStyle()
- onSubmit => change background => icon(loader) =>  text(submitting) 
- onCompletion => change bcg => set(tick) => text(submitted)
- completed and onClick reset back to submit
- type={
    ghost:"",
    submitting:"",
    submitted:"",
    error:"",
    "":default
  }
- initial()
  - setAction("ghost")
- onFormCompletion()
  - setAction("")
- onClick ()
  - check for submitted
    - true:
      - setAction("ghost")
    - false
      - setAction("submitting)
      - sentmail
        - success
          - setAction("submitted)
        - fail
          - setAction("error)
- setButtonType(action)
  - (action === "")
    - set primary button
  - (action === "ghost")
    - set ghost button
  - (action === "submitting")
    - set submitting button
  - (action === "submitted")
    - set submitted button
  - (action === "error")
    - set error button
- returnIcon()
  - (action === "")
    - return arrow icon
  - (action === "ghost")
    - return arrow icon
  - (action === "submitting")
    - return loader icon
  - (action === "submitted")
    - return tick icon
  - (action === "error")
    - return arrow icon
- getText()
  - (action === "")
    - return "submit"
  - (action === "ghost")
    - return "submit"
  - (action === "submitting")
    - return "submitting"
  - (action === "submitted")
    - return "submitted"
  - (action === "error")
    - return "error"

loader
smooth scroll