"use client";

import React from "react";
import { skills } from "../data/skills";
import { FocusCards } from "../ui/focus-cards";

const groups = [
  { title: "Tecnologias Front-end", value: "frontend" },
  { title: "Tecnologias Back-end", value: "backend" },
  { title: "Outras Tecnologias", value: "other" },
  { title: "Habilidades Corporativas", value: "corporate" },
];

export const tabs = groups.map((group) => ({
  title: group.title,
  value: group.value,
  content: (
    <div className="w-full h-full p-4">
      <FocusCards
        cards={skills
          .filter((s) => s.group === group.value)
          .map((s) => ({
            title: s.title,
            description: s.description,
            src: s.src,
          }))}
      />
    </div>
  ),
}));

export default tabs;