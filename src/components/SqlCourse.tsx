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
      title: 'Introduction to SQL',
      isExpanded: true,
      lessons: [
        {
          id: 1,
          title: 'What is SQL?',
          type: 'text',
          content: `SQL stands for Structured Query Language. It is used to communicate with and manipulate databases. SQL is a standard language for relational database management systems.`,
          duration: '6 min',
          isCompleted: false,
          isLocked: false,
          quiz: [
            {
              question: "What does SQL stand for?",
              options: [
                "Structured Query Language",
                "Simple Query Language",
                "Structured Question List",
                "Server Query Language"
              ],
              correctAnswer: "Structured Query Language"
            }
          ]
        },
        {
          id: 2,
          title: 'Basic SQL Syntax',
          type: 'text',
          content: `SQL statements are written in English-like syntax.\n\nExample:\nSELECT * FROM customers;\n\nKeywords like SELECT, FROM, WHERE are not case-sensitive, but capitalizing them improves readability.`,
          duration: '8 min',
          isCompleted: false,
          isLocked: false,
          quiz: [
            {
              question: "Which SQL keyword is used to fetch data?",
              options: ["SELECT", "GET", "FETCH", "EXTRACT"],
              correctAnswer: "SELECT"
            }
          ]
        }
      ]
    },
    {
      id: 2,
      title: 'Retrieving Data',
      isExpanded: false,
      lessons: [
        {
          id: 3,
          title: 'SELECT Statement',
          type: 'text',
          content: `The SELECT statement retrieves data from a database.\n\nExample:\nSELECT name, age FROM users;`,
          duration: '7 min',
          isCompleted: false,
          isLocked: true,
          quiz: [
            {
              question: "Which keyword is used to select specific columns?",
              options: ["FROM", "WHERE", "SELECT", "SHOW"],
              correctAnswer: "SELECT"
            }
          ]
        },
        {
          id: 4,
          title: 'WHERE Clause',
          type: 'text',
          content: `The WHERE clause filters records.\n\nExample:\nSELECT * FROM employees WHERE salary > 50000;`,
          duration: '8 min',
          isCompleted: false,
          isLocked: true,
          quiz: [
            {
              question: "What does the WHERE clause do?",
              options: [
                "Sorts records",
                "Joins tables",
                "Filters records",
                "Selects all records"
              ],
              correctAnswer: "Filters records"
            }
          ]
        }
      ]
    },
    {
      id: 3,
      title: 'Modifying Data',
      isExpanded: false,
      lessons: [
        {
          id: 5,
          title: 'INSERT INTO',
          type: 'text',
          content: `Use INSERT INTO to add new data.\n\nExample:\nINSERT INTO users (name, age) VALUES ('Alice', 30);`,
          duration: '9 min',
          isCompleted: false,
          isLocked: true,
          quiz: [
            {
              question: "Which command adds new records?",
              options: ["UPDATE", "INSERT INTO", "DELETE", "ALTER"],
              correctAnswer: "INSERT INTO"
            }
          ]
        },
        {
          id: 6,
          title: 'UPDATE Statement',
          type: 'text',
          content: `The UPDATE statement modifies existing records.\n\nExample:\nUPDATE users SET age = 31 WHERE name = 'Alice';`,
          duration: '9 min',
          isCompleted: false,
          isLocked: true,
          quiz: [
            {
              question: "What does the UPDATE command do?",
              options: ["Deletes records", "Adds records", "Modifies records", "Selects records"],
              correctAnswer: "Modifies records"
            }
          ]
        },
        {
          id: 7,
          title: 'DELETE Statement',
          type: 'text',
          content: `DELETE removes data.\n\nExample:\nDELETE FROM users WHERE age < 18;`,
          duration: '7 min',
          isCompleted: false,
          isLocked: true,
          quiz: [
            {
              question: "Which command deletes records?",
              options: ["REMOVE", "TRUNCATE", "DELETE", "DROP"],
              correctAnswer: "DELETE"
            }
          ]
        }
      ]
    },
    {
      id: 4,
      title: 'SQL Joins',
      isExpanded: false,
      lessons: [
        {
          id: 8,
          title: 'Understanding Joins',
          type: 'text',
          content: `Joins combine rows from two or more tables based on a related column.`,
          duration: '6 min',
          isCompleted: false,
          isLocked: true,
          quiz: [
            {
              question: "What is the purpose of a JOIN?",
              options: ["Delete rows", "Update values", "Combine rows", "Sort results"],
              correctAnswer: "Combine rows"
            }
          ]
        },
        {
          id: 9,
          title: 'INNER JOIN',
          type: 'text',
          content: `Returns rows with matching values in both tables.\n\nExample:\nSELECT * FROM orders INNER JOIN customers ON orders.customer_id = customers.id;`,
          duration: '8 min',
          isCompleted: false,
          isLocked: true,
          quiz: [
            {
              question: "Which JOIN returns only matching rows?",
              options: ["LEFT JOIN", "RIGHT JOIN", "FULL JOIN", "INNER JOIN"],
              correctAnswer: "INNER JOIN"
            }
          ]
        },
        {
          id: 10,
          title: 'LEFT JOIN',
          type: 'text',
          content: `Returns all records from the left table, and matched records from the right table.`,
          duration: '8 min',
          isCompleted: false,
          isLocked: true,
          quiz: [
            {
              question: "Which JOIN includes all left table rows?",
              options: ["LEFT JOIN", "INNER JOIN", "RIGHT JOIN", "CROSS JOIN"],
              correctAnswer: "LEFT JOIN"
            }
          ]
        }
      ]
    },
    {
      id: 5,
      title: 'SQL Constraints & Advanced Topics',
      isExpanded: false,
      lessons: [
        {
          id: 11,
          title: 'Constraints',
          type: 'text',
          content: `Constraints enforce rules on data in tables. Examples:\n- PRIMARY KEY\n- FOREIGN KEY\n- UNIQUE\n- NOT NULL\n- CHECK`,
          duration: '10 min',
          isCompleted: false,
          isLocked: true,
          quiz: [
            {
              question: "Which constraint ensures a column cannot have NULL values?",
              options: ["UNIQUE", "NOT NULL", "PRIMARY KEY", "DEFAULT"],
              correctAnswer: "NOT NULL"
            }
          ]
        },
        {
          id: 12,
          title: 'Indexes',
          type: 'text',
          content: `Indexes speed up queries on large tables.\n\nExample:\nCREATE INDEX idx_name ON users(name);`,
          duration: '7 min',
          isCompleted: false,
          isLocked: true,
          quiz: [
            {
              question: "What is the main purpose of an index?",
              options: [
                "To enforce constraints",
                "To store data",
                "To improve performance",
                "To format output"
              ],
              correctAnswer: "To improve performance"
            }
          ]
        },
        {
          id: 13,
          title: 'Views',
          type: 'text',
          content: `A view is a virtual table based on the result of a query.\n\nExample:\nCREATE VIEW view_name AS SELECT name FROM users;`,
          duration: '7 min',
          isCompleted: false,
          isLocked: true,
          quiz: [
            {
              question: "What is a SQL view?",
              options: ["A type of constraint", "A stored procedure", "A virtual table", "An index"],
              correctAnswer: "A virtual table"
            }
          ]
        }
      ]
    },
    {
      id: 6,
      title: 'Subqueries & Set Operations',
      isExpanded: false,
      lessons: [
        {
          id: 14,
          title: 'Subqueries',
          type: 'text',
          content: `A subquery is a query within another query.\n\nExample:\nSELECT name FROM users WHERE id IN (SELECT user_id FROM orders);`,
          duration: '8 min',
          isCompleted: false,
          isLocked: true,
          quiz: [
            {
              question: "What is a subquery?",
              options: [
                "A query inside another query",
                "A SELECT statement",
                "A type of JOIN",
                "A database constraint"
              ],
              correctAnswer: "A query inside another query"
            }
          ]
        },
        {
          id: 15,
          title: 'Set Operations (UNION, INTERSECT, EXCEPT)',
          type: 'text',
          content: `Set operations combine results from two or more queries.\n- UNION: Combines results (no duplicates)\n- INTERSECT: Returns common rows\n- EXCEPT: Rows in first query but not in second`,
          duration: '9 min',
          isCompleted: false,
          isLocked: true,
          quiz: [
            {
              question: "Which operation returns only common rows from two queries?",
              options: ["UNION", "INTERSECT", "EXCEPT", "JOIN"],
              correctAnswer: "INTERSECT"
            }
          ]
        }
      ]
    },
    {
      id: 7,
      title: 'Aggregate Functions & Grouping',
      isExpanded: false,
      lessons: [
        {
          id: 16,
          title: 'COUNT, SUM, AVG, MAX, MIN',
          type: 'text',
          content: `Aggregate functions perform a calculation on a set of values.\n\nExample:\nSELECT COUNT(*) FROM users;`,
          duration: '7 min',
          isCompleted: false,
          isLocked: true,
          quiz: [
            {
              question: "Which function returns the total number of rows?",
              options: ["SUM", "COUNT", "MAX", "AVG"],
              correctAnswer: "COUNT"
            }
          ]
        },
        {
          id: 17,
          title: 'GROUP BY and HAVING',
          type: 'text',
          content: `GROUP BY groups rows sharing a property. HAVING filters after grouping.\n\nExample:\nSELECT department, COUNT(*) FROM employees GROUP BY department HAVING COUNT(*) > 5;`,
          duration: '10 min',
          isCompleted: false,
          isLocked: true,
          quiz: [
            {
              question: "Which clause filters results after GROUP BY?",
              options: ["WHERE", "HAVING", "ORDER BY", "DISTINCT"],
              correctAnswer: "HAVING"
            }
          ]
        }
      ]
    },
    {
      id: 8,
      title: 'Transactions & Stored Procedures',
      isExpanded: false,
      lessons: [
        {
          id: 18,
          title: 'Transactions and ACID Properties',
          type: 'text',
          content: `A transaction is a unit of work.\nACID: Atomicity, Consistency, Isolation, Durability.\n\nExample:\nBEGIN; UPDATE users SET balance = balance - 100 WHERE id = 1; COMMIT;`,
          duration: '10 min',
          isCompleted: false,
          isLocked: true,
          quiz: [
            {
              question: "What does the 'A' in ACID stand for?",
              options: ["Authorization", "Automation", "Atomicity", "Aggregation"],
              correctAnswer: "Atomicity"
            }
          ]
        },
        {
          id: 19,
          title: 'Stored Procedures',
          type: 'text',
          content: `Stored procedures are reusable SQL code blocks.\n\nExample:\nCREATE PROCEDURE GetUsers() BEGIN SELECT * FROM users; END;`,
          duration: '8 min',
          isCompleted: false,
          isLocked: true,
          quiz: [
            {
              question: "What is a stored procedure?",
              options: [
                "A temporary table",
                "A saved SQL function",
                "A JOIN type",
                "A constraint"
              ],
              correctAnswer: "A saved SQL function"
            }
          ]
        }
      ]
    },
    {
      id: 9,
      title: 'Triggers & Events',
      isExpanded: false,
      lessons: [
        {
          id: 20,
          title: 'Triggers',
          type: 'text',
          content: `A trigger automatically performs actions in response to events.\n\nExample:\nCREATE TRIGGER before_insert BEFORE INSERT ON users FOR EACH ROW SET NEW.created_at = NOW();`,
          duration: '7 min',
          isCompleted: false,
          isLocked: true,
          quiz: [
            {
              question: "When do triggers execute?",
              options: [
                "On demand",
                "Automatically before/after events",
                "Only manually",
                "When dropping a table"
              ],
              correctAnswer: "Automatically before/after events"
            }
          ]
        }
      ]
    },
    {
      id: 10,
      title: 'Database Design & Normalization',
      isExpanded: false,
      lessons: [
        {
          id: 21,
          title: 'Normalization Basics',
          type: 'text',
          content: `Normalization organizes data to reduce redundancy.\nNormal Forms:\n1NF: Atomic columns\n2NF: Full functional dependency\n3NF: No transitive dependency`,
          duration: '10 min',
          isCompleted: false,
          isLocked: true,
          quiz: [
            {
              question: "What is the goal of normalization?",
              options: [
                "Make database faster",
                "Add redundancy",
                "Organize data and reduce redundancy",
                "Split tables randomly"
              ],
              correctAnswer: "Organize data and reduce redundancy"
            }
          ]
        }
      ]
    },
    {
      id: 11,
      title: 'Capstone Project',
      isExpanded: false,
      lessons: [
        {
          id: 22,
          title: 'Project: Library Management System',
          type: 'text',
          content: `Design and implement a SQL schema for a library system.\nTables:\n- Books (id, title, author)\n- Members (id, name)\n- Borrow (member_id, book_id, borrow_date)\nTasks:\n- Create tables\n- Add sample data\n- Write queries for checkouts, late returns, etc.`,
          duration: 'Unlimited',
          isCompleted: false,
          isLocked: true,
          quiz: []
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
        <h1 className="text-3xl font-extrabold tracking-tight">SQL Interactive Course</h1>
        
      </div>

      
      <div className="max-w-4xl mx-auto px-4 mb-8">
        <div className="flex items-center gap-6 mb-4">
          
          <div className="flex-shrink-0">
          <svg width="128" height="128" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="64" cy="20" rx="40" ry="12" fill="#A6CE39"/>
            <ellipse cx="64" cy="20" rx="30" ry="8" fill="#7EBB1C"/>

            <path d="M24 20 v80 a40 12 0 0 0 80 0 V20" fill="#0078D7"/>
            <path d="M64 20 v80 a40 12 0 0 1 -40 0 V20" fill="#1A91F0"/>

            <text x="64" y="85" font-size="30" fill="white" font-family="Arial" text-anchor="middle" font-weight="bold">
                SQL
            </text>
        </svg>


          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">Introduction to SQL</h2>
            <p className="text-base text-gray-100 dark:text-gray-600">
            Want to work with SQL but don't know how to start? That's where SQL comes in! In this course, you'll learn SQL basics and how to use SQL statements! Database concepts, syntax and real-world data stored in databases. Once you know how to use SQL, you'll be able to work with databases from many different platforms and tools. Learn about SQL queries and how to manage data in databases. This course will give you practical skills and prepare you for everything from small projects to database administration. So what are you waiting for? If you're interested in database experience for this course, so dive right in!            </p>
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
