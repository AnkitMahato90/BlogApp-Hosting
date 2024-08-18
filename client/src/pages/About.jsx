export default function About() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='max-w-2xl mx-auto p-3 text-center'>
        <div>
          <h1 className='text-3xl font font-semibold text-center my-7'>
            About Ankit's Blog
          </h1>
          <div className='text-md text-gray-500 flex flex-col gap-6'>
            <p>
            Welcome to Ankit's Blog! Created by Ankit Mahato, this blog serves as a platform where he shares his passion for technology and coding. Ankit is a dedicated developer with a deep love for exploring and writing about various tech-related topics.
            </p>

            <p>
            Here, you'll find weekly articles and tutorials on topics like web development, software engineering, and various programming languages. I'm always learning and experimenting with new technologies, so there's always fresh content to dive into. Be sure to check back often for the latest updates!
            </p>

            <p>
            I encourage you to leave comments on the posts and engage with other readers. You can like and reply to comments to start meaningful discussions. Let's build a community of learners who help each other grow and improve in the ever-evolving tech landscape.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
