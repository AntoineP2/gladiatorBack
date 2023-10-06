import {  Router } from "express"
import { ping } from "../../controllers/ping"

export const otherRoute = Router()

otherRoute.route("/ping").get(ping)