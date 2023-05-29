import CourseItem from "./courseItem";
import "./course.css";

function Course() {

    const courseData = [
        {
            id: 1,
            image: '/images/courses/1.png',
            title: "Dave conservatoire is the Entirely free online",
            lead: "/images/profile/lead.png",
            review: "4.5 review",
            students: '56 Students',
            leadName: "Charlie Doyle",
            lessons: "5 Lessons",
            price: "$72.00",
        },
        {
            id: 2,
            image: '/images/courses/2.png',
            title: "Strategy law and Organization foundation",
            lead: "/images/profile/lead.png",
            review: "4.7 review",
            students: '77 Students',
            leadName: "Charlie Doyle",
            lessons: "4 Lessons",
            price: "$68.00",
        },
        {
            id: 3,
            image: '/images/courses/3.png',
            title: "Python for Data Science & Machine Learning",
            lead: "/images/profile/lead.png",
            review: "4.2 review",
            students: '77 Students',
            leadName: "Charlie Doyle",
            lessons: "4 Lessons",
            price: "$68.00",
        },
        {
            id: 4,
            image: '/images/courses/4.png',
            title: "The complete web develop Ment bootcamp.",
            lead: "/images/profile/lead.png",
            review: "4.3 review",
            students: '77 Students',
            leadName: "Charlie Doyle",
            lessons: "4 Lessons",
            price: "$68.00",
        },
    ];
    console.log(courseData)
    return (
        <div className="course">
            <div className="course-heading">
                <h2>Teacher Courses</h2>
            </div>
            <div className="courseInner">
                {courseData.map((item) => (
                    <CourseItem
                        key={item.id}
                        image={item.image}
                        review={item.review}
                        students={item.students}
                        title={item.title}
                        lead={item.lead}
                        leadName={item.leadName}
                        lessons={item.lessons}
                        price={item.price}
                    />
                ))}
            </div>
        </div>
    );
}

export default Course;