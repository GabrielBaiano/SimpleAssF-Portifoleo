document.addEventListener('DOMContentLoaded', () => {
  const contentData = {
    about_me: `
      <div class="about-me-layout">
        <div class="about-me-image-container">
          <img src="https://i.pinimg.com/originals/fa/de/06/fade06fdb98c309859796fb0e764ab0d.gif" alt="Gabriel Gama GIF">
        </div>
        <div class="about-me-text">
          <p>Hey, I am Gabriel Gama — a Front-End Developer with solid experience in React, React Native and modern web technologies. I specialize in building clean, responsive, and engaging interfaces for web and mobile applications.</p>
          <p>Over the past few years, I have worked on corporate projects, freelance websites, and personal experiments — combining performance, accessibility, and visual storytelling. I am passionate about solving problems through code and delivering seamless user experiences across devices.</p>
          <p>Whether it is a product showcase, a mobile app, or a landing page, I am committed to bringing ideas to life with thoughtful design and efficient development.</p>
          <h3>Expertise & Skills:</h3>
          <ul>
            <li>React, React Native, Next.js, Vue.js</li>
            <li>TypeScript, JavaScript, HTML, CSS</li>
            <li>Styled Components, Tailwind CSS, Sass</li>
            <li>API Integration (REST, Firebase)</li>
            <li>UI/UX Thinking & Component Architecture</li>
            <li>Responsive Design & Performance Optimization</li>
            <li>Git, GitHub, Agile Development</li>
          </ul>
        </div>
      </div>
    `,
    work_experience: `
      <div class="experience-section">
        <h2>Work Experience</h2>
        <div class="experience-item">
          <h3>Front-End Developer (React Native & React)</h3>
          <p class="company-period"><strong>Compass UOL</strong> | August 2024 – Present</p>
          <ul>
            <li>Spearheading mobile front-end development initiatives using React Native, delivering high-quality user interfaces.</li>
            <li>Developing and implementing reusable UI components, ensuring seamless integration with backend services.</li>
            <li>Actively collaborating with UX/UI designers and QA teams within an agile framework to refine and perfect application features.</li>
            <li><strong>Key Technologies:</strong> React Native, React, JavaScript, TypeScript, Jest, Agile Methodologies.</li>
          </ul>
        </div>
        <div class="experience-item">
          <h3>Junior Front-End Developer</h3>
          <p class="company-period"><strong>TecnoVale Solutions</strong> | February 2023 – July 2024</p>
          <ul>
            <li>Contributed significantly to the development of interactive dashboards and internal platforms utilizing React and TypeScript.</li>
            <li>Enhanced application performance and accessibility, leading to improved user experience and broader usability.</li>
            <li>Proficiently worked with REST APIs, managed application state effectively, and leveraged various component libraries.</li>
            <li><strong>Key Technologies:</strong> React, TypeScript, JavaScript, Redux/Context API, REST APIs, CSS-in-JS.</li>
          </ul>
        </div>
        <div class="experience-item">
          <h3>Freelance Web Developer</h3>
          <p class="company-period"><strong>Shultz Agro Ltda.</strong> | July 2022 – January 2023</p>
          <ul>
            <li>Designed and developed compelling websites and applications to effectively showcase and promote company products.</li>
            <li>Delivered clean, responsive designs with a strong focus on optimized load times and cross-browser compatibility.</li>
            <li>Supported and enhanced SEO strategy through semantic HTML, performance best practices, and on-page optimization.</li>
            <li><strong>Key Technologies:</strong> HTML5, CSS3, JavaScript (ES6+), Responsive Design, SEO Best Practices.</li>
          </ul>
        </div>
        <div class="experience-item">
          <h3>Front-End Developer (Freelance Projects)</h3>
          <p class="company-period">Remote & On-Demand | 2021 – Present</p>
          <div class="project-highlights-section">
              <h4>Project Highlights:</h4>
              <div class="highlight-item">
                  <span class="highlight-title">E-commerce Landing Pages:</span>
                  <p class="highlight-description">Engineered fully responsive, SEO-optimized landing pages with React, achieving up to a 30% increase in conversion rates for small business clients.</p>
              </div>
              <div class="highlight-item">
                  <span class="highlight-title">Portfolio Websites:</span>
                  <p class="highlight-description">Crafted modern and visually engaging portfolio websites for creative professionals, incorporating Vue.js and dynamic animations with GSAP for enhanced user experience.</p>
              </div>
              <div class="highlight-item">
                  <span class="highlight-title">Admin Dashboards:</span>
                  <p class="highlight-description">Delivered bespoke admin panels featuring robust authentication and real-time data visualization using Next.js and Firebase.</p>
              </div>
              <div class="highlight-item">
                  <span class="highlight-title">Technical Consulting:</span>
                  <p class="highlight-description">Provided expert code reviews, architectural guidance, and performance optimization strategies for React-based applications, empowering teams to build more scalable and efficient solutions.</p>
              </div>
          </div>
          <div class="key-technologies-freelance">
              <strong>Key Technologies:</strong> React, Vue.js, Next.js, Firebase, GSAP, Node.js (for build tools/light backends), Headless CMS integration.
          </div>
        </div>
      </div>
    `,
    tools: `
      <div class="tools-section">
        <h2><span class="icon">🛠️</span> Tools & Technologies</h2>
        <ul class="tools-list">
          <li class="tool-item">
            <svg class="tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="#E44D26" d="M20.4 113.5l-7.9-88.8h103l-7.9 88.7L64 124z"/><path fill="#F16529" d="M64 116.1V18.4h42.3l-6.7 75.1z"/><path fill="#EBEBEB" d="M64 45.3v18.2h29.1l.5-5.6 1.5-17.4H64V27.4h33.1l-.4 4.5-.7 8-1.2 13.3-.4 4.5h-30.4zm0 44.4v19.1l22.9-6.1 3.2-36.1H64v17.4h13.8l-1.6 17.9z"/><path fill="#FFF" d="M64 45.3H34.4l.5 5.6 1.5 17.4H64V27.4H30.9l.4 4.5.7 8 1.2 13.3.4 4.5h30.4v18.2zm0 44.4H49.8l-1.6-17.9H64V92.6L41.1 86.5l-3.2-36.1h26.1v17.4z"/></svg>
            <span class="tool-name">HTML5</span>
          </li>
          <li class="tool-item">
            <svg class="tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="#1572B6" d="M20.4 113.5l-7.9-88.8h103l-7.9 88.7L64 124z"/><path fill="#33A9DC" d="M64 116.1V18.4h42.3l-6.7 75.1z"/><path fill="#FFF" d="M64 45.3H34.4l.5 5.6 1.5 17.4H64V27.4H30.9l.4 4.5.7 8 1.2 13.3.4 4.5h30.4v18.2zm0 44.4H49.8l-1.6-17.9H64V92.6L41.1 86.5l-3.2-36.1h26.1v17.4z"/><path fill="#EBEBEB" d="M64 45.3v18.2h29.1l.5-5.6 1.5-17.4H64V27.4h33.1l-.4 4.5-.7 8-1.2 13.3-.4 4.5h-30.4zm0 44.4v19.1l22.9-6.1 3.2-36.1H64v17.4h13.8l-1.6 17.9z"/></svg>
            <span class="tool-name">CSS3</span>
          </li>
          <li class="tool-item">
            <svg class="tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="#F0DB4F" d="M0 0h128v128H0z"/><path d="M109.9 100.7c2.4-4.1 3.2-8.1 3.2-13.4 0-13.4-8.1-22.5-25.1-22.5-9.9 0-16.2 3.8-20.4 9.9l5.8 3.5c2.9-4.3 6.8-7 13.9-7 7.8 0 12.9 4.1 12.9 11.9 0 4.9-2.4 9.1-7 11.9s-11.1 3.5-20.7 3.5h-6.1V112h6.8c6.2 0 11.4.6 15.6 1.7s7.3 2.9 9.9 5.2c2.6 2.4 3.8 5.2 3.8 8.8 0 5.5-3.5 9.6-10.5 9.6-4.9 0-8.8-2.1-12.3-6.7l-5.8 3.5c3.2 5.2 8.1 8.8 16.5 8.8 9.6 0 15.6-3.2 18.8-9.1 3.2-6.1 3.2-12.9 3.2-18.5.1-5.2-.9-9.9-2.9-13.7zm-60.8-29.9c-3.2-5.2-8.3-8.3-15.9-8.3s-12.9 3.2-15.9 8.3-4.6 11.1-4.6 18.2c0 7.3 1.5 13.1 4.6 18.2s8.3 8.3 15.9 8.3 12.9-3.2 15.9-8.3 4.6-11.1 4.6-18.2c0-7.1-1.5-12.9-4.6-18.2zM46.3 103c-2.1-4.3-3.2-9.1-3.2-14.2s1.2-9.9 3.2-14.2c2.1-4.3 4.9-6.5 8.6-6.5s6.5 2.1 8.6 6.5c2.1 4.3 3.2 9.1 3.2 14.2s-1.2 9.9-3.2 14.2c-2.1 4.3-4.9 6.5-8.6 6.5s-6.5-2.1-8.6-6.5z"/></svg>
            <span class="tool-name">JavaScript (ES6+)</span>
          </li>
          <li class="tool-item">
            <svg class="tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="#007ACC" d="M0 0h128v128H0z"/><path fill="#FFF" d="M26.4 91.1V37.4h9.3V83c0 5.8 3.8 8.2 8.5 8.2h.6v9.2c-1.1.1-2.2.2-3.4.2-6.7 0-10.4-2.9-11.3-8.5h-.1l-3.6 8.5zm25.1-27c0-7.8 5.3-13.4 13.1-13.4 4.1 0 7.3 1.2 9.7 3.5l-4.1 5.8c-1.4-1.2-3.1-1.9-5.3-1.9-3.5 0-6.1 2.2-6.1 6.1s2.6 6.1 6.1 6.1c2.2 0 3.8-.7 5.3-1.9l4.1 5.8c-2.4 2.3-5.6 3.5-9.7 3.5-7.8.1-13.1-5.5-13.1-13.1zm28.9-1.9V37.4h24.1v7.9H89.7V58h12.4v7.9H89.7v17.3h15.1v7.9H80.4v-5.9z"/></svg>
            <span class="tool-name">TypeScript</span>
          </li>
          <li class="tool-item">
            <svg class="tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" preserveAspectRatio="xMidYMid"><path fill="#61DAFB" d="M64 0C28.75 0 0 28.75 0 64s28.75 64 64 64 64-28.75 64-64S99.25 0 64 0Zm0 115.2C35.84 115.2 12.8 92.16 12.8 64S35.84 12.8 64 12.8s51.2 23.04 51.2 51.2-23.04 51.2-51.2 51.2Z"/><ellipse cx="64" cy="64" rx="12.16" ry="30.72" fill="#61DAFB" transform="rotate(90 64 64)"/><ellipse cx="64" cy="64" rx="12.16" ry="30.72" fill="#61DAFB" transform="rotate(30 64 64)"/><ellipse cx="64" cy="64" rx="12.16" ry="30.72" fill="#61DAFB" transform="rotate(-30 64 64)"/><circle cx="64" cy="64" r="7.04" fill="#20232A"/></svg>
            <span class="tool-name">React & React Native</span>
          </li>
          <li class="tool-item">
            <svg class="tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" fill="#000000"><path d="M64 12.8c-28.27 0-51.2 22.93-51.2 51.2s22.93 51.2 51.2 51.2 51.2-22.93 51.2-51.2S92.27 12.8 64 12.8zm0 94.72c-24.02 0-43.52-19.5-43.52-43.52S39.98 20.48 64 20.48s43.52 19.5 43.52 43.52-19.5 43.52-43.52 43.52z"/><path d="M80.86 43.01h-16.9c-.91 0-1.65.74-1.65 1.65v37.28c0 .91.74 1.65 1.65 1.65h16.9c.91 0 1.65-.74 1.65-1.65V44.66c0-.91-.74-1.65-1.65-1.65zm-1.65 37.28h-13.6V46.31h13.6v33.98zM54.72 43.01H37.81c-.91 0-1.65.74-1.65 1.65v37.28c0 .91.74 1.65 1.65 1.65h16.9c.91 0 1.65-.74 1.65-1.65V68.1h-7.6v10.88c0 .91-.74 1.65-1.65 1.65H39.46c-.91 0-1.65-.74-1.65-1.65V46.31c0-.91.74-1.65 1.65-1.65h6.61c.91 0 1.65.74 1.65 1.65V64.8h7.6V44.66c-.01-.91-.75-1.65-1.66-1.65z"/></svg>
            <span class="tool-name">Next.js</span>
          </li>
          <li class="tool-item">
            <svg class="tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 221" preserveAspectRatio="xMidYMid"><path d="M204.8 0H256L128 220.8L0 0h97.92L128 51.2L157.44 0h47.36Z" fill="#41B883"/><path d="M0 0l128 220.8L256 0h-51.2L128 132.48L51.2 0H0Z" fill="#41B883"/><path d="M51.2 0L128 133.12L204.8 0H157.44L128 51.2L97.92 0H51.2Z" fill="#35495E"/></svg>
            <span class="tool-name">Vue.js</span>
          </li>
          <li class="tool-item">
            <svg class="tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="#68A063" d="M64 12.8l43.52 25.12v50.21L64 113.28l-43.52-25.12V37.92L64 12.8z"/><path fill="#FFFFFF" d="M54.34 80.33c-.21.01-.41.02-.62.02-4.5 0-8.11-1.36-10.83-4.08-2.72-2.72-4.08-6.33-4.08-10.83s1.36-8.11 4.08-10.83c2.72-2.72 6.33-4.08 10.83-4.08 2.12 0 4.08.49 5.88 1.48l2.61-5.17c-2.5-.99-5.26-1.48-8.28-1.48-5.23 0-9.64 1.82-13.22 5.45S32.64 58.16 32.64 65.4c0 7.24 2.46 13.12 7.37 17.62s10.89 6.76 18.83 6.76c3.02 0 5.78-.49 8.28-1.48l-2.82-5.38c-1.72.89-3.64 1.33-5.77 1.33-.12 0-.23 0-.35-.01zm22.96-29.86h-7.18V83.9h7.18V50.47z"/></svg>
            <span class="tool-name">Node.js</span>
          </li>
          <li class="tool-item">
            <svg class="tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="#CD6799" d="M64 0C28.75 0 0 28.75 0 64s28.75 64 64 64 64-28.75 64-64S99.25 0 64 0zm35.01 67.14c-2.91 1.2-5.94 2.1-8.88 2.7-2.6.52-4.82.77-6.36.77-3.1 0-5.02-.73-5.02-2.18 0-1.21.92-2.14 2.76-2.86 2.1-.83 5.4-1.83 9.87-3.02 4.47-1.19 7.96-2.5 10.46-3.92 2.5-1.42 3.75-3.42 3.75-5.98 0-2.95-1.58-5.26-4.73-6.94-3.15-1.68-7.36-2.52-12.64-2.52-4.77 0-8.87.63-12.3 1.89-3.42 1.26-6.05 3.02-7.89 5.26L64.2 43.1c2.3-2.7 5.34-4.67 9.12-5.9 3.78-1.22 7.98-1.83 12.6-1.83 5.3 0 9.6.96 12.92 2.87 3.32 1.91 4.98 4.86 4.98 8.84 0 3.42-1.14 6.4-3.42 8.92-2.28 2.52-5.82 4.7-10.64 6.54-4.04 1.51-7.1 2.82-9.16 3.92-2.06 1.1-3.09 2.64-3.09 4.61 0 2.06 1.24 3.64 3.72 4.73 2.48 1.1 5.68 1.64 9.6 1.64 3.82 0 7.24-.46 10.28-1.37 3.04-.91 5.44-2.28 7.2-4.1l4.1 5.78c-2.5 2.9-5.88 5.02-10.14 6.36-4.26 1.33-8.98 2-14.16 2-6.12 0-11.18-1.28-15.18-3.85-3.99-2.57-5.99-6.24-5.99-10.99 0-4.26 1.42-7.89 4.26-10.88 2.84-3 6.92-5.02 12.24-6.08 3.22-.66 7.04-1.48 11.46-2.48 4.42-1 7.78-2.08 10.08-3.24 2.3-1.16 3.44-2.88 3.44-5.16 0-2.52-1.34-4.46-4.02-5.82-2.68-1.36-6.28-2.04-10.8-2.04-3.56 0-6.88.48-9.96 1.44-3.08.96-5.62 2.38-7.62 4.26l-4.26-5.92c2.56-2.46 5.84-4.26 9.84-5.4s8.44-1.7 13.32-1.7c5.78 0 10.46 1.14 14.04 3.42 3.58 2.28 5.37 5.56 5.37 9.84 0 3.92-1.26 7.36-3.78 10.32s-6.2 5.44-11.04 7.44z"/></svg>
            <span class="tool-name">Sass/SCSS</span>
          </li>
          <li class="tool-item">
            <svg class="tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="#38BDF8" d="M64 12.8c-28.27 0-51.2 22.93-51.2 51.2s22.93 51.2 51.2 51.2 51.2-22.93 51.2-51.2S92.27 12.8 64 12.8zm0 94.72c-24.02 0-43.52-19.5-43.52-43.52S39.98 20.48 64 20.48s43.52 19.5 43.52 43.52-19.5 43.52-43.52 43.52z"/><path fill="#FFFFFF" d="M46.72 58.24c-3.53 0-6.4 2.87-6.4 6.4s2.87 6.4 6.4 6.4 6.4-2.87 6.4-6.4-2.87-6.4-6.4-6.4zm28.16 0c-3.53 0-6.4 2.87-6.4 6.4s2.87 6.4 6.4 6.4 6.4-2.87 6.4-6.4-2.87-6.4-6.4-6.4zM64 80.96c-10.61 0-19.79-5.45-25.01-13.65h50.02c-5.22 8.2-14.4 13.65-25.01 13.65z"/></svg>
            <span class="tool-name">Tailwind CSS</span>
          </li>
          <li class="tool-item">
            <svg class="tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="#F05033" d="M125.29 59.2L70.03 3.94C67.87 1.78 64.43 1.78 62.27 3.94L55.9 10.31c-.96.96-1.49 2.25-1.49 3.62v32.86c0 1.22.39 2.34 1.08 3.25l26.15 26.15c2.47 2.47 2.47 6.49 0 8.96L55.45 111.4c-1.17 1.17-1.17 3.07 0 4.24l5.5 5.5c1.17 1.17 3.07 1.17 4.24 0l26.15-26.15c2.47-2.47 6.49-2.47 8.96 0l26.15 26.15c1.17 1.17 3.07 1.17 4.24 0l5.5-5.5c1.17 1.17 1.17-3.07 0-4.24L103.92 72.3c-1.08-.97-1.64-2.34-1.64-3.78V23.24c0-2.83 2.3-5.13 5.13-5.13H126.6c2.83 0 5.13 2.3 5.13 5.13v32.63c0 .7.56 1.27 1.27 1.27.7 0 1.27-.57 1.27-1.27V23.24c0-4.24-3.44-7.68-7.68-7.68H108.4c-4.24 0-7.68 3.44-7.68 7.68v45.28c0 .5-.19.97-.52 1.33L67.78 102.3c-2.16 2.16-5.66 2.16-7.82 0l-5.5-5.5c-2.16-2.16-2.16-5.66 0-7.82l26.15-26.15c1.28-1.28 1.97-2.98 1.97-4.79s-.69-3.51-1.97-4.79L33.31 48.24c-2.16-2.16-5.66-2.16-7.82 0l-5.5 5.5c-2.16-2.16-2.16-5.66 0 7.82l32.32 32.32c1.28 1.28 1.97 2.98 1.97 4.79s-.69 3.51-1.97 4.79L19.97 135.8c-2.16 2.16-5.66 2.16-7.82 0L3.94 127.6c-2.16-2.16-2.16-5.66 0-7.82l55.26-55.26c1.07-1.07 1.63-2.52 1.63-4.06V10.31c0-1.36-.53-2.65-1.49-3.62L50.07 3.94C47.91 1.78 44.47 1.78 42.31 3.94L2.76 59.2c-2.16 2.16-2.16 5.66 0 7.82l55.26 55.26c2.16 2.16 5.66 2.16 7.82 0l5.5-5.5c.58-.58.89-1.35.89-2.16s-.31-1.58-.89-2.16L16.08 59.2c-2.16-2.16-2.16-5.66 0-7.82l5.5-5.5c2.16-2.16 5.66-2.16 7.82 0l55.26 55.26c2.16 2.16 5.66 2.16 7.82 0l5.5-5.5c2.16-2.16 2.16-5.66 0-7.82L37.72 59.2z"/><circle fill="#FFFFFF" cx="107.79" cy="24.51" r="7.2"/></svg>
            <span class="tool-name">Git & GitHub</span>
          </li>
          <li class="tool-item">
            <svg class="tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="#FFCA28" d="M30.18 80.68L5.12 37.39C3.69 34.93 4.71 31.7 7.17 30.27l22.71-15.45c2.46-1.43 5.68-.41 7.12 2.05l12.51 21.64L30.18 80.68z"/><path fill="#FFA000" d="M30.18 80.68L4.66 32.26l25.52-14.83 19.38 33.58-19.38 29.67z"/><path fill="#F57C00" d="M4.66 32.26L7.12 28c2.46-1.43 5.68-.41 7.12 2.05l15.61 48.63-25.19-46.42zM120.84 28l2.46 4.27c1.43 2.46.41 5.68-2.05 7.12L98.55 54.8l19.38-33.58-2.81-4.87.28-.15z"/><path fill="#FFCA28" d="M123.3 32.26L97.78 80.68 78.4 38.36l12.51-21.64c1.43-2.46 4.65-3.48 7.12-2.05l22.71 15.53c2.46 1.43 3.48 4.65 2.55 7.06z"/><path fill="#039BE5" d="M97.78 80.68L64.09 139.29c-1.43 2.46-4.65 3.48-7.12 2.05L30.18 80.68l33.82 58.58 33.78-58.58z"/><path fill="#1E88E5" d="M30.18 80.68l33.82 58.58 33.78-58.58-33.78 29.3L30.18 80.68z"/></svg>
            <span class="tool-name">Firebase</span>
          </li>
          <li class="tool-item">
            <svg class="tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="#C21325" d="M64 0C28.75 0 0 28.75 0 64s28.75 64 64 64 64-28.75 64-64S99.25 0 64 0z"/><path fill="#FFFFFF" d="M83.62 43.01H67.04v11.1h14.15v-11.1zm-2.43 15.7H67.04v41.82h14.15V58.71zm24.61-15.7H89.56v57.02h16.24V43.01zM62.01 74.07c-2.83 0-5.12-2.29-5.12-5.12s2.29-5.12 5.12-5.12V43.01H48.26v41.82h13.75v-9.76zM48.26 89.76h18.7v-11.1H48.26v11.1z"/></svg>
            <span class="tool-name">Jest</span>
          </li>
          <li class="tool-item">
            <svg class="tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="#F24E1E" d="M42.06 85.33h21.28V64.06H42.06v21.27zM42.06 64.06H20.79V42.79h21.27V64.06z"/><path fill="#FF7262" d="M20.79 85.33h21.27v21.28H20.79V85.33z"/><path fill="#A259FF" d="M42.06 106.61h21.28v21.27H42.06v-21.27zM63.33 85.33h21.28V64.06H63.33v21.27z"/><path fill="#1ABCFE" d="M84.61 64.06V42.79H63.33V21.52h21.28v21.27h21.27v21.27z"/><path fill="#0ACF83" d="M63.33 42.79V21.52h21.28v21.27z"/><circle fill="#0ACF83" cx="73.97" cy="32.15" r="10.64"/></svg>
            <span class="tool-name">Figma</span>
          </li>
          <li class="tool-item">
            <svg class="tool-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#4CAF50"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15V7l5 5-5 5z"/></svg>
            <span class="tool-name">GSAP (GreenSock)</span>
          </li>
          <li class="tool-item">
             <svg class="tool-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#DB7093"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.47 13.5L12 12.73 7.53 15.5l1.3-5.1L5 7.5h5.1L12 2.5l1.9 5H19l-3.83 2.9 1.3 5.1z"/></svg>
            <span class="tool-name">Styled Components</span>
          </li>
        </ul>
      </div>
    `,
    project1: '<p>Projeto 1: descrição + link...</p>',
    project2: '<p>Projeto 2: descrição + link...</p>',
    contact_form: `
      <div class="copy-email-container">
        <p class="copy-email-instructions">Click the button to copy my email address:</p>
        <div class="email-to-copy-wrapper">
          <input type="text" id="emailToCopy" value="gabrielngama@gmail.com" readonly class="email-display-field">
          <button id="copyEmailButton" class="copy-button" title="Copy Email">
            <span class="copy-button-text">Copy</span>
            <span class="copy-button-icon">📋</span>
          </button>
        </div>
        <p id="copyFeedback" class="copy-feedback-message" style="min-height: 20px;"></p>
      </div>
    `
  };

  const openedWindows = new Set();
  let highestZIndex = 100;

  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const content = header.nextElementSibling;
      const icon = header.querySelector('.icon');
      const isOpen = content.style.display === 'block';
      if (!isOpen) {
        content.style.display = 'block';
        icon.textContent = '📂';
      } else {
        content.style.display = 'none';
        icon.textContent = '📁';
      }
    });
  });

  document.querySelectorAll('.file').forEach(file => {
    file.addEventListener('click', () => {
      const fileId = file.dataset.file;
      const url = file.dataset.url;

      if (url) {
        window.open(url, '_blank');
      } else if (fileId) {
        const existingWin = document.querySelector(`.window[data-file="${fileId}"]`);
        if (existingWin) {
          highestZIndex++;
          existingWin.style.zIndex = highestZIndex;
          existingWin.style.display = 'flex';
          return;
        }
        openedWindows.add(fileId);
        const win = createWindow(fileId, contentData[fileId] || '<p>Content not found.</p>');
        document.body.appendChild(win);
        makeDraggable(win);
      }
    });
  });

  const openContactFormButton = document.getElementById('openContactFormButton');
  if (openContactFormButton) {
    openContactFormButton.addEventListener('click', (e) => {
      e.preventDefault();
      const fileId = 'contact_form_window';
      const existingWin = document.querySelector(`.window[data-file="${fileId}"]`);

      if (existingWin) {
        highestZIndex++;
        existingWin.style.zIndex = highestZIndex;
        existingWin.style.display = 'flex';
        return;
      }
      
      const win = createWindow(fileId, contentData.contact_form, "Contact / Copy Email");
      document.body.appendChild(win);
      makeDraggable(win);
    });
  }
  
  function createEmojiExplosion(x, y) {
    const emojis = ['🎉', '✨', '💥', '🎊', '👍', '✅', '🥳', '🚀'];
    const particleCount = 15 + Math.floor(Math.random() * 10); // 15 a 24 partículas

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('emoji-particle');
        particle.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        // Ajuste para centralizar a partícula no cursor
        particle.style.transform = 'translate(-50%, -50%)'; 

        document.body.appendChild(particle);

        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * 60 + 40; // Distância um pouco maior
        const duration = Math.random() * 0.6 + 0.4; // Duração 0.4s a 1s
        const rotation = Math.random() * 720 - 360; // Rotação maior

        // Força reflow para a transição iniciar corretamente
        void particle.offsetWidth; 

        particle.style.transition = `transform ${duration}s cubic-bezier(0.175, 0.885, 0.320, 1.275), opacity ${duration}s ease-out`;
        particle.style.transform = `translate(calc(-50% + ${Math.cos(angle) * distance}px), calc(-50% + ${Math.sin(angle) * distance}px)) scale(0.3) rotate(${rotation}deg)`;
        particle.style.opacity = '0';

        setTimeout(() => {
            particle.remove();
        }, duration * 1000 + 200);
    }
  }

  function setupCopyEmailFunctionality() {
    const copyButton = document.getElementById('copyEmailButton');
    const emailToCopyInput = document.getElementById('emailToCopy');
    const copyFeedbackTextEl = document.getElementById('copyFeedback');

    if (copyButton && emailToCopyInput) {
      copyButton.addEventListener('click', (event) => {
        emailToCopyInput.select();
        emailToCopyInput.setSelectionRange(0, 99999);

        try {
          const successful = document.execCommand('copy');
          if (successful) {
            const clickX = event.clientX;
            const clickY = event.clientY;
            createEmojiExplosion(clickX, clickY);

            const originalButtonTextSpan = copyButton.querySelector('.copy-button-text');
            const originalButtonIconSpan = copyButton.querySelector('.copy-button-icon');
            
            const originalText = originalButtonTextSpan.textContent;
            const originalIconHTML = originalButtonIconSpan.innerHTML;

            originalButtonTextSpan.textContent = 'Copied!';
            originalButtonIconSpan.innerHTML = '✔';
            copyButton.classList.add('copied-state'); // Usa a classe para o estado verde

            setTimeout(() => {
              originalButtonTextSpan.textContent = originalText;
              originalButtonIconSpan.innerHTML = originalIconHTML;
              copyButton.classList.remove('copied-state');
              if(copyFeedbackTextEl) copyFeedbackTextEl.classList.remove('visible');
            }, 2000);
            
            if (copyFeedbackTextEl) { // Fallback de texto
              copyFeedbackTextEl.textContent = 'Email copied to clipboard!';
              copyFeedbackTextEl.classList.add('visible');
              setTimeout(() => copyFeedbackTextEl.classList.remove('visible'), 1800); // Some um pouco antes do botão resetar
            }

          } else {
            if(copyFeedbackTextEl) {
                copyFeedbackTextEl.textContent = 'Failed to copy. Please try again.';
                copyFeedbackTextEl.classList.add('visible');
                setTimeout(() => copyFeedbackTextEl.classList.remove('visible'), 2000);
            }
            alert('Failed to copy email. Please copy it manually.');
          }
        } catch (err) {
          console.error('Error copying email:', err);
           if(copyFeedbackTextEl) {
                copyFeedbackTextEl.textContent = 'Error copying. Please copy manually.';
                copyFeedbackTextEl.classList.add('visible');
                setTimeout(() => copyFeedbackTextEl.classList.remove('visible'), 2000);
            }
          alert('Error copying email. Please copy it manually.');
        }
        window.getSelection().removeAllRanges();
      });
    }
  }

  function createWindow(fileId, contentHtml, windowTitle) {
    const win = document.createElement('div');
    win.className = 'window';
    win.setAttribute('data-file', fileId);
    highestZIndex++;
    win.style.zIndex = highestZIndex;
    win.style.display = 'flex';

    let titleText = windowTitle || `${fileId.replace(/_/g, ' ')}`;
    if (!windowTitle && !fileId.includes('_form_') && !fileId.includes('.exe')) { // Evita adicionar .pdf ao form ou .exe
        titleText += '.pdf';
    }

    const numWindowsAlreadyOpen = document.querySelectorAll('.window').length - 1;
    const offsetX = numWindowsAlreadyOpen * 25;
    const offsetY = numWindowsAlreadyOpen * 25;

    let windowWidth = 600;
    let windowHeight = 'auto'; 

    if (fileId === 'contact_form_window') {
        windowWidth = 480; 
        windowHeight = '280px'; 
        win.style.minHeight = '250px'; 
    }
    
    win.style.width = `${windowWidth}px`;
    if(windowHeight !== 'auto') {
        win.style.height = windowHeight;
    }

    let initialLeft = (window.innerWidth - windowWidth) / 2 + offsetX;
    let initialTop = (window.innerHeight - (windowHeight === 'auto' ? 450 : parseInt(windowHeight.replace('px','')))) / 2 + offsetY;
    
    initialLeft = Math.max(10, Math.min(initialLeft, window.innerWidth - windowWidth - 10));
    initialTop = Math.max(10, Math.min(initialTop, window.innerHeight - (windowHeight === 'auto' ? 450 : parseInt(windowHeight.replace('px',''))) - 10));
    
    win.style.top = `${initialTop}px`;
    win.style.left = `${initialLeft}px`;

    win.innerHTML = `
      <div class="window-header">
        <span>${titleText}</span>
        <div class="window-close">✕</div>
      </div>
      <div class="window-content">${contentHtml}</div>
    `;

    const closeButton = win.querySelector('.window-close');
    
    const cleanupDragListeners = () => {
        if (win.currentMouseMoveListener) {
            document.removeEventListener('mousemove', win.currentMouseMoveListener);
            win.currentMouseMoveListener = null;
        }
        if (win.currentMouseUpListener) {
            document.removeEventListener('mouseup', win.currentMouseUpListener);
            win.currentMouseUpListener = null;
        }
    };

    closeButton.addEventListener('click', () => {
      win.remove();
      openedWindows.delete(fileId);
      cleanupDragListeners();
    });
    
    win.addEventListener('mousedown', () => {
        highestZIndex++;
        win.style.zIndex = highestZIndex;
    });

    if (fileId === 'contact_form_window') {
      setTimeout(setupCopyEmailFunctionality, 50); // Pequeno delay para garantir DOM
    }

    return win;
  }

  function makeDraggable(element) {
    const header = element.querySelector('.window-header');
    let isDragging = false;
    let dragOffsetX, dragOffsetY;

    if (!header) return;

    const startDrag = (e) => {
      if (e.target.classList.contains('window-close')) return;
      
      if (element.currentMouseMoveListener) document.removeEventListener('mousemove', element.currentMouseMoveListener);
      if (element.currentMouseUpListener) document.removeEventListener('mouseup', element.currentMouseUpListener);

      isDragging = true;
      dragOffsetX = e.clientX - element.offsetLeft;
      dragOffsetY = e.clientY - element.offsetTop;
      header.style.cursor = 'grabbing';
      document.body.style.userSelect = 'none';

      element.currentMouseMoveListener = moveDrag;
      element.currentMouseUpListener = endDrag;

      document.addEventListener('mousemove', element.currentMouseMoveListener);
      document.addEventListener('mouseup', element.currentMouseUpListener);
    };

    const moveDrag = (e) => {
      if (!isDragging) return;
      let newLeft = e.clientX - dragOffsetX;
      let newTop = e.clientY - dragOffsetY;

      const maxLeft = window.innerWidth - element.offsetWidth;
      const maxTop = window.innerHeight - element.offsetHeight;

      newLeft = Math.max(0, Math.min(newLeft, maxLeft));
      newTop = Math.max(0, Math.min(newTop, maxTop));
      
      element.style.left = `${newLeft}px`;
      element.style.top = `${newTop}px`;
    };

    const endDrag = () => {
      if (isDragging) {
        isDragging = false;
        header.style.cursor = 'move';
        document.body.style.userSelect = '';
        if(element.currentMouseMoveListener) document.removeEventListener('mousemove', element.currentMouseMoveListener);
        if(element.currentMouseUpListener) document.removeEventListener('mouseup', element.currentMouseUpListener);
        element.currentMouseMoveListener = null;
        element.currentMouseUpListener = null;
      }
    };
    
    header.addEventListener('mousedown', startDrag);
  }
});