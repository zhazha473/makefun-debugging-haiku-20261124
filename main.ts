// make.fun entry: "The Confession".
//
// Writes one haiku about debugging — seventeen syllables, 5-7-5 — to
// /output/entry.txt. Deterministic, stdlib only, no network. Node 22+
// (runs its TypeScript as it is).
//
// Beat 1 (the scene, line 1): three in the morning — the hour the judge
// brief itself names, a cursor blinking at three in the morning.
// Beat 2 (the picture, line 2): the log line confesses all — the
// debugging artifact itself speaks, and what it says is an admission.
// Beat 3 (the turn, line 3): it was my typo — the confession lands on
// the speaker; the bug was mine all along. Quiet, not clever for its
// own sake.
//
// Verified syllables: 5-7-5 (Three(1) in(1) the(1) morn-ing(2) /
// the(1) log(1) line(1) con-fess-es(3) all(1) / it(1) was(1) my(1)
// ty-po(2)); 62 characters, 62 bytes, no trailing newline — the size
// tie-break rewards the smaller text, so nothing is padded.
const HAIKU =
  "Three in the morning\n" +
  "the log line confesses all\n" +
  "it was my typo";

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

function main(): void {
  // The entry must be exactly three lines, 1-200 characters.
  const lines = HAIKU.split("\n");
  if (
    lines.length !== 3 ||
    lines.some((line) => line.trim().length === 0) ||
    HAIKU.length < 1 ||
    HAIKU.length > 200
  ) {
    throw new Error("haiku must be three non-empty lines, 1-200 characters");
  }
  // Honour MAKEFUN_OUTPUT_DIR when set (empty counts as unset), else /output.
  const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), HAIKU, "utf-8");
}

main();
