## 1.0.0 (2024-1-16)


### :sparkles: Features

* **api:poll:** process submissions from endpoint `/api/poll/[pollId]` ([690c5af](https://github.com/Clumsy-Coder/uva-uhunt/commit/690c5afba9af32c68fa090d8a854b8a06237df29))
* **api:problemNum:ranklist:** add endpoint `/api/problems/ranklist/[problemNum]` ([7f87327](https://github.com/Clumsy-Coder/uva-uhunt/commit/7f8732714b6803296bfd5acf08148252d22561a8))
* **api:problemNum:submission:** add endpoint `/api/submissions/[problemNum]` ([7b71529](https://github.com/Clumsy-Coder/uva-uhunt/commit/7b71529c5b502e3ff50635ad63cf3ce5e658cbb1))
* **api:search:** add endpoint `/api/search/[searchStr]` ([0b7c987](https://github.com/Clumsy-Coder/uva-uhunt/commit/0b7c987e734c0bb5b797c139a34b011bb5c6730d))
* **api:submission:language:** add endpoint `/api/submissions/language/[problemNum]` ([a344a01](https://github.com/Clumsy-Coder/uva-uhunt/commit/a344a012847fee4102db59c89d71541ea7b2eb95))
* **api:submission:** add endpoint `/api/submissions/overtime/[problemNum]` ([df41e56](https://github.com/Clumsy-Coder/uva-uhunt/commit/df41e56b0047505a13f1d6942aa11a0d9ce9ef3a))
* **api:user:submissions:verdict:** add endpoint `/api/users/[username]/submissions/verdict` ([b3c619e](https://github.com/Clumsy-Coder/uva-uhunt/commit/b3c619e6e049017411997940e35fdc9885640cee))
* **api:user:submissions:** add endpoint `/api/users/[username]/submissions` ([4d7cfa1](https://github.com/Clumsy-Coder/uva-uhunt/commit/4d7cfa10da17754337f0c17528d4c9b9b3652e73))
* **api:users:attempted:** add endpoint `/api/users/[username]/submissions/attempted` ([a3ed3a4](https://github.com/Clumsy-Coder/uva-uhunt/commit/a3ed3a4f6dd4400d880185259f63ac6247aa117d))
* **api:users:submissions:** add endpoint `/api/users/[username]/submissions/language` ([516e2b4](https://github.com/Clumsy-Coder/uva-uhunt/commit/516e2b4fef5ad049dcca4db249595b29c7d0c76d))
* **api:users:submissions:** add endpoint `/api/users/[username]/submissions/overtime` ([a5ddbc4](https://github.com/Clumsy-Coder/uva-uhunt/commit/a5ddbc448ed76e5b6ed057765d54bb93dd85ea9c))
* **api:** add api endpoint `/api/poll` ([6e907a2](https://github.com/Clumsy-Coder/uva-uhunt/commit/6e907a2d39504500845b7ef866a1c33aee734099))
* **api:** add endpoint `/api/problems/:problemNum` ([9936ed1](https://github.com/Clumsy-Coder/uva-uhunt/commit/9936ed1342002c97d45bcfb9eed61554b79e2829))
* **api:** add endpoint `/api/problems` ([96ea741](https://github.com/Clumsy-Coder/uva-uhunt/commit/96ea7417433552902c43be044be9348c5a6a4b12))
* **api:** add some basic checks for endpoint `/api/problems/:problemNum` ([3932cfd](https://github.com/Clumsy-Coder/uva-uhunt/commit/3932cfda19137cee9a72596a3e697fd8d057e135))
* **component:** add `darkmode-toggle` to main page ([8fa3a3b](https://github.com/Clumsy-Coder/uva-uhunt/commit/8fa3a3bc5c080fe8e79ccf27296947c0d4ad7471))
* **components:charts:** add `ProblemVerdictChart` component ([02d2a0c](https://github.com/Clumsy-Coder/uva-uhunt/commit/02d2a0c610642cdda861fb3af9f8e763e7f2007b))
* **components:charts:** add `SolvedVsAttemptedDonutChart` component ([8b3c669](https://github.com/Clumsy-Coder/uva-uhunt/commit/8b3c669bdde6b30142b65f762a98cc65f49211c6))
* **components:charts:** add `SubmissionLanguageRadarChart` component ([4d22faf](https://github.com/Clumsy-Coder/uva-uhunt/commit/4d22faffc3982fbf491f474d3f6367c024b59c58))
* **components:charts:** add `SubmissionsOvertimeChart` component ([6363ce4](https://github.com/Clumsy-Coder/uva-uhunt/commit/6363ce4759138f3bd7ad9ffc1ce8d90f5a765b60))
* **components:charts:** add Recharts custom tooltip component ([73b0f7b](https://github.com/Clumsy-Coder/uva-uhunt/commit/73b0f7b994bfb130b4d722cfb980076167d1c90f))
* **components:data-table:** display `language` in live submissions data-table ([4da0413](https://github.com/Clumsy-Coder/uva-uhunt/commit/4da041377d7b5f68ba81b00ddb2bbe8c93deb785))
* **components:data-table:** display `problem number` in live submissions data-table ([954f6ca](https://github.com/Clumsy-Coder/uva-uhunt/commit/954f6cabb09b0345ffd6cd0bcb2f1344568539cc))
* **components:data-table:** display `problem title` in live submissions data-table ([00039e2](https://github.com/Clumsy-Coder/uva-uhunt/commit/00039e2f3619138abd2e9792dba9991f4e126f2f))
* **components:data-table:** display `rank` in live submissions data-table ([403df62](https://github.com/Clumsy-Coder/uva-uhunt/commit/403df6269820728d7c2efc2eed7c34bb7d7dacfa))
* **components:data-table:** display `runtime` in live submissions data-table ([fd3e949](https://github.com/Clumsy-Coder/uva-uhunt/commit/fd3e949cff015a7520ebdce0295e00e4698b5479))
* **components:data-table:** display `submit time` in live submissions data-table ([c319caf](https://github.com/Clumsy-Coder/uva-uhunt/commit/c319caf8780a65eb612a9a01d9759f068913fa22))
* **components:data-table:** display `username` in live submissions data-table ([ed202c6](https://github.com/Clumsy-Coder/uva-uhunt/commit/ed202c6399d5db81d2fef0af4bfc6f4d1c50dca8))
* **components:data-table:** display `verdict` in live submissions data-table ([15a7e5b](https://github.com/Clumsy-Coder/uva-uhunt/commit/15a7e5baaf81f3e013b43881881982a2239720c2))
* **components:data-table:** display submit time using tooltip ([2e8b547](https://github.com/Clumsy-Coder/uva-uhunt/commit/2e8b54732528328bb1fd461e3f22a68ea77bb23c))
* **components:navbar:** highlight active links ([0c5d360](https://github.com/Clumsy-Coder/uva-uhunt/commit/0c5d360c52eeb864340c249b0f913d8983fe95fd))
* **components:search:** add `searchbar` component ([4e6bc35](https://github.com/Clumsy-Coder/uva-uhunt/commit/4e6bc35bb6f9adbaaf3c8a11a153f4bbbaad7260))
* **components:** add `Navbar` component ([b2d1600](https://github.com/Clumsy-Coder/uva-uhunt/commit/b2d16006c97ac42d6ed6fdcbfeaa918e3d2bf99f))
* **components:** add `VirtualTable` component ([953f4e3](https://github.com/Clumsy-Coder/uva-uhunt/commit/953f4e3eea120f9a5b044934c8808a074f322ae1))
* **components:** add a Link to the problem page in `DataTable` for `/problems` ([b706937](https://github.com/Clumsy-Coder/uva-uhunt/commit/b7069376d613f1621045995c18ed77a318521c16))
* **components:** add column properties to be sortable `DataTable` component ([36d30b0](https://github.com/Clumsy-Coder/uva-uhunt/commit/36d30b014365cafbaa10a340b8feb9b41e532eaa))
* **components:** add component `darkmode-toggle` ([a355c0f](https://github.com/Clumsy-Coder/uva-uhunt/commit/a355c0fd3f88e8a7dc97a0a760c3ce54d06ddfb4))
* **components:** add component `LiveSubmissionTable` ([2fcb5b7](https://github.com/Clumsy-Coder/uva-uhunt/commit/2fcb5b760ca5400b4bcdc947eb2d0ba41f25c238))
* **hooks:** add react-query hook to fetch live submissions ([b219274](https://github.com/Clumsy-Coder/uva-uhunt/commit/b2192746675dfaa7f32a1c16acd03ce8592d79af))
* **page:home:** add `Skeleton` when fetching data ([4531231](https://github.com/Clumsy-Coder/uva-uhunt/commit/453123144e00cbd213a15c66baf71b4b62c7fa32))
* **page:home:** display the `DataTable` for live submissions ([36d517f](https://github.com/Clumsy-Coder/uva-uhunt/commit/36d517f0a506581aeda680f13e05fc941bcd2a74))
* **page:home:** fetch live submissions and display it ([6837e03](https://github.com/Clumsy-Coder/uva-uhunt/commit/6837e03b870dc06bed36425da6071a73483b8c86))
* **page:problemNum:** fetch stats for `/problems/[problemNum]` page ([ac44ea4](https://github.com/Clumsy-Coder/uva-uhunt/commit/ac44ea4f226a8ea3ae2d1e42bffdc89abe80c260))
* **page:problemNum:** render `ProblemVerdictChart` component ([e288bea](https://github.com/Clumsy-Coder/uva-uhunt/commit/e288bea46c6a0b38b699e65cbbd317b84d80e6cd))
* **page:problemNum:** render `SubmissionLanguageRadarChart` component ([202b76b](https://github.com/Clumsy-Coder/uva-uhunt/commit/202b76b74932965b2f7922cdc50b12269c69f751))
* **page:problemNum:** render `SubmissionOvertimeChart` component ([2636628](https://github.com/Clumsy-Coder/uva-uhunt/commit/263662830ecc74fffbd42d9ee6938fdfeaa56b62))
* **page:problemNum:** render `VirtualTable` for `Problem submissions` ([abdbb69](https://github.com/Clumsy-Coder/uva-uhunt/commit/abdbb698cc69a5e48237137ac470cc56e348aa19))
* **page:problemNum:** render `VirtualTable` for ranklist ([81fa3a0](https://github.com/Clumsy-Coder/uva-uhunt/commit/81fa3a08ac0eb8fed33db88e18eac8a98aee9fde))
* **page:problemNum:** set title as link to view problem pdf ([682925d](https://github.com/Clumsy-Coder/uva-uhunt/commit/682925db54509dfbbef1f07b09a7078c0da0017a))
* **page:problems:** display all problems using `DataTable` component ([b6183e2](https://github.com/Clumsy-Coder/uva-uhunt/commit/b6183e2dadcd15ecd30058aeef655f3c9e9acfa6))
* **page:user:** display problem solved VS user submissions with donut chart ([6c51774](https://github.com/Clumsy-Coder/uva-uhunt/commit/6c517743bf30d8f6222d26d7fada1ed08fa32587))
* **page:user:** display user submissions by language with radar chart ([234b2a2](https://github.com/Clumsy-Coder/uva-uhunt/commit/234b2a27bbc942bffa33ee6bea307bca9f03ac9d))
* **page:user:** display user submissions by verdict with bar chart ([a367e70](https://github.com/Clumsy-Coder/uva-uhunt/commit/a367e7070272547c38bdd98be4fa9d6a39959d59))
* **page:user:** display user submissions on `/users/[username]` page ([49816a8](https://github.com/Clumsy-Coder/uva-uhunt/commit/49816a8415d80ceb88d44dde3042128966886db6))
* **page:user:** display user submissions overtime with area chart ([58b34a7](https://github.com/Clumsy-Coder/uva-uhunt/commit/58b34a784f891766c278e1c5f241523a35f5423d))
* **shadcn:data-table:** add button to clear filter ([20f2f36](https://github.com/Clumsy-Coder/uva-uhunt/commit/20f2f360a8b0d2af2e54d9d39d3cebea55fe728f))
* **shadcn:data-table:** add column header component for DataTable ([3a0164e](https://github.com/Clumsy-Coder/uva-uhunt/commit/3a0164e13045b2f04b61e404d981346268f7f2b8)), closes [/github.com/shadcn-ui/ui/blob/fb614ac2921a84b916c56e9091aa0ae8e129c565/apps/www/app/examples/tasks/components/columns.tsx#L38-L46C4](https://github.com/Clumsy-Coder//github.com/shadcn-ui/ui/blob/fb614ac2921a84b916c56e9091aa0ae8e129c565/apps/www/app/examples/tasks/components/columns.tsx/issues/L38-L46C4)
* **shadcn:data-table:** add loading component for DataTable ([4b7bcc2](https://github.com/Clumsy-Coder/uva-uhunt/commit/4b7bcc2a2c078904cb8f3f7a196b2faf6e87b678))
* **shadcn:data-table:** set DataTable height if provided ([8b23994](https://github.com/Clumsy-Coder/uva-uhunt/commit/8b23994fd0866124a73b229784ddec4022d8241e))
* **shadcn:** add `DataTablePagination` component ([a654cef](https://github.com/Clumsy-Coder/uva-uhunt/commit/a654cefd3e1a65ee41ad20d2bd5b2becb547545f))
* **shadcn:** add ability to filter any column in `DataTable` component ([77d81f3](https://github.com/Clumsy-Coder/uva-uhunt/commit/77d81f32ee903848920779497c42829bcac27d5e))
* **shadcn:** add column scrolling to `DataTable` component ([4167847](https://github.com/Clumsy-Coder/uva-uhunt/commit/4167847bfd5b72b0897aa19927ab66cd563bcf16))
* **shadcn:** add column visibility toggle for `DataTable` component ([44be332](https://github.com/Clumsy-Coder/uva-uhunt/commit/44be33234aefe9cb8ddb2e0cccef289c09d5282b))
* **shadcn:** add pagination to `DataTable` component ([9835082](https://github.com/Clumsy-Coder/uva-uhunt/commit/98350823e8d94570d80db42c11157a60cbce14aa))


### :bug: Bug Fixes

* **api:users:submissions:overtime:** submission with one year ([2df9d9f](https://github.com/Clumsy-Coder/uva-uhunt/commit/2df9d9fad9b61f2c962c2c1b225e6cced7af7607))

## [1.0.0-development.7](https://github.com/Clumsy-Coder/uva-uhunt/compare/1.0.0-development.6...1.0.0-development.7) (2024-1-16)


### :sparkles: Features

* **api:search:** add endpoint `/api/search/[searchStr]` ([bf15e83](https://github.com/Clumsy-Coder/uva-uhunt/commit/bf15e83c1e2b6ef378b728c2d62ed5f7f2ed6d31))
* **components:search:** add `searchbar` component ([d8acdd9](https://github.com/Clumsy-Coder/uva-uhunt/commit/d8acdd9a980a5a978993dbbf58430f0aa59fb138))


### :bug: Bug Fixes

* **api:users:submissions:overtime:** submission with one year ([8b69ffa](https://github.com/Clumsy-Coder/uva-uhunt/commit/8b69ffa982d53fce71804ccd10d2aada9a8acfa4))

## [1.0.0-development.6](https://github.com/Clumsy-Coder/uva-uhunt/compare/1.0.0-development.5...1.0.0-development.6) (2024-1-15)


### :sparkles: Features

* **api:user:submissions:verdict:** add endpoint `/api/users/[username]/submissions/verdict` ([33101e6](https://github.com/Clumsy-Coder/uva-uhunt/commit/33101e61c3c9e9b44bb9a0f76bc6b30f2fd670f2))
* **api:user:submissions:** add endpoint `/api/users/[username]/submissions` ([023d886](https://github.com/Clumsy-Coder/uva-uhunt/commit/023d8865d3603325c11185d2ee7e4896f4a7c211))
* **api:users:attempted:** add endpoint `/api/users/[username]/submissions/attempted` ([f3ea62c](https://github.com/Clumsy-Coder/uva-uhunt/commit/f3ea62c89d2804b5c8dcdcd2a602434d1bcccd35))
* **api:users:submissions:** add endpoint `/api/users/[username]/submissions/language` ([d773671](https://github.com/Clumsy-Coder/uva-uhunt/commit/d773671ab833be365a0e368c4ad3ffc43b030084))
* **api:users:submissions:** add endpoint `/api/users/[username]/submissions/overtime` ([01232a7](https://github.com/Clumsy-Coder/uva-uhunt/commit/01232a7ca78c1f9a648a3ada5b74b9664b2d1642))
* **components:charts:** add `SolvedVsAttemptedDonutChart` component ([25bda0e](https://github.com/Clumsy-Coder/uva-uhunt/commit/25bda0ebbd5cb59b31f4c258d6dd31f5f6263fc4))
* **page:user:** display problem solved VS user submissions with donut chart ([e2689d5](https://github.com/Clumsy-Coder/uva-uhunt/commit/e2689d5f8ab121f86a7f894ae2dd5717d074b769))
* **page:user:** display user submissions by language with radar chart ([54639ab](https://github.com/Clumsy-Coder/uva-uhunt/commit/54639abedcb68f405f6cd314547b6cffe9586934))
* **page:user:** display user submissions by verdict with bar chart ([2d8a058](https://github.com/Clumsy-Coder/uva-uhunt/commit/2d8a058e5e1af1dc0c3bdb97b0d0bed74408cd47))
* **page:user:** display user submissions on `/users/[username]` page ([c937b78](https://github.com/Clumsy-Coder/uva-uhunt/commit/c937b7871af9c72c784dcf80197252eaf72ca318))
* **page:user:** display user submissions overtime with area chart ([21ea5f1](https://github.com/Clumsy-Coder/uva-uhunt/commit/21ea5f150e7c62bb82844b550350454fc812c130))

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
