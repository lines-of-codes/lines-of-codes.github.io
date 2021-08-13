---
layout: post
title: "How fast it could be? - StoryScript adventure"
date: 2021-08-06 17:00:00 +0700
categories: update
---

Hello! Welcome to the second blog post... I haven't made a new blog for a long time. but here I am!

Today, I'm going to talk about StoryScript. My programming language.

Some of you may know, that StoryScript released the first alpha version. After I've released it, I've been optimizing it. And I question StoryScript... "How fast could StoryScript be".

## "Don't re-invent the wheel"
As some of Python programmers may know, Using built-in functions is faster than re-inventing the wheel.

After thinking of that, I started looking in StoryScript code, and Found some points to optimize using built-in functions.

After optimizing using that technique, I don't see much different is StoryScript speed. As the testing command was pretty small compared to the real production product.

Thinking about the point I just optimized, I realize that these changes wouldn't make much different. cause' as I said, the testing command was pretty small. But it will help, In a larger scale application.

## When the dependencies is coming in
After the StoryScript 0.0.1 release, There's many feature that got added, and it came, with more dependencies.

Most of the dependencies that got added was for _fancy_ features. Like colorama for breakpoint syntax highlighting for CLI, Numpy for _extra fast_ arrays, and Orjson for JSON parsing. (Even when I know that `json` module exist.)

And then, after realizing that, I just think of one thing... That maybe, I could make StoryScript lite.
a StoryScript interpreter, but with _less_ features, which most of them was debugging feaures, Which is ideal for Production use.

### Planning about StoryScript lite
StoryScript lite will be the optimized version of StoryScript, which will only available as Python source.

And StoryScript lite will _cut all debugging features_, And It will exclude the Interactive shell too.

For the changes that will be made to make StoryScript lite, currently there are:

- Simulate input from text file
- Breakpoints
- Interactive REPL shell
- StoryScript CLI Syntax highlighting utilty
- Minify the file
- Removed caching
- Remove code blocks
- No command line argument parsing support (due to the removal of the shell)
- Minimize the use of Functions
- Minimize the use of Imports


## Just-in-time compilation
Some of you may ask, How about JITed StoryScript? (Just-in-time compilation version of StoryScript)

The answer to that question is [SSLLVM](https://github.com/StoryScriptorg/SSLLVM).
SSLLVM is a JITed version of StoryScript. which uses LLVM as the backend. so It was StoryScript LLVM.

Currently, SSLLVM only contains print command. But it wasn't a normal print command.

It's a StoryScript cache print command. and yes, The current SSLLVM version will only parse StoryScript cache.

Which StoryScript cache is even not implemented in the main lexer... So It will be hard to use SSLLVM currently.

```
CALL print Hello, world!
```
_Hello world example in StoryScript cache_

## Where to learn StoryScript
Another thing,

As you may know, currently, StoryScript wiki was pretty much inactive.

So... Where to learn StoryScript?

Currently, I'm doing **Coursega**. Coursega is an online course platform that is built using React ~~and PHP~~.

And also, The StoryScript course will be free! and will be always updated.
