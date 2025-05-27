import { CheckCircle2, ChevronDown, ChevronUp, Lock, Moon, Sun, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import NavBarP from './NavBarP';

interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
}

interface Lesson {
  id: number;
  title: string;
  type: 'text';
  content: string;
  duration: string;
  isCompleted: boolean;
  isLocked: boolean;
  quiz: QuizQuestion[];
}

interface Chapter {
  id: number;
  title: string;
  isExpanded: boolean;
  lessons: Lesson[];
}

export default function CoursePlayer() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark';
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // --- COURSE DATA ---
  const [chapters, setChapters] = useState<Chapter[]>([
    {
      id: 1,
      title: 'HTML Fundamentals',
      isExpanded: true,
      lessons: [
        {
          id: 1,
          title: 'What is HTML?',
          type: 'text',
          content: `HTML stands for HyperText Markup Language. It is the standard language used to create and design web pages. HTML uses "tags" to mark up content so browsers know how to display it.`,
          duration: '8 min',
          isCompleted: false,
          isLocked: false,
          quiz: [
            {
              question: "What does HTML stand for?",
              options: [
                "HyperText Markup Language",
                "Home Tool Markup Language",
                "Hyperlinks and Text Markup Language",
                "Hyper Tool Markup Language"
              ],
              correctAnswer: "HyperText Markup Language"
            }
          ]
        },
        {
          id: 2,
          title: 'HTML Document Structure',
          type: 'text',
          content: `A basic HTML document has a specific structure:\n\n<!DOCTYPE html>\n<html>\n  <head>\n    <title>Page Title</title>\n  </head>\n  <body>\n    <!-- Content goes here -->\n  </body>\n</html>\n\nThe <head> contains meta information, and the <body> contains the visible content.`,
          duration: '10 min',
          isCompleted: false,
          isLocked: false,
          quiz: [
            {
              question: "Where does the visible content of a web page go?",
              options: ["<head>", "<body>", "<html>", "<title>"],
              correctAnswer: "<body>"
            }
          ]
        },
        {
          id: 3,
          title: 'HTML Tags and Elements',
          type: 'text',
          content: `HTML uses tags like <p>, <h1>, <a>, etc. Tags usually come in pairs: an opening tag <tag> and a closing tag </tag>.\n\nExample: <p>This is a paragraph.</p>\n\nSome tags are self-closing, like <img /> and <br />.`,
          duration: '8 min',
          isCompleted: false,
          isLocked: false,
          quiz: [
            {
              question: "Which of these is a self-closing tag?",
              options: ["<p>", "<img />", "<h1>", "<div>"],
              correctAnswer: "<img />"
            }
          ]
        },
        {
          id: 4,
          title: 'Comments and Whitespace',
          type: 'text',
          content: `You can add comments in HTML using <!-- Comment here -->. Comments are not displayed in the browser.\n\nWhitespace (spaces, tabs, and line breaks) is ignored by browsers, but can make your code more readable.`,
          duration: '5 min',
          isCompleted: false,
          isLocked: false,
          quiz: [
            {
              question: "How do you write a comment in HTML?",
              options: [
                "// comment",
                "# comment",
                "<!-- comment -->",
                "/* comment */"
              ],
              correctAnswer: "<!-- comment -->"
            }
          ]
        }
      ]
    },
    {
      id: 2,
      title: 'Text and Headings',
      isExpanded: false,
      lessons: [
        {
          id: 5,
          title: 'Headings',
          type: 'text',
          content: `HTML provides six levels of headings: <h1> (largest) through <h6> (smallest).\n\nExample:\n<h1>Main Title</h1>\n<h2>Subtitle</h2>\n\nUse headings to organize your content hierarchically.`,
          duration: '7 min',
          isCompleted: false,
          isLocked: true,
          quiz: [
            {
              question: "Which tag gives the largest heading?",
              options: ["<h6>", "<h1>", "<h3>", "<h4>"],
              correctAnswer: "<h1>"
            }
          ]
        },
        {
          id: 6,
          title: 'Paragraphs and Line Breaks',
          type: 'text',
          content: `Use <p> for paragraphs. To add a line break within text, use <br />.\n\nExample:\n<p>This is a paragraph.<br />This is a new line.</p>`,
          duration: '7 min',
          isCompleted: false,
          isLocked: true,
          quiz: [
            {
              question: "Which tag creates a new paragraph?",
              options: ["<p>", "<br />", "<h1>", "<div>"],
              correctAnswer: "<p>"
            }
          ]
        },
        {
          id: 7,
          title: 'Text Formatting',
          type: 'text',
          content: `HTML offers tags for formatting text:\n- <strong> for bold\n- <em> for italics\n- <u> for underline\n\nExample:\n<p>This is <strong>bold</strong> and <em>italic</em> text.</p>`,
          duration: '8 min',
          isCompleted: false,
          isLocked: true,
          quiz: [
            {
              question: "Which tag makes text italic?",
              options: ["<em>", "<strong>", "<b>", "<i>"],
              correctAnswer: "<em>"
            }
          ]
        },
        {
          id: 8,
          title: 'Lists',
          type: 'text',
          content: `HTML supports:\n- Ordered lists: <ol>\n- Unordered lists: <ul>\n- List items: <li>\n\nExample:\n<ul>\n  <li>Item 1</li>\n  <li>Item 2</li>\n</ul>`,
          duration: '10 min',
          isCompleted: false,
          isLocked: true,
          quiz: [
            {
              question: "Which tag is used for a list item?",
              options: ["<li>", "<ul>", "<ol>", "<item>"],
              correctAnswer: "<li>"
            }
          ]
        }
      ]
    },
    {
      id: 3,
      title: 'Links and Images',
      isExpanded: false,
      lessons: [
        {
          id: 9,
          title: 'Links',
          type: 'text',
          content: `Use the <a> tag to create hyperlinks.\n\nExample:\n<a href="https://example.com">Visit Example</a>\n\nThe href attribute specifies the link destination.`,
          duration: '8 min',
          isCompleted: false,
          isLocked: true,
          quiz: [
            {
              question: "Which attribute defines the link destination in <a>?",
              options: ["src", "href", "link", "url"],
              correctAnswer: "href"
            }
          ]
        },
        {
          id: 10,
          title: 'Images',
          type: 'text',
          content: `Use the <img> tag to display images.\n\nExample:\n<img src="image.jpg" alt="Description" />\n\nThe src attribute specifies the image file, and alt provides alternative text.`,
          duration: '8 min',
          isCompleted: false,
          isLocked: true,
          quiz: [
            {
              question: "Which tag is used to display an image?",
              options: ["<img>", "<image>", "<src>", "<pic>"],
              correctAnswer: "<img>"
            }
          ]
        },
        {
          id: 11,
          title: 'Linking Images',
          type: 'text',
          content: `You can make images clickable by wrapping them in <a> tags.\n\nExample:\n<a href="https://example.com"><img src="logo.png" alt="Logo" /></a>`,
          duration: '6 min',
          isCompleted: false,
          isLocked: true,
          quiz: [
            {
              question: "How do you make an image a link?",
              options: [
                "Wrap <img> in <a>",
                "Add href to <img>",
                "Use <link> tag",
                "Not possible"
              ],
              correctAnswer: "Wrap <img> in <a>"
            }
          ]
        },
        {
          id: 12,
          title: 'Image Attributes',
          type: 'text',
          content: `Common <img> attributes:\n- width and height: Set image size\n- alt: Alternative text for accessibility\n- title: Tooltip text\n\nExample:\n<img src="cat.jpg" alt="A cat" width="200" height="100" />`,
          duration: '7 min',
          isCompleted: false,
          isLocked: true,
          quiz: [
            {
              question: "Which attribute improves accessibility for images?",
              options: ["src", "alt", "width", "title"],
              correctAnswer: "alt"
            }
          ]
        }
      ]
    },
    {
      id: 4,
      title: 'Tables and Forms',
      isExpanded: false,
      lessons: [
        {
          id: 13,
          title: 'Tables',
          type: 'text',
          content: `Tables organize data in rows and columns.\n\nBasic structure:\n<table>\n  <tr>\n    <th>Header</th>\n    <th>Header</th>\n  </tr>\n  <tr>\n    <td>Data</td>\n    <td>Data</td>\n  </tr>\n</table>`,
          duration: '12 min',
          isCompleted: false,
          isLocked: true,
          quiz: [
            {
              question: "Which tag defines a table row?",
              options: ["<tr>", "<td>", "<th>", "<row>"],
              correctAnswer: "<tr>"
            }
          ]
        },
        {
          id: 14,
          title: 'Table Elements',
          type: 'text',
          content: `- <table>: Table container\n- <tr>: Table row\n- <th>: Header cell\n- <td>: Data cell\n\nExample:\n<tr>\n  <th>Name</th>\n  <th>Age</th>\n</tr>`,
          duration: '8 min',
          isCompleted: false,
          isLocked: true,
          quiz: [
            {
              question: "Which tag is for a header cell?",
              options: ["<th>", "<td>", "<tr>", "<thead>"],
              correctAnswer: "<th>"
            }
          ]
        },
        {
          id: 15,
          title: 'Forms and Inputs',
          type: 'text',
          content: `Forms collect user input.\n\nExample:\n<form>\n  <input type="text" name="username" />\n  <input type="submit" value="Send" />\n</form>`,
          duration: '10 min',
          isCompleted: false,
          isLocked: true,
          quiz: [
            {
              question: "Which tag is used for user input?",
              options: ["<input>", "<form>", "<user>", "<textbox>"],
              correctAnswer: "<input>"
            }
          ]
        },
        {
          id: 16,
          title: 'Input Types',
          type: 'text',
          content: `Common input types:\n- text\n- password\n- email\n- checkbox\n- radio\n\nExample:\n<input type="email" name="useremail" />`,
          duration: '8 min',
          isCompleted: false,
          isLocked: true,
          quiz: [
            {
              question: "Which input type is used for email addresses?",
              options: ["text", "email", "password", "number"],
              correctAnswer: "email"
            }
          ]
        }
      ]
    },
    {
      id: 5,
      title: 'Semantic HTML & Multimedia',
      isExpanded: false,
      lessons: [
        {
          id: 17,
          title: 'Semantic Elements',
          type: 'text',
          content: `Semantic elements describe their meaning:\n- <header>\n- <nav>\n- <main>\n- <section>\n- <article>\n- <footer>\n\nThey help with accessibility and SEO.`,
          duration: '10 min',
          isCompleted: false,
          isLocked: true,
          quiz: [
            {
              question: "Which tag represents the main content?",
              options: ["<main>", "<body>", "<section>", "<article>"],
              correctAnswer: "<main>"
            }
          ]
        },
        {
          id: 18,
          title: 'Audio and Video',
          type: 'text',
          content: `HTML5 supports audio and video:\n\n<audio controls>\n  <source src="audio.mp3" type="audio/mpeg">\n</audio>\n\n<video controls width="320">\n  <source src="movie.mp4" type="video/mp4">\n</video>`,
          duration: '8 min',
          isCompleted: false,
          isLocked: true,
          quiz: [
            {
              question: "Which tag is used for video?",
              options: ["<audio>", "<movie>", "<video>", "<media>"],
              correctAnswer: "<video>"
            }
          ]
        },
        {
          id: 19,
          title: 'The <div> and <span> Elements',
          type: 'text',
          content: `<div> is a block-level container for grouping content. <span> is an inline container.\n\nExample:\n<div class="container">\n  <span>Text</span>\n</div>`,
          duration: '7 min',
          isCompleted: false,
          isLocked: true,
          quiz: [
            {
              question: "Which element is block-level?",
              options: ["<span>", "<div>", "<em>", "<strong>"],
              correctAnswer: "<div>"
            }
          ]
        },
        {
          id: 20,
          title: 'HTML Best Practices',
          type: 'text',
          content: `- Use semantic tags for clarity\n- Add alt text to images\n- Indent nested elements\n- Close all tags properly\n- Keep code readable and organized`,
          duration: '8 min',
          isCompleted: false,
          isLocked: true,
          quiz: [
            {
              question: "Why should you use semantic tags?",
              options: [
                "For better SEO and accessibility",
                "To make code longer",
                "They look nicer",
                "Browsers require them"
              ],
              correctAnswer: "For better SEO and accessibility"
            }
          ]
        }
      ]
    }
  ]);

  const [activeLesson, setActiveLesson] = useState<{
    chapterId: number;
    lesson: Lesson;
  } | null>(null);

  const totalLessons = chapters.reduce((sum, ch) => sum + ch.lessons.length, 0);
  const completedLessons = chapters.reduce(
    (sum, ch) => sum + ch.lessons.filter(l => l.isCompleted).length,
    0
  );
  const progressPercent = Math.round((completedLessons / totalLessons) * 100);

  const toggleChapter = (chapterId: number) => {
    setChapters(prev =>
      prev.map(ch =>
        ch.id === chapterId
          ? { ...ch, isExpanded: !ch.isExpanded }
          : ch
      )
    );
  };

  const QuizComponent = ({
    questions,
    onComplete
  }: {
    questions: QuizQuestion[];
    onComplete: () => void;
  }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [score, setScore] = useState(0);

    const handleAnswer = (answer: string) => {
      if (answer === questions[currentQuestion].correctAnswer) {
        setScore(score + 1);
      }
      setSelectedAnswer(answer);
    };

    const nextQuestion = () => {
      setSelectedAnswer('');
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        onComplete();
      }
    };

    return (
      <div className="mt-6 bg-gray-50 dark:bg-gray-100 p-4 rounded-lg animate-fadeIn">
        <h3 className="text-xl font-semibold mb-4">Quiz ({currentQuestion + 1}/{questions.length})</h3>
        <p className="mb-4 font-medium">{questions[currentQuestion].question}</p>
        <div className="grid gap-2">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              className={`p-3 rounded-lg text-left transition-all ${
                selectedAnswer === option
                  ? option === questions[currentQuestion].correctAnswer
                    ? 'bg-green-100 dark:bg-green-900 text-white '
                    : 'bg-red-100 dark:bg-red-900 text-white' 
                  : 'bg-white dark:bg-gray-100 hover:bg-gray-50 dark:hover:bg-gray-600 hover:text-white'
              }`}
              disabled={!!selectedAnswer}
            >
              {option}
            </button>
          ))}
        </div>
        <button
          onClick={nextQuestion}
          className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          disabled={!selectedAnswer}
        >
          {currentQuestion < questions.length - 1 ? 'Next Question →' : 'Finish Quiz'}
        </button>
        {currentQuestion === questions.length - 1 && selectedAnswer && (
          <p className="mt-4 font-semibold">
            Your Score: {score}/{questions.length}
          </p>
        )}
      </div>
    );
  };

  const handleLessonComplete = (chapterId: number, lessonId: number) => {
    setChapters(prevChapters => {
      const updatedChapters = prevChapters.map(chapter => {
        if (chapter.id === chapterId) {
          return {
            ...chapter,
            lessons: chapter.lessons.map(lesson =>
              lesson.id === lessonId ? { ...lesson, isCompleted: true } : lesson
            )
          };
        }
        return chapter;
      });

      const currentChapterIndex = updatedChapters.findIndex(ch => ch.id === chapterId);
      const currentChapter = updatedChapters[currentChapterIndex];
      const allCompleted = currentChapter.lessons.every(lesson => lesson.isCompleted);

      if (allCompleted && updatedChapters[currentChapterIndex + 1]) {
        updatedChapters[currentChapterIndex + 1] = {
          ...updatedChapters[currentChapterIndex + 1],
          lessons: updatedChapters[currentChapterIndex + 1].lessons.map(lesson => ({
            ...lesson,
            isLocked: false
          }))
        };
      }

      return updatedChapters;
    });
    setActiveLesson(null);
  };

  
  return (
    <>
    <NavBarP/>
    <div className={`min-h-screen transition-colors duration-300 `}>
      
      <div className="flex items-center justify-between max-w-4xl mx-auto pt-8 pb-4 px-4">
        <h1 className="text-3xl font-extrabold tracking-tight">HTML Interactive Course</h1>
        
      </div>

      
      <div className="max-w-4xl mx-auto px-4 mb-8">
        <div className="flex items-center gap-6 mb-4">
          
          <div className="flex-shrink-0">
            <svg width="64" height="64" viewBox="0 0 128 128">
              <g>
                <path fill="#E44D26" d="M19.1 116.1L8.1 0h111.8l-11 116.1L63.9 128"/>
                <path fill="#F16529" d="M64 119.2l36.6-10.1 9.4-105H64"/>
                <path fill="#EBEBEB" d="M64 52.6H44.3l-1.3-14.7H64V23.7H28.6l.3 3.7 3.4 38.2H64zm0 37.4l-.1.1-16.3-4.4-1-11.1H32.8l2 22.2 29.1 8.1.1-.1z"/>
                <path fill="#FFF" d="M64 52.6v14.2h16.6l-1.6 18.2L64 89.9v14.3l29.1-8.1.2-2.3 3.3-36.9.3-3.7H64zm0-28.9v14.2h32.4l.3-3.7.6-6.8.3-3.7z"/>
              </g>
            </svg>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">Introduction to HTML</h2>
            <p className="text-base text-gray-100 dark:text-gray-600">
              HTML is at the core of every web page. It's beginner-friendly and knowing the basics is useful for everyone who works in digital design, marketing, content, and more. If you're interested in front-end web development, this course is a great place to start! You don't need any previous coding experience, and we have plenty of other courses for you to deepen your knowledge once you're finished, including CSS and JavaScipt.
            </p>
          </div>
        </div>
      </div>

      
      <div className="max-w-4xl mx-auto px-4 mb-8">
        <div className="flex items-center gap-3 mb-1">
          <span className="text-sm font-medium">Progress</span>
          <span className="text-xs text-gray-500">{completedLessons}/{totalLessons} lessons</span>
          <span className="text-xs text-gray-500">{progressPercent}%</span>
        </div>
        <div className="w-full bg-gray-300 dark:bg-gray-350 rounded-full h-4 overflow-hidden">
          <div
            className="bg-blue-600 h-4 rounded-full transition-all duration-500"
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>
      </div>

      
      <div className="max-w-4xl mx-auto px-4 pb-16">
        {chapters.map(chapter => {
          const chapterCompleted = chapter.lessons.every(l => l.isCompleted);
          return (
            <div key={chapter.id} className="mb-6 bg-white dark:bg-gray-100 rounded-xl shadow-lg transition-all">
              <button
                className="w-full flex items-center justify-between p-4 border-b dark:border-gray-800 rounded-t-xl focus:outline-none"
                onClick={() => toggleChapter(chapter.id)}
                aria-expanded={chapter.isExpanded}
              >
                <div className="flex items-center gap-2">
                  <span className={`font-semibold text-lg ${chapterCompleted ? 'text-green-600' : ''}`}>{chapter.title}</span>
                  {chapterCompleted && <CheckCircle2 className="w-5 h-5 text-green-500" />}
                </div>
                {chapter.isExpanded ? <ChevronUp /> : <ChevronDown />}
              </button>
              {chapter.isExpanded && (
                <div className="p-4 animate-fadeIn">
                  {chapter.lessons.map(lesson => (
                    <div
                      key={lesson.id}
                      className={`flex items-center justify-between p-4 mb-2 rounded-lg transition-colors border dark:border-gray-800 ${
                        lesson.isLocked
                          ? 'bg-gray-100 dark:bg-gray-100 text-black cursor-not-allowed'
                          : 'bg-gray-50 dark:bg-gray-200 hover:bg-blue-50 dark:hover:bg-blue-950 hover:text-white cursor-pointer'
                      }`}
                      onClick={() => !lesson.isLocked && setActiveLesson({ chapterId: chapter.id, lesson })}
                    >
                      <div>
                        <h3 className="font-medium">{lesson.title}</h3>
                        <p className="text-xs text-gray-500">{lesson.duration}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        {lesson.isLocked && <Lock className="w-5 h-5" />}
                        {lesson.isCompleted && <CheckCircle2 className="w-5 h-5 text-green-500" />}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      
      {activeLesson && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-fadeIn">
          <div className="bg-white dark:bg-gray-100 p-6 rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative shadow-2xl animate-fadeIn">
            <button
              onClick={() => setActiveLesson(null)}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 dark:hover:bg-gray-100 rounded-full"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>
            <h2 className="text-2xl font-bold mb-4">{activeLesson.lesson.title}</h2>
            <div className="prose dark:prose-invert mb-6">
              {activeLesson.lesson.content.split('\n').map((paragraph, index) => (
                <p key={index} className="mb-4">{paragraph}</p>
              ))}
            </div>
            {activeLesson.lesson.quiz ? (
              <QuizComponent
                questions={activeLesson.lesson.quiz}
                onComplete={() => handleLessonComplete(activeLesson.chapterId, activeLesson.lesson.id)}
              />
            ) : (
              <button
                onClick={() => handleLessonComplete(activeLesson.chapterId, activeLesson.lesson.id)}
                className="w-full bg-green-100 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
              >
                Mark as Complete
              </button>
            )}
          </div>
        </div>
      )}

      <style>{`
        .animate-fadeIn { animation: fadeIn 0.3s; }
        @keyframes fadeIn { from { opacity: 0; transform: scale(0.97); } to { opacity: 1; transform: scale(1); } }
      `}</style>
    </div>
    </>
  );
}
