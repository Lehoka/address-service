import express from 'express'
import { addressController } from '../../services'

export const addressRouter = express.Router()

addressRouter.get('/', (req, res, next) => addressController.getAddress(req, res))