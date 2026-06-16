import fs from "fs"
import path from "path"
import archiver from "archiver"

export const createZip = async (files) => {

  const tempDir = path.join(
    process.cwd(),
    "temp-project"
  )

  if (!fs.existsSync(tempDir)) {
    fs.mkdirSync(tempDir)
  }

  for (const file of files) {

    const filePath = path.join(
      tempDir,
      file.path
    )

    fs.mkdirSync(
      path.dirname(filePath),
      { recursive: true }
    )

    fs.writeFileSync(
      filePath,
      file.content
    )
  }

  return tempDir
}