# TODO

- [ ] Make sure current habit persists after refreshing
  - [ ] It breaks when you select a success day

## Modals

- [x] Trying to get the habit box to reset it's text if you press no on the confirmation dialog
- [x] Current need a way to save the users choice on the confirm modal. My idea is to use a modal state function which is used to load the modal and also is called within the modal component once a user selects a modal action.
- [x] Make sure one modal can only be open at a time
- [x] continue styling for tablet and desktop

## Short-term
- [x] Make habit box editable
  - [x] Need modal
  - [ ] NB: Warning If habit is changed then you lose the current streak
- [x] useEffect warning on App.js
- [ ] Show warning before change state of previous months success days, habit will be lost
- [ ] Use useContext to decrease amount of prop drilling. i.e. config and modals
- [x] Use Portal from react-dom for modal
- [x] Update html meta data (Look into using react helmet)

### Known Issues
- [ ] Need to make missed days not include today in count

### Project

- [x] Look into react fragments
- [ ] Make shared config module instead of prop drilling (could minimize a lot of repeated code)
- [ ] rename event handlers from handleObject to objectHandler

## Long-term

- [ ] Link backend and setup sign in and login (looking into firebase)
- [ ] Privacy Page
- [x] Look into using react router
- [x] Implement Positive Reinforcement
- [x] Stats share button

## Settings

- [x] Clear Data
- [x] Toggl Positive Reinforcement
- [x] View Source
- [x] Donation Options
- [x] Nav toggle
- [x] Hide Intro
- [x] Report bug/issue

# References

https://blog.logrocket.com/the-complete-guide-to-building-inline-editable-ui-in-react/
