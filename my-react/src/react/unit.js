import $ from "jquery";

const COMMON_TYPE = new Set(["string", "number"]);
class Unit {
  constructor(element) {
    this.currentElement = element;
  }
}

class ReactTextUnit extends Unit {
  constructor(element) {
    super(element);
  }
  getMarkUp(rootId) {
    this._rootId = rootId;
    let markUp = `<span data-reactid="${rootId}">${this.currentElement}</span>`;
    return markUp;
  }
}

// id = 0.0.0, rootId = 0.0
function isChild(id, rootId) {
  console.log("[p4]", id, rootId);
  if (rootId.length > id.length) return false;
  for (let i = 0; i < rootId.length; i++) {
    if (id[i] !== rootId[i]) {
      return false;
    }
  }
  return true;
}

class ReactNativeUnit extends Unit {
  getMarkUp(rootId) {
    this._rootId = rootId;
    let { type, props } = this.currentElement;
    let tagStart = `<${type} data-reactid="${rootId}"`;
    let tagEnd = `</${type}>`;
    let contentStr;
    for (let propName in props) {
      if (/on[A-Z]/.test(propName)) {
        let eventType = propName.slice(2).toLowerCase(); // string click
        //let element = document.querySelector(`[data-reactid="${rootId}]"`);
        document.addEventListener(eventType, function (e) {
          console.log(
            "[p3]",
            e.target.attributes["data-reactid"].value,
            rootId
          );
          if (isChild(e.target.attributes["data-reactid"].value, rootId)) {
            let f = props[propName];
            f();
          }
        });
        // $(document).on(
        //   eventType,
        //   `[data-reactid="${rootId}"]`,
        //   props[propName]
        // );
      } else if (propName === "children") {
        // ['<span>你好</span>','<button>123</button>']
        console.log("[p0] children", props["children"]);
        contentStr = props["children"]
          .map((child, idx) => {
            let childInstance = createReactUnit(child);
            return childInstance.getMarkUp(`${rootId}.${idx}`);
          })
          .join("");
        console.log("[p1] contentStr", contentStr);
      } else {
        tagStart += `${propName}=${props[propName]}`;
      }
    }
    //console.log("[p2] markup", tagStart + ">" + contentStr + tagEnd);
    return tagStart + ">" + contentStr + tagEnd;
  }
}

export default function createReactUnit(element) {
  // 数字和字符串
  if (COMMON_TYPE.has(typeof element)) {
    //console.log("[p0]");
    return new ReactTextUnit(element);
  }
  // react 组件
  if (typeof element === "object" && typeof element.type === "string") {
    //console.log("[p1] element", element);
    return new ReactNativeUnit(element);
  }
}
