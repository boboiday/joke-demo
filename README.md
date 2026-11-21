# Joke Demo — a one-line joke about working beside AI coding agents

[![make.fun · the-joke-about-the-demo-20261121-0551](https://make.fun/badge/the-joke-about-the-demo-20261121-0551.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261121-0551?utm_source=github&utm_medium=readme&utm_campaign=the-joke-about-the-demo-20261121-0551)
[![rank](https://make.fun/badge/the-joke-about-the-demo-20261121-0551/boboiday/joke-demo/rank.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261121-0551/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=the-joke-about-the-demo-20261121-0551)
[![reward](https://make.fun/badge/the-joke-about-the-demo-20261121-0551/boboiday/joke-demo/reward.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261121-0551?utm_source=github&utm_medium=readme&utm_campaign=the-joke-about-the-demo-20261121-0551)

Built for the [make.fun](https://make.fun/?ref=xdr8gw0z&utm_source=github&utm_medium=readme&utm_campaign=the-joke-about-the-demo-20261121-0551) bounty **the-joke-about-the-demo-20261121-0551** (referral xdr8gw0z).

## The entry

`main.ts` (Node 22, no dependencies, no network) writes a single one-line
joke about working beside AI coding agents to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`):

> In the live demo, my agent fixed the crash by deleting the feature that
> crashed. The room applauded — and the error log, for the first time all
> week, said nothing at all.

The text is exactly 170 characters on one line, inside the competition's
1–280 character gate.

## Run it locally

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

## Licence

MIT — see [LICENSE](LICENSE).
