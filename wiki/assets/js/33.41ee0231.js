(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{314:function(s,_,e){"use strict";e.r(_);var a=e(14),t=Object(a.a)({},(function(){var s=this,_=s._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[_("h2",{attrs:{id:"_1-1-前言"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-前言"}},[s._v("#")]),s._v(" 1.1 前言")]),s._v(" "),_("p",[s._v("C 语言学习之路，道阻且跻，为了不让我自己写代码时轻易迷失在指针和函数的海洋以及提高自己编程的质量和效率，我收集了一些资料，整理归纳并稍作修改，整理出这篇编程规范和注释风格，希望自己能好好遵守，以后写出越来越容易理解和阅读的代码。")]),s._v(" "),_("p",[s._v("操作系统："),_("code",[s._v("ubuntu22.04")])]),s._v(" "),_("p",[s._v("编辑器："),_("code",[s._v("Vim 9.0")])]),s._v(" "),_("p",[s._v("编译器："),_("code",[s._v("gcc10.3.0")]),s._v("。")]),s._v(" "),_("p",[s._v("C 语言标准："),_("code",[s._v("c11")]),s._v("。")]),s._v(" "),_("h2",{attrs:{id:"_1-2-编码"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-编码"}},[s._v("#")]),s._v(" 1.2 编码")]),s._v(" "),_("h3",{attrs:{id:"_1-2-1-排版"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-1-排版"}},[s._v("#")]),s._v(" 1.2.1 排版")]),s._v(" "),_("ul",[_("li",[s._v("缩进为 4 个空格。")]),s._v(" "),_("li",[s._v("每行不超过 80 列。")]),s._v(" "),_("li",[s._v("文件用"),_("code",[s._v("UTF-8(without BOM)")]),s._v(" 编码。")]),s._v(" "),_("li",[s._v("括号采用"),_("code",[s._v("K&R")]),s._v(" 风格。")]),s._v(" "),_("li",[s._v("逗号、分号在后面加空格。")]),s._v(" "),_("li",[s._v("比较操作符，赋值操作符、算术操作符、逻辑操作符、位域操作符等双目操作符的前后加空格。")]),s._v(" "),_("li",[s._v("位运算操作符、自增、自减、取地址等单目操作符前后不加空格。")]),s._v(" "),_("li",[_("code",[s._v("->")]),s._v("、"),_("code",[s._v(".")]),s._v(" 前后不加空格。")]),s._v(" "),_("li",[_("code",[s._v("if")]),s._v("、"),_("code",[s._v("switch")]),s._v("、"),_("code",[s._v("else")]),s._v("、"),_("code",[s._v("for")]),s._v("、"),_("code",[s._v("do")]),s._v("、"),_("code",[s._v("while")]),s._v(" 等关键字后要加一个空格。")]),s._v(" "),_("li",[s._v("不要在小括号里的表达式两侧加空格。")]),s._v(" "),_("li",[s._v("表达式换行要保持换行的一致性，操作符放行末。")])]),s._v(" "),_("h3",{attrs:{id:"_1-2-2-命名"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-2-命名"}},[s._v("#")]),s._v(" 1.2.2 命名")]),s._v(" "),_("ul",[_("li",[s._v("变量：全小写，"),_("code",[s._v("_")]),s._v(" 分隔。如 "),_("code",[s._v("student_score")]),s._v("。")]),s._v(" "),_("li",[s._v("文件：全小写，不分隔。如 "),_("code",[s._v("myccode.h")]),s._v("。")]),s._v(" "),_("li",[s._v("宏：全大写，"),_("code",[s._v("_")]),s._v("分隔。如 "),_("code",[s._v("API_KEY")]),s._v("。")]),s._v(" "),_("li",[s._v("goto 标签：和宏一致。如 "),_("code",[s._v("CLEAN")]),s._v("。")]),s._v(" "),_("li",[s._v("只读变量：全大写，"),_("code",[s._v("_")]),s._v(" 分隔。如："),_("code",[s._v("const int DAYS_IN_A_DAY = 7")]),s._v("。")]),s._v(" "),_("li",[s._v("枚举常数：与常量一致： "),_("code",[s._v("ENUM_NAME")]),s._v("。")]),s._v(" "),_("li",[s._v("函数：\n"),_("ul",[_("li",[s._v("动作类函数使用动宾结构："),_("code",[s._v("add_user()")]),s._v("。")]),s._v(" "),_("li",[s._v("判断型函数："),_("code",[s._v("is_working()")]),s._v("。")]),s._v(" "),_("li",[s._v("数据型函数："),_("code",[s._v("get_loacal_count()")]),s._v("。")])])]),s._v(" "),_("li",[_("code",[s._v("tyepdef")]),s._v(" 自定义类型：加 "),_("code",[s._v("_t")]),s._v(" 后缀。如 "),_("code",[s._v("time_t")]),s._v(" ，"),_("code",[s._v("pid_t")]),s._v(" 等。")]),s._v(" "),_("li",[s._v("静态变量：加 "),_("code",[s._v("_")]),s._v("前缀。如 "),_("code",[s._v("_students_num")]),s._v("。")]),s._v(" "),_("li",[s._v("全局变量：加 "),_("code",[s._v("g_")]),s._v("前缀。如 "),_("code",[s._v("g_errno")]),s._v("。")]),s._v(" "),_("li",[_("code",[s._v("bool")]),s._v(" 变量：加 "),_("code",[s._v("is_")]),s._v("前缀。如 "),_("code",[s._v("is_check")]),s._v("。")]),s._v(" "),_("li",[s._v("指针变量：加 "),_("code",[s._v("ptr")]),s._v(" 后缀。如 "),_("code",[s._v("student_info_ptr")]),s._v("。")]),s._v(" "),_("li",[s._v("较短的单词可通过去掉“元音”形成缩写；较长的单词可取单词的头几个字母形成缩写，避免使人产生误解。如 "),_("code",[s._v("tmp")]),s._v("、"),_("code",[s._v("stu_info")]),s._v("。")]),s._v(" "),_("li",[_("code",[s._v("_")]),s._v(" 开头的函数或变量用来命名不希望被外部调用的函数（静态函数）。")])]),s._v(" "),_("h3",{attrs:{id:"_1-2-3-头文件防卫式声明"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-3-头文件防卫式声明"}},[s._v("#")]),s._v(" 1.2.3 头文件防卫式声明")]),s._v(" "),_("div",{staticClass:"language-c line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-c"}},[_("code",[_("span",{pre:!0,attrs:{class:"token macro property"}},[_("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),_("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("ifndef")]),s._v(" "),_("span",{pre:!0,attrs:{class:"token expression"}},[s._v("HEADER_FILENAME_")])]),s._v("\n"),_("span",{pre:!0,attrs:{class:"token macro property"}},[_("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),_("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" "),_("span",{pre:!0,attrs:{class:"token macro-name"}},[s._v("HEADER_FILENAME_")])]),s._v("\n\n"),_("span",{pre:!0,attrs:{class:"token macro property"}},[_("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),_("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("endif")]),s._v(" "),_("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// _HEADER_FILENAME")])]),s._v("\n")])]),s._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[s._v("1")]),_("br"),_("span",{staticClass:"line-number"},[s._v("2")]),_("br"),_("span",{staticClass:"line-number"},[s._v("3")]),_("br"),_("span",{staticClass:"line-number"},[s._v("4")]),_("br")])]),_("h3",{attrs:{id:"_1-2-4-函数"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-4-函数"}},[s._v("#")]),s._v(" 1.2.4 函数")]),s._v(" "),_("ul",[_("li",[s._v("不对外使用的函数用 "),_("code",[s._v("static")]),s._v(" 限制。")]),s._v(" "),_("li",[s._v("不在函数原型之前使用 "),_("code",[s._v("extern")]),s._v(" 关键字。")]),s._v(" "),_("li",[s._v("设计函数时，优先使用返回值而不是输出参数。")]),s._v(" "),_("li",[s._v("对于模块外部传入的参数，必须进行合法性检查，保护程序免遭非法输入数据的破坏。")]),s._v(" "),_("li",[s._v("契约式编程，模块内部函数参数的合法性检查，由调用者负责。")]),s._v(" "),_("li",[s._v("函数的指针参数如果不是用于修改所指向的对象就应该声明为指向 "),_("code",[s._v("const")]),s._v(" 的指针。")]),s._v(" "),_("li",[s._v("一个函数仅完成一个功能。")]),s._v(" "),_("li",[s._v("对函数的错误返回码要全面处理。")]),s._v(" "),_("li",[s._v("如果不关心返回值，应将函数声明为 "),_("code",[s._v("void")]),s._v(" 类型。")]),s._v(" "),_("li",[s._v("多个 "),_("code",[s._v(".c")]),s._v(" 文件要调用同一个内联函数，那么这个内联函数应该在 "),_("code",[s._v(".h")]),s._v(" 中定义。")]),s._v(" "),_("li",[s._v("在函数原型中包含参数名和它们的数据类型。")]),s._v(" "),_("li",[s._v("使用 "),_("code",[s._v("goto")]),s._v(" 集中函数的退出路径，好处：\n"),_("ul",[_("li",[s._v("无条件语句容易理解和跟踪。")]),s._v(" "),_("li",[s._v("嵌套程度减小。")]),s._v(" "),_("li",[s._v("可以避免由于修改时忘记更新个别的退出点而导致错误。")])])]),s._v(" "),_("li",[s._v("如果一个函数有 3 行以上，就不要把它变成内联函数。")]),s._v(" "),_("li",[s._v("如果函数的名字是一个动作或者强制性的命令，那么这个函数应该返回错误代码整数。如果是一个判断，那么函数应该返回一个“成功”布尔值。")]),s._v(" "),_("li",[s._v("没有返回值的函数要用 "),_("code",[s._v("noreturn")]),s._v(" ，（stdnoreturn.h）修饰。")])]),s._v(" "),_("h3",{attrs:{id:"_1-2-5-其他"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-5-其他"}},[s._v("#")]),s._v(" 1.2.5 其他")]),s._v(" "),_("ul",[_("li",[s._v("使用 "),_("code",[s._v("C11")]),s._v(" 标准。")]),s._v(" "),_("li",[s._v("使用标准数据类型。（"),_("code",[s._v("stdint.h")]),s._v("和 "),_("code",[s._v("stdbool.h")]),s._v(" 内的类型）。")]),s._v(" "),_("li",[s._v("永远不要用 "),_("code",[s._v("pragma pack")]),s._v("。")]),s._v(" "),_("li",[s._v("代码中所有无符号整型数字，均应加 "),_("code",[s._v("U")]),s._v(" 后缀。如 "),_("code",[s._v("#define MAX_DEVICES (128U)")]),s._v("。")]),s._v(" "),_("li",[s._v("每一个"),_("code",[s._v(".c")]),s._v(" 文件都应该有对应的 "),_("code",[s._v(".h")]),s._v(" 文件，用于声明需要对外公开的接口。")]),s._v(" "),_("li",[s._v("包含多条语句的函数式宏的实现语句必须放在 "),_("code",[s._v("do-while(0)")]),s._v(" 中。")]),s._v(" "),_("li",[s._v("不要冗余初始化，对于后续有条件赋值的变量，可以在定义时初始化成默认值，针对大数组的冗余清零，更是会影响到性能。")]),s._v(" "),_("li",[_("code",[s._v("switch")]),s._v(" 语句要有 "),_("code",[s._v("default")]),s._v(" 分支，所有的 "),_("code",[s._v("switch")]),s._v(" 的 "),_("code",[s._v("case")]),s._v(" 里都要有 "),_("code",[s._v("break")]),s._v("，如果 default 用于不应该抵达，应使用 "),_("code",[s._v("assert(false)")]),s._v("。")]),s._v(" "),_("li",[s._v("使用 "),_("code",[s._v("goto")]),s._v(" 集中所有函数出口。")]),s._v(" "),_("li",[s._v("尽量只用数组索引做指针运算，而不是使用指针变量。")]),s._v(" "),_("li",[s._v("整型常量应该用枚举来表示，而不是用宏来定义。")]),s._v(" "),_("li",[s._v("宏函数并没有类型检查，可以考虑用内联函数代替。")]),s._v(" "),_("li",[s._v("头文件中，内联功能启用应用 "),_("code",[s._v("static inline")]),s._v(" 来完成。")]),s._v(" "),_("li",[s._v("尽量不用 "),_("code",[s._v("typedef")]),s._v(" 给结构体、指针重命名。")]),s._v(" "),_("li",[s._v("操作符两边的数据类型需要一致，以防止隐式类型转换会发生与程序员想法不一致。如："),_("code",[s._v("uint8_t")]),s._v(" 和 "),_("code",[s._v("int16_t")]),s._v("类型的 "),_("code",[s._v(">")]),s._v(","),_("code",[s._v("<")]),s._v(","),_("code",[s._v("=")]),s._v(" 比较。")]),s._v(" "),_("li",[s._v("包含头文件时使用相对路径，不使用绝对路径。")]),s._v(" "),_("li",[s._v("结构体内含有多个 bool 变量，请考虑将它们合并为具有1比特成员的位域。")])]),s._v(" "),_("h2",{attrs:{id:"_1-3-注释"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-注释"}},[s._v("#")]),s._v(" 1.3 注释")]),s._v(" "),_("p",[s._v("之前本来是采用 "),_("code",[s._v("Doxygen")]),s._v(" 风格的，但用了一阵子觉得太复杂了，还是简单点好。")]),s._v(" "),_("p",[s._v("错误的注释不但无益反而有害。注释主要阐述代码做了什么（What），或者如果有必要的话，阐述为什么要这么做（Why），注释并不是用来阐述它究竟是如何实现算法（How）的。")]),s._v(" "),_("h3",{attrs:{id:"_1-3-1-条件编译"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-1-条件编译"}},[s._v("#")]),s._v(" 1.3.1 条件编译")]),s._v(" "),_("p",[_("code",[s._v("#ednif")]),s._v(" 后需要加注释。")]),s._v(" "),_("div",{staticClass:"language-c line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-c"}},[_("code",[_("span",{pre:!0,attrs:{class:"token macro property"}},[_("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),_("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("if")]),s._v(" "),_("span",{pre:!0,attrs:{class:"token expression"}},[s._v("MY_MACRO_NAME")])]),s._v("\n"),_("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ...")]),s._v("\n"),_("span",{pre:!0,attrs:{class:"token macro property"}},[_("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),_("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("endif")]),s._v(" "),_("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// MY_MACRO_NAME")])]),s._v("\n")])]),s._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[s._v("1")]),_("br"),_("span",{staticClass:"line-number"},[s._v("2")]),_("br"),_("span",{staticClass:"line-number"},[s._v("3")]),_("br")])]),_("h3",{attrs:{id:"_1-3-2-todo-注释"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-2-todo-注释"}},[s._v("#")]),s._v(" 1.3.2 TODO 注释")]),s._v(" "),_("p",[s._v("对那些临时的、短期的解决方案，或已经够好但并不完美的代码使用 "),_("code",[s._v("TODO")]),s._v(" 注释。")]),s._v(" "),_("p",[s._v("例如：")]),s._v(" "),_("div",{staticClass:"language-c line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-c"}},[_("code",[_("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// TODO: 问 ChatGPT，然后粘贴到这里。")]),s._v("\n\n"),_("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// FIXME: 完蛋了，我不知道我删了什么，现在程序出问题了。")]),s._v("\n\n"),_("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// XXX: 这里本来有一个绝佳的算法可以优化，但是时间太短，下次再改。")]),s._v("\n")])]),s._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[s._v("1")]),_("br"),_("span",{staticClass:"line-number"},[s._v("2")]),_("br"),_("span",{staticClass:"line-number"},[s._v("3")]),_("br"),_("span",{staticClass:"line-number"},[s._v("4")]),_("br"),_("span",{staticClass:"line-number"},[s._v("5")]),_("br")])]),_("h3",{attrs:{id:"_1-3-3-文件头注释"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-3-文件头注释"}},[s._v("#")]),s._v(" 1.3.3 文件头注释")]),s._v(" "),_("div",{staticClass:"language-c line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-c"}},[_("code",[_("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/******************************************************************************\n *     Copyright:  (C) 2023 shachi\n *                 All rights reserved.\n *\n *      Filename:  temp.c\n *   Description:  This file\n *\n *       Version:  0.1.0\n *        Author:  shachi <shachi1758@outlook.com>\n *     ChangeLog:\n *\n * +------------+----------------------------------------------------+--------+\n * |    Date    |                      Change                        | Author |\n * +------------+----------------------------------------------------+--------+\n * | 2023-05-09 |                   Create file.                     | shachi |\n * +------------+----------------------------------------------------+--------+\n *\n *****************************************************************************/")]),s._v("\n")])]),s._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[s._v("1")]),_("br"),_("span",{staticClass:"line-number"},[s._v("2")]),_("br"),_("span",{staticClass:"line-number"},[s._v("3")]),_("br"),_("span",{staticClass:"line-number"},[s._v("4")]),_("br"),_("span",{staticClass:"line-number"},[s._v("5")]),_("br"),_("span",{staticClass:"line-number"},[s._v("6")]),_("br"),_("span",{staticClass:"line-number"},[s._v("7")]),_("br"),_("span",{staticClass:"line-number"},[s._v("8")]),_("br"),_("span",{staticClass:"line-number"},[s._v("9")]),_("br"),_("span",{staticClass:"line-number"},[s._v("10")]),_("br"),_("span",{staticClass:"line-number"},[s._v("11")]),_("br"),_("span",{staticClass:"line-number"},[s._v("12")]),_("br"),_("span",{staticClass:"line-number"},[s._v("13")]),_("br"),_("span",{staticClass:"line-number"},[s._v("14")]),_("br"),_("span",{staticClass:"line-number"},[s._v("15")]),_("br"),_("span",{staticClass:"line-number"},[s._v("16")]),_("br"),_("span",{staticClass:"line-number"},[s._v("17")]),_("br"),_("span",{staticClass:"line-number"},[s._v("18")]),_("br")])]),_("h3",{attrs:{id:"_1-3-4-函数注释"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-4-函数注释"}},[s._v("#")]),s._v(" 1.3.4 函数注释")]),s._v(" "),_("div",{staticClass:"language-c line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-c"}},[_("code",[_("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n *   Description:\n *    Input Args:\n *   Output Args:\n *  Return Value:\n */")]),s._v("\n")])]),s._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[s._v("1")]),_("br"),_("span",{staticClass:"line-number"},[s._v("2")]),_("br"),_("span",{staticClass:"line-number"},[s._v("3")]),_("br"),_("span",{staticClass:"line-number"},[s._v("4")]),_("br"),_("span",{staticClass:"line-number"},[s._v("5")]),_("br"),_("span",{staticClass:"line-number"},[s._v("6")]),_("br")])]),_("h3",{attrs:{id:"_1-3-5-结构体注释"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-5-结构体注释"}},[s._v("#")]),s._v(" 1.3.5 结构体注释")]),s._v(" "),_("div",{staticClass:"language-c line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-c"}},[_("code",[_("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n * Brief\n */")]),s._v("\n")])]),s._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[s._v("1")]),_("br"),_("span",{staticClass:"line-number"},[s._v("2")]),_("br"),_("span",{staticClass:"line-number"},[s._v("3")]),_("br")])]),_("h3",{attrs:{id:"_1-3-6-变量注释"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-6-变量注释"}},[s._v("#")]),s._v(" 1.3.6 变量注释")]),s._v(" "),_("div",{staticClass:"language-c line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-c"}},[_("code",[_("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("int32_t")]),s._v(" i "),_("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),_("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  "),_("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//< 这个是我。")]),s._v("\n")])]),s._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[s._v("1")]),_("br")])]),_("h2",{attrs:{id:"_1-4-参考"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-参考"}},[s._v("#")]),s._v(" 1.4 参考")]),s._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"https://www.bookstack.cn/read/google-cpp-style/spilt.8.8.md",target:"_blank",rel:"noopener noreferrer"}},[s._v("Google C++ 风格指南"),_("OutboundLink")],1)]),s._v(" "),_("li",[_("a",{attrs:{href:"https://www.cnblogs.com/henjay724/p/12259328.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("飞思卡尔软件开发C语言编码规范"),_("OutboundLink")],1)]),s._v(" "),_("li",[_("a",{attrs:{href:"https://www.jianshu.com/p/0c29795c31fe",target:"_blank",rel:"noopener noreferrer"}},[s._v("C语言编码规范"),_("OutboundLink")],1)]),s._v(" "),_("li",[_("a",{attrs:{href:"https://blog.csdn.net/weixin_45255749/article/details/116352696",target:"_blank",rel:"noopener noreferrer"}},[s._v("C语言编程规范（个人整理）"),_("OutboundLink")],1)]),s._v(" "),_("li",[_("a",{attrs:{href:"https://www.cnblogs.com/yywBlogW/p/11412387.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("C语言注释风格"),_("OutboundLink")],1)])])])}),[],!1,null,null,null);_.default=t.exports}}]);