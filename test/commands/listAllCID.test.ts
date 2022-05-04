import {expect, test} from '@oclif/test'

describe('listAllCID', () => {
  test
  .stdout()
  .command(['listAllCID'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['listAllCID', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
