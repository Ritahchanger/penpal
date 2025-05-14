import Navbar from "@/components/Home/Navbar";

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="py-16 max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Main Blog Content */}
          <article className="lg:w-3/4 bg-white shadow-sm border border-gray-100 p-8 rounded-sm">
            <header className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
                Why Academic Writing Remains Essential in 2025
              </h1>
              <p className="text-lg text-gray-600">
                Published on May 15, 2025 • 5 min read
              </p>
            </header>

            <div className="prose max-w-none">
              <figure className="mb-10">
                <img
                  src="https://images.unsplash.com/photo-1597351628288-039ea94873f2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Academic writing materials on a desk"
                  className="rounded-lg shadow-md w-full h-auto"
                />
                <figcaption className="mt-2 text-sm text-gray-500 text-center">
                  Academic writing facilitates clear knowledge dissemination
                </figcaption>
              </figure>

              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Academic writing continues to serve as the foundation of
                scholarly communication in 2025. As information becomes more
                abundant, the ability to articulate complex ideas with clarity,
                precision, and credibility has never been more valuable for both
                students and professionals.
              </p>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">
                  Essential Strategies for Effective Academic Writing
                </h2>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="inline-block bg-blue-100 text-blue-800 rounded-full p-1 mr-3 mt-1">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span>
                      Implement rigorous citation practices to maintain academic
                      integrity
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block bg-blue-100 text-blue-800 rounded-full p-1 mr-3 mt-1">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span>
                      Adhere strictly to discipline-specific formatting
                      guidelines (APA, MLA, Chicago, etc.)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block bg-blue-100 text-blue-800 rounded-full p-1 mr-3 mt-1">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span>
                      Maintain an objective tone while ensuring clarity of
                      expression
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block bg-blue-100 text-blue-800 rounded-full p-1 mr-3 mt-1">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span>
                      Employ systematic editing and proofreading processes
                      before submission
                    </span>
                  </li>
                </ul>
              </section>

              <figure className="my-10">
                <img
                  src="https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Writer working at desk"
                  className="rounded-lg shadow-md w-full h-auto"
                />
                <figcaption className="mt-2 text-sm text-gray-500 text-center">
                  Modern writing tools enhance productivity and accuracy
                </figcaption>
              </figure>

              <section className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">
                  Leveraging Modern Writing Resources
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Contemporary writing tools—including AI-powered grammar
                  checkers, citation management systems, and plagiarism
                  detection software—can significantly elevate the quality of
                  academic work. Platforms like
                  <strong className="text-blue-600"> Bemi Editors</strong>{" "}
                  provide access to professional editorial services while
                  offering opportunities for skilled writers to build meaningful
                  careers in academic support.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  As we navigate the evolving landscape of academic
                  communication in 2025, the fundamental principles of clear,
                  evidence-based writing remain indispensable for knowledge
                  creation and dissemination.
                </p>
              </section>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:w-1/4">
            <div className="bg-white shadow-sm border border-gray-100 p-6 rounded-sm sticky top-8">
              <h3 className="text-xl font-bold mb-6 text-gray-800 pb-2 border-b">
                Trending Articles
              </h3>
              <div className="space-y-6">
                {[
                  {
                    title: "Top 5 Writing Niches in 2025",
                    date: "April 20, 2025",
                    excerpt: "Emerging opportunities for professional writers",
                    image:
                      "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  },
                  {
                    title: "How to Avoid Plagiarism Effectively",
                    date: "April 18, 2025",
                    excerpt: "Best practices for maintaining originality",
                    image:
                      "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  },
                  {
                    title: "Must-Have Tools for Academic Writers",
                    date: "April 15, 2025",
                    excerpt: "Essential software for research and writing",
                    image:
                      "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  },
                ].map((post, index) => (
                  <article key={index} className="group">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="rounded-md object-cover w-20 h-20"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {post.title}
                        </h4>
                        <p className="text-sm text-gray-500 mt-1">
                          {post.date}
                        </p>
                        <p className="text-sm text-gray-600 mt-1">
                          {post.excerpt}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
