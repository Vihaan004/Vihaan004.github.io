---
title: "collagent"
date: "2026-06-26"
description: ""
draft: false
---

I've already made the case for [why the university experience needs more personalization](/blog/why-hasn't-university-experience-been-personalized-yet). Here's the first iteration of the idea I have in mind. 

> **Try it out here: [https://collagent.vercel.app/](https://collagent.vercel.app/)** (loads slow, but it works!)


Everything below comes from a single real account on this platform: a Computer Systems Engineering student who wants to work on hardware for AI. Same student on every screen.

## Content filtered for you

The dashboard is the first thing you land on. It assembles the day, a short brief, what's due, the ASU news touching your field, and the events and people worth your time. Every item carries a line on why it's there for *you*. Nothing here was searched for. It was already waiting.

![The Daily Brief dashboard, showing a personalized brief, events, people, and news](/images/collagent/dashboard.png)

## Answers from sources that matter

Ask about your own degree and the answer comes from your actual checksheet, not the internet's guess at your major. Here Collagent fetches this student's curriculum based on their program and picks the most crucial one based on the student's profile.

![A chat naming which courses matter most, drawn from the student's real curriculum](/images/collagent/chat-curriculum.png)

## Real integration, not web search

What sets this apart from a generic chatbot is its integration with real data pipelines and APIs. I've built a makeshift version of this for now to replciate it, but it does work in leveraging the ASU Search API. Thus, the aim here is to work towards a student-faced ecosystem/platform with an AI layer on top. 

One of the most common use cases is to find the right people to network with on campus.

![A chat recommending specific ASU researchers, with their expertise and contact details](/images/collagent/chat-people.png)

## Events you'd actually show up to

An events feed is noise until something tells you why an event is for you. Each one comes with a short, personal reason and you can pull any of them into chat to check a conflict, dig deeper, or work out what to ask before you go.

![The events page with a personalized reason on each event](/images/collagent/events.png)

![A chat going deeper on one event and offering to prepare questions for it](/images/collagent/chat-events.png)

## Memory, of course

Memory is now the the absolute minimum required from a well-built AI assistant. Your major, interests, goals, courses, clubs: Collagent keeps them so you never have to re-introduce yourself. The profile page lays out everything it knows about you, and a single tap forgets anything you'd rather it didn't. This helps the agent's context evolve through the multiple semesters of a student's life. Enhancing the experience exponentially.

![The profile page showing interests, goals, the curriculum, and what Collagent remembers](/images/collagent/profile.png)

## Why?

As a recent graduate, I analyzed the 4 years of my own experience at ASU and realized how overwhelmingly abundant resources have become. Resources in terms of courses, events, people, research, and campus experience in general. Yet, personalization, now easier than ever with AI, is still unsatisfactory. 

Moreover, data fragmentation is a heavy weight for neurodivergent students, especially cases of executive dysfunction, ADHD, autism, or anxiety. Collagent lifts that weight: one interface for all. For some students that's a calmer week. For others it's the difference between keeping up and falling behind. Which is why I'm passionate about this project.

## Now what?

This is a working prototype, built for ASU first. The 'AI' was never the hard part. Real integration with ASU's own systems is, and that's where it stops being a demo and starts being something students lean on every day.

If you work on university systems, student success, retention, or accessibility at a university, I'd love to connect with you. 