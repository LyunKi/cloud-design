module.exports = {
  '**/**/*.{js,jsx,ts,tsx}': ['eslint --fix'],
  '**/**/*.{css,less,scss}': ['stylelint --fix'],
  '**/**/*.{js,ts,jsx,tsx,json,md,gql,graphql}': ['prettier --write'],
}
