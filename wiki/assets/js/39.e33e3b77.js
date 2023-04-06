(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{315:function(s,e,t){"use strict";t.r(e);var a=t(14),n=Object(a.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"_1-简明指南"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-简明指南"}},[s._v("#")]),s._v(" 1 简明指南")]),s._v(" "),t("p",[s._v("创建新仓库："),t("code",[s._v("git init")]),s._v("。")]),s._v(" "),t("p",[s._v("检出仓库："),t("code",[s._v("git clone /path/to/repository")]),s._v(" 创建一个本地仓库的克隆版本。")]),s._v(" "),t("p",[s._v("工作流：工作目录、暂存区 index、HEAD")]),s._v(" "),t("p",[s._v("添加到暂存区："),t("code",[s._v("git add <filename>")]),s._v(", "),t("code",[s._v("git add *")]),s._v(","),t("code",[s._v("git add .")])]),s._v(" "),t("p",[s._v("提交到 HEAD："),t("code",[s._v('git commit -m "代码提交信息"')])]),s._v(" "),t("p",[t("img",{attrs:{src:"/inbox/git2.png",alt:""}})]),s._v(" "),t("p",[s._v("推送改动："),t("code",[s._v("git push origin <branchname>")]),s._v(" 将 HEAD 推送到远端仓库。")]),s._v(" "),t("p",[s._v("连接服务器："),t("code",[s._v("git remote add <servername> <server>")])]),s._v(" "),t("p",[s._v("分支：master 是默认分支。")]),s._v(" "),t("p",[s._v('分支是用来将特性开发绝缘开来的。在你创建仓库的时候，master 是"默认的"分支。在其他分支上进行开发，完成后再将它们合并到主分支上。')]),s._v(" "),t("p",[s._v("使用分支意味着你可以从开发主线上分离开来，然后在不影响主线的同时继续工作。")]),s._v(" "),t("p",[s._v("创建分支并切换："),t("code",[s._v("git checkout -b feature_x")])]),s._v(" "),t("p",[s._v("切换分支："),t("code",[s._v("git checkout master")])]),s._v(" "),t("p",[s._v("删掉分支："),t("code",[s._v("git branch -d feautre_x")])]),s._v(" "),t("p",[s._v("更新本地仓库："),t("code",[s._v("git pull")]),s._v("，"),t("code",[s._v("fetch")]),s._v(" 并 "),t("code",[s._v("merge")]),s._v(" 远端的改动。")]),s._v(" "),t("p",[t("code",[s._v("git fetch <alias> <branch>")]),s._v(" 将远程主机的最新内容拉到本地。")]),s._v(" "),t("p",[s._v("取回更新后，会返回一个FETCH_HEAD ，指的是某个branch在服务器上的最新状态，我们可以在本地通过它查看刚取回的更新信息")]),s._v(" "),t("p",[t("code",[s._v("git log -p FETCH_HEAD")])]),s._v(" "),t("p",[t("code",[s._v("git merge <alias/branch>")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("          A---B---C feature\n         /\nD---E---F master\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("将分支合并到当前分支中。")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("          A---B---C feature\n         /         master\nD---E---F\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[t("code",[s._v("--no-ff")]),s._v(" 会让 Git 生成一个新的提交对象，禁止快进式合并。")]),s._v(" "),t("p",[t("code",[s._v('git merge --no-ff -m "xxx" <alias/branch>')])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("          A---B---C feature\n         /         \\\nD---E---F-----------G master\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("--no-ff 禁止了快进，所以会生成一个新的提交，master 指向 G。")]),s._v(" "),t("p",[t("code",[s._v("git pull")]),s._v(" 相当于："),t("code",[s._v("git fetch origin main; git merge FETC_HEAD")])]),s._v(" "),t("p",[s._v("要合并到其他分支，执行："),t("code",[s._v("git merge <branch>")])]),s._v(" "),t("p",[s._v("如果有冲突，手动合并，并使用 "),t("code",[s._v("git add <filename>")]),s._v(" 标记合并成功。")]),s._v(" "),t("p",[t("code",[s._v("git diff <source branch> <target branch>")]),s._v(" 预览差异。")]),s._v(" "),t("p",[s._v("只要不与 origin 服务器连接，"),t("code",[s._v("origin/master")]),s._v(" 指针就不会移动。")]),s._v(" "),t("p",[t("img",{attrs:{src:"/inbox/git1.png",alt:""}})]),s._v(" "),t("p",[t("img",{attrs:{src:"/inbox/fetch.png",alt:""}})]),s._v(" "),t("p",[s._v("标签："),t("code",[s._v("git tag 1.0.0 1b2e1d63ff")]),s._v(" 创建一个 1.0.0 的标签。")]),s._v(" "),t("p",[s._v("获取提交 id: "),t("code",[s._v("git log")])]),s._v(" "),t("p",[s._v("查看所有分支："),t("code",[s._v("git branch -a")])]),s._v(" "),t("p",[t("code",[s._v('"A Dog" = git log --all --decorate --oneline --graph')])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("git log --all --decorate --oneline --graph\n\n--oneline \t日志单行显示\n--graph\t\t分支图显示\n--decorate \t可显示分支名称\n--all\t\t显示所有分支\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("替换本地改动："),t("code",[s._v("git checkout --<filename>")])]),s._v(" "),t("p",[s._v("此命令会使用 HEAD 中的最新内容替换掉你的工作目录中的文件。")]),s._v(" "),t("p",[s._v("已添加到暂存区的改动以及新文件都不会受到影响。")]),s._v(" "),t("p",[s._v("如果想丢弃本地的所有改动与提交，可以到服务器上获取最新的版本历史，并将你本地主分支指向它：")]),s._v(" "),t("p",[t("code",[s._v("git fetch origin")])]),s._v(" "),t("p",[t("code",[s._v("git reset --hard origin/master")])]),s._v(" "),t("p",[s._v("查看仓库当前的状态，显示有变更的文件："),t("code",[s._v("git status")])]),s._v(" "),t("p",[s._v("将文件从暂存区和工作区删除："),t("code",[s._v("git rm")])]),s._v(" "),t("p",[s._v("生成 SSH keys：")]),s._v(" "),t("p",[t("code",[s._v('$ ssh-keygen -t ed25519 -C "your_email@example.com"')])]),s._v(" "),t("p",[s._v("设置 username 和 email：")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--global")]),s._v(" user.name "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"your name"')]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--global")]),s._v(" user.email "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"your_email@youremail.com"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"廖雪峰-git-教程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#廖雪峰-git-教程"}},[s._v("#")]),s._v(" 廖雪峰 git 教程")]),s._v(" "),t("p",[t("code",[s._v("git init")]),s._v(" 初始化版本库。")]),s._v(" "),t("p",[t("code",[s._v("git add 文件名")]),s._v(" 把文件添加到暂存区。")]),s._v(" "),t("p",[t("code",[s._v('git commit -m "提交消息"')]),s._v(" 把文件提交到 "),t("code",[s._v("HEAD")]),s._v("。")]),s._v(" "),t("p",[t("code",[s._v("git status")]),s._v(" 显示工作树状态。")]),s._v(" "),t("p",[t("code",[s._v("git diff")]),s._v(" 查看尚未缓存的改动 。")]),s._v(" "),t("p",[t("code",[s._v("git diff --cached")]),s._v(" 查看已缓存的改动。")]),s._v(" "),t("p",[t("code",[s._v("git diff HEAD")]),s._v(" 查看已缓存的和未缓存的所有改动。")]),s._v(" "),t("p",[t("code",[s._v("git rm [-r] --cached 文件名")]),s._v(" 从暂存区删除文件（夹），不会删除本地文件。")]),s._v(" "),t("p",[t("code",[s._v("git rm --cached .")]),s._v(" 清空暂存区。")]),s._v(" "),t("p",[t("code",[s._v("git log --oneline --graph --decorate --all")]),s._v(" 查看提交日志。")]),s._v(" "),t("p",[t("code",[s._v("HEAD")]),s._v(" 表示当前版本，即最新的提交。"),t("code",[s._v("HEAD^")]),s._v(" 上一个提交。"),t("code",[s._v("HEAD^100")]),s._v("，往上 100 个版本。")]),s._v(" "),t("p",[t("code",[s._v("git reset --hard HEAD^")]),s._v(" 退回到上一个版本。")]),s._v(" "),t("p",[t("code",[s._v("git reset --hard 1094a")]),s._v(" 退回到指定版本。")]),s._v(" "),t("p",[s._v("回退版本时仅仅是更改 HEAD 指向，然后更新工作区。")]),s._v(" "),t("p",[t("code",[s._v("git reflog")]),s._v(" 查看历史命令。")]),s._v(" "),t("p",[s._v("工作区、暂存区、版本库。"),t("code",[s._v("git add")]),s._v(" 把所有要提交的修改放到暂存区。"),t("code",[s._v("git commit")]),s._v(" 把所有暂存区的修改提交到版本库。")]),s._v(" "),t("p",[t("code",[s._v("git checkout -- 文件名")]),s._v(" 丢弃工作区的修改。")]),s._v(" "),t("p",[t("code",[s._v("git reset HEAD 文件名")]),s._v(" 把暂存区的修改撤销掉，回滚。")]),s._v(" "),t("p",[t("code",[s._v("git rm")]),s._v(" 从本地中删除文件。")]),s._v(" "),t("p",[t("code",[s._v("git checkout -- 文件名")]),s._v(" 用版本库的文件还原工作区的版本。从来没有添加到版本库的文件，是无法恢复的。")]),s._v(" "),t("p",[t("code",[s._v('ssh-keygen -t rsa -C "youremail@example.com"')]),s._v(" 创建 SSH Key。")]),s._v(" "),t("p",[t("code",[s._v("git remote add origin git@github.com:xxxxxx/xxx.git")]),s._v(" 添加远程库。")]),s._v(" "),t("p",[s._v("远程库名字就是 origin。")]),s._v(" "),t("p",[t("code",[s._v("git push origin master")]),s._v(" 把当前分支 "),t("code",[s._v("master")]),s._v(" 推送到 origin。")]),s._v(" "),t("p",[t("code",[s._v("git remote -v")]),s._v(" 查看远程库信息。")]),s._v(" "),t("p",[t("code",[s._v("git remote rm 库名")]),s._v(" 删除库。")]),s._v(" "),t("p",[t("code",[s._v("git clone git@github.com:xxx/xxx.git")]),s._v(" 克隆一个本地库。")]),s._v(" "),t("p",[s._v("主分支，"),t("code",[s._v("master")]),s._v(" 分支。")]),s._v(" "),t("p",[t("code",[s._v("git checkout -b dev")]),s._v(" 创建并切换到 dev 分支。")]),s._v(" "),t("p",[s._v("相当于：")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch dev\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout dev\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("切换到分支 "),t("code",[s._v("dev")]),s._v(" 然后提交修改后，切换分支将无法看到修改。")]),s._v(" "),t("p",[t("code",[s._v("git merge 分支名")]),s._v(" 合并分支。（默认Fast forward）。")]),s._v(" "),t("p",[t("code",[s._v('git merge --no-ff -m "提交信息" 分支名')]),s._v(" 不使用 Fast forward。")]),s._v(" "),t("p",[t("code",[s._v("git branch -d 分支名")]),s._v(" 删除分支。")]),s._v(" "),t("p",[t("code",[s._v("git push origin -d 分支名")]),s._v(" 删除远程分支。")]),s._v(" "),t("p",[s._v("git 鼓励使用分支完成某个任务，合并后删除分支。")]),s._v(" "),t("p",[s._v("合并分支后可能存在冲突，修改冲突后重新提交合并即完成。")]),s._v(" "),t("p",[s._v("git 使用 Fast forward 模式删除分支后会丢掉分支信息。")]),s._v(" "),t("p",[t("strong",[s._v("分支策略")])]),s._v(" "),t("p",[s._v("main 分支应该是稳定的，用来发布新版本，平时不在上面干活。")]),s._v(" "),t("p",[s._v("dev 分支用来开发。需要发布版本时，再把 dev 分支合并到 main 分支。")]),s._v(" "),t("p",[s._v("每个开发者都有自己的分支，基于 dev 分支开发。")]),s._v(" "),t("p",[t("code",[s._v("git stash")]),s._v(" 将未提交的修改（工作区的修改和暂存区的修改）暂时储藏起来。")]),s._v(" "),t("p",[t("code",[s._v("git stash pop")]),s._v(" 将之前储藏的修改取出来。")]),s._v(" "),t("p",[t("code",[s._v("git cherry-pick 4c805e2")]),s._v(" 复制一个特定的提交到当前分支。")]),s._v(" "),t("p",[s._v("修复 bug 时，会创建新的 bug 分支进行修复，然后合并，删除。")]),s._v(" "),t("p",[s._v("如果有工作未完成，可以保护现场，然后修复 bug，修复后，"),t("code",[s._v("git stash pop")]),s._v(" 回到工作\n现场。在其他分支修复的 bug，想要合并到 dev 分支，可通过\n"),t("code",[s._v("git cherry-pick <commit>")]),s._v(" 命令复制，避免重复劳动。")]),s._v(" "),t("p",[s._v("添加一个新功能，最好新建一个 feature 分支，完成后合并，最后删除分支。")]),s._v(" "),t("p",[s._v("删除一个未合并的分支，使用：")]),s._v(" "),t("p",[t("code",[s._v("git branch -D feature")]),s._v(" 强制删除 "),t("code",[s._v("feature")]),s._v(" 参数。")]),s._v(" "),t("p",[s._v("推送分支："),t("code",[s._v("git push origin dev")])]),s._v(" "),t("p",[s._v("main 分支是主分支，因此要时刻与远程同步。")]),s._v(" "),t("p",[s._v("dev 分支是开发分支，团队所有成员在上面工作，也需要与远程同步。")]),s._v(" "),t("p",[s._v("bug 分支只用于在本地修复 bug。")]),s._v(" "),t("p",[s._v("feature 分支是否推到远程，取决与是否需要合作。")]),s._v(" "),t("p",[s._v("抓取分支")]),s._v(" "),t("p",[t("code",[s._v("git clone git@github.com:xxx/xxx.git")]),s._v(" 只会抓取 main 分支。")]),s._v(" "),t("p",[t("code",[s._v("git checkout -b dev origin/dev")]),s._v(" 抓取远程 dev 分支。")]),s._v(" "),t("p",[s._v("多人协作的工作模式：")]),s._v(" "),t("ol",[t("li",[t("code",[s._v("git push origin <分支>")]),s._v(",远程仓库同步到本地版本库，不会影响工作区。")]),s._v(" "),t("li",[s._v("推送失败，则合并,"),t("code",[s._v("git fetch")]),s._v("，"),t("code",[s._v("git merge")]),s._v("。")]),s._v(" "),t("li",[s._v("合并有冲突，则解决冲突，在本地提交。")]),s._v(" "),t("li",[s._v("解决冲突后 "),t("code",[s._v("git push origin <分支>")])]),s._v(" "),t("li",[s._v("如果本地分支和远程分支的链接关系没有建立，则 "),t("code",[s._v("git branch --set-upstream-to <分支> origin/<分支>")])])]),s._v(" "),t("p",[s._v("变基："),t("code",[s._v("git rebase")]),s._v(" 合并 commit 成直线。")]),s._v(" "),t("p",[s._v("创建标签："),t("code",[s._v("git lag v1.0")]),s._v(" 在当前分支打标签。")]),s._v(" "),t("p",[t("code",[s._v("git tag")]),s._v(" 查看所有标签。")]),s._v(" "),t("p",[t("code",[s._v("git tag v0.9 f52c633")]),s._v(" 对某次 commit 打标签。")]),s._v(" "),t("p",[t("code",[s._v('git tag -a v0.1 -m "xxx" 1094adb')]),s._v(" 创建带说明的标签。")]),s._v(" "),t("p",[t("code",[s._v("git show <tagname>")]),s._v(" 查看标签说明。")]),s._v(" "),t("p",[t("code",[s._v("git tag -d v0.1")]),s._v(" 删除标签。")]),s._v(" "),t("p",[s._v("创建的标签都只存储在本地，不会自动推送到远程。")]),s._v(" "),t("p",[t("code",[s._v("git push origin <tagname>")]),s._v(" 推送某个标签到远程。")]),s._v(" "),t("p",[t("code",[s._v("git push origin --tags")]),s._v(" 推送所有本地标签。")]),s._v(" "),t("p",[s._v("从远程删除标签:")]),s._v(" "),t("ol",[t("li",[s._v("从本地删除。")])]),s._v(" "),t("p",[t("code",[s._v("git tag -d v0.9")])]),s._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[s._v("从远程删除。")])]),s._v(" "),t("p",[t("code",[s._v("git push origin :refs/tags/v0.9")])]),s._v(" "),t("p",[s._v("让 git 显示不同颜色："),t("code",[s._v("git config --global color.ui true")])]),s._v(" "),t("p",[s._v("在Git工作区的根目录下创建一个特殊的.gitignore文件，\n然后把要忽略的文件名填进去，Git就会自动忽略这些文件。")]),s._v(" "),t("p",[t("code",[s._v("git check-ignore -v 文件名")])]),s._v(" "),t("p",[s._v("检查哪个规则忽略了文件。")]),s._v(" "),t("p",[s._v("指定文件排除在 "),t("code",[s._v(".gitignore")]),s._v(" 外：")]),s._v(" "),t("p",[t("code",[s._v("!main.o")])]),s._v(" "),t("p",[t("code",[s._v("c.gitignore")]),s._v(" 文件示例：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v(".*\n!.gitignore\n# Prerequisites\n*.d\n\n# Object files\n*.o\n*.ko\n*.obj\n*.elf\n\n# Linker output\n*.ilk\n*.map\n*.exp\n\n# Precompiled Headers\n*.gch\n*.pch\n\n# Libraries\n*.lib\n*.a\n*.la\n*.lo\n\n# Shared objects (inc. Windows DLLs)\n*.dll\n*.so\n*.so.*\n*.dylib\n\n# Executables\n*.exe\n*.out\n*.app\n*.i*86\n*.x86_64\n*.hex\n\n# Debug files\n*.dSYM/\n*.su\n*.idb\n*.pdb\n\n# Kernel Module Compile Results\n*.mod*\n*.cmd\n.tmp_versions/\nmodules.order\nModule.symvers\nMkfile.old\ndkms.conf\n\n**/bin/*\n*.*~\nobj/\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br"),t("span",{staticClass:"line-number"},[s._v("49")]),t("br"),t("span",{staticClass:"line-number"},[s._v("50")]),t("br"),t("span",{staticClass:"line-number"},[s._v("51")]),t("br"),t("span",{staticClass:"line-number"},[s._v("52")]),t("br"),t("span",{staticClass:"line-number"},[s._v("53")]),t("br"),t("span",{staticClass:"line-number"},[s._v("54")]),t("br"),t("span",{staticClass:"line-number"},[s._v("55")]),t("br"),t("span",{staticClass:"line-number"},[s._v("56")]),t("br"),t("span",{staticClass:"line-number"},[s._v("57")]),t("br"),t("span",{staticClass:"line-number"},[s._v("58")]),t("br")])]),t("p",[s._v("搭建 git 服务器：")]),s._v(" "),t("ol",[t("li",[s._v("安装 git。")]),s._v(" "),t("li",[s._v("创建 git 用户，运行 git 服务。")]),s._v(" "),t("li",[s._v("创建证书登录。")]),s._v(" "),t("li",[s._v("初始化 git 仓库。")]),s._v(" "),t("li",[s._v("禁用 shell 登录。")]),s._v(" "),t("li",[s._v("克隆远程库。")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" adduser "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 把所有要登陆的用户的公钥，即 id_rsa.pub 文件，导入到")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /home/git/.ssh/authorized_keys 文件里，一行一个。")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 选定一个目录作为 git 仓库，如 /srv/sample.git")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在 /srv 目录下执行命令：")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建裸仓库，没有工作区")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" init "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--bare")]),s._v(" sample.git\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 服务器上的 git 仓库通常以 .git 结尾，把 owner 改为 git")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-R")]),s._v(" git:git sample.git\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 编辑 /etc/passwd 禁用 shell 登录")]),s._v("\ngit:x:1001:1001:,,,:/home/git:/bin/bash\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 改为：")]),s._v("\ngit:x:1001:1001:,,,:/home/git:/usr/bin/git-shell\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# git-shell 每次一登陆就自动退出。")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 克隆远程仓库：")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone git@server:/srv/sample.git\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br")])]),t("h3",{attrs:{id:"参考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[s._v("#")]),s._v(" 参考")]),s._v(" "),t("ul",[t("li",[t("p",[t("a",{attrs:{href:"https://www.liaoxuefeng.com/wiki/896043488029600",target:"_blank",rel:"noopener noreferrer"}},[s._v("廖雪峰 git 教程"),t("OutboundLink")],1)])]),s._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://www.runoob.com/git/git-tutorial.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("菜鸟教程"),t("OutboundLink")],1)])]),s._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://www.runoob.com/manual/git-guide/",target:"_blank",rel:"noopener noreferrer"}},[s._v("git 简明指南"),t("OutboundLink")],1)])])])])}),[],!1,null,null,null);e.default=n.exports}}]);