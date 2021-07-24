export function setObjectValue(obj, name, value) {
    let set = new Function("object", `object.${name} = ${value}; return object`);
    return set(obj)
}

export function getObjectValue(obj, name) {
    let get = new Function("obj", `return obj.${name};`);
    return get(obj)
}
