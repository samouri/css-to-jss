import { cssToJss } from "jss-cli";

export default function(req, res) {
  const transformed = cssToJss({ code: req.body });
  res.send(transformed);
}
