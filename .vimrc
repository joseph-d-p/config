set nocompatible
set number
set expandtab
set tabstop=4
set shiftwidth=3
set nobackup
set noswapfile
set noundofile
set listchars=tab:>-,trail:~,extends:>,precedes:<
set list

filetype off

let g:ale_fixers = {
\   '*': ['remove_trailing_lines', 'trim_whitespace'],
\   'javascript': ['prettier', 'eslint'],
\}

let g:ale_fix_on_save = 1
let g:ale_completion_enabled = 1
let g:ale_sign_column_always = 1
let g:ale_open_list = 1
let g:ale_keep_list_window_open = 1
let g:ale_set_loclist = 1
let g:ale_set_quickfix = 0
let g:ale_sign_error = '>>'
let g:ale_sign_warning = '--'
let g:airline#extensions#ale#enabled = 1
set omnifunc=ale#completion#OmniFunc

set rtp+=~/.vim/bundle/Vundle.vim
call vundle#begin()

Plugin 'VundleVim/Vundle.vim'

Plugin 'tpope/vim-fugitive'
Plugin 'git://git.wincent.com/command-t.git'
Plugin 'rstacruz/sparkup', {'rtp': 'vim/'}
Plugin 'dense-analysis/ale'
Plugin 'mhartington/oceanic-next'
Plugin 'jparise/vim-graphql'
call vundle#end()            " required

syntax enable

colorscheme iceberg

filetype on    " required
set tags+=./tags,tags;

let g:tlist_javascript_settings = 'javascript;r:var;s:string;a:array;o:object;u:function,n:constant,C:const'
let Tlist_Use_Right_Window = 1
let Tlist_Auto_Open = 1
let Tlist_Auto_Update = 1
let Tlist_Auto_Highlight_Tag = 1
let Tlist_Inc_Winwidth = 0
let Tlist_WinWidth = 80
let Tlist_GainFocus_On_ToggleOpen= 0
let Tlist_Ctags_Cmd = '/usr/local/bin/ctags'
let Tlist_Show_One_File = 1
let Tlist_Process_File_Always = 1
let Tlist_Exit_OnlyWindow = 1
