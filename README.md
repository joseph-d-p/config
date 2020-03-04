# config 
Contains configurations for tech stack used.

[![StackShare](http://img.shields.io/badge/tech-stack-0690fa.svg?style=flat)](https://stackshare.io/joseph-d-p/personal-stack)

Setting React default editor
```bash
export REACT_EDITOR=vim
```

## [.vimrc](https://github.com/joseph-d-p/config/blob/master/.vimrc)

Configuration file for vim editor.

### Plugins:
- Vundle - https://github.com/VundleVim/Vundle.vim
- ALE - https://github.com/dense-analysis/ale
- TagList - http://vim-taglist.sourceforge.net

### Theme:
- Oceanic Next - https://github.com/mhartington/oceanic-next

## [.eslintrc.js](https://github.com/joseph-d-p/config/blob/master/.eslintrcjs)

Configuration file for eslint. Extends [eslint-config-react-native-community](https://www.npmjs.com/package/@react-native-community/eslint-config).

### Dev Dependencies for React:
- eslint-plugin-react: https://www.npmjs.com/package/eslint-plugin-react
- eslint-plugin-react-hooks: https://www.npmjs.com/package/eslint-plugin-react-hooks

## [.prettierrc](https://github.com/joseph-d-p/config/blob/master/.prettierrc)

Configuration file for prettier.

### Dev Dependencies for Prettier/React:
- eslint-config-prettier-react: https://www.npmjs.com/package/eslint-config-prettier-react

## [.mongorc.js](https://github.com/joseph-d-p/config/blob/master/.mongorc.js)

Configuration for MongoDB.

To make use of `vim` when modifying inside `mongo` shell.
```
export EDITOR=vim mongo
```
