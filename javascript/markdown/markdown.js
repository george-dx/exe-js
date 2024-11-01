function wrapWithTag(text, tag) {
  return `<${tag}>${text}</${tag}>`;
}

function hasTag(text, tag) {
  return text.startsWith(`<${tag}>`);
}

function applyTagToText(markdown, delimiter, tag) {
  const pattern = new RegExp(`${delimiter}(.+)${delimiter}`);
  const replacement = `<${tag}>$1</${tag}>`;
  return markdown.replace(pattern, replacement);
}

function parseBold(markdown) {
  return applyTagToText(markdown, '__', 'strong');
}

function parseItalic(markdown) {
  return applyTagToText(markdown, '_', 'em');
}

function parseInlineText(markdown, list) {
  const parsedText = parseItalic(parseBold(markdown));
  if (list) {
    return parsedText;
  } else {
    return wrapWithTag(parsedText, 'p');
  }
}

function parseMarkdownHeader(markdown, list) {
  let count = 0;
  for (let i = 0; i < markdown.length; i++) {
    if (markdown[i] === '#') {
      count += 1;
    } else {
      break;
    }
  }
  if (count === 0 || count > 6) {
    return [null, list];
  }
  const headerTag = `h${count}`;
  const headerHtml = wrapWithTag(markdown.substring(count + 1), headerTag);
  if (list) {
    return [`</ul>${headerHtml}`, false];
  } else {
    return [headerHtml, false];
  }
}

function parseMarkdownLineItem(markdown, list) {
  if (markdown.startsWith('*')) {
    const innerHtml = wrapWithTag(parseInlineText(markdown.substring(2), true), 'li');
    if (list) {
      return [innerHtml, true];
    } else {
      return [`<ul>${innerHtml}`, true];
    }
  }
  return [null, list];
}

function parseMarkdownParagraph(markdown, list) {
  if (!list) {
    return [parseInlineText(markdown, false), false];
  } else {
    return [`</ul>${parseInlineText(markdown, false)}`, false];
  }
}

function parseLine(markdown, list) {
  let [result, inListAfter] = parseMarkdownHeader(markdown, list);
  if (result === null) {
    [result, inListAfter] = parseMarkdownLineItem(markdown, list);
  }
  if (result === null) {
    [result, inListAfter] = parseMarkdownParagraph(markdown, list);
  }
  if (result === null) {
    throw new Error('Invalid markdown line: "${markdown}"');
  }
  return [result, inListAfter];
}

export function parse(markdown) {
  const lines = markdown.split('\n');
  let result = '';
  let list = false;
  for (let i = 0; i < lines.length; i++) {
    let [lineResult, newList] = parseLine(lines[i], list);
    result += lineResult;
    list = newList;
  }
  if (list) {
    return result + '</ul>';
  } else {
    return result;
  }
}
