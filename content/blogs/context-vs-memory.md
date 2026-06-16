---
title: "context vs memory"
date: "2025-12-10"
description: "Exploring the distinction between context and memory management in AI agents." 
draft: false
---

I’m working on this interesting project using AI and agents, and I’ve repeatedly come to a standstill, coming to realize I have to get this new model to not just ‘know’, but grasp my intent for the project. My work around was creating a lot of spec docs in plain markdown to feed into new chats. Works for one project, but when I need to reference files across projects, that’s when I get stuck. Or at least have to manually identify relevant files and build it as context. 

I knew Github copilot worked well within a VS code workspace with good context management. So, I built a parent directory containing folders of all of my repositories. Opened it in a VS code workspace, copilot or any cli agent could now use that as context by selectively reading relevant files. Made the parent folder a repository,and I got myself a project management hub. But the real deal is when I made all those projects git submodules, meaning agents can manage individual projects, update those projects (sync), and fetch the latest context. Kind of like an scrappy, unstructured database for my work. 

This is cool. Having an agent that is able to pull in all of your updated Github repos (with git cmds), fetch relevant context, and help you work on one or multiple projects at the same time as if it knew all about your work. This feels nothing like agent ‘memory’, which serves to remember things about you rather than having direct acccess to your actual work. 

I can now just use this repository as a floating context base for any LLM. Providing access to my projects, works, personal preferences and instructions as well. No vector DBs and no fancy search algorithms, just a good old grep for agents. I’ve used agents on this to build pieces of my resume, find skills I learned unknowingly, get overviews of what my projects do and so much more from my repos. 

I would imagine a system in the future that optimizes this concept. Utilizing a 2-way sync between your chosen files (eg. multiple projects) and some middleware to integrate efficient context access for LLMs connected to it. Thus, the LLM always lives within your work ready to force push to main with one prompt. 

Can't wait for AGI.