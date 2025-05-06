"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github.css"; // or any other highlight.js theme

const orderDescription = `
## 📄 Assignment Overview

You are expected to deliver a **well-researched** report on _climate change adaptation_.

---

### 📌 Requirements:
- [x] Minimum **2000 words**
- [ ] Use **APA 7th Edition** referencing
- [x] Submit before **August 10th, 2025**
- [x] Include at least **3 case studies**

---

### 🧪 Sample Code Block:

\`\`\`javascript
function calculateDeadline(date) {
  const now = new Date();
  return new Date(date) - now;
}
\`\`\`

---

### 📊 Data Table:

| Country     | Emissions (Mt CO₂) | Renewable % |
|-------------|-------------------|-------------|
| Kenya       | 73                | 78%         |
| Uganda      | 45                | 65%         |
| Tanzania    | 88                | 58%         |

---

### 🔗 Notes:
Footnotes[^1] and [links](https://www.ipcc.ch) are also supported.

[^1]: Example of a footnote explaining something.
`;

const OrderMoreDetails = () => {
  return (
    <div className="p-4 mt-[3rem] md:p-6 bg-white rounded-lg shadow-md border border-red-600">
      <h2 className="text-xl font-bold text-red-600 mb-4 border-b border-gray-200 pb-2">
        ORDER DESCRIPTION
      </h2>

      <div className="prose prose-sm sm:prose lg:prose-lg max-w-none text-black markdown-body">
        <ReactMarkdown
          children={orderDescription}
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeHighlight]}
        />
      </div>
    </div>
  );
};

export default OrderMoreDetails;
