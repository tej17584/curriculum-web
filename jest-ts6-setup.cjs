const Module = require('module');
const path = require('path');
const ts6Compiler = require('@typescript/typescript6');
const { __requireModule } = require('ts-jest/dist/utils/importer');

__requireModule(
  (mod) => {
    if (mod === 'typescript') {
      return ts6Compiler;
    }

    return require(mod);
  },
  (mod) => {
    if (mod === 'typescript') {
      return require.resolve('@typescript/typescript6');
    }

    return require.resolve(mod);
  }
);

const originalRequire = Module.prototype.require;

Module.prototype.require = function (request) {
  if (
    request === 'typescript' &&
    typeof this.filename === 'string' &&
    this.filename.includes(`${path.sep}ts-jest${path.sep}`)
  ) {
    return ts6Compiler;
  }

  return originalRequire.apply(this, arguments);
};
