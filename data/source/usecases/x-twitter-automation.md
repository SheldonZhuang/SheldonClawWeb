# X/Twitter Automation from Chat

Full X/Twitter automation through natural language — post tweets, reply, like, retweet, follow, DM, search, extract data, run giveaways, and monitor accounts, all from your OpenClaw chat.

## Pain Point

Managing an X/Twitter presence requires jumping between the app, third-party dashboards, and analytics tools. Running giveaways means manual winner picking. Extracting followers, likers, or retweeters requires scraping scripts. There is no single interface that lets you do all of this conversationally.

## What It Does

TweetClaw is an OpenClaw plugin that connects your agent to the X/Twitter API. You interact entirely through chat:

- **Post & engage** — Compose tweets, reply to threads, like, retweet, follow/unfollow, send DMs
- **Search & extract** — Search tweets and users, extract followers, likers, retweeters, quote tweeters, list members
- **Giveaways** — Pick random winners from tweet engagements with configurable filters (minimum followers, account age, keyword requirements)
- **Monitors** — Watch accounts for new tweets or follower changes and get notified

All actions go through a managed API — no browser cookies, no scraping, no credential exposure.

## Prompts

**Install the plugin:**
```text
openclaw plugins install @xquik/tweetclaw
```

**Post a tweet:**
```text
Post a tweet: "Just shipped a new feature — try it out!"
```

**Run a giveaway:**
```text
Pick 3 random winners from the retweeters of this tweet: https://x.com/username/status/123456789. Exclude accounts with fewer than 50 followers.
```

**Extract data:**
```text
Extract all users who liked this tweet and export as CSV: https://x.com/username/status/123456789
```

**Monitor an account:**
```text
Monitor @elonmusk and notify me whenever he posts a new tweet.
```

## Skills Needed

- [@xquik/tweetclaw](https://www.npmjs.com/package/@xquik/tweetclaw) — Install via `openclaw plugins install @xquik/tweetclaw`

## Related Links

- [GitHub Repository](https://github.com/Xquik-dev/tweetclaw)
- [npm Package](https://www.npmjs.com/package/@xquik/tweetclaw)

