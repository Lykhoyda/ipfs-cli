oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g ipfs-cli
$ ipfs-cli COMMAND
running command...
$ ipfs-cli (--version)
ipfs-cli/0.0.0 darwin-x64 node-v16.13.2
$ ipfs-cli --help [COMMAND]
USAGE
  $ ipfs-cli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`ipfs-cli hello PERSON`](#ipfs-cli-hello-person)
* [`ipfs-cli hello world`](#ipfs-cli-hello-world)
* [`ipfs-cli help [COMMAND]`](#ipfs-cli-help-command)
* [`ipfs-cli plugins`](#ipfs-cli-plugins)
* [`ipfs-cli plugins:install PLUGIN...`](#ipfs-cli-pluginsinstall-plugin)
* [`ipfs-cli plugins:inspect PLUGIN...`](#ipfs-cli-pluginsinspect-plugin)
* [`ipfs-cli plugins:install PLUGIN...`](#ipfs-cli-pluginsinstall-plugin-1)
* [`ipfs-cli plugins:link PLUGIN`](#ipfs-cli-pluginslink-plugin)
* [`ipfs-cli plugins:uninstall PLUGIN...`](#ipfs-cli-pluginsuninstall-plugin)
* [`ipfs-cli plugins:uninstall PLUGIN...`](#ipfs-cli-pluginsuninstall-plugin-1)
* [`ipfs-cli plugins:uninstall PLUGIN...`](#ipfs-cli-pluginsuninstall-plugin-2)
* [`ipfs-cli plugins update`](#ipfs-cli-plugins-update)

## `ipfs-cli hello PERSON`

Say hello

```
USAGE
  $ ipfs-cli hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Whom is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/storeFile.ts)
```

_See code: [dist/commands/hello/storeFile.ts](https://github.com/lykhoyda/ipfs-cli/blob/v0.0.0/dist/commands/hello/index.ts)_

## `ipfs-cli hello world`

Say hello world

```
USAGE
  $ ipfs-cli hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ oex hello world
  hello world! (./src/commands/hello/world.ts)
```

## `ipfs-cli help [COMMAND]`

Display help for ipfs-cli.

```
USAGE
  $ ipfs-cli help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for ipfs-cli.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.10/src/commands/help.ts)_

## `ipfs-cli plugins`

List installed plugins.

```
USAGE
  $ ipfs-cli plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ ipfs-cli plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.0.11/src/commands/plugins/index.ts)_

## `ipfs-cli plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ ipfs-cli plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ ipfs-cli plugins add

EXAMPLES
  $ ipfs-cli plugins:install myplugin 

  $ ipfs-cli plugins:install https://github.com/someuser/someplugin

  $ ipfs-cli plugins:install someuser/someplugin
```

## `ipfs-cli plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ ipfs-cli plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ ipfs-cli plugins:inspect myplugin
```

## `ipfs-cli plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ ipfs-cli plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ ipfs-cli plugins add

EXAMPLES
  $ ipfs-cli plugins:install myplugin 

  $ ipfs-cli plugins:install https://github.com/someuser/someplugin

  $ ipfs-cli plugins:install someuser/someplugin
```

## `ipfs-cli plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ ipfs-cli plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ ipfs-cli plugins:link myplugin
```

## `ipfs-cli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ ipfs-cli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ ipfs-cli plugins unlink
  $ ipfs-cli plugins remove
```

## `ipfs-cli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ ipfs-cli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ ipfs-cli plugins unlink
  $ ipfs-cli plugins remove
```

## `ipfs-cli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ ipfs-cli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ ipfs-cli plugins unlink
  $ ipfs-cli plugins remove
```

## `ipfs-cli plugins update`

Update installed plugins.

```
USAGE
  $ ipfs-cli plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
