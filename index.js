module.exports = {
  "plugins": ["import", "jsx-a11y"],
  "extends": [
    "airbnb",
    "plugin:react/recommended",
    "prettier",
    "prettier/react",
    "plugin:jsx-a11y/recommended"
  ],
  "rules": {
    "no-plusplus":["error", {"allowForLoopAfterthoughts": true}], //Disalows ++ unless in for loops
    "consistent-return": 0, // This is dumb https://eslint.org/docs/rules/consistent-return
    "lines-between-class-members":  ["error", "always", {"exceptAfterSingleLine": true}],
    "react/require-default-props": 0, // Off
    "react/button-has-type": 0, // Limitation by eslint-plugin-react that doesnt take default props into account https://github.com/yannickcr/eslint-plugin-react/issues/1846
    "react/no-did-update-set-state": 0,
    "react/destructuring-assignment": 0,
    "jsx-a11y/no-static-element-interactions": 0, // Was running into issues with this rule where it would not let me have dynamic values for roles in Card.jsx. Ideally it would be up to the user of Card.jsx to determine the appropriate role so it was thus added an required proptype
    "no-extra-boolean-cast": 0,
    "no-param-reassign": 0,
    "jsx-a11y/label-has-for": ["error", {
      "required": {
        "some": ["nesting", "id"]
      }
    }],
    "jsx-a11y/label-has-associated-control": ["error", {
      "required": {
        "some": ["nesting", "id"]
      }
    }],
    "react/no-unused-prop-types": 0 // Doesn't work when props is destructured https://github.com/yannickcr/eslint-plugin-react/issues/1002
  },
  "parser": "babel-eslint"
}
