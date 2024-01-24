const express = require('express')
const app = express()
const port = process.env.PORT || 5500;

app.get('/', (req, res) => {
  res.send(`
  <h1>My Enneagram result: Type 9 "Peacemaker"</h1>
  <p>I am Type Nine, which are known as the Peacemaker. I am a  mediator of the group and thrive when helping differing parties resolve conflict. My motivation stems from a desire for peace of mind and fears of experiencing overwhelming strife.</p>
  <p>I can handle difficult conversations and remain level-headed. I am commonly the person people go to when they need a resolution or a second opinion concerning a pressing issue.</p>
  <p>My feelings do not drive them; I have keen instincts that help my teammates gather wisdom to share. I am not confrontational but can navigate conflict to ensure both sides feel understood.</p>
`);
})

app.listen(port, () => {
  console.log(`mike app listening on port ${port}`)
})

