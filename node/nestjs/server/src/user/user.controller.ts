import { BadRequestException, Body, Controller, Get, Post, Req, Res, Session } from '@nestjs/common';
import { UserService } from './user.service';
import * as svgCaptcha from 'svg-captcha'

/** 这个例子你需要重点关注 session 的用法 */
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {
    }
    @Get('code')
    createCode(@Req() req, @Res() res, @Session() session) {
        const Captcha = svgCaptcha.create({
            size: 4,
            fontSize: 50,
            width: 100,
            height: 34,
            background: '##cc9966'
        })

        session.code = Captcha.text;
        res.type('image/svg+xml')
        res.send(Captcha.data)
    }

    @Post('createUser')
    createUser(@Body() body, @Session() session) {
        console.log(body, session.code)

        if (session.code == body.code) {
            return {
                code: 200
            }
        }
        throw new BadRequestException('wrong code')
    }


    @Get('test')
    test(){
        return 'test'
    }
}
