const { Marp } = require('@marp-team/marp-core')
const hljs = require('highlight.js')

// highlightjs-solidity for static web page is required a globally exposed `hljs` to
// extend highlight.js.
globalThis.hljs = hljs

// Run the script of `highlightjs-solidity` for static web page.
//
// `highlightjs-solidity` for Node.js is published as ESM only package, but it cannot
// import correctly because it has neither `.mjs` extension or `type: "module"`
// in its `package.json`.
require('highlightjs-solidity/dist/solidity.min.js')

// Create extended Marp class from an original Marp Core.
class MarpWithHighlightJSSolidity extends Marp {
  // Overload highlighter to use highlight.js with extended by highlightjs-solidity.
  highlighter(code, lang, _attrs) {
    if (lang && hljs.getLanguage(lang)) {
      return hljs.highlight(code, {
        language: lang,
        ignoreIllegals: true,
      }).value
    }
    return ''
  }
}

module.exports = MarpWithHighlightJSSolidity
