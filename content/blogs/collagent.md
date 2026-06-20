---
title: "road to collagent"
date: "2026-02-22"
description: "Building an AI layer that unifies Canvas LMS, institutional websites, campus events, career resources, network and more into a single personalized interface for students."
draft: false
---

Somewhere right now, a college student is trying to figure out interesting elective to enroll for. They open their university's student portal, navigate to their program requirements page, see a list of 100s of possible electives, click through many, read a few syllabi, and finally settle on a choice, already excited to learn. Then navigate to class search, only to find out the class isn’t offered this semester. Bummer.  

This is not a technology problem. Universities have the data. They have calendars, course catalogs, assignment systems, event listings, career portals, advising tools. The problem is that all of it lives in separate systems, behind separate logins, designed by separate departments, none of which talk to each other. The student is the integration layer. And they're not great at it. Not because they're lazy, but because nobody is great at being a human API gateway between twelve disconnected services. Especially students with neurodivergent conditions. 

That got me thinking about what I call Collagent. An interface that sits on top of a university's entire digital ecosystem. One chat interface coupled with personalized surfaces for domains like news, people, events, etc. You ask it when finals are, it tells you. You ask what's due this week across all your classes, it checks Canvas, and gives you a prioritized list. You ask about career fairs, it searches your institution's event listings. You ask about people to connect with, it finds the researcher working on the same passion as yours. The agent has the data and the tools. You get the answers. Simple to think about, harder to build. 

A fair objection: doesn't this just atrophy the student's executive function? If an agent handles the operational overhead, do students lose the muscle for managing complexity themselves? Maybe. But AI is already on track to be embedded in every workplace and workflow students will enter after graduation. The executive function worth developing isn't "remember to check six portals before Tuesday." It's critical thinking, creative problem-solving, and deep domain knowledge. Collagent doesn't remove all hard parts of being a student. It removes the tedious ones so there's more room for the challenging, rewarding parts.

## The Landscape: Solving the Wrong Half

Before getting into architecture, it's worth understanding what already exists in this space. A lot of money is flowing into AI for higher education, and almost none of it is going where students actually need it.

The big funded players (Element451 at $175M, Ocelot at $117M, Mainstay) are all institution-facing platforms. They're CRM and enrollment marketing tools. Students are the *object* of engagement, not the user. The university buys the software. The admissions office configures the chatbot. The student receives a nudge text about FAFSA deadlines they didn't ask for.

On the LMS side, Instructure (Canvas's parent company) has started embedding AI through partnerships with OpenAI and Google. Canvas now has AI-assisted grading tools. Google's Gemini LTI plugin offers personalized learning plans within courses. Useful, but trapped inside the LMS. They can help you understand your coursework. They can't tell you when the career fair is, what clubs are meeting this week, or whether your advisor has office hours tomorrow.

Then there's the grassroots signal. On GitHub, at least five independent developers have recently built MCP servers connecting LLMs to Canvas ([r-huijts](https://github.com/r-huijts/canvas-mcp), [vishalsachdev](https://github.com/vishalsachdev/canvas-mcp) with 80+ tools, [DMontgomery40](https://github.com/DMontgomery40/mcp-canvas-lms) with 54 tools). Multiple people, independently, building the same thing. That's not a coincidence. That's a pain point screaming to be addressed.

The gap: no one is building a unified, student-faced conversational layer across *all* campus systems. Not just your LMS. Your entire university, queryable

## Why This Actually Matters

You might read the above and think this is a convenience problem. The data says otherwise.

A [2025 survey by Pathify](https://pathify.com/news/new-survey-finds-fragmented-digital-systems-are-eroding-student-success-belonging-and-satisfaction-across-u-s-colleges-says-pathify/) found that 47% of students had missed a critical deadline because they simply didn't know it was due. Not procrastination. The information was buried in one of a dozen portals they're expected to monitor. 75% said they'd prefer a single centralized platform. 95% said they'd use one if offered.

Gloria Mark's research at UC Irvine shows that every context switch between apps and platforms costs roughly 23 minutes to fully regain deep focus. A student checking what's due this week might open Canvas, then their email for a professor's update, then the registrar's site for a date conflict, then back to Canvas for another class. Four context switches from a task that should take two minutes.

57% of students in the Pathify survey said their institution's digital experience causes them stress. For 41% of them, it negatively affects their ability to learn. The tools meant to support education are actively undermining it through poor integration.


## Agent, Tools, and Data, not Magic (but feels like it)

An agent is something you delegate a task to. Collagent is something bigger and simpler: an interface managed by the agent.  

The real problem again: the information already exists; it's just scattered across a dozen systems that don't talk to each other, and *the student is the integration layer*. Collagent's whole job is to take that job away from you. It becomes the layer instead.

That changes what using your university feels like. Today you go hunting on google. Portal to portal, login to login, filtering everything down to what's actually relevant to you. With Collagent, it comes the other way around. There are two ways in:

- **Surfaces that come to you.** Before you ask anything, Collagent has already done the looking. Events worth your time. People worth meeting. Each one personalized, each one carrying a short reason it was picked for *you*. You don't search. The campus arrives, pre-filtered.
- **Chat, for going deeper.** "draft an intro email to that researcher," "what's due this week across all my classes," "does this elective conflict with my work schedule". You just ask, and it pulls the answer from the real systems.

The magic isn't a clever model. Any good model can hold a conversation. The magic is **access plus context**: Collagent is plugged into the systems that already run your life and it filters all of it through who you are. That combination is the entire product. The model is the cheap part.

## It Knows You

Google freaks us out every now and then by sending you an ad for funky socks after you’ve been searching for them on google. Personalization might sound scary, but in the right hands (not google), it is a win-win. The piece that makes this experience feel personal instead of generic is memory. Collagent remembers your major, your interests, your goals, the courses you've taken, the clubs you're in. It carries that forward across every conversation and every surface.

Ask a generic chatbot for "good electives" and it gives you the options you don’t like or already completed. Ask Collagent and it already knows your program, what you've completed, and that you're into hardware. Easy win.  And because you own that context, you can see it and prune it. Collagent works for you, not for the institution's messaging, and that line matters: it's the difference between a tool that markets at you and one that advocates for you.

## What I Learned

I started with a different idea. It was called Map My Major, an AI course planner that helped students map out their degree path. I pitched it to several students and friends and got consistent feedback: the planning was nice, but students wanted seamless access to *real data from their actual institution*, not generic advice. They didn't need another AI that could discuss course planning in the abstract. They needed one that could check whether CSE 310 has open seats next semester and whether it conflicts with their work schedule. Apparently the class registration seat war turned out to be the most wanted use case. 

That feedback killed the original idea and birthed this one.

## Where This Is Going

Currently have a prototype up. (fast-tracked with Claude Code:)) Collagent on GitHub if you’re interested. 

However, the biggest bottleneck I knew was coming and am stuck with now, is actual access and integration into university systems, which is a whole different ballgame and would probably be much complicated than borrowing an API. But I’m also not going to sit here, reverse engineer every API for every data source, for every university. So game plan is to start with ASU, validate a version that works and would only improve with real integration.