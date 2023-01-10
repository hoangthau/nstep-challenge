# QUERY

## What is this? ❓

This folder is the project's STATE MANAGEMENT. If you are not familiar with react-query, here's a quick start.
><https://tanstack.com/query/v4/?from=reactQueryV3&original=https://react-query-v3.tanstack.com/>

## Principles 📚

To quote [React Query](https://tanstack.com/query/v4/docs/guides/does-this-replace-client-state) themselves:
>React Query is a server-state library, responsible for managing asynchronous operations between your server and client
>
>...
>
> With all of those things (contexts, middlewares, reducers, actions, connectors, result states) removed, you may ask yourself,
>"Is it worth it to keep using our client state manager for this tiny global state?"

## Requirements 📦

A couple of simple requirements for queries:

- Each query folder should be self-contained, usually that means it'd interact with only a few data objects.
- Each query/mutation should be single-purpose, with *EXPLICIT* side effects, if any.

## Bonuses 🍒

These are entire ***OPTIONAL***, if you can explain your thought process on how to gradually tackle them, it's already a big plus ✅
