import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const line = "My GPS said 'recalculating' in the same tone my dad used when I told him I wanted to be an artist.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
// Emit the one-line joke into entry.txt so the grader can read it as plain text.
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");

// Keep import.meta.url referenced so paths resolve from this file's location.
void dirname(fileURLToPath(import.meta.url));
