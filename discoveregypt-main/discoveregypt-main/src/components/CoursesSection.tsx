import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Users, Clock, Award } from 'lucide-react';

const courses = [
  {
    id: 1,
    title: 'Ancient Egyptian Civilization: Complete History',
    instructor: 'Dr. Ahmed Hassan',
    students: '15,230',
    duration: '12 hours',
    level: 'Beginner',
    rating: 4.8,
    price: '$49.99',
    topics: ['Pharaohs', 'Pyramids', 'Hieroglyphics', 'Culture'],
  },
  {
    id: 2,
    title: 'Egyptian Tourism & Travel Guide Masterclass',
    instructor: 'Sarah Mohamed',
    students: '8,942',
    duration: '8 hours',
    level: 'Intermediate',
    rating: 4.9,
    price: '$39.99',
    topics: ['Tour Planning', 'Landmarks', 'Local Culture', 'Photography'],
  },
  {
    id: 3,
    title: 'Decoding Hieroglyphics: Ancient Egyptian Writing',
    instructor: 'Prof. Mahmoud Khalil',
    students: '6,521',
    duration: '10 hours',
    level: 'Advanced',
    rating: 4.7,
    price: '$59.99',
    topics: ['Language', 'Symbols', 'Translation', 'History'],
  },
];

const CoursesSection = () => {
  return (
    <section id="courses" className="py-24 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-secondary px-4 py-2 rounded-full">
            <span className="text-primary text-lg">𓁷</span>
            <span className="text-sm font-medium text-muted-foreground">Learn & Discover</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display text-foreground">
            Featured <span className="text-primary">Courses</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Master Egyptian history and tourism with expert-led Udemy courses designed for all levels
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {courses.map((course, index) => (
            <Card 
              key={course.id}
              className="group bg-card border-border hover:border-primary transition-all duration-500 overflow-hidden hover:shadow-glow flex flex-col"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Course Header */}
              <div className="bg-gradient-primary p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full -mr-16 -mt-16"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold text-primary-foreground bg-background/20 px-3 py-1 rounded-full backdrop-blur-sm">
                      {course.level}
                    </span>
                    <Award className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-display text-primary-foreground leading-tight">
                    {course.title}
                  </h3>
                </div>
              </div>

              <CardContent className="p-6 space-y-4 flex-grow flex flex-col">
                <div className="flex-grow space-y-4">
                  {/* Instructor */}
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="w-4 h-4 mr-2 text-primary" />
                    <span className="font-medium">{course.instructor}</span>
                  </div>

                  {/* Topics */}
                  <div className="flex flex-wrap gap-2">
                    {course.topics.map((topic) => (
                      <span 
                        key={topic}
                        className="text-xs bg-secondary text-foreground px-2 py-1 rounded"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-sm text-muted-foreground pt-2">
                    <div className="flex items-center">
                      <BookOpen className="w-4 h-4 mr-1 text-primary" />
                      {course.students} students
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1 text-primary" />
                      {course.duration}
                    </div>
                  </div>
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-border mt-auto">
                  <span className="text-2xl font-display text-primary">{course.price}</span>
                  <Button 
                    className="bg-gradient-primary hover:opacity-90 transition-opacity text-primary-foreground"
                  >
                    Enroll Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button 
            size="lg"
            variant="outline"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all px-8"
          >
            <BookOpen className="mr-2" />
            Browse All Courses on Udemy
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
