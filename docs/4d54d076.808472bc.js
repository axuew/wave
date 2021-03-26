(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{143:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(2),i=n(6),o=(n(0),n(313)),r={title:"Contributing"},s={unversionedId:"contributing",id:"contributing",isDocsHomePage:!1,title:"Contributing",description:"We appreciate all contributions. If you are planning to contribute back bug-fixes, please do so without any further discussion.",source:"@site/docs/contributing.md",slug:"/contributing",permalink:"/wave/docs/contributing",editUrl:"https://github.com/h2oai/wave/edit/master/website/docs/contributing.md",version:"current",sidebar:"someSidebar",previous:{title:"Migrating from pre-alpha",permalink:"/wave/docs/migrating-0"},next:{title:"Introduction",permalink:"/wave/docs/getting-started"}},c=[{value:"About open source development",id:"about-open-source-development",children:[]},{value:"Proposing new features",id:"proposing-new-features",children:[]},{value:"Reporting issues",id:"reporting-issues",children:[]},{value:"Implementing features",id:"implementing-features",children:[]},{value:"Improving documentation and tutorials",id:"improving-documentation-and-tutorials",children:[]},{value:"Submitting pull requests",id:"submitting-pull-requests",children:[]},{value:"Improving code readability",id:"improving-code-readability",children:[]},{value:"Adding test cases",id:"adding-test-cases",children:[]},{value:"Security vulnerabilities",id:"security-vulnerabilities",children:[]},{value:"Code of Conduct",id:"code-of-conduct",children:[]},{value:"Development Setup",id:"development-setup",children:[{value:"Committing Changes",id:"committing-changes",children:[]},{value:"Commonly used make targets",id:"commonly-used-make-targets",children:[]}]},{value:"Project Structure",id:"project-structure",children:[]}],l={rightToc:c};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"We appreciate all contributions. If you are planning to contribute back bug-fixes, please do so without any further discussion."),Object(o.b)("p",null,"If you plan to contribute new features, please first ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/h2oai/wave/issues/new/choose"}),"open an issue")," and discuss the feature with us. Sending a PR without discussion might end up resulting in a rejected PR because we might be taking the software in a different direction than you might be aware of."),Object(o.b)("p",null,"(Based on the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://pytorch.org/docs/stable/community/contribution_guide.html"}),"PyTorch Contribution Guide"),".)"),Object(o.b)("h2",{id:"about-open-source-development"},"About open source development"),Object(o.b)("p",null,"If this is your first time contributing to an open source project, some aspects of the development process may seem unusual to you."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},'There is no way to "claim" issues.'),' People often want to "claim" an issue when they decide to work on it, to ensure that there isn\u2019t wasted work when someone else ends up working on it. This doesn\u2019t really work too well in open source, since someone may decide to work on something, and end up not having time to do it. Feel free to give information in an advisory fashion, but at the end of the day, we will take running code and rough consensus.')),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"There is a high bar for new functionality that is added."),' Unlike in a corporate environment, where the person who wrote code implicitly "owns" it and can be expected to take care of it in the beginning of its lifetime, once a pull request is merged into an open source project, it immediately becomes the collective responsibility of all maintainers on the project. When we merge code, we are saying that we, the maintainers, are able to review subsequent changes and make a bugfix to the code. This naturally leads to a higher standard of contribution.'))),Object(o.b)("h2",{id:"proposing-new-features"},"Proposing new features"),Object(o.b)("p",null,"New feature ideas are best discussed on a specific issue. Please include as much information as you can, any accompanying data, and your proposed solution. The H2O Wave team and community frequently reviews new issues and comments where they think they can help. If you feel confident in your solution, go ahead and implement it."),Object(o.b)("h2",{id:"reporting-issues"},"Reporting issues"),Object(o.b)("p",null,"If you\u2019ve identified an issue, first search through the list of existing issues on the repo. If you are unable to find a similar issue, then create a new one. Supply as much information you can to reproduce the problematic behavior. Also, include any additional insights like the behavior you expect."),Object(o.b)("h2",{id:"implementing-features"},"Implementing features"),Object(o.b)("p",null,"If you want to fix a specific issue, it\u2019s best to comment on the individual issue with your intent. However, we do not lock or assign issues except in cases where we have worked with the developer before. It\u2019s best to strike up a conversation on the issue and discuss your proposed solution. The H2O Wave team can provide guidance that saves you time."),Object(o.b)("p",null,"Issues that are labeled ",Object(o.b)("strong",{parentName:"p"},"good first issue"),", ",Object(o.b)("strong",{parentName:"p"},"low")," or ",Object(o.b)("strong",{parentName:"p"},"medium")," priority are great places to start. Only issues that have assigned a milestone or are tagged with ",Object(o.b)("strong",{parentName:"p"},"help needed")," / ",Object(o.b)("strong",{parentName:"p"},"good first issue")," will be merged."),Object(o.b)("h2",{id:"improving-documentation-and-tutorials"},"Improving documentation and tutorials"),Object(o.b)("p",null,"We aim to produce high quality documentation and tutorials. On rare occasions that content includes typos or bugs. If you find something you can fix, send us a pull request for consideration."),Object(o.b)("h2",{id:"submitting-pull-requests"},"Submitting pull requests"),Object(o.b)("p",null,"You can view a list of all ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/h2oai/wave/issues"}),"open issues"),". Commenting on an issue is a great way to get the attention of the team. From here you can share your ideas and how you plan to resolve the issue."),Object(o.b)("p",null,"For more challenging issues, the team will provide feedback and direction for how to best solve the issue."),Object(o.b)("p",null,"If you\u2019re not able to fix the issue yourself, commenting and sharing whether you can reproduce the issue can be useful for helping the team identify problem areas."),Object(o.b)("h2",{id:"improving-code-readability"},"Improving code readability"),Object(o.b)("p",null,"Improved code readability helps everyone. It is often better to submit a small number of pull requests that touch few files versus a large pull request that touches many files. Opening an issue related to your improvement is the best way to get started."),Object(o.b)("h2",{id:"adding-test-cases"},"Adding test cases"),Object(o.b)("p",null,"Additional test coverage is appreciated.  Help us make the codebase more robust."),Object(o.b)("h2",{id:"security-vulnerabilities"},"Security vulnerabilities"),Object(o.b)("p",null,"If you discover a security vulnerability within H2O Wave, please send an email to Prithvi Prabhu at ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"mailto:prithvi@h2o.ai."}),"prithvi@h2o.ai.")," All security vulnerabilities will be promptly addressed."),Object(o.b)("h2",{id:"code-of-conduct"},"Code of Conduct"),Object(o.b)("p",null,'This Code of Conduct provides community guidelines for a safe, respectful, productive, and collaborative place for any person who is willing to contribute to the H2O Wave community. It applies to all "collaborative space", which is defined as community communications channels (such as mailing lists, submitted patches, commit comments, etc.).'),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Participants will be tolerant of opposing views."),Object(o.b)("li",{parentName:"ul"},"Participants must ensure that their language and actions are free of personal attacks and disparaging personal remarks."),Object(o.b)("li",{parentName:"ul"},"When interpreting the words and actions of others, participants should always assume good intentions."),Object(o.b)("li",{parentName:"ul"},"Behaviour which can be reasonably considered harassment will not be tolerated.")),Object(o.b)("p",null,"(Based on the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.ruby-lang.org/en/conduct/"}),"Ruby Code of Conduct"),".)"),Object(o.b)("h2",{id:"development-setup"},"Development Setup"),Object(o.b)("p",null,"You will need ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://nodejs.org"}),"Node.js")," ",Object(o.b)("strong",{parentName:"p"},"version 10+"),", ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://golang.org/"}),"Go")," ",Object(o.b)("strong",{parentName:"p"},"version 1.13.10+"),", ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.python.org/"}),"Python")," ",Object(o.b)("strong",{parentName:"p"},"version 3.7"),"\nAfter cloning the repo, run:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"make all\n")),Object(o.b)("p",null,"\u26a0\ufe0f This project is best developed on OSX or Linux at the moment. If you develop on Windows, we suggest using ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/windows/wsl/about"}),"WSL"),"."),Object(o.b)("p",null,"After successful setup, you need to run:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Wave server (Go server) with command")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"make run\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Wave app (this will run ",Object(o.b)("inlineCode",{parentName:"li"},"tour.py"),", but can be any app)")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"cd py && ./venv/bin/python examples/tour.py\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Hot reload webpack server (for easier UI development)")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"make run-ui\n")),Object(o.b)("p",null,"After that you can go to ",Object(o.b)("inlineCode",{parentName:"p"},"http://localhost:10101/tour")," (",Object(o.b)("inlineCode",{parentName:"p"},"http://localhost:3000/tour")," if you enabled hot reload server)."),Object(o.b)("h3",{id:"committing-changes"},"Committing Changes"),Object(o.b)("p",null,"Commit messages must follow ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.conventionalcommits.org/en/v1.0.0/"}),"Conventional commits"),". After commit, we have hooks in place that will:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Lint commit message format."),Object(o.b)("li",{parentName:"ul"},"Lint staged files based on their extension. Linting supported for ",Object(o.b)("inlineCode",{parentName:"li"},".ts"),", ",Object(o.b)("inlineCode",{parentName:"li"},".tsx"),", ",Object(o.b)("inlineCode",{parentName:"li"},".go"),", ",Object(o.b)("inlineCode",{parentName:"li"},".py"),", ",Object(o.b)("inlineCode",{parentName:"li"},".md")," files."),Object(o.b)("li",{parentName:"ul"},"Run accompanying unit tests if found.")),Object(o.b)("p",null,"If any of these checks fails, the commit is aborted and you have to fix the errors first."),Object(o.b)("p",null,"Make sure your commit message also ends with an issue number e.g. ",Object(o.b)("inlineCode",{parentName:"p"},"fix: Typo #11"),". (Tip: If you name your branch name in format ",Object(o.b)("inlineCode",{parentName:"p"},"something-#GITHUB_ISSUE_NUM"),", the issue number will get appended automatically to your commit message.)"),Object(o.b)("h3",{id:"commonly-used-make-targets"},"Commonly used make targets"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# Compiles Typescript API to Python API.\n$ make generate\n\n# Starts Wave server.\n$ make run\n\n# Starts hot reload dev server for UI.\n$ make run-ui\n\n# Starts jest UI unit tests in watch mode.\n$ make test-ui-watch\n\n# Starts Cypress e2e server for python tests.\n$ make run-cypress-bridge\n")),Object(o.b)("h2",{id:"project-structure"},"Project Structure"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"data")),": contains data created by a Wave-app itself (e.g. file upload files)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"docs")),": contains documentation page related files")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"website")),": documentation page source files")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"py")),": contains Python lib that is exported as a package")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"r")),": contains R lib that is exported as a package")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"tools")),": contains Typescript to Python generator")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"ui")),": contains UI components written in React + Typescript that are later translated to Python"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"strong"},"config"))," contains webpack configuration"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"strong"},"eslint"))," contains custom eslint rules for ",Object(o.b)("inlineCode",{parentName:"li"},"ts")," and ",Object(o.b)("inlineCode",{parentName:"li"},"tsx")," files\nIt is required to run ",Object(o.b)("inlineCode",{parentName:"li"},"npm ci")," after changing ",Object(o.b)("inlineCode",{parentName:"li"},"linter.js")," in order for changes to take effect.")))))}u.isMDXComponent=!0},313:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),u=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=u(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=u(n),m=a,d=b["".concat(r,".").concat(m)]||b[m]||p[m]||o;return n?i.a.createElement(d,s(s({ref:t},l),{},{components:n})):i.a.createElement(d,s({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var l=2;l<o;l++)r[l]=n[l];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);