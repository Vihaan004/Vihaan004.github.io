---
title: "context > memory"
date: "2025-12-10"
draft: false
---

I’m working on this interesting project using AI and agents, and I’ve repeatedly come to a standstill, coming to realize I have to get this new model to not just ‘know’, but understand what I am working on. My work around was creating a lot of spec docs in plain markdown to feed into new chats. Works for one project, but sometimes I need to reference files from other projects, that’s when I get stuck.

I knew Github copilot worked well within a VS code workspace with good context management. So, I built a parent directory containing folders of all projects I wanted to have the context of. Opened the parent folder in a VS code workspace, copilot/cli agents could now use that as context. Made the parent folder a repository, added all projects and I got myself a project management hub. But the real deal is when I made all those projects git submodules, meaning agents can manage individual projects, update those projects (sync), and fetch the latest context. Kind of like an scrappy online memory database. 

This is cool. Having an agent that is able to pull in all of your updated Github repos (with git cmds), fetch relevant context, and help you work on the same context. This feels nothing like agent ‘memory’, which serves to remember things about you rather than your actual work with which you needed AI help ultimately. 

I can now just use this repository as a floating context base for any LLM. Providing access to my projects, works, personal preferences and instructions as well. No vector DBs and no fancy search algorithms, just a good old grep style search for agents. I’ve used agents on this to build pieces of my resume, find skills I learned unknowingly, get overviews of what my projects do and so much more from my work. 

I would imagine a system in the future that optimizes this concept. Utilizing a 2-way sync between your chosen files (eg. multiple projects) and some middleware to integrate efficient context access for LLMs connected to it. Thus, the LLM always lives within your work, by your side, like Alfred beside Batman. 

Feels like the next step toward AGI.