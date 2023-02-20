import { readdirSync, readFileSync } from "fs";
import { DefaultTheme } from "vitepress";

export const getLectures = (path: string): DefaultTheme.SidebarItem[] => {
  const lectures = readdirSync(path).sort((a, b) => {
    const a_num = +a.split(".md")[0];
    const b_num = +b.split(".md")[0];

    return a_num - b_num < 0 ? -1 : 1;
  });

  const data: string[] = [];
  const regex = /^[#] [0-9]{1,2}[.,]/;

  for (const file of lectures) {
    const lines = readFileSync(`${path}/${file}`, "utf-8").split("\n");

    for (const line of lines) {
      if (line.match(regex)) {
        const markdownHeader = line.match(regex)[0];
        data.push(line.split(markdownHeader)[1].trim());
      }
    }
  }

  return data.map((item, i) => {
    return {
      text: item,
      link: `${path.split("./docs")[1]}/${i + 1}`,
    };
  });
};

