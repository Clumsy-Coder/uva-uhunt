## [1.0.0-development.5](https://github.com/Clumsy-Coder/uva-uhunt/compare/1.0.0-development.4...1.0.0-development.5) (2024-1-12)


### :sparkles: Features

* **api:problemNum:ranklist:** add endpoint `/api/problems/ranklist/[problemNum]` ([1a35cec](https://github.com/Clumsy-Coder/uva-uhunt/commit/1a35cec38173c12ce1078dda8795cc807ebacbd3))
* **api:problemNum:submission:** add endpoint `/api/submissions/[problemNum]` ([36ed144](https://github.com/Clumsy-Coder/uva-uhunt/commit/36ed1442d43c849501ce540771ec65c300b968ba))
* **api:submission:language:** add endpoint `/api/submissions/language/[problemNum]` ([fd4c856](https://github.com/Clumsy-Coder/uva-uhunt/commit/fd4c856a0f7943d1476afdc714a726daf3747bbd))
* **api:submission:** add endpoint `/api/submissions/overtime/[problemNum]` ([304a563](https://github.com/Clumsy-Coder/uva-uhunt/commit/304a5632393094c51671213156267d1d73968ba5))
* **components:charts:** add `ProblemVerdictChart` component ([2104011](https://github.com/Clumsy-Coder/uva-uhunt/commit/2104011cc6811b4d854ef7e2c88e52cd373046e8))
* **components:charts:** add `SubmissionLanguageRadarChart` component ([fc5ecfc](https://github.com/Clumsy-Coder/uva-uhunt/commit/fc5ecfc46270ddee9da516ca2952c51232d65a33))
* **components:charts:** add `SubmissionsOvertimeChart` component ([16d1311](https://github.com/Clumsy-Coder/uva-uhunt/commit/16d1311f4862b8c751cf69c1eeeb2ce5ef8b927a))
* **components:charts:** add Recharts custom tooltip component ([b6ef657](https://github.com/Clumsy-Coder/uva-uhunt/commit/b6ef6576adaa4d3c2c41244e8abd637f44da09b0))
* **components:** add `VirtualTable` component ([09259ea](https://github.com/Clumsy-Coder/uva-uhunt/commit/09259ea6136050bb7a0338efd6afdabc4225b18b))
* **page:problemNum:** fetch stats for `/problems/[problemNum]` page ([afe0752](https://github.com/Clumsy-Coder/uva-uhunt/commit/afe075219fcb5d52a165228ef2d7210c91bf8aa9))
* **page:problemNum:** render `ProblemVerdictChart` component ([acc2eac](https://github.com/Clumsy-Coder/uva-uhunt/commit/acc2eac151fb0b8c5713df1007c8ad627a0b7fac))
* **page:problemNum:** render `SubmissionLanguageRadarChart` component ([6ebcb52](https://github.com/Clumsy-Coder/uva-uhunt/commit/6ebcb5272a10374aca6cb3a6bb5a847c3b4ee890))
* **page:problemNum:** render `SubmissionOvertimeChart` component ([3f2f7c4](https://github.com/Clumsy-Coder/uva-uhunt/commit/3f2f7c4e8af0eeb57736696c36d2164f8572013a))
* **page:problemNum:** render `VirtualTable` for `Problem submissions` ([d271d90](https://github.com/Clumsy-Coder/uva-uhunt/commit/d271d90ee05dfd43f308c453e9d42947f52d3392))
* **page:problemNum:** render `VirtualTable` for ranklist ([e3ac245](https://github.com/Clumsy-Coder/uva-uhunt/commit/e3ac24512fd3c74f2f3865cfd1e841e19d2bedd3))
* **page:problemNum:** set title as link to view problem pdf ([ffd247c](https://github.com/Clumsy-Coder/uva-uhunt/commit/ffd247c5f908514de35828902d65e7840d418124))
* **shadcn:data-table:** set DataTable height if provided ([c58b14f](https://github.com/Clumsy-Coder/uva-uhunt/commit/c58b14f0c83aaa4a32717dc10716ff25c1a243e8))

## [1.0.0-development.4](https://github.com/Clumsy-Coder/uva-uhunt/compare/1.0.0-development.3...1.0.0-development.4) (2024-1-3)


### :sparkles: Features

* **components:data-table:** display `language` in live submissions data-table ([dd6e3db](https://github.com/Clumsy-Coder/uva-uhunt/commit/dd6e3dbfc0e0d34d861bcb258fea359dcace996c))
* **components:data-table:** display `problem number` in live submissions data-table ([44f75d5](https://github.com/Clumsy-Coder/uva-uhunt/commit/44f75d5e7636f3155f022f4a11d0677df5c41cc1))
* **components:data-table:** display `problem title` in live submissions data-table ([6c131eb](https://github.com/Clumsy-Coder/uva-uhunt/commit/6c131eb60bd4c94e8cd5d68d10d71cca1d3c1527))
* **components:data-table:** display `rank` in live submissions data-table ([293387b](https://github.com/Clumsy-Coder/uva-uhunt/commit/293387bb1ca547ff5fedc386d810e2432f48b789))
* **components:data-table:** display `runtime` in live submissions data-table ([b319bfe](https://github.com/Clumsy-Coder/uva-uhunt/commit/b319bfe872d7faa3b3bf79122bb4e878ee023eb4))
* **components:data-table:** display `submit time` in live submissions data-table ([77e225e](https://github.com/Clumsy-Coder/uva-uhunt/commit/77e225efb8342ea390aae846eeb90d91ef695c01))
* **components:data-table:** display `username` in live submissions data-table ([3ad7c53](https://github.com/Clumsy-Coder/uva-uhunt/commit/3ad7c53efa4816d41bb288bcfa71284d1d8f06c6))
* **components:data-table:** display `verdict` in live submissions data-table ([7b57189](https://github.com/Clumsy-Coder/uva-uhunt/commit/7b5718967bc0f16a9cfd4b423fda2a9410534369))
* **components:data-table:** display submit time using tooltip ([30c02eb](https://github.com/Clumsy-Coder/uva-uhunt/commit/30c02eb561d046316feb77d6674f48e2338a9e2f))
* **page:home:** display the `DataTable` for live submissions ([fc356b1](https://github.com/Clumsy-Coder/uva-uhunt/commit/fc356b1569ece65edf57c9b5e4c715cf444c9128))

## [1.0.0-development.3](https://github.com/Clumsy-Coder/uva-uhunt/compare/1.0.0-development.2...1.0.0-development.3) (2024-1-2)


### :sparkles: Features

* **components:navbar:** highlight active links ([1c21c75](https://github.com/Clumsy-Coder/uva-uhunt/commit/1c21c75854c6374195b82f45b6108a498897f553))
* **components:** add a Link to the problem page in `DataTable` for `/problems` ([e9c16f5](https://github.com/Clumsy-Coder/uva-uhunt/commit/e9c16f524f70fd656bab601f76c97f8e72eef0e2))
* **components:** add column properties to be sortable `DataTable` component ([9b1ab5d](https://github.com/Clumsy-Coder/uva-uhunt/commit/9b1ab5ddbca663b0778f25c36a58ab54efaed41d))
* **page:problems:** display all problems using `DataTable` component ([401ae1c](https://github.com/Clumsy-Coder/uva-uhunt/commit/401ae1c94c4c48299ed8b38e2d451b539f95a87e))
* **shadcn:data-table:** add button to clear filter ([5072674](https://github.com/Clumsy-Coder/uva-uhunt/commit/5072674429d13a38139811800640a996c3082b8a))
* **shadcn:data-table:** add column header component for DataTable ([165aa6c](https://github.com/Clumsy-Coder/uva-uhunt/commit/165aa6cf119bc2264698be5088b78ee73a30946a)), closes [/github.com/shadcn-ui/ui/blob/fb614ac2921a84b916c56e9091aa0ae8e129c565/apps/www/app/examples/tasks/components/columns.tsx#L38-L46C4](https://github.com/Clumsy-Coder//github.com/shadcn-ui/ui/blob/fb614ac2921a84b916c56e9091aa0ae8e129c565/apps/www/app/examples/tasks/components/columns.tsx/issues/L38-L46C4)
* **shadcn:data-table:** add loading component for DataTable ([3851747](https://github.com/Clumsy-Coder/uva-uhunt/commit/3851747fdebe98852d772742ee3fc570fddc4da2))
* **shadcn:** add `DataTablePagination` component ([2500aa1](https://github.com/Clumsy-Coder/uva-uhunt/commit/2500aa18a838a699d2a6b3e2314830e992bc31f2))
* **shadcn:** add ability to filter any column in `DataTable` component ([5ec2df1](https://github.com/Clumsy-Coder/uva-uhunt/commit/5ec2df1db765eba419fad4233dc14cf508c1ced5))
* **shadcn:** add column scrolling to `DataTable` component ([55f98b4](https://github.com/Clumsy-Coder/uva-uhunt/commit/55f98b40feea5fcc0651e41b32ae808f571fb8d3))
* **shadcn:** add column visibility toggle for `DataTable` component ([c623e43](https://github.com/Clumsy-Coder/uva-uhunt/commit/c623e43515f9ed918da1afd6537b81a26cb028f4))
* **shadcn:** add pagination to `DataTable` component ([2c7df8e](https://github.com/Clumsy-Coder/uva-uhunt/commit/2c7df8e66f51d9c1e567b61dfa745e96b64bacbd))

## [1.0.0-development.2](https://github.com/Clumsy-Coder/uva-uhunt/compare/1.0.0-development.1...1.0.0-development.2) (2023-12-31)


### :sparkles: Features

* **api:poll:** process submissions from endpoint `/api/poll/[pollId]` ([ad53d2e](https://github.com/Clumsy-Coder/uva-uhunt/commit/ad53d2eaa94daf3c5df085a8c6bfb57ae5d746b4))
* **api:** add api endpoint `/api/poll` ([c60046b](https://github.com/Clumsy-Coder/uva-uhunt/commit/c60046ba354413e12cf0b870f0caa133690b8464))
* **api:** add endpoint `/api/problems/:problemNum` ([62ce762](https://github.com/Clumsy-Coder/uva-uhunt/commit/62ce762f1485825b5d2a4d8f714b504b68ab6484))
* **api:** add endpoint `/api/problems` ([e65ce18](https://github.com/Clumsy-Coder/uva-uhunt/commit/e65ce18a9dc4881759dd43eca4160cf09f10d24b))
* **api:** add some basic checks for endpoint `/api/problems/:problemNum` ([94049cc](https://github.com/Clumsy-Coder/uva-uhunt/commit/94049cc303a633836c7e90e40c92a46d7e3f4f8c))
* **components:** add `Navbar` component ([27c1b8f](https://github.com/Clumsy-Coder/uva-uhunt/commit/27c1b8ff379a5503f72c807feec90fa8447cbfdc))
* **components:** add component `LiveSubmissionTable` ([0278c98](https://github.com/Clumsy-Coder/uva-uhunt/commit/0278c98c88c1647db38ac38193a0d21258e459ac))
* **hooks:** add react-query hook to fetch live submissions ([19f0d72](https://github.com/Clumsy-Coder/uva-uhunt/commit/19f0d72402db6d3fa10f4aa32b2ea96afc754ce7))
* **page:home:** add `Skeleton` when fetching data ([dd8b5b4](https://github.com/Clumsy-Coder/uva-uhunt/commit/dd8b5b4ea3513e94aabfd5f2c7237e0b0ebfa2ab))
* **page:home:** fetch live submissions and display it ([1d67137](https://github.com/Clumsy-Coder/uva-uhunt/commit/1d671374c2864a1fa3726da841c42cc11d7b2536))

## 1.0.0-development.1 (2023-11-05)


### :sparkles: Features

* **component:** add `darkmode-toggle` to main page ([8fa3a3b](https://github.com/Clumsy-Coder/uva-uhunt/commit/8fa3a3bc5c080fe8e79ccf27296947c0d4ad7471))
* **components:** add component `darkmode-toggle` ([a355c0f](https://github.com/Clumsy-Coder/uva-uhunt/commit/a355c0fd3f88e8a7dc97a0a760c3ce54d06ddfb4))
