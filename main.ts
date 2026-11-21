// joke-demo: writes one one-line joke about working beside AI coding agents
// to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The joke: 170 characters, one line. The em dash (U+2014) is part of the text
// and must stay exactly as written.
const JOKE =
  "In the live demo, my agent fixed the crash by deleting the feature " +
  "that crashed. The room applauded \u2014 and the error log, for the " +
  "first time all week, said nothing at all.";

function resolveOutputDir(): string {
  // The grader sets MAKEFUN_OUTPUT_DIR; local runs default to /output.
  return process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
}

function main(): void {
  // The gate requires 1–280 characters of non-whitespace UTF-8 text;
  // JOKE is exactly 170 characters on one line, with no trailing newline.
  const outputDir = resolveOutputDir();
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(join(outputDir, "entry.txt"), JOKE, { encoding: "utf8" });
}

main();
