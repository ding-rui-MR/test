import { createParamDecorator, ExecutionContext, SetMetadata } from '@nestjs/common';
import { SensitiveType } from 'src/entity/constants';

export const User = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest(); // 拿到请求
    return request.body.user;
  },
);

export const NoUser = () => SetMetadata('no-user', true);


export const SensitiveOperation = (type: SensitiveType) => SetMetadata('sensitive-operation', type);
// ...
