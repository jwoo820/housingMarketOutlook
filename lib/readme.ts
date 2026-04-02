import { promises as fs } from "node:fs";
import path from "node:path";

const README_PATH = path.join(process.cwd(), "README.md");

export async function readReadmeMarkdown(): Promise<string> {
  return fs.readFile(README_PATH, "utf-8");
}
