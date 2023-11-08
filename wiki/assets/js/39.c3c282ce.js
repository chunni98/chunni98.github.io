(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{322:function(s,t,a){"use strict";a.r(t);var n=a(14),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"_1-概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-概念"}},[s._v("#")]),s._v(" 1 概念")]),s._v(" "),t("h3",{attrs:{id:"_1-1-多核处理器的多线程同步"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-多核处理器的多线程同步"}},[s._v("#")]),s._v(" 1.1 多核处理器的多线程同步")]),s._v(" "),t("p",[s._v("在多核处理器或多个处理器的环境下，多线程同步则更为复杂。因为对于一般通用操作系统而言，\n核心A是不知道核心B正在处理啥的，尽管对于某些嵌入式实时操作系统（RTOS）而言，\n一个核心可以给另一个核心发送信号以通知某些事件，但这些均用于特定应用场景，而通用应用级操作系统\n不会采用这些同步手段，代价太高。正因为如此，在多核多处理器环境下，如果我们要对多线程所共享的一个\n对象的修改做到数据一致性，那么只能通过原子操作指令！")]),s._v(" "),t("p",[s._v("为何原子操作能起作用？因为原子操作指令通过锁总线等手段，确保多线程对同一共享对象的读-修改-写是\n原子的。所谓“原子（atomic）”就是指，一组操作在执行时作为一个整体进行，而不会被打断。")]),s._v(" "),t("h3",{attrs:{id:"_1-2-原子操作的种类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-原子操作的种类"}},[s._v("#")]),s._v(" 1.2 原子操作的种类")]),s._v(" "),t("p",[s._v("随着科技的进步，现代多核处理器纷纷引入了无锁（Lock-Free）原子操作，比如\n比较与交换（Compare and Swap，简称CAS），\n加载时锁定/有条件存储（Load-locked Store-conditional，简称LL-SC）。\nx86处理器使用前者，Alpha、Power、MIPS、RISC-V、ARMv7、ARMv8等则使用后者，\n而从ARMv8.1开始也引入了CAS原子操作。")]),s._v(" "),t("h2",{attrs:{id:"_2-stdatomic-h"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-stdatomic-h"}},[s._v("#")]),s._v(" 2 stdatomic.h")]),s._v(" "),t("h3",{attrs:{id:"_2-1-类型定义"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-类型定义"}},[s._v("#")]),s._v(" 2.1 类型定义")]),s._v(" "),t("p",[s._v("原子操作库在C11标准中属于可选库，对于一些低端的处理器，尤其像8位的单片机MCU那种完全不具备\n原子操作指令的系统环境，则可以不提供此库。因此C11标准引入了"),t("code",[s._v("__STDC_NO_ATOMICS__")]),s._v("这个\n预定义宏来指示当前系统环境下的C11编译器实现是否提供了原子操作标准库。如果定义了这个宏，\n则说明当前环境下的C11编译器实现没有支持原子操作的标准库。如果支持原子操作标准库，\n我们就能引入 "),t("code",[s._v("<stdatomic.h>")]),s._v(" 这个头文件，这里面声明了所以能被当前C11编译器支持的原子类型\n以及原子操作函数接口。ubuntu 里的位置为：\n"),t("code",[s._v("/usr/lib/gcc/x86_64-linux-gnu/4.9/include/stdatomic.h")]),s._v("。")]),s._v(" "),t("p",[s._v("为了能给程序员提供当前编译环境能支持何种原子操作，C11标准列出了以下这些与定义宏：")]),s._v(" "),t("div",{staticClass:"language-c line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-c"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 指示当前编译器能支持 _Bool 类型的无锁原子操作")]),s._v("\nATOMIC_BOOL_LOCK_FREE\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 指示当前编译器能支持 signed char、unsigned char、以及char类型的无锁原子操作")]),s._v("\nATOMIC_CHAR_LOCK_FREE\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 指示当前编译器能支持 char16_t 类型的无锁原子操作")]),s._v("\nATOMIC_CHAR16_T_LOCK_FREE\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 指示当前编译器能支持 char32_t 类型的无锁原子操作")]),s._v("\nATOMIC_CHAR32_T_LOCK_FREE\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 指示当前编译器能支持 wchar_t 类型的无锁原子操作")]),s._v("\nATOMIC_WCHAR_T_LOCK_FREE\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 指示当前编译器能支持 short、unsigned short 类型的无锁原子操作")]),s._v("\nATOMIC_SHORT_LOCK_FREE\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 指示当前编译器能支持 int、unsigned int 类型的无锁原子操作")]),s._v("\nATOMIC_INT_LOCK_FREE\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 指示当前编译器能支持 long、unsigned long 类型的无锁原子操作")]),s._v("\nATOMIC_LONG_LOCK_FREE\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 指示当前编译器能支持 long long、unsigned long long 类型的无锁原子操作")]),s._v("\nATOMIC_LLONG_LOCK_FREE\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 指示当前编译器能支持 ptrdiff_t、intptr_t、uintptr_t 类型的无锁原子操作")]),s._v("\nATOMIC_POINTER_LOCK_FREE\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br")])]),t("p",[s._v("有了这些预定义宏之后，我们就能判定在当前编译环境下可用那些原子操作了。\n当然，如果当前编译环境能支持原子操作的话，那么它至少应该能支持 atomic_flag 类型。\n该类型是一个原子标志对象，用于flag test and set原子操作。\n如果当前的CPU不支持flag test and set，但支持SWAP，那么也可以用SWAP来实现该操作。\n此外，其他lock-free的原子操作也都能实现flag test and set，\n包括原子加法、原子逻辑操作、CAS等。因此 原子标志操作 属于整个原子操作中最最基本的操作方式。")]),s._v(" "),t("p",[s._v("当前C11标准所提供支持的整数原子类型如下所示：")]),s._v(" "),t("div",{staticClass:"language-c line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-c"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typedef")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("_Atomic")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("_Bool")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("              atomic_bool"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typedef")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("_Atomic")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("               atomic_char"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typedef")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("_Atomic")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("signed")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("        atomic_schar"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typedef")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("_Atomic")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("      atomic_uchar"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typedef")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("_Atomic")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("short")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("              atomic_short"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typedef")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("_Atomic")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("short")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("     atomic_ushort"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typedef")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("_Atomic")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("                atomic_int"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typedef")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("_Atomic")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("       atomic_uint"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typedef")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("_Atomic")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("long")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("               atomic_long"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typedef")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("_Atomic")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("long")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("      atomic_ulong"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typedef")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("_Atomic")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("long")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("long")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("          atomic_llong"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typedef")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("_Atomic")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("long")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("long")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" atomic_ullong"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 对于没有定义过char16_t的编译环境，")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 也可能会用 _Atomic(uint_least16_t) 类型来定义其相应的原子类型")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typedef")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("_Atomic")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("char16_t")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("            "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("atomic_char16_t")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 对于没有定义过char32_t的编译环境，")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 也可能会用 _Atomic(uint_least32_t) 类型来定义其相应的原子类型")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typedef")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("_Atomic")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("char32_t")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("            "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("atomic_char32_t")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typedef")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("_Atomic")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("wchar_t")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("            "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("atomic_wchar_t")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typedef")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("_Atomic")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("int_least8_t")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("       "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("atomic_int_least8_t")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typedef")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("_Atomic")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("uint_least8_t")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("atomic_uint_least8_t")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typedef")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("_Atomic")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("int_least16_t")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("atomic_int_least16_t")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typedef")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("_Atomic")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("uint_least16_t")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("atomic_uint_least16_t")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typedef")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("_Atomic")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("int_least32_t")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("atomic_int_least32_t")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typedef")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("_Atomic")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("uint_least32_t")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("atomic_uint_least32_t")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typedef")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("_Atomic")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("int_least64_t")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("atomic_int_least64_t")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typedef")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("_Atomic")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("uint_least64_t")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("atomic_uint_least64_t")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typedef")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("_Atomic")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("int_fast8_t")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("atomic_int_fast8_t")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typedef")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("_Atomic")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("uint_fast8_t")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("       "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("atomic_uint_fast8_t")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typedef")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("_Atomic")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("int_fast16_t")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("       "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("atomic_int_fast16_t")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typedef")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("_Atomic")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("uint_fast16_t")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("atomic_uint_fast16_t")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typedef")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("_Atomic")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("int_fast32_t")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("       "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("atomic_int_fast32_t")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typedef")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("_Atomic")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("uint_fast32_t")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("atomic_uint_fast32_t")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typedef")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("_Atomic")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("int_fast64_t")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("       "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("atomic_int_fast64_t")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typedef")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("_Atomic")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("uint_fast64_t")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("atomic_uint_fast64_t")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typedef")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("_Atomic")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("intptr_t")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("           "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("atomic_intptr_t")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typedef")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("_Atomic")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("uintptr_t")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("          "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("atomic_uintptr_t")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typedef")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("_Atomic")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("size_t")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("             "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("atomic_size_t")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typedef")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("_Atomic")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ptrdiff_t")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("          "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("atomic_ptrdiff_t")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typedef")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("_Atomic")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("intmax_t")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("           "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("atomic_intmax_t")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typedef")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("_Atomic")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("uintmax_t")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("          "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("atomic_uintmax_t")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br")])]),t("p",[s._v("绝大部分处理器都没有提供针对浮点数的原子操作指令，因此C11标准也没有提供任何针对浮点数的原子类型！")]),s._v(" "),t("h3",{attrs:{id:"_2-3-原子操作函数接口"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-原子操作函数接口"}},[s._v("#")]),s._v(" 2.3 原子操作函数接口")]),s._v(" "),t("p",[s._v("C11所提供的原子操作函数接口一般都有两个版本。第一个版本是不带有存储器次序参数的，\n第二个是带有存储器次序参数的，并且函数名也以 "),t("code",[s._v("_explicit")]),s._v(" 结尾。")]),s._v(" "),t("p",[t("strong",[s._v("1. 原子标志相关操作")])]),s._v(" "),t("p",[s._v("对于原子标志的相关操作，C11标准提供了初始化、标志测试与设置、标志清除这三个接口。\n原子标志 atomic_flag 对象本身只有两种状态（即只有两种取值），\n设置状态（编译器实现一般用 1 或 true 来表示）以及\n清零状态（编译器实现一般用 0 或 false 来表示）。")]),s._v(" "),t("p",[s._v("C11标准为原子标志类型提供了一个用于初始化的宏—— ATOMIC_FLAG_INIT ，\n我们应该用这个宏对一个原子标志对象进行初始化，代码示例：")]),s._v(" "),t("div",{staticClass:"language-c line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-c"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("volatile")]),s._v(" atomic_flag g_flag "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" ATOMIC_FLAG_INIT"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 这里展示了如何在函数内对已声明的g_flag进行初始化。")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 由于atomic_flag通常被定义为一种结构体形式，")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 而ATOMIC_FLAG_INIT则通常被定义为针对结构体atomic_flag的初始化器，")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 即：{ ... } 的形式。")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 因此我们这里使用C99标准所引入的匿名结构体对象的表示语法")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 对g_flag进行初始化")]),s._v("\n    g_flag "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("atomic_flag"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("ATOMIC_FLAG_INIT"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("p",[s._v("初始化之后，原子标志对象即处于“清零状态”。")]),s._v(" "),t("p",[t("strong",[s._v("2. 初始化原子变量（不保证原子性）")])]),s._v(" "),t("div",{staticClass:"language-c line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-c"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// C17 中被弃用")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token macro-name function"}},[s._v("ATOMIC_VAR_INIT")]),t("span",{pre:!0,attrs:{class:"token expression"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("VALUE"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("»■"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("VALUE"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")])])]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 初始化一个原子对象  */")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 接收一个参数，用于指定该原子对象的初始值。")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 必须注意的是，初始值的类型要与原子对象的整数类型相兼容。")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token macro-name function"}},[s._v("atomic_init")]),t("span",{pre:!0,attrs:{class:"token expression"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("PTR"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" VAL"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("                           ")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token expression"}},[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("atomic_store_explicit")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("PTR"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" VAL"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" __ATOMIC_RELAXED"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")])])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token macro-name"}},[s._v("ATOMIC_FLAG_INIT")]),t("span",{pre:!0,attrs:{class:"token expression"}},[s._v("»■■■"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])])]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("p",[t("strong",[s._v("3. 操作原子变量（保证原子性）")])]),s._v(" "),t("h2",{attrs:{id:"参考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[s._v("#")]),s._v(" 参考")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/zenny-chen/C11-atomic-operations-in-detail",target:"_blank",rel:"noopener noreferrer"}},[s._v("C11 atomic operations in detail"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://www.jianshu.com/p/3e1f4785a521",target:"_blank",rel:"noopener noreferrer"}},[s._v("C11 的原子操作"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://c-cpp.com/c/atomic",target:"_blank",rel:"noopener noreferrer"}},[s._v("原子操作库"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=e.exports}}]);