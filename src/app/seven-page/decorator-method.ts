export function Readonly(defaultValue) {
  return (target, key: string) => {
    target[key] = defaultValue;
    Object.defineProperty(target, key, { writable: false });
  };
}

export function log(prefix?: string) {
  return (target) => {
    let original = target;

    // a utility function to generate instances of class
    function construct(constructor, args) {
      let c: any = () => {
        return constructor.apply(this, args);
      };
      c.prototype = constructor.prototype;
      return new c();
    }

    // the new constructor behavior
    let f: any = (...args) => {
      console.log(prefix + '-' + original.name);
      console.log(construct(original, args));
      return construct(original, args);
    };
    f.prototype = original.prototype;

    // return new constructor
    return f;
  };
}

export function Student(config) {
  return (target) => {
    console.log(config);
    Object.defineProperty(target, 'course', {
      value: () => config.course
    });
  };
}

export function logger(text) {
  return (target) => {
    console.log(target);
    // target[key] = text;
    target.prototype.log = (): void => {
      console.log(text);
    }
    // Object.defineProperty(target, key, {value: text});
  }
}
