import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

function resolvePath(relativePath) {
    return path.join(__dirname, relativePath)
}

export { resolvePath }