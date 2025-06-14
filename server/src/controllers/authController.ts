import {catchAsync} from "../utils/catchAsync.js";
import {AppError} from "../utils/appError.js";
import * as util from "util";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import {Request, Response, NextFunction} from "express";
import {EUserRoles, IUser} from "../definitions/IUser";


export const protect = catchAsync(async (req: Request, res, next) => {
    const {authorization} = req.headers
    let token = ''
    if (authorization && authorization.startsWith('Bearer')) {
        token = authorization.split(' ')[1]
    }
    if (!token) {
        return next(new AppError('You are not logged in please log in to get access', 401))
    }

// @ts-ignore
    const decoded: IUser & { iat: number } = await util.promisify(jwt.verify)(token, process.env.JWT_SECRET || "1111")

    const freshUser = await User.findByPk(decoded.id)

    if (!freshUser) {
        return next(new AppError('The user belonging to this token mo longer exist', 401))
    }
    req.user = freshUser
    next()
})

export const restrictTo = (...roles: EUserRoles[]) => {
    return (req: Request, res: Response, next: NextFunction) => {
        if (req.user && !roles.includes(req.user.role)) {
            return next(new AppError(`You don't have permission to perform this action`, 403))
        }
        next()
    }
}