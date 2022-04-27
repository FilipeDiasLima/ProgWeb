const express = require("express");
const { engine } = require("express-handlebars");
const morgan = require("morgan");
const router = require("./routers");
const { resolve } = require("path");
const sass = require("node-sass-middleware");
const session = require("express-session");
const uuid = require("uuid");
const cookieParser = require("cookie-parser");

const app = express();

app.engine(
  "handlebars",
  engine({
    layoutsDir: resolve(__dirname, "views", "layouts"),
    defaultLayout: "main",
  })
);
app.set("view engine", "handlebars");
app.set("views", resolve(__dirname, "views"));
let hbs = require("handlebars");
hbs.registerHelper("listItem", (index) => {
  return index + 1;
});

app.use(
  sass({
    src: resolve(__dirname, "..", "public", "scss"),
    dest: resolve(__dirname, "..", "public", "css"),
    outputStyle: "compressed",
    prefix: "/css",
  })
);

app.use("/img", express.static(resolve(__dirname, "..", "public", "img")));
app.use("/css", express.static(resolve(__dirname, "..", "public", "css")));
app.use(
  "/webfonts",
  express.static(
    resolve(
      __dirname,
      "..",
      "node_modules",
      "@fortawesome",
      "fontawesome-free",
      "webfonts"
    )
  )
);
app.use("/js", [
  express.static(resolve(__dirname, "..", "public", "js")),
  express.static(
    resolve(__dirname, "..", "node_modules", "bootstrap", "dist", "js")
  ),
]);

app.use(cookieParser());

app.use(
  session({
    genid: (req) => {
      return uuid.v4(); // usamos UUIDs para gerar os SESSID
    },
    secret: "Hi9Cf#mK98",
    resave: false,
    saveUninitialized: true,
  })
);

app.use((req, res, next) => {
  app.locals.isLogged = "uid" in req.session;
  next();
});

app.use(express.urlencoded({ extended: true }));
app.use(router);
app.use(morgan("combined"));

module.exports = app;
