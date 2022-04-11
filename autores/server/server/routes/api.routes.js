const ApiController = require("../controllers/api.controller");

module.exports = app => {

    app.post("/api/autor/create/", ApiController.createApi);
    app.get("/api/autor/", ApiController.getAllApi);
    app.get("/api/autor/:id", ApiController.getSingleApi);
    app.delete("/api/autor/delete/:id", ApiController.deleteApi);
    app.put("/api/autor/update/:id", ApiController.updateApi);
  }