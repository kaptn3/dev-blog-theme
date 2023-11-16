import md from "markdown-it";

export const renderMd = (content: string) => md({
  html: true
}).render(content)
