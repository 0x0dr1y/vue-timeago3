// eslint-disable-next-line no-undef
module.exports = {
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: [
        "vue",
        '@typescript-eslint',
    ],
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-recommended',
        'plugin:@typescript-eslint/recommended',
        "prettier"
    ],
    globals: {
        defineEmits: 'readonly',
        defineProps: 'readonly',
        withDefaults: 'readonly',
    },
    rules: {
        // override/add rules settings here, such as:
        // 'vue/no-unused-vars': 'error'
    }
}