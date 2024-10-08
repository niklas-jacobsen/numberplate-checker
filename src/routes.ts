import { Hono } from "hono";
import { indexRouter } from "./routes/index.routes";
import { licensePlateRequestRouter } from "./routes/licensePlateRequest.routes";

const router = new Hono();

router.route("/", indexRouter);
router.route("/request", licensePlateRequestRouter);

export default router;
