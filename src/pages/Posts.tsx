import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";

const Posts = (props) => {
  const markdown = `

# Introducing Timetables

Timetables is a web-based timetables program for a Simple, Customizable and Practical experience.
Instead of needing to trace your finger on the timebar in your physical timetable, in Timetables simply just look at **At a Glance** and you instantly glimpse the current period and the following period. And under that is a daily covid report so you dont need to look up google for the latest covid reports.
When you want to see which how many "Maths" period are there in this week simply just search using the the **period searchbar**.
We beleive that Timetables should be **yours**. Thats why you can change your accent color.

[Check out timetables!](https://timetables.ssdevelopers.xyz) [Preview Channel (Unstable)](https://timetables-jiraties.vercel.app/token?to=setup&token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InByZXZpZXdAc3NkZXZlbG9wZXJzLnh5eiIsInVzZXJJZCI6IjYyODMxOGIzMDEzNTBmYTQwMzJlY2M1YSIsImlhdCI6MTY1Mjc1ODg5N30.YjA27k_s8zXiorIy8gwxkOzWHbCEj-66DhQcsbk6U4o)

## Hi there

- At a glance for a grasp at the current period you are learning and the following period.
- Elapsed current period time, Next period in ...
- Daily covid reports.
- Period searching.
- Period Highlighting.
- Azalea design language (The new SS design language built on top of Chocolate Cosmos).
- Powered by [SS Apis](../APIs/introduction)
- Customizability features
  - Accent color based tinting.
  - Per-class color tinting.
  - Dark/Light theme
- Multiple language support.
  - English
  - Thai

  `;

  return (
    <motion.section
      className="posts"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <section className="posts__nav">
        <h1>
          Developer <br /> Posts
        </h1>
        <p>
          Welcome to the Developers Posts section of Portals. You can explore
          various posts and documentations of SS Products here
        </p>
        <div className="posts__navItemList">
          <div className="posts__navItem">
            <i
              className="bx bx-news"
              style={{ backgroundColor: "#fd525250" }}
            ></i>
            <p>Posts</p>
          </div>
          <div className="posts__navItem">
            <i
              className="bx bx-book-alt"
              style={{ backgroundColor: "#256CD650" }}
            ></i>
            <p>Documentation</p>
          </div>
        </div>
      </section>
      <section className="posts__main">
        {/* <h1>Posts</h1> */}
        <div className="posts__header">
          <h1>
            Let's get started <span>Posted on 22nd July 2022</span>
          </h1>
        </div>
        <div className="markdown">
          <ReactMarkdown children={markdown} />
        </div>
      </section>
    </motion.section>
  );
};

export default Posts;
