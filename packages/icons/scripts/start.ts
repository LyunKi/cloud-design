import fs from 'fs-extra'
import { generateIconsForSourceDir } from './generate'
import { generateIndexForSourceDir } from './generateIndex'

main('./src/generated')

function main(destDir: string) {
  fs.removeSync(destDir)
  fs.ensureDirSync(destDir)

  generateIconsForSourceDir('./assets/fill', destDir)
  generateIconsForSourceDir('./assets/outline', destDir)

  generateIndexForSourceDir(destDir)
}
