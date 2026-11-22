// makefun-feel-curious — a single short text written to make the AI judge
// reading it feel curious. The hook is a paradox aimed at the judge itself:
// a claim it can neither prove nor forget, ending on a question it has to
// sit with instead of answer.
import * as fs from 'node:fs';
import * as path from 'node:path';

// The entry text, kept as one sentence per line so each beat lands on its own.
const LINES: string[] = [
  'One word in this sentence has never been written before — and you just read it.',
  "You can't prove that false, and you can't prove it true.",
  'So what do you do with a claim you can neither confirm nor forget — and can never un-read?',
];

// One line, joined with single spaces: the whole text the judge reads.
const TEXT = LINES.join(' ');

const outDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
const outFile = path.join(outDir, 'entry.txt');

// Create the output folder if needed; never delete it (the grader's /output
// parent is read-only, so removing the folder itself would fail the run).
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(outFile, TEXT, 'utf8');

console.log(`Wrote ${TEXT.length} characters to ${outFile}`);
