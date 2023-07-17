import { type ReactElement, type FC } from 'react';

import { Code, Extension } from 'bright';

Code.lineNumbers = true;
Code.theme = 'poimandres';

type MdxCodeBlockProps = {
  children: ReactElement;
};

export const MdxCodeBlock: FC<MdxCodeBlockProps> = ({
  children: { props },
}) => {
  const [lang, title] = props?.className?.split(':') ?? [undefined, undefined];
  const codeWithoutTrailingNewline = props.children.trimEnd();

  return (
    <Code
      className="not-prose !my-12 text-sm"
      lang={lang.replace('language-', '')}
      title={title}
      extensions={[focus]}
    >
      {codeWithoutTrailingNewline}
    </Code>
  );
};

// Focus Extension based on https://github.com/code-hike/bright/blob/main/web/app/recipes/focus/extension.js
export const focus: Extension = {
  name: 'focus',
  MultilineAnnotation: ({ children }) => (
    <div style={{ filter: 'contrast(0.1)' }}>{children}</div>
  ),
  beforeHighlight: (props, focusAnnotations) => {
    if (focusAnnotations.length === 0) return props;

    const lineCount = props.code.split('\n').length;

    const ranges = focusAnnotations.flatMap(a => a.ranges);

    let newRanges = [{ fromLineNumber: 1, toLineNumber: lineCount }];

    for (const range of ranges) {
      const { fromLineNumber, toLineNumber } = range as any;
      if (!fromLineNumber || !toLineNumber) continue;

      newRanges = newRanges.flatMap(r => {
        if (r.fromLineNumber > toLineNumber || r.toLineNumber < fromLineNumber)
          return [r];
        if (
          r.fromLineNumber >= fromLineNumber &&
          r.toLineNumber <= toLineNumber
        )
          return [];
        if (r.fromLineNumber < fromLineNumber && r.toLineNumber > toLineNumber)
          return [
            {
              fromLineNumber: r.fromLineNumber,
              toLineNumber: fromLineNumber - 1,
            },
            {
              fromLineNumber: toLineNumber + 1,
              toLineNumber: r.toLineNumber,
            },
          ];
        if (r.fromLineNumber < fromLineNumber)
          return [
            {
              fromLineNumber: r.fromLineNumber,
              toLineNumber: fromLineNumber - 1,
            },
          ];
        if (r.toLineNumber > toLineNumber)
          return [
            {
              fromLineNumber: toLineNumber + 1,
              toLineNumber: r.toLineNumber,
            },
          ];
        return [];
      });
    }

    const newAnnotations = props.annotations.filter(a => a.name !== 'focus');
    newAnnotations.push({
      name: 'focus',
      ranges: newRanges,
    });
    return { ...props, annotations: newAnnotations };
  },
};
