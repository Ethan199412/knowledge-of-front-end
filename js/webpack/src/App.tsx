import React from 'react';
import { useEffect } from 'react';

declare global {
  interface Window {
    xt?: any;
  }
}

export default function App() {
  useEffect(() => {
    const xt = new XiaoT()
    console.log('[p1.0]', { xt })
    window.xt = xt
  }, [])

  return <div>app</div>
}

// 类装饰器，本质和 XiaoT = doc(XiaoT) 是一样的，target 是类本身
const classDecorator: ClassDecorator = (target: any) => {
  target.prototype.name = 'xiaoT'
}

// 这里的 target 不是类本身，而是类构造函数的原型
const propertyDecorator: PropertyDecorator = (target: Object, propertyKey: string | any) => {
  target['getKeyName'] = () => {
    console.log('I am ' + propertyKey)
  }
  target['getKeyValue'] = () => {
    console.log(target[propertyKey])
  }
}

// configurable 是否可被 delete 删除，writable 是否可重新编辑，enumerable 是否可 for 枚举
const methodDecorator: MethodDecorator = (target: Object, propertyKey: string | any, descriptor: any) => {
  console.log('[p1.1]', { target, propertyKey, descriptor })
  // descriptor.configurable = false
  // descriptor.writable = false
  descriptor.enumerable = false
}

const parameterDecorator: ParameterDecorator = (target: Object, propertyKey: string | any, index: any) => {
  console.log('[p1.3]', { target, propertyKey, index })
}

@classDecorator
class XiaoT {
  @propertyDecorator
  public name: string;

  public age: number = 10;
  constructor() {

  }

  @methodDecorator
  getName(@parameterDecorator name: string, @parameterDecorator age) {
    console.log('I am getName')
  }

  // getName2 = (@parameterDecorator a) => {

  // }
}