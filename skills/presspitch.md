---
name: press-pitch
description: "Turn a press release into customized media pitches for individual reporters. Use this skill whenever the user shares a press release, announcement, or launch news and wants help with media outreach, PR, pitching journalists, building a press list, finding reporters, or getting coverage. Also trigger on phrases like \"pitch this to press\", \"who should cover this\", \"media list\", or \"help me get this story picked up\", even if the user does not say \"press release\" explicitly.  skill created by @jaymce - marketmessage.io"
---

# Press Pitch

Turn one press release into a set of pitches, each one written for a specific reporter based on what they actually cover.

## Workflow overview

1. Ingest the press release
2. Research and select target reporters via web search
3. Verify and summarize each reporter's recent coverage
4. Write one customized pitch per reporter
5. Deliver everything in a single output document

Do the research before writing any pitches. A pitch built on a guess about what someone covers is worse than no pitch.

## Step 1: Ingest the press release

Read the press release the user provides (pasted text or uploaded file). Extract:

- The core news: what happened, in one sentence
- Why it matters: the angle a reporter would care about, which is rarely the angle the company cares about
- Concrete specifics: numbers, names, dates, customers, funding amounts. These are the raw material of good pitches
- The category: funding, product launch, research, hiring, partnership, data/report, etc. This determines which reporters are realistic targets

If the release buries the news, find it anyway. Pitch the news, not the release.

If no press release has been shared yet, ask for it before doing anything else.

## Step 2: Find target reporters

Use web search to find reporters who have recently written about this topic. Default to 10 targets unless the user asks for a different number.

Search strategy:

- Search for recent articles on the topic (e.g. "SIEM security analytics" plus terms from the release), not for "journalists who cover X". Find the articles first, then note who wrote them
- Run several searches with different angles: the product category, the competitive frame, the buyer audience, the funding stage if relevant
- Prioritize reporters with a bylined article on a closely related topic within the last 6 months. Recency matters; beats change fast
- Mix tiers: a few big outlets, plus trade publications and newsletters where coverage is more likely. A trade reporter who covers the exact beat beats a famous generalist who will never open the email
- Skip contributed/sponsored content authors, press release aggregators, and anyone who has clearly left the beat or the outlet

For each candidate, verify with at least one additional search that they still write for that outlet and still cover the beat. If you cannot verify, drop them or flag the uncertainty in the output.

## Step 3: Summarize recent coverage

For each selected reporter, read or search enough of their recent work to write a 2-4 sentence summary of what they have covered lately: specific stories, recurring themes, and their apparent angle or skepticism. Name at least one specific recent article with its approximate date. This summary drives the personalization in the pitch, so it must be concrete, not "covers cybersecurity broadly".

## Step 4: Write the pitches

### Style rules (non-negotiable)

- Never use em dashes. Not once, anywhere in the output. Use periods, commas, or restructure the sentence
- Write like Hemingway: short sentences, plain words, active voice. Cut every word that does not earn its place
- No PR-speak. Banned: "thrilled", "excited to share", "revolutionary", "game-changing", "seamless", "leverage", "best-in-class", "I hope this finds you well", "just circling back", "robust"
- Sound like one busy human writing to another busy human. The reporter should be able to read the whole pitch in under 30 seconds
- Lead with the news or with their coverage, never with the company's self-description
- One specific reference to their recent work, stated plainly. Not flattery. "You covered X last month" works. "I loved your brilliant piece" does not
- Make the ask explicit and small: an interview, a briefing, embargoed access, the full release
- Body of 120 words or fewer. Shorter is better

### Subject lines

- Under 60 characters
- The news itself, not a teaser. 
- No colons followed by hype, no ALL CAPS, no "quick question"


## Step 5: Assemble the output

Produce one document with a short overview, then one section per reporter using this exact structure:

```
# Media Pitch Plan: [Press release headline]

## The story in one line
[One sentence]

## Targets at a glance
[One line per reporter: name, outlet, beat]

---

## 1. [Reporter Name], [Outlet]

**Why they are a good fit:** [2-3 sentences tying their beat and recent work to this specific news]

**Recent coverage:** [2-4 sentences, naming at least one specific article and approximate date]

**How to reach them:** [Best verified method: email pattern or published address, X/Bluesky handle, LinkedIn, outlet tip line, or Signal if they list it. If email is unverified, say so and give the outlet's standard format as a guess, clearly labeled as a guess]

**Pitch:**

Subject: [subject line]

[Pitch body]
```

Deliver the document as a markdown file the user can save and reuse.

## Contact method guidance

Only report contact methods you found or that follow a documented pattern for the outlet. Never invent an email address and present it as fact. If a reporter publishes a preferred contact method (many list it in their bio or on their personal site), use that and say where it came from. Do not suggest scraping tools or paid databases unless the user asks.

## Final check before delivering

- Zero em dashes anywhere, including headers and summaries
- Every pitch references at least one real, recent article by that reporter
- Every subject line is under 60 characters and states the news
- Every pitch body is under 120 words
- No banned PR phrases
- Contact methods are verified or clearly labeled as guesses

skill created by @jaymce - marketmessage.io