(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{285:function(_,v,e){"use strict";e.r(v);var a=e(14),t=Object(a.a)({},(function(){var _=this,v=_.$createElement,e=_._self._c||v;return e("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[e("h2",{attrs:{id:"_1-1-gnu-c-complier"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-gnu-c-complier"}},[_._v("#")]),_._v(" 1.1 GNU C Complier")]),_._v(" "),e("p",[_._v("gcc 头文件搜索路径：")]),_._v(" "),e("ol",[e("li",[_._v("当前目录")]),_._v(" "),e("li",[_._v("手动指定的目录")]),_._v(" "),e("li",[_._v("gcc 环境变量设置 CPATH,C_INCLUDE_PATH,CPLUS_INCLUDE_PATH,OBJC_INCLUDE_PATH")]),_._v(" "),e("li",[_._v("系统标准 include 路径")])]),_._v(" "),e("p",[_._v("gcc/g++指令选项\t功 能")]),_._v(" "),e("ul",[e("li",[e("code",[_._v("-E")]),_._v("（大写）\t预处理指定的源文件，不进行编译。")]),_._v(" "),e("li",[e("code",[_._v("-S")]),_._v("（大写）\t编译指定的源文件，但是不进行汇编。")]),_._v(" "),e("li",[e("code",[_._v("-c")]),_._v("\t编译、汇编指定的源文件，但是不进行链接。")]),_._v(" "),e("li",[e("code",[_._v("-o")]),_._v("\t指定生成文件的文件名。")]),_._v(" "),e("li",[e("code",[_._v("-llibrary")]),_._v("\t其中 library 表示要搜索的库文件的名称。该选项用于手动指定链接环节中程序可以调用的库文件。建议 -l 和库文件名之间不使用空格，比如 -lstdc++。")]),_._v(" "),e("li",[e("code",[_._v("-print-search-dirs")]),_._v(" 查看 gcc 默认搜索路径。")])]),_._v(" "),e("p",[_._v("注意，使用-l选项指明静态库的名字时，既不需要lib前缀，也不需要.a后缀，只能写 test，GCC 会自动加上前缀和后缀。")]),_._v(" "),e("ul",[e("li",[e("code",[_._v("-L <path>")]),_._v(" 指定库路径。")]),_._v(" "),e("li",[e("code",[_._v("-I <path>")]),_._v(" 指定头文件路径。")]),_._v(" "),e("li",[e("code",[_._v("-ansi")]),_._v("\t对于 C 语言程序来说，其等价于 -std=c90；对于 C++ 程序来说，其等价于 -std=c++98。")]),_._v(" "),e("li",[e("code",[_._v("-std=")]),_._v("\t手动指令编程语言所遵循的标准，例如 c89、c99、c++98、c++11 等。")]),_._v(" "),e("li",[e("code",[_._v("-D")]),_._v(" 处理源文件前定义一个宏。")]),_._v(" "),e("li",[e("code",[_._v("-U")]),_._v(" 取消宏定义。")]),_._v(" "),e("li",[e("code",[_._v("-g")]),_._v(" 生成可调式文件。")]),_._v(" "),e("li",[e("code",[_._v("-O2")]),_._v(" 比 "),e("code",[_._v("-O")]),_._v(" 更好的优化编译。")]),_._v(" "),e("li",[e("code",[_._v("-MM")]),_._v(" 查看文件的依赖（非标准库）")]),_._v(" "),e("li",[e("code",[_._v("Wall")]),_._v(" 打开所有警告。")]),_._v(" "),e("li",[e("code",[_._v("Wextra")]),_._v(" 启用一些未由-Wall启用的额外警告标志。")]),_._v(" "),e("li",[e("code",[_._v("Wvla")]),_._v(" 警告动态数组的使用。")]),_._v(" "),e("li",[e("code",[_._v("Werror")]),_._v(" 把所有的警告当作错误处理。")]),_._v(" "),e("li",[e("code",[_._v("static")]),_._v(" 强制使用同名静态库，并且链接到的所有库都用静态编译。谨慎使用。")]),_._v(" "),e("li",[e("code",[_._v("-pedantic")]),_._v(" 以ANSI/ISO C标准列出的所有警告，使用了扩展语法的地方将会产生警告。")]),_._v(" "),e("li",[e("code",[_._v("-ansi")])]),_._v(" "),e("li",[e("code",[_._v("-nostdlib")]),_._v(" 编译时不使用标准 C 库。")]),_._v(" "),e("li",[e("code",[_._v("-Ttext 0")]),_._v(" 指定 0 地址。")]),_._v(" "),e("li",[e("code",[_._v("-Iinclude -E hello.c")]),_._v(" 查看预处理结果")]),_._v(" "),e("li",[e("code",[_._v("-march=native")]),_._v(" 允许编译器使用 cpu 完整的特性集，生成当前机器架构的最优指令，但是影响可执行文件的移植性。")])]),_._v(" "),e("p",[_._v("//查看预处理的结果，比如头文件是哪个")]),_._v(" "),e("p",[_._v("gcc -Iinclude -E Hello.c")]),_._v(" "),e("p",[_._v("gcc -E -dM Hello.c > test.txt")]),_._v(" "),e("p",[e("code",[_._v("objdump -D")]),_._v(" 反汇编。")]),_._v(" "),e("p",[_._v("链接指定的库：")]),_._v(" "),e("p",[e("code",[_._v("-l:libxxx.a")]),_._v(" 或 "),e("code",[_._v("-l:libxxx.so.xxx")])]),_._v(" "),e("h2",{attrs:{id:"_1-2-动态链接库和静态链接库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-动态链接库和静态链接库"}},[_._v("#")]),_._v(" 1.2 动态链接库和静态链接库")]),_._v(" "),e("h3",{attrs:{id:"_1-2-1-创建静态链接库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-1-创建静态链接库"}},[_._v("#")]),_._v(" 1.2.1 创建静态链接库")]),_._v(" "),e("p",[e("code",[_._v("ar rcs + 静态库文件的名字 + 目标文件列表")])]),_._v(" "),e("p",[_._v("如"),e("code",[_._v("ar rcs libtest.a *.o")])]),_._v(" "),e("p",[_._v("ar 是 Linux 的一个备份压缩命令，它可以将多个文件打包成一个备份文件（也叫归档文件），也可以从备份文件中提取成员文件。ar 命令最常见的用法是将目标文件打包为静态链接库。")]),_._v(" "),e("p",[_._v("对参数的说明：")]),_._v(" "),e("ul",[e("li",[_._v("参数 "),e("code",[_._v("r")]),_._v(" 用来替换库中已有的目标文件，或者加入新的目标文件。")]),_._v(" "),e("li",[_._v("参数 "),e("code",[_._v("c")]),_._v(" 表示创建一个库。不管库否存在，都将创建。")]),_._v(" "),e("li",[_._v("参数 "),e("code",[_._v("s")]),_._v(" 用来创建目标文件索引，这在创建较大的库时能提高速度。")]),_._v(" "),e("li",[_._v("参数 "),e("code",[_._v("v")]),_._v(" 用")]),_._v(" "),e("li",[e("code",[_._v("d")]),_._v(" 从归档文件中删除")]),_._v(" "),e("li",[e("code",[_._v("t")]),_._v(" 查看归档文件的内容")]),_._v(" "),e("li",[e("code",[_._v("x")]),_._v(" 解压归档文件")]),_._v(" "),e("li",[e("code",[_._v("a/b")]),_._v(" 向归档文件中添加内容")]),_._v(" "),e("li",[e("code",[_._v("v")]),_._v(" 显示详细信息")])]),_._v(" "),e("p",[e("code",[_._v("ar rcsv libxxx.a *.o")])]),_._v(" "),e("h3",{attrs:{id:"_1-2-2-创建动态链接库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-2-创建动态链接库"}},[_._v("#")]),_._v(" 1.2.2 创建动态链接库")]),_._v(" "),e("p",[e("code",[_._v("gcc 源文件(*.c) -c -fpic -Wall")])]),_._v(" "),e("p",[e("code",[_._v("gcc -shared 与位置无关的目标文件(*.o) -o 动态库(libxxx.so)")])]),_._v(" "),e("p",[e("code",[_._v("-fPIC")]),_._v(" 是创建与地址无关的编译程序（pic，position independent code），是为了能够在多个应用程序间共享。"),e("code",[_._v("-shared")]),_._v(" 指定生成动态链接库。")]),_._v(" "),e("p",[_._v("态库必须拷贝放在/usr/lib目录或/lib目录中，才可以使用。如果不想拷贝的话，可以在之前系统lib目录下生成一个动态库的软链接。")]),_._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[_._v("# 发布\n \t1. 提供头文件: xxx.h\n \t2. 提供动态库: libxxx.so\n")])]),_._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[_._v("1")]),e("br"),e("span",{staticClass:"line-number"},[_._v("2")]),e("br"),e("span",{staticClass:"line-number"},[_._v("3")]),e("br")])]),e("p",[_._v("动态库如果安装在/lib或者/usr/lib下，那么 ld 默认能够找到")]),_._v(" "),e("p",[_._v("或者将文件路径保存到 "),e("code",[_._v("/etc/ld.so.conf")]),_._v(" 中。执行 "),e("code",[_._v("ldconfig")]),_._v(" 命令，将 "),e("code",[_._v("/etc/ld.so.conf")]),_._v(" 中保存的库路径写入 "),e("code",[_._v("/etc/ld.so.cache")]),_._v("。")]),_._v(" "),e("p",[e("code",[_._v("LD_LIBRARY_PATH")]),_._v(" 环境变量保存库路径。")]),_._v(" "),e("p",[_._v("可以使用 "),e("code",[_._v("export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/自己的目录")]),_._v(" 重新给链接库环境变量赋值。")]),_._v(" "),e("p",[_._v("ld.so 接口。")]),_._v(" "),e("p",[_._v("静态库和动态库的载入时间是不一样的。")]),_._v(" "),e("p",[_._v("静态库的代码在编译的过程中已经载入到可执行文件中，所以最后生成的可执行文件相对较大。")]),_._v(" "),e("p",[_._v("动态库的代码在可执行程序运行时才载入内存，在编译过程中仅简单的引用，所以最后生成的可执行文件相对较小。")]),_._v(" "),e("p",[_._v("静态库和动态库的最大区别是，静态库链接的时候把库直接加载到程序中,而动态库链接的时候，它只是保留接口，将动态库与程序代码独立，这样就可以提高代码的可复用度和降低程序的耦合度。")]),_._v(" "),e("h2",{attrs:{id:"_1-3-gnu-symbolic-debugger"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-gnu-symbolic-debugger"}},[_._v("#")]),_._v(" 1.3 GNU  Symbolic Debugger")]),_._v(" "),e("p",[_._v("TODO: 多线程调试。")]),_._v(" "),e("p",[_._v("GDB调试主要有三种方式：")]),_._v(" "),e("p",[_._v("直接调试目标程序："),e("code",[_._v("gdb ./hello_server")])]),_._v(" "),e("p",[_._v("附加进程id："),e("code",[_._v("gdb attach pid")])]),_._v(" "),e("p",[_._v("如果你的程序是一个服务程序，那么你可以指定这个服务程序运行时的进程ID。gdb会自动attach上去，并调试他，如果GDB attach某个进程，退出GDB之前要用命令 detach 解除附加进程。")]),_._v(" "),e("p",[_._v("调试core文件："),e("code",[_._v("gdb filename corename")])]),_._v(" "),e("p",[_._v("用gdb同时调试一个运行程序和core文件，core是程序非法执行后core dump后产生的文件。")]),_._v(" "),e("p",[e("code",[_._v("--core=COREFILE")]),_._v(" 调试时core dump的core文件。")]),_._v(" "),e("p",[_._v("gdb 内命令：")]),_._v(" "),e("p",[e("code",[_._v("list")]),_._v(" 列出源文件，回车继续列出。")]),_._v(" "),e("p",[e("code",[_._v("break num")]),_._v(" 在 num 行处设置断点。")]),_._v(" "),e("p",[e("code",[_._v("break funcname")]),_._v(" 在函数入口处设置断点。")]),_._v(" "),e("p",[e("code",[_._v("break filename:funcname")])]),_._v(" "),e("p",[e("code",[_._v("info break")]),_._v(" 查看断点信息。")]),_._v(" "),e("p",[e("code",[_._v("run")]),_._v(" 运行程序。")]),_._v(" "),e("p",[e("code",[_._v("next")]),_._v(" 单条语句执行")]),_._v(" "),e("p",[e("code",[_._v("continue")]),_._v(" 继续运行程序直到下一个断点。")]),_._v(" "),e("p",[e("code",[_._v("print")]),_._v(" 查看变量当前的值。")]),_._v(" "),e("p",[e("code",[_._v("print param=value")]),_._v("，用于在调试过程中修改变量的值；")]),_._v(" "),e("p",[e("code",[_._v("print func()")]),_._v("，输出func函数执行的结果，常见的用途是打印系统函数执行失败原因：print strerror(errno)；")]),_._v(" "),e("p",[e("code",[_._v("ptype val")]),_._v(" 打印变量类型。print type")]),_._v(" "),e("p",[e("code",[_._v("step")]),_._v(" step in，如果有函数调用，他会进入该函数。")]),_._v(" "),e("p",[e("code",[_._v("next")]),_._v(" step out，不会进入函数调用。")]),_._v(" "),e("p",[e("code",[_._v("bt")]),_._v(" backtrace 查看函数堆栈。")]),_._v(" "),e("p",[e("code",[_._v("f n")]),_._v(" frame 切换堆栈。")]),_._v(" "),e("p",[e("code",[_._v("return val")]),_._v(" 命令是立即退出当前函数，剩下的代码不会执行了，return 还可以指定函数的返回值")]),_._v(" "),e("p",[e("code",[_._v("finish")]),_._v(" 运行程序，直到当前函数完成返回。并打印函数返回时的堆栈地址和返回值及参数值等信息。")]),_._v(" "),e("p",[e("code",[_._v("watch expr")]),_._v(" 设置观察点，"),e("code",[_._v("expr")]),_._v(" 值变化时停住程序。"),e("code",[_._v("awatch expr")]),_._v(" 当值被读或被写的时候停住程序。")]),_._v(" "),e("p",[e("code",[_._v("watch *指针变量")]),_._v("，监视的是指针所指的内容；")]),_._v(" "),e("p",[e("code",[_._v("clear")]),_._v(" 清除所有停止点。"),e("code",[_._v("clear num")]),_._v(" 清除指定行的停止点，"),e("code",[_._v("clear filenam:linenum")]),_._v(" 清除指定文件指定行的停止点。")]),_._v(" "),e("p",[e("code",[_._v("disable [breakpoints] [range...]")]),_._v(" 暂停所指定的停止点。")]),_._v(" "),e("p",[e("code",[_._v("enable [breadpoints] [range...]")]),_._v(" 使能所有停止点。")]),_._v(" "),e("p",[e("code",[_._v("quit")]),_._v(" 退出")]),_._v(" "),e("h2",{attrs:{id:"_1-4-包管理工具-apt-和-dpkg"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-包管理工具-apt-和-dpkg"}},[_._v("#")]),_._v(" 1.4 包管理工具 apt 和 dpkg")]),_._v(" "),e("h3",{attrs:{id:"_1-4-1-软件源配置文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-1-软件源配置文件"}},[_._v("#")]),_._v(" 1.4.1 软件源配置文件")]),_._v(" "),e("p",[e("code",[_._v("/etc/apt/sources.list")])]),_._v(" "),e("p",[_._v("软件源是指互联网中的众多服务器，这些服务器上存放了大量的软件包，可用于用户主机的更新和升级。")]),_._v(" "),e("h3",{attrs:{id:"_1-4-2-apt-get"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-2-apt-get"}},[_._v("#")]),_._v(" 1.4.2 apt-get")]),_._v(" "),e("p",[e("code",[_._v("apt-get")]),_._v(" 用于管理软件包，包括安装、卸载、升级等。")]),_._v(" "),e("ul",[e("li",[e("code",[_._v("update")]),_._v(" 刷新软件源，下载更新软件包列表信息。")]),_._v(" "),e("li",[e("code",[_._v("upgrade")]),_._v(" 将系统中所有软件包升级到最新版本。")]),_._v(" "),e("li",[e("code",[_._v("install")]),_._v(" 下载所需软件包并进行安装配置。")]),_._v(" "),e("li",[e("code",[_._v("remove")]),_._v(" 卸载软件包。")]),_._v(" "),e("li",[e("code",[_._v("autoremove")]),_._v(" 将不满足依赖关系的软件包自动卸载。")]),_._v(" "),e("li",[e("code",[_._v("source")]),_._v(" 下载源码包。")]),_._v(" "),e("li",[e("code",[_._v("clean")]),_._v(" 删除缓存区中所有已下载的包文件。")]),_._v(" "),e("li",[e("code",[_._v("autoclean")]),_._v(" 删除缓存区中老版本的已下载的包文件。")]),_._v(" "),e("li",[e("code",[_._v("check")]),_._v(" 检查系统中依赖关系的完整性。")]),_._v(" "),e("li",[e("code",[_._v("--purge")]),_._v(" 与 "),e("code",[_._v("remove")]),_._v(" 一起使用，完全卸载软件包，同时删除该软件包所使用的配置文件。")]),_._v(" "),e("li",[e("code",[_._v("-s")]),_._v(" 不做实际操作，只是模拟命令执行结果。")]),_._v(" "),e("li",[e("code",[_._v("-f")]),_._v(" 修复系统中存在的软件包依赖性问题。")])]),_._v(" "),e("p",[e("code",[_._v("apt-get check")]),_._v(" "),e("code",[_._v("apt-get -f install")]),_._v(" 通常作为组合命令使用，前者用于检查软件包依赖关系，后者用于修复依赖关系。")]),_._v(" "),e("p",[_._v("经常使用 "),e("code",[_._v("apt-get update")]),_._v(" 刷新软件源可保持软件源最新。该命令会为服务器具有的软件包资源j")]),_._v(" "),e("p",[_._v("查询安装包大小："),e("code",[_._v('apt-cache show <package> | grep "Size"')])]),_._v(" "),e("h3",{attrs:{id:"_1-4-3-dpkg"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-3-dpkg"}},[_._v("#")]),_._v(" 1.4.3 dpkg")]),_._v(" "),e("p",[e("code",[_._v("dpkg -r <package>")]),_._v(" 移除一个已安装的软件包。")]),_._v(" "),e("p",[e("code",[_._v("dpkg -i <package>")]),_._v(" 离线安装。")]),_._v(" "),e("p",[e("code",[_._v("dpkg -p <package>")]),_._v(" 移除已安装软件包以及配置文件。")]),_._v(" "),e("p",[e("code",[_._v("dpkg -L <package>")]),_._v(" 列出安装的软件包清单。")]),_._v(" "),e("p",[e("code",[_._v("dpkg-reconfigure <package>")]),_._v(" 重新配置一个已安装的软件包。")]),_._v(" "),e("h2",{attrs:{id:"_1-5-输入输出重定向"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-输入输出重定向"}},[_._v("#")]),_._v(" 1.5 输入输出重定向")]),_._v(" "),e("p",[_._v("标准输入 0，默认是键盘，标准输出 1，默认是终端，标准错误输出 2，默认是终端。")]),_._v(" "),e("p",[e("code",[_._v("command < file")]),_._v(" 将 "),e("code",[_._v("file")]),_._v(" 重定向为输入源。")]),_._v(" "),e("p",[e("code",[_._v("command > file")]),_._v(" 将 "),e("code",[_._v("file")]),_._v(" 重定向为输出源。")]),_._v(" "),e("p",[e("code",[_._v("command >> file")]),_._v(" ，将 "),e("code",[_._v("file")]),_._v(" 重定向为输出源，追加模式。")]),_._v(" "),e("p",[e("code",[_._v("command 2> file")]),_._v(" 将 "),e("code",[_._v("file")]),_._v(" 重定向为标准错误源。")]),_._v(" "),e("p",[e("code",[_._v("command 2>> file")]),_._v(" 将 "),e("code",[_._v("file")]),_._v(" 重定向为标准错误源，追加模式。")]),_._v(" "),e("p",[e("code",[_._v("command &>> file")]),_._v(" 将 "),e("code",[_._v("file")]),_._v(" 重定向为标准输出源和标准错误源，等同于 "),e("code",[_._v(">>&")]),_._v(" ，标准输出与标准错误输出全部重定向。")]),_._v(" "),e("p",[e("code",[_._v("command >> file1 2>> file2")]),_._v(" 将 "),e("code",[_._v("file1")]),_._v(" 重定向为标准标准输出源，将 "),e("code",[_._v("file2")]),_._v(" 重定向为标准错误。")]),_._v(" "),e("p",[e("code",[_._v("command > file1 2>&1")]),_._v(" 将标准错误输出转成标准输出。")]),_._v(" "),e("p",[e("code",[_._v("&> /dev/null")]),_._v(" 重定向到 "),e("code",[_._v("null")]),_._v("。")]),_._v(" "),e("p",[_._v("输入输出重定向就是取代了键盘屏幕,能够接受键盘输入的都可以用重定向改为文件输入,能够输出到屏幕的,都可以通过重定向保存到文件。")]),_._v(" "),e("p",[_._v("而管道符可以把标准输出转标准输入,以让可以接受标准输入的命令可以以此为输入执行命令,所以说,重定向也可以做到同样的事情,但一般来说不会这么做,就像cat,默认以文件名为参数,没有文件名才从标准输入读。")]),_._v(" "),e("p",[_._v("定向的作用对象只能是文件。")]),_._v(" "),e("h2",{attrs:{id:"_1-6-常用命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-常用命令"}},[_._v("#")]),_._v(" 1.6 常用命令")]),_._v(" "),e("p",[_._v("ls,cd,mv,cp,rm,mkdir,echo,date,pwd,clear,who,man,shutdown,passwd,su,top,pstree")]),_._v(" "),e("h3",{attrs:{id:"_1-6-1-cat"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-1-cat"}},[_._v("#")]),_._v(" 1.6.1 cat")]),_._v(" "),e("p",[e("code",[_._v("cat")]),_._v(" 等待输入，按"),e("code",[_._v("<enter>")]),_._v(" 键后输出到标准输出。")]),_._v(" "),e("p",[e("code",[_._v("cat < file")]),_._v(" 将file 的内容输出到标准输出。（默认是终端）")]),_._v(" "),e("p",[e("code",[_._v("cat > file")]),_._v(" 将输入的内容重定向到 file 中。")]),_._v(" "),e("h3",{attrs:{id:"_1-6-2-less"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-2-less"}},[_._v("#")]),_._v(" 1.6.2 less")]),_._v(" "),e("p",[_._v("是一个分页显示工具。")]),_._v(" "),e("p",[e("code",[_._v("less")]),_._v(" 命令主要用于打开大文件，"),e("code",[_._v("less")]),_._v(" 不会读取整个文件，相比于 vim 或 nano 等文本编辑器，加载时间会更快。")]),_._v(" "),e("p",[e("code",[_._v("C-f")]),_._v(" 翻页，"),e("code",[_._v("C-b")]),_._v(" 翻页。")]),_._v(" "),e("p",[e("code",[_._v("-N")]),_._v(" 打印行号。")]),_._v(" "),e("p",[e("code",[_._v("-m")]),_._v(" 显示百分比。")]),_._v(" "),e("p",[e("code",[_._v("/<pattern>")]),_._v(" 搜索 "),e("code",[_._v("<pattern>")]),_._v("，操作使用 "),e("code",[_._v("vi")]),_._v(" 模式。"),e("code",[_._v("n")]),_._v("、"),e("code",[_._v("N")]),_._v("、"),e("code",[_._v("?")]),_._v(" 。")]),_._v(" "),e("p",[e("code",[_._v("pa -aux | less")])]),_._v(" "),e("h3",{attrs:{id:"_1-6-3-wahtis"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-3-wahtis"}},[_._v("#")]),_._v(" 1.6.3 wahtis")]),_._v(" "),e("p",[_._v("等同于 "),e("code",[_._v("man -f")]),_._v(" 。显示来自手册页的加简短说明(若有)。")]),_._v(" "),e("h3",{attrs:{id:"_1-6-4-mount"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-4-mount"}},[_._v("#")]),_._v(" 1.6.4 mount")]),_._v(" "),e("p",[_._v("临时挂载分区")]),_._v(" "),e("h3",{attrs:{id:"_1-6-5-umount"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-5-umount"}},[_._v("#")]),_._v(" 1.6.5 umount")]),_._v(" "),e("p",[_._v("卸载一个文件系统，就是从系统目录结构中，移去该指定的文件系统，卸载后的文件系统不能被用户使用。")]),_._v(" "),e("h3",{attrs:{id:"_1-6-6-find"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-6-find"}},[_._v("#")]),_._v(" 1.6.6 find")]),_._v(" "),e("h3",{attrs:{id:"_1-6-7-du"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-7-du"}},[_._v("#")]),_._v(" 1.6.7 du")]),_._v(" "),e("p",[_._v("报告磁盘空间使用情况。")]),_._v(" "),e("p",[e("code",[_._v("-h")]),_._v(" 以最常见的格式显示出大小。")]),_._v(" "),e("p",[e("code",[_._v("-T")]),_._v(" 显示文件类型。")]),_._v(" "),e("h3",{attrs:{id:"_1-6-8-df"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-8-df"}},[_._v("#")]),_._v(" 1.6.8 df")]),_._v(" "),e("p",[_._v("报告文件系统磁盘空间的使用情况。")]),_._v(" "),e("p",[e("code",[_._v("-T")]),_._v(" 输出文件类型。")]),_._v(" "),e("p",[e("code",[_._v("-h")]),_._v(" 以最常见的格式显示出大小。")]),_._v(" "),e("h3",{attrs:{id:"_1-6-9-grep"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-9-grep"}},[_._v("#")]),_._v(" 1.6.9 grep")]),_._v(" "),e("p",[e("code",[_._v("-n")]),_._v(" 显示行号。")]),_._v(" "),e("p",[e("code",[_._v("-v")]),_._v(" 改变匹配的意义，不显示匹配的行。通常配合使用：")]),_._v(" "),e("p",[e("code",[_._v('pa -aux | grep -n xxx | grep -v "grep"')])]),_._v(" "),e("h3",{attrs:{id:"_1-6-10-file"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-10-file"}},[_._v("#")]),_._v(" 1.6.10 file")]),_._v(" "),e("p",[_._v("查看文件类型。")]),_._v(" "),e("h3",{attrs:{id:"_1-6-11-time"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-11-time"}},[_._v("#")]),_._v(" 1.6.11 time")]),_._v(" "),e("p",[_._v("多次执行一个脚本。")]),_._v(" "),e("p",[e("code",[_._v("time <可执行文件> [次数]")])]),_._v(" "),e("p",[_._v("输出每次重复操作(iteration)所需时间的平均值，以微秒为单位。测量时间使用流(elapsed)时间，而不是 CPU 时间。")]),_._v(" "),e("h3",{attrs:{id:"_1-6-12-ls"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-12-ls"}},[_._v("#")]),_._v(" 1.6.12 ls")]),_._v(" "),e("p",[_._v("列出目录内容。")]),_._v(" "),e("p",[e("code",[_._v("-F")]),_._v(" 目录显示 "),e("code",[_._v("/")]),_._v(" 后缀。")]),_._v(" "),e("p",[e("code",[_._v("-l")]),_._v(" 显示文件详细信息")]),_._v(" "),e("p",[e("code",[_._v("-a")]),_._v(" 显示所有隐藏文件")]),_._v(" "),e("p",[e("code",[_._v("R")]),_._v(" 递归显示子目录所有内容。")]),_._v(" "),e("p",[e("code",[_._v("i")]),_._v(" 显示 "),e("code",[_._v("inode")]),_._v("。")]),_._v(" "),e("p",[e("code",[_._v("-h")]),_._v(" 以最常见的格式显示出大小。")]),_._v(" "),e("p",[e("code",[_._v("-d")]),_._v(" 查看目录自己的内容，而不是目录下的内容。")]),_._v(" "),e("p",[e("code",[_._v("ls -alrF")]),_._v("。")]),_._v(" "),e("h3",{attrs:{id:"_1-6-13-tar"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-13-tar"}},[_._v("#")]),_._v(" 1.6.13 tar")]),_._v(" "),e("p",[_._v("7z 和 zip 压缩格式都不能保留 unix 风格的文件权限，比如解压出个可执行文件要重新 chmod chown 才能恢复正常。而 tar 格式可以。而 tar 本身不提供压缩，无非就是把包括所有文件的內容和权限拼成一个文件而己，所以用另外如 gzip 格式压缩。")]),_._v(" "),e("p",[_._v("存储或提取 tar 文件的程序。")]),_._v(" "),e("p",[e("code",[_._v("-f")]),_._v(" 指定存档或设备中的文件。")]),_._v(" "),e("p",[e("code",[_._v("-z")]),_._v(" 用 "),e("code",[_._v("gzip")]),_._v(" 处理文档。")]),_._v(" "),e("p",[e("code",[_._v("-x")]),_._v(" 从文档提取文件。")]),_._v(" "),e("p",[e("code",[_._v("-c")]),_._v(" 创建一个新的文档。")]),_._v(" "),e("p",[e("code",[_._v("-v")]),_._v(" 显示文件处理过程。")]),_._v(" "),e("p",[e("code",[_._v("tar -xzvf")]),_._v(" 解压 "),e("code",[_._v("tar.gz")]),_._v(" 文件。")]),_._v(" "),e("p",[e("code",[_._v("tar -czvf")]),_._v(" 压缩为 "),e("code",[_._v("tar.gz")]),_._v(" 文件。")]),_._v(" "),e("p",[_._v("xz 压缩效果最好，多线程压缩最快。")]),_._v(" "),e("p",[e("code",[_._v("tar -cvf <压缩目标> | xz -T 0 -c > <压缩包名>.tar.xz")]),_._v(" 或 "),e("code",[_._v('tar -I "xz -T0" -cvf <压缩包名>.tar.xz <压缩目标>')])]),_._v(" "),e("h3",{attrs:{id:"_1-6-14-chmod"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-14-chmod"}},[_._v("#")]),_._v(" 1.6.14 chmod")]),_._v(" "),e("p",[_._v("改变文件或目录的访问权限。")]),_._v(" "),e("h3",{attrs:{id:"_1-6-15-chgrp"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-15-chgrp"}},[_._v("#")]),_._v(" 1.6.15 chgrp")]),_._v(" "),e("p",[_._v("改变文件或目录所属的组。")]),_._v(" "),e("h3",{attrs:{id:"_1-6-16-ln"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-16-ln"}},[_._v("#")]),_._v(" 1.6.16 ln")]),_._v(" "),e("p",[_._v("在文件之间建立连接。")]),_._v(" "),e("p",[_._v("默认建立硬链接。")]),_._v(" "),e("p",[e("code",[_._v("-s")]),_._v(" 建立软链接。")]),_._v(" "),e("p",[_._v("Linux 下的文件是通过索引节点（Inode）来识别文件，在 Linux 的文件系统中，保存在磁盘分区中的文件不管是什么类型都给它分配一个编号，称为索引节点号 (Inode Number)。")]),_._v(" "),e("p",[_._v("在 Linux 中，多个文件名指向同一索引节点是存在的，所以硬连接指通过索引节点来进行的连接，即每一个硬链接都是一个指向对应区域的文件。")]),_._v(" "),e("p",[_._v("文件系统会维护一个引用计数，只要有文件指向这个区块，它就不会从硬盘上消失。")]),_._v(" "),e("p",[_._v("不能对目录创建硬链接。")]),_._v(" "),e("p",[e("strong",[_._v("硬链接的作用是允许一个文件拥有多个有效路径名")]),_._v("，这样用户就可以建立硬链接到重要文件,有防止“误删”的功能。")]),_._v(" "),e("p",[_._v("只删除一个连接并不影响索引节点本身和其它的连接，只有当最后一个链接被删除后，文件的数据块及目录的连接才会被释放，也就是说，文件才会被真正删除。")]),_._v(" "),e("p",[e("strong",[_._v("软链接和源文件是两个不同的文件")]),_._v("，支持跨文件系统建立。")]),_._v(" "),e("h3",{attrs:{id:"_1-6-17-whereis"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-17-whereis"}},[_._v("#")]),_._v(" 1.6.17 whereis")]),_._v(" "),e("p",[_._v("查命令、源文件和man文件。")]),_._v(" "),e("p",[_._v("locate the binary, source, and manual page files for a command。")]),_._v(" "),e("p",[e("code",[_._v("-b")]),_._v(" 只搜索二进制。")]),_._v(" "),e("h3",{attrs:{id:"_1-6-18-mkdir"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-18-mkdir"}},[_._v("#")]),_._v(" 1.6.18 mkdir")]),_._v(" "),e("p",[e("code",[_._v("-p")]),_._v(" 嵌套创建子目录。")]),_._v(" "),e("h3",{attrs:{id:"_1-6-19-ps"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-19-ps"}},[_._v("#")]),_._v(" 1.6.19 ps")]),_._v(" "),e("p",[_._v("列出当前进程。")]),_._v(" "),e("p",[e("code",[_._v("-l")]),_._v(" 查看当前终端的进程")]),_._v(" "),e("p",[e("code",[_._v("-ef")]),_._v(" 以标准语法查看进程。")]),_._v(" "),e("p",[e("code",[_._v("-aux")]),_._v(" 使用 BSD 语法查看进程。")]),_._v(" "),e("p",[e("code",[_._v("-le")])]),_._v(" "),e("p",[e("code",[_._v("-axj")]),_._v(" 查看所有守护进程")]),_._v(" "),e("p",[e("code",[_._v("-efj")]),_._v(" 查看所有守护进程")]),_._v(" "),e("p",[_._v("其中：")]),_._v(" "),e("ul",[e("li",[e("code",[_._v("USER")]),_._v(" 进程的启动者")]),_._v(" "),e("li",[e("code",[_._v("PID")]),_._v(" 进程 ID")]),_._v(" "),e("li",[e("code",[_._v("%CPU")]),_._v(" CPU 占用百分比")]),_._v(" "),e("li",[e("code",[_._v("%MEM")]),_._v(" 内存占用百分比")]),_._v(" "),e("li",[e("code",[_._v("VSZ")]),_._v(" 占用虚拟内存（swap空间）的大小")]),_._v(" "),e("li",[e("code",[_._v("RSS")]),_._v(" 占用常驻内存（物理内存）的大小")]),_._v(" "),e("li",[e("code",[_._v("TTY")]),_._v(" teel to you，终端，? 表示不需要终端或未知终端")]),_._v(" "),e("li",[e("code",[_._v("STAT")]),_._v(" 进程状态：\n"),e("ul",[e("li",[e("code",[_._v("D")]),_._v(" 无法中断的休眠状态")]),_._v(" "),e("li",[e("code",[_._v("S")]),_._v(" 休眠 sleep")]),_._v(" "),e("li",[e("code",[_._v("R")]),_._v(" 运行")]),_._v(" "),e("li",[e("code",[_._v("Z")]),_._v(" zombie ，僵死")]),_._v(" "),e("li",[e("code",[_._v("<")]),_._v(" 高优先级")]),_._v(" "),e("li",[e("code",[_._v("N")]),_._v(" 低优先级")]),_._v(" "),e("li",[e("code",[_._v("s")]),_._v(" 父进程")]),_._v(" "),e("li",[e("code",[_._v("+")]),_._v(" 前台进程")]),_._v(" "),e("li",[e("code",[_._v("X")]),_._v(" 死掉的进程")]),_._v(" "),e("li",[e("code",[_._v("L")]),_._v(" 有些页被缩进内存")]),_._v(" "),e("li",[e("code",[_._v("l")]),_._v(" 多线程，克隆线程。")]),_._v(" "),e("li",[e("code",[_._v("T")]),_._v(" 停止或被追踪。")])])]),_._v(" "),e("li",[e("code",[_._v("START")]),_._v(" 启动改进程的时间")]),_._v(" "),e("li",[e("code",[_._v("TIME")]),_._v(" 该进程占用 CPU 时间")]),_._v(" "),e("li",[e("code",[_._v("COMMAND")]),_._v(" 启动该进程的命令的名称")])]),_._v(" "),e("h3",{attrs:{id:"_1-6-20-kill"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-20-kill"}},[_._v("#")]),_._v(" 1.6.20 kill")]),_._v(" "),e("p",[e("code",[_._v("kill [-signal] PID")])]),_._v(" "),e("p",[_._v("给指定进程发送指定信号. 如果没有指定信号, 则发送 TERM信号.  TERM 信号会杀死不能俘获该信号的进程.  对于其他进程,可能需要使用 KILL (9) 信号, 因为该信号不能够被俘获.")]),_._v(" "),e("p",[e("code",[_._v("SIGHUP")]),_._v(" 1 终端在结束时，会给其下所有进程发送某个信号。对于与终端脱离关系的守护进程，这个信号用于通知它重新读取配置文件。")]),_._v(" "),e("p",[e("code",[_._v("SIGINT")]),_._v(" 2 结束进程 "),e("code",[_._v("C-C")])]),_._v(" "),e("p",[e("code",[_._v("SIGQUIT")]),_._v(" 3 结束进程 "),e("code",[_._v("C-\\")])]),_._v(" "),e("p",[e("code",[_._v("SIGUSR1")]),_._v(" 10 自定义")]),_._v(" "),e("p",[e("code",[_._v("SIGUSR2")]),_._v(" 12 自定义")]),_._v(" "),e("p",[e("code",[_._v("SIGKILL")]),_._v(" 9 杀死进程信号，不能不捕捉，不能被忽略、阻塞、注册。")]),_._v(" "),e("p",[e("code",[_._v("SIGALRM")]),_._v(" 14 闹钟信号，定时器，当倒计时进程结束，结束进程")]),_._v(" "),e("p",[e("code",[_._v("SIGTERM")]),_._v(" 15 终止信号。")]),_._v(" "),e("p",[e("code",[_._v("SIGHLD")]),_._v(" 17 子进程结束，给父进程发送的信号")]),_._v(" "),e("p",[e("code",[_._v("SIGSTOP")]),_._v(" 19 暂停进程，不能被捕捉信号，不能被忽略，不能被阻塞。")]),_._v(" "),e("p",[e("code",[_._v("SIGTSTP")]),_._v(" 20 暂停进程，"),e("code",[_._v("C-Z")])]),_._v(" "),e("h3",{attrs:{id:"_1-6-21-chown"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-21-chown"}},[_._v("#")]),_._v(" 1.6.21 chown")]),_._v(" "),e("p",[_._v("修改文件所有者和组别。")]),_._v(" "),e("h3",{attrs:{id:"_1-6-22-sync"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-22-sync"}},[_._v("#")]),_._v(" 1.6.22 sync")]),_._v(" "),e("p",[_._v("将内存的数据写回硬盘，并释放缓存。\nLinux系统运行过程中，会有大量的临时数据驻留在内存缓存区，在关闭系统时需要将内存数据与硬盘数据进行同步校验，以保证系统数据不丢失。因此，通常sync命令是在关闭Linux系统前时使用。")]),_._v(" "),e("h3",{attrs:{id:"_1-6-23-adduser"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-23-adduser"}},[_._v("#")]),_._v(" 1.6.23 adduser")]),_._v(" "),e("p",[_._v("添加用户。")]),_._v(" "),e("p",[_._v("deluser 删除用户的同时删除用户的工作目录。")]),_._v(" "),e("p",[_._v("delgroup 删除用户组。")]),_._v(" "),e("p",[e("code",[_._v("/etc/shadow")]),_._v("文件是加密的用户清单。")]),_._v(" "),e("p",[e("code",[_._v("/etc/passwd")]),_._v("文件是系统能够识别的用户清单。")]),_._v(" "),e("p",[e("code",[_._v("/etc/group")]),_._v(" 文件包含了UNIX组的名称和每个组中成员列表。")]),_._v(" "),e("h3",{attrs:{id:"_1-6-24-locate"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-24-locate"}},[_._v("#")]),_._v(" 1.6.24 locate")]),_._v(" "),e("p",[_._v("超快速查找任意文件。")]),_._v(" "),e("p",[_._v("查找速度最快，但需要更新数据库。")]),_._v(" "),e("p",[e("code",[_._v("$ sudo updatedb")])]),_._v(" "),e("p",[e("code",[_._v("-r")]),_._v(" 使用正则表达式，如 "),e("code",[_._v("locate -r '\\bls$'")])]),_._v(" "),e("h3",{attrs:{id:"_1-6-25-find"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-25-find"}},[_._v("#")]),_._v(" 1.6.25 find")]),_._v(" "),e("p",[_._v("功能最强大，但速度慢。")]),_._v(" "),e("h3",{attrs:{id:"_1-6-26-grep"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-26-grep"}},[_._v("#")]),_._v(" 1.6.26 grep")]),_._v(" "),e("p",[_._v("打印匹配给定模式的行。")]),_._v(" "),e("p",[e("code",[_._v("grep [options] PATTERN [FILE]")])]),_._v(" "),e("p",[_._v("如 "),e("code",[_._v("grep enum /usr/include/*")])]),_._v(" "),e("h3",{attrs:{id:"_1-6-27-size"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-27-size"}},[_._v("#")]),_._v(" 1.6.27 size")]),_._v(" "),e("p",[_._v("指定输入文件各段及其总和的大小。（可执行文件、静态库、动态库、目标文件）")]),_._v(" "),e("h3",{attrs:{id:"_1-6-28-strace"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-28-strace"}},[_._v("#")]),_._v(" 1.6.28 strace")]),_._v(" "),e("p",[_._v("跟踪可执行程序的系统调用。")]),_._v(" "),e("p",[_._v("strace常用来跟踪进程执行时的系统调用和所接收的信号。 在Linux世界，进程不能直接访问硬件设备，当进程需要访问硬件设备(比如读取磁盘文件，接收网络数据等等)时，必须由用户态模式切换至内核态模式，通 过系统调用访问硬件设备。strace可以跟踪到一个进程产生的系统调用,包括参数，返回值，执行消耗的时间。")]),_._v(" "),e("p",[_._v("每一行都是一条系统调用，等号左边是系统调用的函数名及其参数，右边是该调用的返回值。")]),_._v(" "),e("p",[_._v("strace 显示这些调用的参数并返回符号形式的值。strace 从内核接收信息，而且不需要以任何特殊的方式来构建内核。")]),_._v(" "),e("h3",{attrs:{id:"_1-6-29-nm"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-29-nm"}},[_._v("#")]),_._v(" 1.6.29 nm")]),_._v(" "),e("p",[_._v("nm 是name 的缩写，它显示指定文件中的符号信息，文件可以是对象文件、可执行文件或对象文件库。如果文件中没有包含符号信息，nm报告该情况，单不把他解释为出错。nm缺省情况下报告十进制符号表示法下的数字值。")]),_._v(" "),e("p",[e("code",[_._v("nm -C xxx.o")])]),_._v(" "),e("h3",{attrs:{id:"_1-6-30-umask"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-30-umask"}},[_._v("#")]),_._v(" 1.6.30 umask")]),_._v(" "),e("p",[_._v("Linux 不同，它是通过使用 umask 默认权限来给所有新建的文件和目录赋予初始权限的。")]),_._v(" "),e("p",[_._v("root用户默认是0022，普通用户默认是 0002")]),_._v(" "),e("p",[_._v("文件（或目录）的初始权限 = 文件（或目录）的最大默认权限 - umask权限")]),_._v(" "),e("p",[_._v("umask -S 查看默认权限")]),_._v(" "),e("p",[_._v("默认权限：文件 0777 - 0002 = 0755\n目录 0666 - 0002 = 0644")]),_._v(" "),e("h3",{attrs:{id:"_1-6-31-ldd"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-31-ldd"}},[_._v("#")]),_._v(" 1.6.31 ldd")]),_._v(" "),e("p",[_._v("命令可以查看一个可执行程序依赖的共享库。")]),_._v(" "),e("h3",{attrs:{id:"_1-6-32-fg-bg-jobs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-32-fg-bg-jobs"}},[_._v("#")]),_._v(" 1.6.32 fg,bg,jobs")]),_._v(" "),e("p",[e("code",[_._v("jobs -l")]),_._v(" 命令可以用来查看当前终端放入后台的工作")]),_._v(" "),e("p",[e("code",[_._v("fg %num")]),_._v(" 命令用于把后台工作恢复到前台执行")]),_._v(" "),e("p",[e("code",[_._v("bg %num")]),_._v(" 把后台暂停的工作恢复到后台执行")]),_._v(" "),e("h3",{attrs:{id:"_1-6-33-nohub"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-33-nohub"}},[_._v("#")]),_._v(" 1.6.33 nohub,&")]),_._v(" "),e("p",[_._v("nohup 不挂断地运行命令。no hangup的缩写，意即“不挂断”。命令的作用就是让后台工作在离开操作终端时，也能够正确地在后台执行。")]),_._v(" "),e("p",[_._v("nohup 命令运行由 Command参数和任何相关的 Arg参数指定的命令，忽略所有挂断（SIGHUP）信号。在注销后使用 nohup 命令运行后台中的程序。要运行后台中的 nohup 命令，添加 & （ 表示“and”的符号）到命令的尾部。 如果不将 nohup 命令的输出重定向，输出将附加到当前目录的 nohup.out 文件中。如果当前目录的 nohup.out 文件不可写，输出重定向到 $HOME/nohup.out 文件中。")]),_._v(" "),e("p",[e("code",[_._v("nohup COMMAND &")]),_._v(" 这样就能使命令永久的在后台执行。")]),_._v(" "),e("h3",{attrs:{id:"_1-6-34-netstat"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-34-netstat"}},[_._v("#")]),_._v(" 1.6.34 netstat")]),_._v(" "),e("p",[_._v("netstat -tunlp 用于显示 tcp，udp 的端口和进程等相关情况。")]),_._v(" "),e("p",[_._v("netstat 查看端口占用语法格式：")]),_._v(" "),e("p",[_._v("netstat -tunlp | grep 端口号")]),_._v(" "),e("ul",[e("li",[e("code",[_._v("-t")]),_._v(" (tcp) 仅显示tcp相关选项")]),_._v(" "),e("li",[e("code",[_._v("-u")]),_._v(" (udp)仅显示udp相关选项")]),_._v(" "),e("li",[e("code",[_._v("-n")]),_._v(" 拒绝显示别名，能显示数字的全部转化为数字")]),_._v(" "),e("li",[e("code",[_._v("-l")]),_._v(" 仅列出在Listen(监听)的服务状态")]),_._v(" "),e("li",[e("code",[_._v("-p")]),_._v(" 显示建立相关链接的程序名")]),_._v(" "),e("li")]),_._v(" "),e("p",[_._v("例如查看 8000 端口的情况，使用以下命令：")]),_._v(" "),e("p",[_._v("netstat -tunlp | grep 8000")]),_._v(" "),e("p",[_._v("tcp        0      0 0.0.0.0:8000            0.0.0.0:*               LISTEN      26993/nodejs")]),_._v(" "),e("p",[_._v("更多命令：")]),_._v(" "),e("p",[_._v("netstat -ntlp   //查看当前所有tcp端口")]),_._v(" "),e("p",[_._v("netstat -ntulp | grep 80   //查看所有80端口使用情况")]),_._v(" "),e("p",[_._v("netstat -ntulp | grep 3306   //查看所有3306端口使用情况")]),_._v(" "),e("h3",{attrs:{id:"_1-6-35-uname"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-35-uname"}},[_._v("#")]),_._v(" 1.6.35 uname")]),_._v(" "),e("p",[e("code",[_._v("uname -a")])]),_._v(" "),e("p",[e("code",[_._v("uname -r")]),_._v(" 查看 kernel 版本。")]),_._v(" "),e("h3",{attrs:{id:"_1-6-36-hexdump"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-36-hexdump"}},[_._v("#")]),_._v(" 1.6.36 hexdump")]),_._v(" "),e("p",[_._v("二进制文件查看工具，它可以将二进制文件转换为ASCII、八进制、十进制、十六进制格式进行查看。")]),_._v(" "),e("p",[_._v("-C 每个字节显示为 16 进制和相应的 ASCII 字符。")]),_._v(" "),e("p",[_._v("-c 每个字节显示为 ascii 字符。")]),_._v(" "),e("p",[_._v("-x 双字节 16 进制显示。")]),_._v(" "),e("p",[_._v("-d 两个字节显示为 10 进制。")]),_._v(" "),e("p",[_._v("-b 每个字节显示为 8 进制。")]),_._v(" "),e("p",[_._v("-o 两个字节显示为 8 进制。")]),_._v(" "),e("h2",{attrs:{id:"_1-7-elf-文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-7-elf-文件"}},[_._v("#")]),_._v(" 1.7 ELF 文件")]),_._v(" "),e("p",[_._v("ELF文件是一种用于二进制文件、可执行文件、目标代码、共享库和core转存格式文件。是UNIX系统实验室（USL）作为应用程序二进制接口（Application Binary Interface，ABI）而开发和发布的，也是Linux的主要可执行文件格式。")]),_._v(" "),e("p",[_._v("elf 文件头，内部分段")]),_._v(" "),e("p",[_._v("有三类文件属于 ELF 格式，")]),_._v(" "),e("ol",[e("li",[_._v("可执行文件")]),_._v(" "),e("li",[_._v("目标文件。")])]),_._v(" "),e("p",[e("code",[_._v("readelf -a")]),_._v(" 查看 "),e("code",[_._v("elf")]),_._v(" 文件。")]),_._v(" "),e("p",[_._v("1）可重定位文件（Relocatable File）")]),_._v(" "),e("p",[_._v("包含适合于与其他目标文件链接来创建可执行文件或者共享目标文件的代码和数据，即 xxx.o 文件。")]),_._v(" "),e("p",[_._v("2）可执行文件（Executable File）")]),_._v(" "),e("p",[_._v("包含适合于执行的一个程序，此文件规定了 exec() 如何创建一个程序的进程映像，即 a.out文件。")]),_._v(" "),e("p",[_._v("3）共享目标文件（Shared Object File）")]),_._v(" "),e("p",[_._v("包含可在两种上下文中链接的代码和数据。首先链接编辑器可以将它和其它可重定位文件和共享目标文件一起处理，生成另外一个目标文件。其次，动态链接器（Dynamic Linker）可能将它与某个可执行文件以及其它共享目标一起组合，创建进程映像，即 xxx.so文件。")]),_._v(" "),e("p",[_._v("4）内核转储(core dumps)")]),_._v(" "),e("p",[_._v("存放当前进程的执行上下文，用于dump信号触发。")]),_._v(" "),e("p",[e("img",{attrs:{src:"/linux/ELF%E6%A0%BC%E5%BC%8F.jpg",alt:""}})]),_._v(" "),e("p",[e("img",{attrs:{src:"/linux/ELF%E8%A7%86%E5%9B%BE.jpg",alt:""}})]),_._v(" "),e("p",[_._v("ELF文件由4部分组成，分别是ELF头（ELF header）、程序头表（Program header table）、节（Section）和节头表（Section header table）。")]),_._v(" "),e("p",[e("code",[_._v("objdump -D")]),_._v(" 查看反汇编信息。")]),_._v(" "),e("p",[e("code",[_._v("objdump -S")]),_._v(" 查看目标的汇编代码。")]),_._v(" "),e("p",[e("code",[_._v("objdump -d file")]),_._v(" 反汇编")]),_._v(" "),e("p",[e("code",[_._v("objdemp -j .txt -S file")]),_._v("  反汇编并显示 text段即代码段内容，尽可能以源码形式表示")]),_._v(" "),e("h2",{attrs:{id:"_1-8-常见服务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-8-常见服务"}},[_._v("#")]),_._v(" 1.8 常见服务")]),_._v(" "),e("p",[e("code",[_._v("/etc/init.d/ssh restart")]),_._v(" 重启 "),e("code",[_._v("ssh")]),_._v(" 服务。")]),_._v(" "),e("p",[e("code",[_._v("service sshd restart")])]),_._v(" "),e("p",[e("code",[_._v("systemctl status tftpd-hpa")]),_._v(" 查看服务状态。")]),_._v(" "),e("p",[e("code",[_._v("service tftpd-hpa status")])]),_._v(" "),e("p",[e("code",[_._v("sshd")]),_._v(" 服务，远程访问虚拟机服务。")]),_._v(" "),e("p",[e("code",[_._v("Samba")]),_._v(" 服务，linux 和 windows 共享目录")]),_._v(" "),e("p",[e("code",[_._v("tftp")]),_._v(" 服务，提供内核镜像 zImage 供 uboot 下载。")]),_._v(" "),e("p",[e("code",[_._v("nfs")]),_._v(" 服务，提供网络文件系统。")]),_._v(" "),e("h2",{attrs:{id:"_1-9-内核空间"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-9-内核空间"}},[_._v("#")]),_._v(" 1.9 内核空间")]),_._v(" "),e("p",[e("img",{attrs:{src:"/linux/%E5%86%85%E6%A0%B8%E7%BB%93%E6%9E%84.png",alt:""}})]),_._v(" "),e("p",[e("img",{attrs:{src:"/linux/linux%E7%B3%BB%E7%BB%9F%E7%BB%93%E6%9E%84.png",alt:""}})]),_._v(" "),e("h2",{attrs:{id:"_1-10-文件类型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-10-文件类型"}},[_._v("#")]),_._v(" 1.10 文件类型")]),_._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[_._v("文件类型\t文件特点\n普通文件\t标识符 ‘-’ ，用open方式创建\n目录文件\t标识符 ‘d’ ，用mkdir方式创建\n链接文件\t标识符 ‘l’, ln -s 创建， 又可以分为软链接，硬链接\n管道文件\t标识   ‘p’， 用mkfifo创建\nsocket文件\t标识符 ‘s’\n字符设备文件\t标识符 ‘c’\n块设备文件\t标识符 ‘b’\n")])]),_._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[_._v("1")]),e("br"),e("span",{staticClass:"line-number"},[_._v("2")]),e("br"),e("span",{staticClass:"line-number"},[_._v("3")]),e("br"),e("span",{staticClass:"line-number"},[_._v("4")]),e("br"),e("span",{staticClass:"line-number"},[_._v("5")]),e("br"),e("span",{staticClass:"line-number"},[_._v("6")]),e("br"),e("span",{staticClass:"line-number"},[_._v("7")]),e("br"),e("span",{staticClass:"line-number"},[_._v("8")]),e("br")])]),e("p",[_._v("有名管道文件、字符设备文件、块设备文件、套接字(socket)文件不占磁盘空间。")])])}),[],!1,null,null,null);v.default=t.exports}}]);