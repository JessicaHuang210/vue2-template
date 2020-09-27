module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/recommended",
    "eslint:recommended", // 使用 ESLint 推薦規範
    "@vue/prettier" //使用 prettier
  ],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off"
  }
};
