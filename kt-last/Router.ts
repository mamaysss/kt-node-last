import { Elysia, t } from "elysia";
import { StudentController } from "./controllers/StudentController";

export class Router {
  static students = new Elysia()
   
    .post(
      "/",
      ({ body }) => StudentController.create(body),
      {
        body: t.Object({
          title: t.String(),
          description: t.String(),
          duration: t.Number(),
          price: t.Optional(t.Number()),
        }),
      }
    )
   
    .get(
      "/:id",
      ({ params: { id } }) => StudentController.getById(Number(id)),
      {
        params: t.Object({
          id: t.String(),
        }),
      }
    )
    
    .get("/", () => StudentController.getAll())
   
    .delete(
      "/:id",
      ({ params: { id } }) => StudentController.delete(Number(id)),
      {
        params: t.Object({
          id: t.String(),
        }),
      }
    )
}