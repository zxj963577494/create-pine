# GIT 工作流

基础的分支约定：

- master 主分支，受保护，每个历史都是稳定版本，每次合并都是来自一个最终发布的 release 标签
- develop 开发分支，受保护，开发者提交合并请求， code review 小组负责 review 代码，主管负责合并代码，多开发分支下以版本号  命名：develop-3.4.1
- hotfix  热修复分支 ，开发者  自行创建， 检出自 master，发布完成后及时删除，配合 issues 的 ID 命名：hotfix-123
- feature 功能分支 ，开发者  自行创建， 检出自 develop，发布完成后及时删除，配合 issues 的 ID 命名：feature-123
- bugfix BUG 修复分支，开发者自行创建，检出自 develop，发布完成后及时删除，配合 issues 的 ID 命名：bugfix-123
- preview 预发标签，在 develop 分支进入到预发阶段后用于标记某个版本，同一个版本有且只有一个，多开发分支下以版本号  命名：preview-0.1.1
- release  正式标签，在 develop 分支进入到发布阶段后用于标记某个版本，同一个版本有且只有一个，多开发分支下以版本号  命名：release-0.1.1

## 版本开发流程（单版本多分枝开发同样适用）

举个例子，我们开始开发 3.4.1 这个版本（非版本的功能点集合使用 ISSUE 管理）

- 从 master 检出 develop-3.4.1 分支 
- 开发者从 develop-3.4.1 检出 feature-3.4.1-[ISSUE-ID]分支。
  <br/><font color="red">功能点使用 feature-开头，BUG 修复使用 bugfix- 开头。</font>
  <br/>一个功能点 feature 对应一个分支，不要将多个功能点放在一个分支下。当特殊情况一个 feature 由多人协同开发的情况下，如分别由张三、李四两个同学同时开发时，则分支名为 feature-3.4.1-[ISSUE-ID]-zhangsan 和 feature-3.4.1-[ISSUE-ID]-lisi (可以是姓名缩写，不冲突就可以)。
  <br/><font color="red">开发者养成每天拉取 master 最新代码的习惯</font>
- 开发者任务开发完成，经过自测完毕后，生成 feature 到 develop-3.4.1 的 MR。由主管安排进行代码评审，完成代码合并操作。
- 合并 feature 到 develop-3.4.1 成功后，将 develop-3.4.1 代码同步到当前 feature 分支。

- 完成 develop-3.4.1 分支  测试
- 进入预发阶段，主管给 develop-3.4.1 分支打对应的 preview-3.4.1-[ISSUE-ID]标签，如果预发后还有修改，删除标签重新打
- 进入上线阶段，主管给 develop-3.4.1 分支打对应的 release-3.4.1-[ISSUE-ID]标签
- 主管检查 release 标签，如果发现 master 的代码版本比 release 新的时候，撤销标签并通知到所有开发者。要求开发者从 master 更新代码，并重复上面第三步开始的步骤。<br/>如果检查 release 标签无误，主管生成 release 到 master 的 MR。
- 主管（或指定开发者）发起上线部署流程审批。

上线完成以后，再要修改这个分支就要进入『线上热修复』流程

## 线上热修复的流程

- 开发者从 master 检出 hotfix 分支，命名 hotfix-[ISSUE-ID]分支
- 开发者开发完成 hotfix 分支，自测完毕后，提测，走测试流程
- 进入预发阶段，主管给 hotfix 分支打对应的 preview-[ISSUE-ID]标签，如果预发后还有修改，删除标签重新打
- 进入上线阶段，主管给 hotfix 分支打对应的 release-[ISSUE-ID]标签
- 主管检查 release 标签，如果发现 master 的代码版本比 release 新的时候，撤销标签并通知到开发者。要求开发者从 master 更新代码，并重复上面第二部开始的步骤。<br/>如果检查 release 标签无误，主管生成 release 到 master 的 MR。
- 主管（或指定开发者）发起上线部署流程审批。

# 上线流程

- 主管检查确认已同步 master 分支代码，已完成 release 标签，并已生成 release 标签版本向 master 的 MR
- 发布者检查 release 标签和 master 之间的合并关系，并重新发布 master 分支

所有发布的代码检查在主管这里要全部做完，后继的发布者只会检查 release 标签和 master 之间的合并关系
完成上线以后，主管负责删除相关的 feature、bugfix、hotfix（保留 develop 分支）
