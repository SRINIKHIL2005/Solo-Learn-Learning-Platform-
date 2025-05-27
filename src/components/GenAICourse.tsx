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

export default function GenAICourse() {
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
      title: 'Introduction to Generative AI',
      isExpanded: true,
      lessons: [
        {
          id: 1,
          title: 'What is Generative AI?',
          type: 'text',
          content: `Generative AI refers to AI systems designed to generate new content, such as images, text, or music, based on existing data. These models, like GPT and DALL·E, create novel outputs through training on large datasets.`,
          duration: '6 min',
          isCompleted: false,
          isLocked: false,
          quiz: [
            {
              question: "What does Generative AI do?",
              options: [
                "Generates new content",
                "Analyzes data",
                "Sorts information",
                "Translates text"
              ],
              correctAnswer: "Generates new content"
            }
          ]
        },
        {
          id: 2,
          title: 'Types of Generative AI Models',
          type: 'text',
          content: `Generative AI includes models like GANs (Generative Adversarial Networks) and VAEs (Variational Autoencoders), which are used to generate realistic images, text, and other forms of media. Each model type has its own approach and use cases.`,
          duration: '7 min',
          isCompleted: false,
          isLocked: false,
          quiz: [
            {
              question: "Which model is used for generating realistic images?",
              options: ["GANs", "CNNs", "RNNs", "SVMs"],
              correctAnswer: "GANs"
            }
          ]
        }
      ]
    },
    {
      id: 2,
      title: 'Applications of Generative AI',
      isExpanded: false,
      lessons: [
        {
          id: 3,
          title: 'Generative AI in Text Generation',
          type: 'text',
          content: `Generative AI models like GPT-3 and GPT-4 can generate coherent and contextually appropriate text based on a given prompt. These models are widely used in chatbots, writing assistants, and content creation tools.`,
          duration: '8 min',
          isCompleted: false,
          isLocked: true,
          quiz: [
            {
              question: "Which model is known for generating human-like text?",
              options: ["GPT-3", "BERT", "ResNet", "LSTM"],
              correctAnswer: "GPT-3"
            }
          ]
        },
        {
          id: 4,
          title: 'Generative AI in Image Synthesis',
          type: 'text',
          content: `Generative AI can create high-quality images based on a description using models like DALL·E. These models are trained on large datasets of images and can generate new images based on textual prompts.`,
          duration: '9 min',
          isCompleted: false,
          isLocked: true,
          quiz: [
            {
              question: "Which model can generate images from textual descriptions?",
              options: ["DALL·E", "VGG", "ResNet", "AlexNet"],
              correctAnswer: "DALL·E"
            }
          ]
        }
      ]
    },
    {
      id: 3,
      title: 'Challenges and Ethical Concerns in Generative AI',
      isExpanded: false,
      lessons: [
        {
          id: 5,
          title: 'Bias in Generative AI Models',
          type: 'text',
          content: `Generative AI models can inherit biases from the data they are trained on. These biases can result in the creation of harmful or biased content, making it important to address fairness and transparency in AI training.`,
          duration: '7 min',
          isCompleted: false,
          isLocked: true,
          quiz: [
            {
              question: "What issue can arise from biases in generative AI models?",
              options: [
                "Generation of biased content",
                "Improved efficiency",
                "Better results",
                "More accurate predictions"
              ],
              correctAnswer: "Generation of biased content"
            }
          ]
        },
        {
          id: 6,
          title: 'Ethical Use of Generative AI',
          type: 'text',
          content: `Ethical concerns in generative AI include issues like privacy, misuse for creating deepfakes, and the potential for AI-generated content to replace human creators. It's important to develop guidelines and regulations to ensure responsible use.`,
          duration: '8 min',
          isCompleted: false,
          isLocked: true,
          quiz: [
            {
              question: "What is a key ethical concern of generative AI?",
              options: [
                "Creation of deepfakes",
                "Increased computational cost",
                "Faster processing",
                "Better image quality"
              ],
              correctAnswer: "Creation of deepfakes"
            }
          ]
        }
      ]
    },
    {
      id: 4,
      title: 'Future of Generative AI',
      isExpanded: false,
      lessons: [
        {
          id: 7,
          title: 'Trends in Generative AI',
          type: 'text',
          content: `Generative AI is rapidly evolving with advancements in multi-modal models, better understanding of human language, and improvements in synthetic media creation. The future of generative AI holds great promise in areas like healthcare, entertainment, and education.`,
          duration: '9 min',
          isCompleted: false,
          isLocked: true,
          quiz: [
            {
              question: "Which field could benefit from generative AI advancements?",
              options: [
                "Healthcare",
                "Finance",
                "Entertainment",
                "All of the above"
              ],
              correctAnswer: "All of the above"
            }
          ]
        }
      ]
    },
        {
          id: 5,
          title: 'Generative AI in Music and Audio',
          isExpanded: false,
          lessons: [
            {
              id: 8,
              title: 'AI-Generated Music: An Introduction',
              type: 'text',
              content: `Generative AI models like OpenAI's MuseNet and Jukedeck can compose music in various styles. These models are trained on large datasets of music and can generate original compositions based on input prompts like genre, mood, or instruments.`,
              duration: '8 min',
              isCompleted: false,
              isLocked: true,
              quiz: [
                {
                  question: "Which AI model is known for generating music compositions?",
                  options: ["MuseNet", "DALL·E", "GPT-3", "VAE"],
                  correctAnswer: "MuseNet"
                }
              ]
            },
            {
              id: 9,
              title: 'Generative AI for Audio Effects',
              type: 'text',
              content: `Generative AI can also be used to modify and create new audio effects. This includes things like voice synthesis, soundscapes, and noise reduction. One example is the use of AI to generate realistic voiceovers for virtual assistants.`,
              duration: '7 min',
              isCompleted: false,
              isLocked: true,
              quiz: [
                {
                  question: "What can generative AI be used for in audio?",
                  options: [
                    "Voice synthesis",
                    "Sound creation",
                    "Audio effects",
                    "All of the above"
                  ],
                  correctAnswer: "All of the above"
                }
              ]
            }
          ]
        },
        {
          id: 6,
          title: 'Generative AI in Healthcare',
          isExpanded: false,
          lessons: [
            {
              id: 10,
              title: 'AI-Generated Medical Imagery',
              type: 'text',
              content: `Generative AI has applications in the medical field, such as generating synthetic medical images for training or research purposes. For example, AI models can create realistic images of tissues, organs, and other medical conditions for better diagnosis and treatment planning.`,
              duration: '9 min',
              isCompleted: false,
              isLocked: true,
              quiz: [
                {
                  question: "How can generative AI be used in healthcare?",
                  options: [
                    "Generating synthetic medical images",
                    "Designing treatment plans",
                    "Performing surgeries",
                    "Providing real-time diagnoses"
                  ],
                  correctAnswer: "Generating synthetic medical images"
                }
              ]
            },
            {
              id: 11,
              title: 'AI in Drug Discovery',
              type: 'text',
              content: `Generative AI models are being used to simulate chemical reactions and predict the efficacy of drugs. By training on large databases of molecular structures, AI can generate new compounds with potential medicinal properties that may have been missed by traditional methods.`,
              duration: '10 min',
              isCompleted: false,
              isLocked: true,
              quiz: [
                {
                  question: "Which application does generative AI have in drug discovery?",
                  options: [
                    "Simulating chemical reactions",
                    "Predicting drug efficacy",
                    "Creating new molecular compounds",
                    "All of the above"
                  ],
                  correctAnswer: "All of the above"
                }
              ]
            }
          ]
        },
        {
          id: 7,
          title: 'Generative AI in Art and Creativity',
          isExpanded: false,
          lessons: [
            {
              id: 12,
              title: 'AI-Generated Visual Art',
              type: 'text',
              content: `Generative AI is capable of creating original visual art by training on vast collections of artwork. Models like DALL·E and Artbreeder can generate images from text prompts or blend different artistic styles to create new works of art.`,
              duration: '8 min',
              isCompleted: false,
              isLocked: true,
              quiz: [
                {
                  question: "Which model can generate images from text prompts?",
                  options: ["Artbreeder", "DALL·E", "GPT-3", "MuseNet"],
                  correctAnswer: "DALL·E"
                }
              ]
            },
            {
              id: 13,
              title: 'AI-Assisted Creative Writing',
              type: 'text',
              content: `Generative AI models like GPT-3 are used in creative writing for generating stories, poems, or even screenplays. These models can assist writers by providing inspiration, drafting ideas, or completing sentences based on a given prompt.`,
              duration: '9 min',
              isCompleted: false,
              isLocked: true,
              quiz: [
                {
                  question: "Which generative AI model is widely used for creative writing?",
                  options: ["GPT-3", "BERT", "ResNet", "DALL·E"],
                  correctAnswer: "GPT-3"
                }
              ]
            }
          ]
        },
        {
          id: 8,
          title: 'Legal and Social Implications of Generative AI',
          isExpanded: false,
          lessons: [
            {
              id: 14,
              title: 'Copyright and Intellectual Property',
              type: 'text',
              content: `The use of AI to generate creative works raises questions about intellectual property and copyright ownership. Who owns the rights to AI-generated content? Should creators of AI models hold responsibility for the output their models produce? These questions are at the forefront of the generative AI debate.`,
              duration: '8 min',
              isCompleted: false,
              isLocked: true,
              quiz: [
                {
                  question: "Who typically owns the rights to AI-generated content?",
                  options: [
                    "The creator of the AI model",
                    "The user who provided the input",
                    "The AI itself",
                    "The company that owns the AI model"
                  ],
                  correctAnswer: "The company that owns the AI model"
                }
              ]
            },
            {
              id: 15,
              title: 'Regulation of Generative AI',
              type: 'text',
              content: `As generative AI becomes more widespread, the need for regulations to control its use grows. Issues like AI-generated misinformation, deepfakes, and unauthorized content creation are pushing governments to consider regulations and ethical guidelines for AI usage.`,
              duration: '9 min',
              isCompleted: false,
              isLocked: true,
              quiz: [
                {
                  question: "Why is regulation of generative AI important?",
                  options: [
                    "To prevent the creation of deepfakes",
                    "To control AI-generated misinformation",
                    "To protect intellectual property rights",
                    "All of the above"
                  ],
                  correctAnswer: "All of the above"
                }
              ]
            }
          ]
        },
        {
          id: 9,
          title: 'Capstone Project: Build a Generative AI Application',
          isExpanded: false,
          lessons: [
            {
              id: 16,
              title: 'Project: AI-Powered Text Generator',
              type: 'text',
              content: `In this project, you will design and implement a simple text generation application using GPT-3 or a similar model. The app will take user input and generate creative responses or short stories based on prompts.`,
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
        <h1 className="text-3xl font-extrabold tracking-tight">Gen AI Interactive Course</h1>
        
      </div>

      
      <div className="max-w-4xl mx-auto px-4 mb-8">
        <div className="flex items-center gap-6 mb-4">
          
          <div className="flex-shrink-0">
          <svg width="128" height="128" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="10" width="108" height="98" rx="10" ry="10" fill="#5DB6E2"/>
            <polygon points="64,108 54,98 74,98" fill="#5DB6E2"/>

            <text x="64" y="70" font-size="32" fill="white" font-family="Arial" text-anchor="middle" font-weight="bold">
                GenAI
            </text>
        </svg>



          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">Generative AI and practices</h2>
            <p className="text-base text-gray-100 dark:text-gray-600">
            Learn to interact with GenAI tools to create, automate, and be more productive. This course will teach you how to use AI to organize and analyze data so you make smarter decisions.</p>
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
