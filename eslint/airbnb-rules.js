// Vendored copies of the official Airbnb ESLint rules (MIT, Airbnb JavaScript).
// Source: eslint-config-airbnb-base@15.0.0, eslint-config-airbnb-typescript@18.0.0,
// @vue/eslint-config-airbnb@8.0.0 (rule objects only). Adaptations:
//   - the import/ plugin namespace is import-x/ (eslint-plugin-import does not support ESLint 10);
//   - @typescript-eslint rules removed from typescript-eslint v8 fall back to the core rule
//     with the same options (typescript-only option keys dropped);
//   - typed rules with no core equivalent are omitted (the project does not enable typed linting).
// Regenerate from those packages rather than editing by hand.
export default {
  base: {
    rules: {
      "accessor-pairs": "off",
      "array-callback-return": [
        "error",
        {
          allowImplicit: true,
        },
      ],
      "block-scoped-var": "error",
      complexity: [
        "off",
        20,
      ],
      "class-methods-use-this": [
        "error",
        {
          exceptMethods: [],
        },
      ],
      "consistent-return": "error",
      curly: [
        "error",
        "multi-line",
      ],
      "default-case": [
        "error",
        {
          commentPattern: "^no default$",
        },
      ],
      "default-case-last": "error",
      "default-param-last": "error",
      "dot-notation": [
        "error",
        {
          allowKeywords: true,
        },
      ],
      "dot-location": [
        "error",
        "property",
      ],
      eqeqeq: [
        "error",
        "always",
        {
          null: "ignore",
        },
      ],
      "grouped-accessor-pairs": "error",
      "guard-for-in": "error",
      "max-classes-per-file": [
        "error",
        1,
      ],
      "no-alert": "warn",
      "no-caller": "error",
      "no-case-declarations": "error",
      "no-constructor-return": "error",
      "no-div-regex": "off",
      "no-else-return": [
        "error",
        {
          allowElseIf: false,
        },
      ],
      "no-empty-function": [
        "error",
        {
          allow: [
            "arrowFunctions",
            "functions",
            "methods",
          ],
        },
      ],
      "no-empty-pattern": "error",
      "no-eq-null": "off",
      "no-eval": "error",
      "no-extend-native": "error",
      "no-extra-bind": "error",
      "no-extra-label": "error",
      "no-fallthrough": "error",
      "no-floating-decimal": "error",
      "no-global-assign": [
        "error",
        {
          exceptions: [],
        },
      ],
      "no-native-reassign": "off",
      "no-implicit-coercion": [
        "off",
        {
          boolean: false,
          number: true,
          string: true,
          allow: [],
        },
      ],
      "no-implicit-globals": "off",
      "no-implied-eval": "error",
      "no-invalid-this": "off",
      "no-iterator": "error",
      "no-labels": [
        "error",
        {
          allowLoop: false,
          allowSwitch: false,
        },
      ],
      "no-lone-blocks": "error",
      "no-loop-func": "error",
      "no-magic-numbers": [
        "off",
        {
          ignore: [],
          ignoreArrayIndexes: true,
          enforceConst: true,
          detectObjects: false,
        },
      ],
      "no-multi-spaces": [
        "error",
        {
          ignoreEOLComments: false,
        },
      ],
      "no-multi-str": "error",
      "no-new": "error",
      "no-new-func": "error",
      "no-new-wrappers": "error",
      "no-nonoctal-decimal-escape": "error",
      "no-octal": "error",
      "no-octal-escape": "error",
      "no-param-reassign": [
        "error",
        {
          props: true,
          ignorePropertyModificationsFor: [
            "acc",
            "accumulator",
            "e",
            "ctx",
            "context",
            "req",
            "request",
            "res",
            "response",
            "$scope",
            "staticContext",
          ],
        },
      ],
      "no-proto": "error",
      "no-redeclare": "error",
      "no-restricted-properties": [
        "error",
        {
          object: "arguments",
          property: "callee",
          message: "arguments.callee is deprecated",
        },
        {
          object: "global",
          property: "isFinite",
          message: "Please use Number.isFinite instead",
        },
        {
          object: "self",
          property: "isFinite",
          message: "Please use Number.isFinite instead",
        },
        {
          object: "window",
          property: "isFinite",
          message: "Please use Number.isFinite instead",
        },
        {
          object: "global",
          property: "isNaN",
          message: "Please use Number.isNaN instead",
        },
        {
          object: "self",
          property: "isNaN",
          message: "Please use Number.isNaN instead",
        },
        {
          object: "window",
          property: "isNaN",
          message: "Please use Number.isNaN instead",
        },
        {
          property: "__defineGetter__",
          message: "Please use Object.defineProperty instead.",
        },
        {
          property: "__defineSetter__",
          message: "Please use Object.defineProperty instead.",
        },
        {
          object: "Math",
          property: "pow",
          message: "Use the exponentiation operator (**) instead.",
        },
      ],
      "no-return-assign": [
        "error",
        "always",
      ],
      "no-return-await": "error",
      "no-script-url": "error",
      "no-self-assign": [
        "error",
        {
          props: true,
        },
      ],
      "no-self-compare": "error",
      "no-sequences": "error",
      "no-throw-literal": "error",
      "no-unmodified-loop-condition": "off",
      "no-unused-expressions": [
        "error",
        {
          allowShortCircuit: false,
          allowTernary: false,
          allowTaggedTemplates: false,
        },
      ],
      "no-unused-labels": "error",
      "no-useless-call": "off",
      "no-useless-catch": "error",
      "no-useless-concat": "error",
      "no-useless-escape": "error",
      "no-useless-return": "error",
      "no-void": "error",
      "no-warning-comments": [
        "off",
        {
          terms: [
            "todo",
            "fixme",
            "xxx",
          ],
          location: "start",
        },
      ],
      "no-with": "error",
      "prefer-promise-reject-errors": [
        "error",
        {
          allowEmptyReject: true,
        },
      ],
      "prefer-named-capture-group": "off",
      "prefer-regex-literals": [
        "error",
        {
          disallowRedundantWrapping: true,
        },
      ],
      radix: "error",
      "require-await": "off",
      "require-unicode-regexp": "off",
      "vars-on-top": "error",
      "wrap-iife": [
        "error",
        "outside",
        {
          functionPrototypeMethods: false,
        },
      ],
      yoda: "error",
      "for-direction": "error",
      "getter-return": [
        "error",
        {
          allowImplicit: true,
        },
      ],
      "no-async-promise-executor": "error",
      "no-await-in-loop": "error",
      "no-compare-neg-zero": "error",
      "no-cond-assign": [
        "error",
        "always",
      ],
      "no-console": "warn",
      "no-constant-condition": "warn",
      "no-control-regex": "error",
      "no-debugger": "error",
      "no-dupe-args": "error",
      "no-dupe-else-if": "error",
      "no-dupe-keys": "error",
      "no-duplicate-case": "error",
      "no-empty": "error",
      "no-empty-character-class": "error",
      "no-ex-assign": "error",
      "no-extra-boolean-cast": "error",
      "no-extra-parens": [
        "off",
        "all",
        {
          conditionalAssign: true,
          nestedBinaryExpressions: false,
          returnAssign: false,
          ignoreJSX: "all",
          enforceForArrowConditionals: false,
        },
      ],
      "no-extra-semi": "error",
      "no-func-assign": "error",
      "no-import-assign": "error",
      "no-inner-declarations": "error",
      "no-invalid-regexp": "error",
      "no-irregular-whitespace": "error",
      "no-loss-of-precision": "error",
      "no-misleading-character-class": "error",
      "no-obj-calls": "error",
      "no-promise-executor-return": "error",
      "no-prototype-builtins": "error",
      "no-regex-spaces": "error",
      "no-setter-return": "error",
      "no-sparse-arrays": "error",
      "no-template-curly-in-string": "error",
      "no-unexpected-multiline": "error",
      "no-unreachable": "error",
      "no-unreachable-loop": [
        "error",
        {
          ignore: [],
        },
      ],
      "no-unsafe-finally": "error",
      "no-unsafe-negation": "error",
      "no-unsafe-optional-chaining": [
        "error",
        {
          disallowArithmeticOperators: true,
        },
      ],
      "no-unused-private-class-members": "off",
      "no-useless-backreference": "error",
      "no-negated-in-lhs": "off",
      "require-atomic-updates": "off",
      "use-isnan": "error",
      "valid-jsdoc": "off",
      "valid-typeof": [
        "error",
        {
          requireStringLiterals: true,
        },
      ],
      "callback-return": "off",
      "global-require": "error",
      "handle-callback-err": "off",
      "no-buffer-constructor": "error",
      "no-mixed-requires": [
        "off",
        false,
      ],
      "no-new-require": "error",
      "no-path-concat": "error",
      "no-process-env": "off",
      "no-process-exit": "off",
      "no-restricted-modules": "off",
      "no-sync": "off",
      "array-bracket-newline": [
        "off",
        "consistent",
      ],
      "array-element-newline": [
        "off",
        {
          multiline: true,
          minItems: 3,
        },
      ],
      "array-bracket-spacing": [
        "error",
        "never",
      ],
      "block-spacing": [
        "error",
        "always",
      ],
      "brace-style": [
        "error",
        "1tbs",
        {
          allowSingleLine: true,
        },
      ],
      camelcase: [
        "error",
        {
          properties: "never",
          ignoreDestructuring: false,
        },
      ],
      "capitalized-comments": [
        "off",
        "never",
        {
          line: {
            ignorePattern: ".*",
            ignoreInlineComments: true,
            ignoreConsecutiveComments: true,
          },
          block: {
            ignorePattern: ".*",
            ignoreInlineComments: true,
            ignoreConsecutiveComments: true,
          },
        },
      ],
      "comma-dangle": [
        "error",
        {
          arrays: "always-multiline",
          objects: "always-multiline",
          imports: "always-multiline",
          exports: "always-multiline",
          functions: "always-multiline",
        },
      ],
      "comma-spacing": [
        "error",
        {
          before: false,
          after: true,
        },
      ],
      "comma-style": [
        "error",
        "last",
        {
          exceptions: {
            ArrayExpression: false,
            ArrayPattern: false,
            ArrowFunctionExpression: false,
            CallExpression: false,
            FunctionDeclaration: false,
            FunctionExpression: false,
            ImportDeclaration: false,
            ObjectExpression: false,
            ObjectPattern: false,
            VariableDeclaration: false,
            NewExpression: false,
          },
        },
      ],
      "computed-property-spacing": [
        "error",
        "never",
      ],
      "consistent-this": "off",
      "eol-last": [
        "error",
        "always",
      ],
      "function-call-argument-newline": [
        "error",
        "consistent",
      ],
      "func-call-spacing": [
        "error",
        "never",
      ],
      "func-name-matching": [
        "off",
        "always",
        {
          includeCommonJSModuleExports: false,
          considerPropertyDescriptor: true,
        },
      ],
      "func-names": "warn",
      "func-style": [
        "off",
        "expression",
      ],
      "function-paren-newline": [
        "error",
        "multiline-arguments",
      ],
      "id-denylist": "off",
      "id-length": "off",
      "id-match": "off",
      "implicit-arrow-linebreak": [
        "error",
        "beside",
      ],
      indent: [
        "error",
        2,
        {
          SwitchCase: 1,
          VariableDeclarator: 1,
          outerIIFEBody: 1,
          FunctionDeclaration: {
            parameters: 1,
            body: 1,
          },
          FunctionExpression: {
            parameters: 1,
            body: 1,
          },
          CallExpression: {
            arguments: 1,
          },
          ArrayExpression: 1,
          ObjectExpression: 1,
          ImportDeclaration: 1,
          flatTernaryExpressions: false,
          ignoredNodes: [
            "JSXElement",
            "JSXElement > *",
            "JSXAttribute",
            "JSXIdentifier",
            "JSXNamespacedName",
            "JSXMemberExpression",
            "JSXSpreadAttribute",
            "JSXExpressionContainer",
            "JSXOpeningElement",
            "JSXClosingElement",
            "JSXFragment",
            "JSXOpeningFragment",
            "JSXClosingFragment",
            "JSXText",
            "JSXEmptyExpression",
            "JSXSpreadChild",
          ],
          ignoreComments: false,
        },
      ],
      "jsx-quotes": [
        "off",
        "prefer-double",
      ],
      "key-spacing": [
        "error",
        {
          beforeColon: false,
          afterColon: true,
        },
      ],
      "keyword-spacing": [
        "error",
        {
          before: true,
          after: true,
          overrides: {
            return: {
              after: true,
            },
            throw: {
              after: true,
            },
            case: {
              after: true,
            },
          },
        },
      ],
      "line-comment-position": [
        "off",
        {
          position: "above",
          ignorePattern: "",
          applyDefaultPatterns: true,
        },
      ],
      "linebreak-style": [
        "error",
        "unix",
      ],
      "lines-between-class-members": [
        "error",
        "always",
        {
          exceptAfterSingleLine: false,
        },
      ],
      "lines-around-comment": "off",
      "lines-around-directive": [
        "error",
        {
          before: "always",
          after: "always",
        },
      ],
      "max-depth": [
        "off",
        4,
      ],
      "max-len": [
        "error",
        100,
        2,
        {
          ignoreUrls: true,
          ignoreComments: false,
          ignoreRegExpLiterals: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
        },
      ],
      "max-lines": [
        "off",
        {
          max: 300,
          skipBlankLines: true,
          skipComments: true,
        },
      ],
      "max-lines-per-function": [
        "off",
        {
          max: 50,
          skipBlankLines: true,
          skipComments: true,
          IIFEs: true,
        },
      ],
      "max-nested-callbacks": "off",
      "max-params": [
        "off",
        3,
      ],
      "max-statements": [
        "off",
        10,
      ],
      "max-statements-per-line": [
        "off",
        {
          max: 1,
        },
      ],
      "multiline-comment-style": [
        "off",
        "starred-block",
      ],
      "multiline-ternary": [
        "off",
        "never",
      ],
      "new-cap": [
        "error",
        {
          newIsCap: true,
          newIsCapExceptions: [],
          capIsNew: false,
          capIsNewExceptions: [
            "Immutable.Map",
            "Immutable.Set",
            "Immutable.List",
          ],
        },
      ],
      "new-parens": "error",
      "newline-after-var": "off",
      "newline-before-return": "off",
      "newline-per-chained-call": [
        "error",
        {
          ignoreChainWithDepth: 4,
        },
      ],
      "no-array-constructor": "error",
      "no-bitwise": "error",
      "no-continue": "error",
      "no-inline-comments": "off",
      "no-lonely-if": "error",
      "no-mixed-operators": [
        "error",
        {
          groups: [
            [
              "%",
              "**",
            ],
            [
              "%",
              "+",
            ],
            [
              "%",
              "-",
            ],
            [
              "%",
              "*",
            ],
            [
              "%",
              "/",
            ],
            [
              "/",
              "*",
            ],
            [
              "&",
              "|",
              "<<",
              ">>",
              ">>>",
            ],
            [
              "==",
              "!=",
              "===",
              "!==",
            ],
            [
              "&&",
              "||",
            ],
          ],
          allowSamePrecedence: false,
        },
      ],
      "no-mixed-spaces-and-tabs": "error",
      "no-multi-assign": [
        "error",
      ],
      "no-multiple-empty-lines": [
        "error",
        {
          max: 1,
          maxBOF: 0,
          maxEOF: 0,
        },
      ],
      "no-negated-condition": "off",
      "no-nested-ternary": "error",
      "no-new-object": "error",
      "no-plusplus": "error",
      "no-restricted-syntax": [
        "error",
        {
          selector: "ForInStatement",
          message: "for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.",
        },
        {
          selector: "ForOfStatement",
          message: "iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.",
        },
        {
          selector: "LabeledStatement",
          message: "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.",
        },
        {
          selector: "WithStatement",
          message: "`with` is disallowed in strict mode because it makes code impossible to predict and optimize.",
        },
      ],
      "no-spaced-func": "error",
      "no-tabs": "error",
      "no-ternary": "off",
      "no-trailing-spaces": [
        "error",
        {
          skipBlankLines: false,
          ignoreComments: false,
        },
      ],
      "no-underscore-dangle": [
        "error",
        {
          allow: [],
          allowAfterThis: false,
          allowAfterSuper: false,
          enforceInMethodNames: true,
        },
      ],
      "no-unneeded-ternary": [
        "error",
        {
          defaultAssignment: false,
        },
      ],
      "no-whitespace-before-property": "error",
      "nonblock-statement-body-position": [
        "error",
        "beside",
        {
          overrides: {},
        },
      ],
      "object-curly-spacing": [
        "error",
        "always",
      ],
      "object-curly-newline": [
        "error",
        {
          ObjectExpression: {
            minProperties: 4,
            multiline: true,
            consistent: true,
          },
          ObjectPattern: {
            minProperties: 4,
            multiline: true,
            consistent: true,
          },
          ImportDeclaration: {
            minProperties: 4,
            multiline: true,
            consistent: true,
          },
          ExportDeclaration: {
            minProperties: 4,
            multiline: true,
            consistent: true,
          },
        },
      ],
      "object-property-newline": [
        "error",
        {
          allowAllPropertiesOnSameLine: true,
        },
      ],
      "one-var": [
        "error",
        "never",
      ],
      "one-var-declaration-per-line": [
        "error",
        "always",
      ],
      "operator-assignment": [
        "error",
        "always",
      ],
      "operator-linebreak": [
        "error",
        "before",
        {
          overrides: {
            "=": "none",
          },
        },
      ],
      "padded-blocks": [
        "error",
        {
          blocks: "never",
          classes: "never",
          switches: "never",
        },
        {
          allowSingleLineBlocks: true,
        },
      ],
      "padding-line-between-statements": "off",
      "prefer-exponentiation-operator": "error",
      "prefer-object-spread": "error",
      "quote-props": [
        "error",
        "as-needed",
        {
          keywords: false,
          unnecessary: true,
          numbers: false,
        },
      ],
      quotes: [
        "error",
        "single",
        {
          avoidEscape: true,
        },
      ],
      "require-jsdoc": "off",
      semi: [
        "error",
        "always",
      ],
      "semi-spacing": [
        "error",
        {
          before: false,
          after: true,
        },
      ],
      "semi-style": [
        "error",
        "last",
      ],
      "sort-keys": [
        "off",
        "asc",
        {
          caseSensitive: false,
          natural: true,
        },
      ],
      "sort-vars": "off",
      "space-before-blocks": "error",
      "space-before-function-paren": [
        "error",
        {
          anonymous: "always",
          named: "never",
          asyncArrow: "always",
        },
      ],
      "space-in-parens": [
        "error",
        "never",
      ],
      "space-infix-ops": "error",
      "space-unary-ops": [
        "error",
        {
          words: true,
          nonwords: false,
          overrides: {},
        },
      ],
      "spaced-comment": [
        "error",
        "always",
        {
          line: {
            exceptions: [
              "-",
              "+",
            ],
            markers: [
              "=",
              "!",
              "/",
            ],
          },
          block: {
            exceptions: [
              "-",
              "+",
            ],
            markers: [
              "=",
              "!",
              ":",
              "::",
            ],
            balanced: true,
          },
        },
      ],
      "switch-colon-spacing": [
        "error",
        {
          after: true,
          before: false,
        },
      ],
      "template-tag-spacing": [
        "error",
        "never",
      ],
      "unicode-bom": [
        "error",
        "never",
      ],
      "wrap-regex": "off",
      "init-declarations": "off",
      "no-catch-shadow": "off",
      "no-delete-var": "error",
      "no-label-var": "error",
      "no-restricted-globals": [
        "error",
        {
          name: "isFinite",
          message: "Use Number.isFinite instead https://github.com/airbnb/javascript#standard-library--isfinite",
        },
        {
          name: "isNaN",
          message: "Use Number.isNaN instead https://github.com/airbnb/javascript#standard-library--isnan",
        },
        "addEventListener",
        "blur",
        "close",
        "closed",
        "confirm",
        "defaultStatus",
        "defaultstatus",
        "event",
        "external",
        "find",
        "focus",
        "frameElement",
        "frames",
        "history",
        "innerHeight",
        "innerWidth",
        "length",
        "location",
        "locationbar",
        "menubar",
        "moveBy",
        "moveTo",
        "name",
        "onblur",
        "onerror",
        "onfocus",
        "onload",
        "onresize",
        "onunload",
        "open",
        "opener",
        "opera",
        "outerHeight",
        "outerWidth",
        "pageXOffset",
        "pageYOffset",
        "parent",
        "print",
        "removeEventListener",
        "resizeBy",
        "resizeTo",
        "screen",
        "screenLeft",
        "screenTop",
        "screenX",
        "screenY",
        "scroll",
        "scrollbars",
        "scrollBy",
        "scrollTo",
        "scrollX",
        "scrollY",
        "self",
        "status",
        "statusbar",
        "stop",
        "toolbar",
        "top",
      ],
      "no-shadow": "error",
      "no-shadow-restricted-names": "error",
      "no-undef": "error",
      "no-undef-init": "error",
      "no-undefined": "off",
      "no-unused-vars": [
        "error",
        {
          vars: "all",
          args: "after-used",
          ignoreRestSiblings: true,
        },
      ],
      "no-use-before-define": [
        "error",
        {
          functions: true,
          classes: true,
          variables: true,
        },
      ],
      "arrow-body-style": [
        "error",
        "as-needed",
        {
          requireReturnForObjectLiteral: false,
        },
      ],
      "arrow-parens": [
        "error",
        "always",
      ],
      "arrow-spacing": [
        "error",
        {
          before: true,
          after: true,
        },
      ],
      "constructor-super": "error",
      "generator-star-spacing": [
        "error",
        {
          before: false,
          after: true,
        },
      ],
      "no-class-assign": "error",
      "no-confusing-arrow": [
        "error",
        {
          allowParens: true,
        },
      ],
      "no-const-assign": "error",
      "no-dupe-class-members": "error",
      "no-duplicate-imports": "off",
      "no-new-symbol": "error",
      "no-restricted-exports": [
        "error",
        {
          restrictedNamedExports: [
            "default",
            "then",
          ],
        },
      ],
      "no-restricted-imports": [
        "off",
        {
          paths: [],
          patterns: [],
        },
      ],
      "no-this-before-super": "error",
      "no-useless-computed-key": "error",
      "no-useless-constructor": "error",
      "no-useless-rename": [
        "error",
        {
          ignoreDestructuring: false,
          ignoreImport: false,
          ignoreExport: false,
        },
      ],
      "no-var": "error",
      "object-shorthand": [
        "error",
        "always",
        {
          ignoreConstructors: false,
          avoidQuotes: true,
        },
      ],
      "prefer-arrow-callback": [
        "error",
        {
          allowNamedFunctions: false,
          allowUnboundThis: true,
        },
      ],
      "prefer-const": [
        "error",
        {
          destructuring: "any",
          ignoreReadBeforeAssign: true,
        },
      ],
      "prefer-destructuring": [
        "error",
        {
          VariableDeclarator: {
            array: false,
            object: true,
          },
          AssignmentExpression: {
            array: true,
            object: false,
          },
        },
        {
          enforceForRenamedProperties: false,
        },
      ],
      "prefer-numeric-literals": "error",
      "prefer-reflect": "off",
      "prefer-rest-params": "error",
      "prefer-spread": "error",
      "prefer-template": "error",
      "require-yield": "error",
      "rest-spread-spacing": [
        "error",
        "never",
      ],
      "sort-imports": [
        "off",
        {
          ignoreCase: false,
          ignoreDeclarationSort: false,
          ignoreMemberSort: false,
          memberSyntaxSortOrder: [
            "none",
            "all",
            "multiple",
            "single",
          ],
        },
      ],
      "symbol-description": "error",
      "template-curly-spacing": "error",
      "yield-star-spacing": [
        "error",
        "after",
      ],
      "import-x/no-unresolved": [
        "error",
        {
          commonjs: true,
          caseSensitive: true,
        },
      ],
      "import-x/named": "error",
      "import-x/default": "off",
      "import-x/namespace": "off",
      "import-x/export": "error",
      "import-x/no-named-as-default": "error",
      "import-x/no-named-as-default-member": "error",
      "import-x/no-deprecated": "off",
      "import-x/no-extraneous-dependencies": [
        "error",
        {
          devDependencies: [
            "test/**",
            "tests/**",
            "spec/**",
            "**/__tests__/**",
            "**/__mocks__/**",
            "test.{js,jsx}",
            "test-*.{js,jsx}",
            "**/*{.,_}{test,spec}.{js,jsx}",
            "**/jest.config.js",
            "**/jest.setup.js",
            "**/vue.config.js",
            "**/webpack.config.js",
            "**/webpack.config.*.js",
            "**/rollup.config.js",
            "**/rollup.config.*.js",
            "**/gulpfile.js",
            "**/gulpfile.*.js",
            "**/Gruntfile{,.js}",
            "**/protractor.conf.js",
            "**/protractor.conf.*.js",
            "**/karma.conf.js",
            "**/.eslintrc.js",
          ],
          optionalDependencies: false,
        },
      ],
      "import-x/no-mutable-exports": "error",
      "import-x/no-commonjs": "off",
      "import-x/no-amd": "error",
      "import-x/no-nodejs-modules": "off",
      "import-x/first": "error",
      "import-x/imports-first": "off",
      "import-x/no-duplicates": "error",
      "import-x/no-namespace": "off",
      "import-x/extensions": [
        "error",
        "ignorePackages",
        {
          js: "never",
          mjs: "never",
          jsx: "never",
        },
      ],
      "import-x/order": [
        "error",
        {
          groups: [
            [
              "builtin",
              "external",
              "internal",
            ],
          ],
        },
      ],
      "import-x/newline-after-import": "error",
      "import-x/prefer-default-export": "error",
      "import-x/no-restricted-paths": "off",
      "import-x/max-dependencies": [
        "off",
        {
          max: 10,
        },
      ],
      "import-x/no-absolute-path": "error",
      "import-x/no-dynamic-require": "error",
      "import-x/no-internal-modules": [
        "off",
        {
          allow: [],
        },
      ],
      "import-x/unambiguous": "off",
      "import-x/no-webpack-loader-syntax": "error",
      "import-x/no-unassigned-import": "off",
      "import-x/no-named-default": "error",
      "import-x/no-anonymous-default-export": [
        "off",
        {
          allowArray: false,
          allowArrowFunction: false,
          allowAnonymousClass: false,
          allowAnonymousFunction: false,
          allowLiteral: false,
          allowObject: false,
        },
      ],
      "import-x/exports-last": "off",
      "import-x/group-exports": "off",
      "import-x/no-default-export": "off",
      "import-x/no-named-export": "off",
      "import-x/no-self-import": "error",
      "import-x/no-cycle": [
        "error",
        {
          maxDepth: "∞",
        },
      ],
      "import-x/no-useless-path-segments": [
        "error",
        {
          commonjs: true,
        },
      ],
      "import-x/dynamic-import-chunkname": [
        "off",
        {
          importFunctions: [],
          webpackChunknameFormat: "[0-9a-zA-Z-_/.]+",
        },
      ],
      "import-x/no-relative-parent-imports": "off",
      "import-x/no-unused-modules": [
        "off",
        {
          ignoreExports: [],
          missingExports: true,
          unusedExports: true,
        },
      ],
      "import-x/no-import-module-exports": [
        "error",
        {
          exceptions: [],
        },
      ],
      "import-x/no-relative-packages": "error",
      strict: [
        "error",
        "never",
      ],
    },
  },
  typescript: {
    settings: {
      "import-x/parsers": {
        "@typescript-eslint/parser": [
          ".ts",
          ".tsx",
          ".d.ts",
        ],
      },
      "import-x/resolver": {
        node: {
          extensions: [
            ".mjs",
            ".js",
            ".json",
            ".ts",
            ".d.ts",
          ],
        },
      },
      "import-x/extensions": [
        ".js",
        ".mjs",
        ".jsx",
        ".ts",
        ".tsx",
        ".d.ts",
      ],
      "import-x/external-module-folders": [
        "node_modules",
        "node_modules/@types",
      ],
    },
    rules: {
      "brace-style": [
        "error",
        "1tbs",
        {
          allowSingleLine: true,
        },
      ],
      camelcase: "off",
      "comma-dangle": [
        "error",
        {
          arrays: "always-multiline",
          objects: "always-multiline",
          imports: "always-multiline",
          exports: "always-multiline",
          functions: "always-multiline",
        },
      ],
      "comma-spacing": [
        "error",
        {
          before: false,
          after: true,
        },
      ],
      "default-param-last": "off",
      "@typescript-eslint/default-param-last": "error",
      "dot-notation": [
        "error",
        {
          allowKeywords: true,
        },
      ],
      "func-call-spacing": [
        "error",
        "never",
      ],
      indent: [
        "error",
        2,
        {
          SwitchCase: 1,
          VariableDeclarator: 1,
          outerIIFEBody: 1,
          FunctionDeclaration: {
            parameters: 1,
            body: 1,
          },
          FunctionExpression: {
            parameters: 1,
            body: 1,
          },
          CallExpression: {
            arguments: 1,
          },
          ArrayExpression: 1,
          ObjectExpression: 1,
          ImportDeclaration: 1,
          flatTernaryExpressions: false,
          ignoredNodes: [
            "JSXElement",
            "JSXElement > *",
            "JSXAttribute",
            "JSXIdentifier",
            "JSXNamespacedName",
            "JSXMemberExpression",
            "JSXSpreadAttribute",
            "JSXExpressionContainer",
            "JSXOpeningElement",
            "JSXClosingElement",
            "JSXFragment",
            "JSXOpeningFragment",
            "JSXClosingFragment",
            "JSXText",
            "JSXEmptyExpression",
            "JSXSpreadChild",
          ],
          ignoreComments: false,
        },
      ],
      "keyword-spacing": [
        "error",
        {
          before: true,
          after: true,
          overrides: {
            return: {
              after: true,
            },
            throw: {
              after: true,
            },
            case: {
              after: true,
            },
          },
        },
      ],
      "lines-between-class-members": [
        "error",
        "always",
        {
          exceptAfterSingleLine: false,
        },
      ],
      "no-array-constructor": "off",
      "@typescript-eslint/no-array-constructor": "error",
      "no-dupe-class-members": "off",
      "@typescript-eslint/no-dupe-class-members": "error",
      "no-empty-function": "off",
      "@typescript-eslint/no-empty-function": [
        "error",
        {
          allow: [
            "arrowFunctions",
            "functions",
            "methods",
          ],
        },
      ],
      "no-extra-parens": [
        "off",
        "all",
        {
          conditionalAssign: true,
          nestedBinaryExpressions: false,
          returnAssign: false,
          ignoreJSX: "all",
          enforceForArrowConditionals: false,
        },
      ],
      "no-extra-semi": "error",
      "no-implied-eval": "error",
      "no-new-func": "off",
      "no-loss-of-precision": "off",
      "@typescript-eslint/no-loss-of-precision": "error",
      "no-loop-func": "off",
      "@typescript-eslint/no-loop-func": "error",
      "no-magic-numbers": "off",
      "@typescript-eslint/no-magic-numbers": [
        "off",
        {
          ignore: [],
          ignoreArrayIndexes: true,
          enforceConst: true,
          detectObjects: false,
        },
      ],
      "no-redeclare": "off",
      "@typescript-eslint/no-redeclare": "error",
      "no-shadow": "off",
      "@typescript-eslint/no-shadow": "error",
      "space-before-blocks": "error",
      "no-throw-literal": "error",
      "no-unused-expressions": "off",
      "@typescript-eslint/no-unused-expressions": [
        "error",
        {
          allowShortCircuit: false,
          allowTernary: false,
          allowTaggedTemplates: false,
        },
      ],
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          vars: "all",
          args: "after-used",
          ignoreRestSiblings: true,
        },
      ],
      "no-use-before-define": "off",
      "@typescript-eslint/no-use-before-define": [
        "error",
        {
          functions: true,
          classes: true,
          variables: true,
        },
      ],
      "no-useless-constructor": "off",
      "@typescript-eslint/no-useless-constructor": "error",
      quotes: [
        "error",
        "single",
        {
          avoidEscape: true,
        },
      ],
      semi: [
        "error",
        "always",
      ],
      "space-before-function-paren": [
        "error",
        {
          anonymous: "always",
          named: "never",
          asyncArrow: "always",
        },
      ],
      "require-await": "off",
      "no-return-await": "off",
      "space-infix-ops": "error",
      "object-curly-spacing": [
        "error",
        "always",
      ],
      "import-x/extensions": [
        "error",
        "ignorePackages",
        {
          js: "never",
          mjs: "never",
          jsx: "never",
          ts: "never",
          tsx: "never",
        },
      ],
      "import-x/no-extraneous-dependencies": [
        "error",
        {
          devDependencies: [
            "test/**",
            "tests/**",
            "spec/**",
            "**/__tests__/**",
            "**/__mocks__/**",
            "test.{js,jsx}",
            "test.{ts,tsx}",
            "test-*.{js,jsx}",
            "test-*.{ts,tsx}",
            "**/*{.,_}{test,spec}.{js,jsx}",
            "**/*{.,_}{test,spec}.{ts,tsx}",
            "**/jest.config.js",
            "**/jest.config.ts",
            "**/jest.setup.js",
            "**/jest.setup.ts",
            "**/vue.config.js",
            "**/vue.config.ts",
            "**/webpack.config.js",
            "**/webpack.config.ts",
            "**/webpack.config.*.js",
            "**/webpack.config.*.ts",
            "**/rollup.config.js",
            "**/rollup.config.ts",
            "**/rollup.config.*.js",
            "**/rollup.config.*.ts",
            "**/gulpfile.js",
            "**/gulpfile.ts",
            "**/gulpfile.*.js",
            "**/gulpfile.*.ts",
            "**/Gruntfile{,.js}",
            "**/Gruntfile{,.ts}",
            "**/protractor.conf.js",
            "**/protractor.conf.ts",
            "**/protractor.conf.*.js",
            "**/protractor.conf.*.ts",
            "**/karma.conf.js",
            "**/karma.conf.ts",
            "**/.eslintrc.js",
            "**/.eslintrc.ts",
          ],
          optionalDependencies: false,
        },
      ],
    },
    overrides: [
      {
        files: [
          "*.ts",
          "*.tsx",
        ],
        rules: {
          "constructor-super": "off",
          "getter-return": "off",
          "no-const-assign": "off",
          "no-dupe-args": "off",
          "no-dupe-class-members": "off",
          "no-dupe-keys": "off",
          "no-func-assign": "off",
          "no-import-assign": "off",
          "no-new-symbol": "off",
          "no-obj-calls": "off",
          "no-redeclare": "off",
          "no-setter-return": "off",
          "no-this-before-super": "off",
          "no-undef": "off",
          "no-unreachable": "off",
          "no-unsafe-negation": "off",
          "valid-typeof": "off",
          "import-x/named": "off",
          "import-x/no-named-as-default-member": "off",
          "import-x/no-unresolved": "off",
        },
      },
    ],
  },
  vue: {
    rules: {
      "vue/array-bracket-newline": [
        "off",
        "consistent",
      ],
      "vue/array-bracket-spacing": [
        "error",
        "never",
      ],
      "vue/arrow-spacing": [
        "error",
        {
          before: true,
          after: true,
        },
      ],
      "vue/block-spacing": [
        "error",
        "always",
      ],
      "vue/brace-style": [
        "error",
        "1tbs",
        {
          allowSingleLine: true,
        },
      ],
      "vue/camelcase": [
        "error",
        {
          properties: "never",
          ignoreDestructuring: false,
        },
      ],
      "vue/comma-dangle": [
        "error",
        {
          arrays: "always-multiline",
          objects: "always-multiline",
          imports: "always-multiline",
          exports: "always-multiline",
          functions: "always-multiline",
        },
      ],
      "vue/comma-spacing": [
        "error",
        {
          before: false,
          after: true,
        },
      ],
      "vue/comma-style": [
        "error",
        "last",
        {
          exceptions: {
            ArrayExpression: false,
            ArrayPattern: false,
            ArrowFunctionExpression: false,
            CallExpression: false,
            FunctionDeclaration: false,
            FunctionExpression: false,
            ImportDeclaration: false,
            ObjectExpression: false,
            ObjectPattern: false,
            VariableDeclaration: false,
            NewExpression: false,
          },
        },
      ],
      "vue/dot-location": [
        "error",
        "property",
      ],
      "vue/dot-notation": [
        "error",
        {
          allowKeywords: true,
        },
      ],
      "vue/eqeqeq": [
        "error",
        "always",
        {
          null: "ignore",
        },
      ],
      "vue/func-call-spacing": [
        "error",
        "never",
      ],
      "vue/key-spacing": [
        "error",
        {
          beforeColon: false,
          afterColon: true,
        },
      ],
      "vue/keyword-spacing": [
        "error",
        {
          before: true,
          after: true,
          overrides: {
            return: {
              after: true,
            },
            throw: {
              after: true,
            },
            case: {
              after: true,
            },
          },
        },
      ],
      "vue/no-constant-condition": "warn",
      "vue/no-empty-pattern": "error",
      "vue/no-extra-parens": [
        "off",
        "all",
        {
          conditionalAssign: true,
          nestedBinaryExpressions: false,
          returnAssign: false,
          ignoreJSX: "all",
          enforceForArrowConditionals: false,
        },
      ],
      "vue/no-loss-of-precision": "error",
      "vue/no-restricted-syntax": [
        "error",
        {
          selector: "ForInStatement",
          message: "for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.",
        },
        {
          selector: "ForOfStatement",
          message: "iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.",
        },
        {
          selector: "LabeledStatement",
          message: "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.",
        },
        {
          selector: "WithStatement",
          message: "`with` is disallowed in strict mode because it makes code impossible to predict and optimize.",
        },
      ],
      "vue/no-sparse-arrays": "error",
      "vue/no-useless-concat": "error",
      "vue/object-curly-newline": [
        "error",
        {
          ObjectExpression: {
            minProperties: 4,
            multiline: true,
            consistent: true,
          },
          ObjectPattern: {
            minProperties: 4,
            multiline: true,
            consistent: true,
          },
          ImportDeclaration: {
            minProperties: 4,
            multiline: true,
            consistent: true,
          },
          ExportDeclaration: {
            minProperties: 4,
            multiline: true,
            consistent: true,
          },
        },
      ],
      "vue/object-curly-spacing": [
        "error",
        "always",
      ],
      "vue/object-property-newline": [
        "error",
        {
          allowAllPropertiesOnSameLine: true,
        },
      ],
      "vue/object-shorthand": [
        "error",
        "always",
        {
          ignoreConstructors: false,
          avoidQuotes: true,
        },
      ],
      "vue/operator-linebreak": [
        "error",
        "before",
        {
          overrides: {
            "=": "none",
          },
        },
      ],
      "vue/prefer-template": "error",
      "vue/quote-props": [
        "error",
        "as-needed",
        {
          keywords: false,
          unnecessary: true,
          numbers: false,
        },
      ],
      "vue/space-in-parens": [
        "error",
        "never",
      ],
      "vue/space-infix-ops": "error",
      "vue/space-unary-ops": [
        "error",
        {
          words: true,
          nonwords: false,
          overrides: {},
        },
      ],
      "vue/template-curly-spacing": "error",
      "max-len": "off",
      "vue/max-len": [
        "error",
        100,
        2,
        {
          ignoreUrls: true,
          ignoreComments: false,
          ignoreRegExpLiterals: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
          ignoreHTMLAttributeValues: true,
          ignoreHTMLTextContents: false,
        },
      ],
      "no-irregular-whitespace": "off",
      "vue/no-irregular-whitespace": "error",
      "vue/html-indent": [
        "error",
        2,
        {
          attribute: 1,
          baseIndent: 1,
          closeBracket: 0,
          alignAttributesVertically: true,
        },
      ],
      "vue/max-attributes-per-line": [
        "error",
        {
          multiline: {
            max: 1,
          },
          singleline: {
            max: 9999,
          },
        },
      ],
      "vue/no-duplicate-attributes": [
        "error",
        {
          allowCoexistClass: true,
          allowCoexistStyle: true,
        },
      ],
      "vue/html-self-closing": [
        "error",
        {
          html: {
            void: "any",
          },
        },
      ],
      "vue/first-attribute-linebreak": [
        "error",
        {
          singleline: "ignore",
          multiline: "below",
        },
      ],
      "vue/no-spaces-around-equal-signs-in-attribute": "error",
      "vue/no-template-target-blank": [
        "error",
        {
          allowReferrer: true,
          enforceDynamicLinks: "always",
        },
      ],
      "vue/no-child-content": "error",
      "vue/html-closing-bracket-spacing": [
        "error",
        {
          startTag: "never",
          endTag: "never",
          selfClosingTag: "always",
        },
      ],
      "vue/html-button-has-type": [
        "error",
        {
          button: true,
          submit: true,
          reset: false,
        },
      ],
      "vue/no-multi-spaces": "error",
      "vuejs-accessibility/alt-text": [
        "error",
        {
          elements: [
            "img",
            "object",
            "area",
            "input[type=\"image\"]",
          ],
          img: [],
          object: [],
          area: [],
          "input[type=\"image\"]": [],
        },
      ],
      "vuejs-accessibility/anchor-has-content": [
        "error",
        {
          components: [],
          accessibleChildren: [],
          accessibleDirectives: [],
        },
      ],
      "vuejs-accessibility/aria-props": "error",
      "vuejs-accessibility/aria-role": [
        "error",
        {
          ignoreNonDOM: false,
        },
      ],
      "vuejs-accessibility/aria-unsupported-elements": "error",
      "vuejs-accessibility/click-events-have-key-events": "error",
      "vuejs-accessibility/form-control-has-label": "error",
      "vuejs-accessibility/heading-has-content": "error",
      "vuejs-accessibility/iframe-has-title": "error",
      "vuejs-accessibility/interactive-supports-focus": "error",
      "vuejs-accessibility/label-has-for": [
        "error",
        {
          required: {
            some: [
              "nesting",
              "id",
            ],
          },
        },
      ],
      "vuejs-accessibility/media-has-caption": "error",
      "vuejs-accessibility/mouse-events-have-key-events": "error",
      "vuejs-accessibility/no-access-key": "error",
      "vuejs-accessibility/no-autofocus": [
        "error",
        {
          ignoreNonDOM: true,
        },
      ],
      "vuejs-accessibility/no-distracting-elements": [
        "error",
        {
          elements: [
            "marquee",
            "blink",
          ],
        },
      ],
      "vuejs-accessibility/no-onchange": "off",
      "vuejs-accessibility/no-redundant-roles": "error",
      "vuejs-accessibility/role-has-required-aria-props": "error",
      "vuejs-accessibility/tabindex-no-positive": "error",
      "vue/require-default-prop": "error",
      "vue/no-potential-component-option-typo": "error",
    },
  },
};
