module.exports = api => {
    api.cache(true);

    const presets = [
        [
            // https://babeljs.io/docs/en/babel-preset-react
            '@babel/react', {
                development: true,
                throwIfNamespace: true
            }
        ],
        [
            // https://babeljs.io/docs/en/babel-preset-env
            '@babel/env', {
                debug: process.env.DEBUG === 'true',
                targets: '> 5%, not ie 11, last 2 Safari versions and > .5%, last 2 Edge versions and > .5%',
                useBuiltIns: 'usage'
            }
        ]
    ];

    const plugins = [
        // Plugin list: https://babeljs.io/docs/en/plugins

        // Maintain react state when hot reload
        'react-hot-loader/babel',

        // https://babeljs.io/docs/en/next/babel-plugin-proposal-class-properties.html
        '@babel/plugin-proposal-class-properties',

        // https://babeljs.io/docs/en/babel-plugin-proposal-optional-chaining
        '@babel/plugin-proposal-optional-chaining',

        // https://www.styled-components.com/docs/tooling#usage
        [
            'babel-plugin-styled-components', {
                ssr: false,
                displayName: true,
                minify: false,
                pure: true,
                transpileTemplateLiterals: true
            }
        ],


        '@babel/plugin-transform-react-jsx-source' // Better stacks for error boundaries

        // Will I use?
        // https://babeljs.io/docs/en/babel-plugin-proposal-decorators
        // https://babeljs.io/docs/en/babel-plugin-proposal-do-expressions
        // https://babeljs.io/docs/en/babel-plugin-proposal-export-default-from
        // https://babeljs.io/docs/en/babel-plugin-proposal-export-namespace-from
        // https://babeljs.io/docs/en/babel-plugin-proposal-function-bind
        // https://babeljs.io/docs/en/babel-plugin-proposal-function-sent
        // https://babeljs.io/docs/en/babel-plugin-proposal-logical-assignment-operators
        // https://babeljs.io/docs/en/babel-plugin-proposal-nullish-coalescing-operator
        // https://babeljs.io/docs/en/babel-plugin-proposal-numeric-separator
        // https://babeljs.io/docs/en/babel-plugin-proposal-pipeline-operator
        // https://babeljs.io/docs/en/babel-plugin-proposal-private-methods
        // https://babeljs.io/docs/en/babel-plugin-proposal-throw-expressions
        // https://babeljs.io/docs/en/babel-plugin-syntax-dynamic-import
    ];

    return {
        presets,
        plugins
    };
};