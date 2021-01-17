require("dotenv").config()

import App from "./App"

App.listen(process.env.API_PORT, () => {
  console.log(`upFile API, online at http://localhost:${process.env.API_PORT}`)
})
