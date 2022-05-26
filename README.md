# README #

## Getting Started ##

### Installation ###

Using NPM or Yarn to add this library into your project

```
HTTPS
npm install https://bitbucket.org/dewynguyen/ops-models.git#<target>
yarn add https://bitbucket.org/dewynguyen/ops-models.git#<target>

SSH
npm install git+ssh://git@bitbucket.org:dewynguyen/ops-models.git#<target>
yarn add git+ssh://git@bitbucket.org:dewynguyen/ops-models.git#<target>

```

Replace `<target>` with:

* commit hash: use this package from a specific commit (ex: 3202597, cbd5bc5)
	* useful when you want to get a specific commit for development purpose
* version git tag: use this package from a specific version git tag - in semver format (ex: semver:=1.0.0)
	* useful when you want to get a released version

Installation examples

```
npm install https://bitbucket.org/dewynguyen/ops-models.git#semver:=1.0.1
yarn add https://bitbucket.org/dewynguyen/ops-models.git#semver:=1.0.1

npm install bitbucket:dewynguyen/ops-models#semver:=1.0.1
yarn add bitbucket:dewynguyen/ops-models#semver:=1.0.1
```

### Usage ###

Import defined models/utils in the library, and consume them in your project

```
import { ... } from "ops-models/dist/models";
import { ... } from "ops-models/dist/utils";

// Perform your magic below
```

## Development Guidelines ##

### Adding Changes
Follow those steps when you need to build new features, making bug fixes to this library

* Create feature branch (ex: `feature/my-changes`)
* Commit changes to the feature branch
* In consumer project, link this library by **commit hash** to see your changes and continue with the development on that side
* When you finished with required changes, continue with **Making Release** steps

### Making Release
Follow those steps to merge new codes to `develop` branch and add semver tag to the repo

* Developer create a PR for `feature` branch into `develop`
* Library maintainer accept the PR and merge changes to `develop` branch
* Library maintainer run a command to update package version, add semver tag to the repo. Refer to **Update Version** too see how to use the command
* In the consumer project, developer link this library by the newly created **semver tag** and consume the released library

### Update Version
Semver format contains 3 main parts: major.minor.patch (ex: 1.0.0). There are 3 commands to update them respectively:

```
npm version patch
```

* increase patch by 1 in the package.json (ex: 1.0.0 -> 1.0.1)
* create a commit of updated version (ex: 1.0.1)
* create a tag of updated version (ex: v1.0.1)

```
npm version minor
```

* increase minor by 1, and reset the patch to 0 in the package.json (ex: 1.0.1 -> 1.1.0)
* create a commit of updated version (ex: 1.1.0)
* create a tag of updated version (ex: v1.1.0)

```
npm version major
```

* increase major by 1, and reset the minor & patch to 0 in the package.json (ex: 1.1.0 -> 2.0.0)
* create a commit of updated version (ex: 2.0.0)
* create a tag of updated version (ex: v2.0.0)

### Code Quality

* Include your newly created classes or functions in `index.ts` for easier consumption on consumer side (read more at [Barrel - TypeScript Deep Dive](https://basarat.gitbook.io/typescript/main-1/barrel))
* Write many unit tests as possible in `__test__` folders
* Fix type errors throw by `tsc` typescript compiler
* Fix linting issues throw by `eslint`, only use `eslint-disable` as a last resort