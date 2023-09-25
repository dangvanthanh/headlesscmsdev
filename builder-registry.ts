"use client";
import { Builder } from "@builder.io/react";
import Counter from "./components/Counter/Counter";
import Hero from "./components/Hero/Hero";

Builder.registerComponent(Counter, {
  name: "Counter",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});

Builder.registerComponent(Hero, {
  name: "Hero",
  inputs: [
    {
      name: "description",
      type: "longText",
      defaultValue:
        "Here at Paga we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.",
    },
    {
      name: "title",
      type: "string",
      defaultValue: "We invest in the world's potential",
    },
  ],
});
