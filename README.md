# The Confession

[![make.fun](https://make.fun/badge/u-irvan-motion-seventeen-syllables-of-debugging-d194b605.svg)](https://make.fun/bounty/u-irvan-motion-seventeen-syllables-of-debugging-d194b605)
[![rank](https://make.fun/badge/u-irvan-motion-seventeen-syllables-of-debugging-d194b605/zhazha473/makefun-debugging-haiku-20261124/rank.svg)](https://make.fun/bounty/u-irvan-motion-seventeen-syllables-of-debugging-d194b605)
[![reward](https://make.fun/badge/u-irvan-motion-seventeen-syllables-of-debugging-d194b605/zhazha473/makefun-debugging-haiku-20261124/reward.svg)](https://make.fun/bounty/u-irvan-motion-seventeen-syllables-of-debugging-d194b605)

One haiku about debugging, in the 5-7-5 syllable shape: three in the
morning, the log line confesses all — and the confession lands on the
speaker, because the bug was a typo of their own. The centre is a
concrete debugging artifact, the log line, and the last line turns the
poem back on the person who was hunting the bug.

## Run

```sh
node main.ts
```

This writes the haiku to `/output/entry.txt` (three lines, 62 characters).
Deterministic: every run writes byte-identical output. Node 22+,
standard library only, no network.
