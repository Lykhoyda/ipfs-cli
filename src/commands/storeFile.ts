import { Command, Flags } from '@oclif/core';

export default class StoreFile extends Command {
  static flags = {
    // flag with a value (-n, --name=VALUE)
    name: Flags.string({ char: 'n', description: 'name to print' }),
    // flag with no value (-f, --force)
    force: Flags.boolean({ char: 'f' })
  };

  static args = [{ name: 'file' }];

  public async run(): Promise<void> {
    const { args, flags } = await this.parse(StoreFile);

    const name = flags.name ?? 'world';
    this.log(
      `hello ${name} from /Users/antonlykhoyda/WebstormProjects/typescript/ipfs-cli/src/commands/storeFile.ts`
    );
    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`);
    }
  }
}
