import { Router } from 'https://deno.land/x/oak/mod.ts'
import {registerSubscriber} from "./api/subscriptions.ts"
const router = new Router()
router.get('/api/v1/subscribed', registerSubscriber)
export default router