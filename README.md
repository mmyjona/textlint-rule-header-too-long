# textlint-rule-header-too-long



## Install

Install with [npm](https://www.npmjs.com/):

    npm install textlint-rule-header-too-long

## Usage

Via `.textlintrc`(Recommended)

```json
{
    "rules": {
        "header-too-long": true
    }
}
```

Via CLI

```
textlint --rule header-too-long README.md
```

### Build

Builds source codes for publish to the `lib` folder.
You can write ES2015+ source codes in `src/` folder.

    npm run build

### Tests

Run test code in `test` folder.
Test textlint rule by [textlint-tester](https://github.com/textlint/textlint-tester).

    npm test

## License

ISC © 
