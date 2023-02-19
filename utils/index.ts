import { readdirSync } from "fs";

export const getLectures = (path: string): number[] => {
  const lectures = readdirSync(path);
  return lectures
    .filter((lecture) => lecture !== "index.md")
    .map(lecture => lecture.replace(".md", ""))
    .map(lecture => +lecture);
};

