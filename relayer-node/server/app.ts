import cors from "cors";
import express from "express";

const app = express();

app.options("*", cors());
app.use(cors());

// Add headers
app.use((req: any, res: any, next: any) => {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  // Pass to next layer of middleware
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.route("/health").get((req: any, res: any) => {
  res.send("ok");
});

// error handler
app.use((err: any, _req: any, res: any, _next: any) =>
  res.status(300).json(err.message)
);

export default app;
