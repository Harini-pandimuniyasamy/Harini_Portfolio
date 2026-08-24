import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';

export function generateResumePdf() {
  const publicDir = path.resolve(process.cwd(), 'public');
  const assetsDir = path.resolve(publicDir, 'assets');

  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  if (!fs.existsSync(assetsDir)) {
    fs.mkdirSync(assetsDir, { recursive: true });
  }

  const doc = new PDFDocument({
    size: 'A4',
    margins: { top: 32, bottom: 32, left: 40, right: 40 },
    info: {
      Title: 'Harini P - Resume',
      Author: 'Harini P',
      Subject: 'Full-Stack Developer & MCA Student Resume',
      Keywords: 'Full-Stack, Web Developer, MongoDB, UI/UX, Figma, Java, JavaScript, PHP, MySQL',
    }
  });

  const pdfPath1 = path.resolve(assetsDir, 'resume.pdf');
  const pdfPath2 = path.resolve(publicDir, 'resume.pdf');

  const stream1 = fs.createWriteStream(pdfPath1);
  doc.pipe(stream1);

  // Palette
  const primaryColor = '#4B269C'; // Deep Violet
  const accentColor = '#7C4DFF'; // Bright Violet
  const darkTextColor = '#1E1B2E';
  const mutedTextColor = '#555268';
  const lightBg = '#F6F3FE';

  // Header Banner
  doc.rect(30, 24, 535, 76).fill(lightBg);

  doc
    .fillColor(primaryColor)
    .font('Helvetica-Bold')
    .fontSize(22)
    .text('HARINI P', 44, 34);

  doc
    .fillColor(accentColor)
    .font('Helvetica-Bold')
    .fontSize(10.5)
    .text('FULL-STACK DEVELOPER  |  UI/UX DESIGNER  |  MCA STUDENT (CGPA: 9.33)', 44, 60);

  doc
    .fillColor(mutedTextColor)
    .font('Helvetica')
    .fontSize(8.5)
    .text('Trichy, Tamil Nadu, India  •  harinip7104@gmail.com  •  +91 7418490158', 44, 76)
    .text('GitHub: github.com/Harini-pandimuniyasamy  •  LinkedIn: linkedin.com/in/harini-p-53b589417', 44, 87);

  let y = 112;

  function drawSectionHeading(title: string, currentY: number): number {
    doc.rect(40, currentY, 515, 16).fill('#EDE7F6');
    doc
      .fillColor(primaryColor)
      .font('Helvetica-Bold')
      .fontSize(9.5)
      .text(title.toUpperCase(), 46, currentY + 3.5);
    return currentY + 22;
  }

  // 1. PROFESSIONAL SUMMARY
  y = drawSectionHeading('Professional Summary', y);
  doc
    .fillColor(darkTextColor)
    .font('Helvetica')
    .fontSize(8.2)
    .text(
      'Motivated and academically distinguished MCA candidate (9.33 CGPA) with strong foundations in Full-Stack Web Development, Database Design, and UI/UX prototyping. Demonstrated expertise in building end-to-end applications including "Citizen Connect" and "Direct Market Access for Farmers". Passionate about producing scalable, clean, and user-centric software solutions.',
      40,
      y,
      { width: 515, align: 'justify', lineGap: 1.5 }
    );
  y += 36;

  // 2. EDUCATION
  y = drawSectionHeading('Education', y);
  const eduItems = [
    { degree: 'Master of Computer Applications (MCA)', school: 'Holy Cross College (Autonomous), Trichy', score: 'CGPA: 9.33', year: '2025 – 2027' },
    { degree: 'Bachelor of Computer Applications (BCA)', school: 'Holy Cross College (Autonomous), Trichy', score: 'CGPA: 8.81', year: '2022 – 2025' },
    { degree: 'Higher Secondary Certificate (HSC)', school: 'St. Antony’s Higher Secondary School, Trichy', score: 'Percentage: 93%', year: '2021 – 2022' },
    { degree: 'Secondary School Leaving Certificate (SSLC)', school: 'St. Antony’s Higher Secondary School, Trichy', score: 'Percentage: 88%', year: '2019 – 2020' },
  ];

  eduItems.forEach((edu) => {
    doc
      .font('Helvetica-Bold')
      .fontSize(8.5)
      .fillColor(darkTextColor)
      .text(edu.degree, 40, y)
      .font('Helvetica-Bold')
      .fillColor(accentColor)
      .text(edu.score, 380, y, { width: 90, align: 'right' })
      .font('Helvetica')
      .fillColor(mutedTextColor)
      .text(edu.year, 480, y, { width: 75, align: 'right' });

    doc
      .font('Helvetica-Oblique')
      .fontSize(7.8)
      .fillColor(mutedTextColor)
      .text(edu.school, 40, y + 10);

    y += 20;
  });
  y += 2;

  // 3. TECHNICAL SKILLS
  y = drawSectionHeading('Technical Skills', y);
  const skillCategories = [
    { label: 'Languages', items: 'JavaScript (ES6+), Java (Core), C, C#, PHP, HTML5, CSS3, SQL' },
    { label: 'Domain Expertise', items: 'Full-Stack Web Development, Database Management, UI/UX Design & Prototyping' },
    { label: 'Databases & Tools', items: 'MongoDB, MySQL, Figma (UI/UX Design), Power BI, Visual Studio, VS Code, Tally ERP, MS Office' },
  ];

  skillCategories.forEach((sc) => {
    doc
      .font('Helvetica-Bold')
      .fontSize(8.2)
      .fillColor(primaryColor)
      .text(`${sc.label}: `, 40, y, { continued: true })
      .font('Helvetica')
      .fillColor(darkTextColor)
      .text(sc.items);
    y += 12.5;
  });
  y += 4;

  // 4. KEY PROJECTS
  y = drawSectionHeading('Featured Projects', y);

  // Citizen Connect
  doc
    .font('Helvetica-Bold')
    .fontSize(8.8)
    .fillColor(darkTextColor)
    .text('Citizen Connect – Full-Stack Citizen Complaint Management Platform', 40, y)
    .font('Helvetica-Bold')
    .fontSize(7.5)
    .fillColor(accentColor)
    .text('MongoDB, JavaScript, HTML5/CSS3, Figma UI/UX', 300, y + 1, { width: 255, align: 'right' });
  y += 11;

  doc
    .font('Helvetica')
    .fontSize(7.8)
    .fillColor(darkTextColor)
    .text('• Built an end-to-end public grievance portal featuring secure citizen registration and administrative dashboard.', 46, y, { width: 509 })
    .text('• Engineered complaint submission with multimedia image upload, dynamic issue categorisation, and real-time status tracking.', 46, y + 9.5, { width: 509 })
    .text('• Designed an intuitive administrative control dashboard in Figma for case resolutions, assignment logs, and analytical summaries.', 46, y + 19, { width: 509 });
  y += 31;

  // Direct Market Access for Farmers
  doc
    .font('Helvetica-Bold')
    .fontSize(8.8)
    .fillColor(darkTextColor)
    .text('Direct Market Access For Farmers – Rural Agri-Commerce Platform', 40, y)
    .font('Helvetica-Bold')
    .fontSize(7.5)
    .fillColor(accentColor)
    .text('PHP, MySQL, JavaScript, HTML5/CSS3, UI/UX Design', 300, y + 1, { width: 255, align: 'right' });
  y += 11;

  doc
    .font('Helvetica')
    .fontSize(7.8)
    .fillColor(darkTextColor)
    .text('• Formulated a web portal connecting farmers directly with retail consumers, eliminating intermediaries to maximize fair farmer profits.', 46, y, { width: 509 })
    .text('• Crafted a simplified, accessible user interface optimized specifically for rural agricultural producers with varying digital literacy.', 46, y + 9.5, { width: 509 });
  y += 24;

  // 5. EXPERIENCE & INTERNSHIPS
  y = drawSectionHeading('Experience & Internships', y);
  const experiences = [
    { company: 'T4TEQ', domain: 'Data Analytics & Data Visualization', desc: 'Conducted dataset structuring, exploratory analysis, and dynamic dashboard reporting.' },
    { company: 'HCIICT', domain: 'Full Stack Web Development & Sensor Tech', desc: 'Implemented web applications and sensor-integrated interface prototypes.' },
    { company: 'IAFC & esoft', domain: 'Core Java & PHP/MySQL Development', desc: 'Developed backend modules, database schemas, and structured relational queries.' },
  ];

  experiences.forEach((exp) => {
    doc
      .font('Helvetica-Bold')
      .fontSize(8.2)
      .fillColor(darkTextColor)
      .text(`${exp.company} – `, 40, y, { continued: true })
      .font('Helvetica-Bold')
      .fillColor(accentColor)
      .text(`${exp.domain}: `, { continued: true })
      .font('Helvetica')
      .fillColor(mutedTextColor)
      .text(exp.desc);
    y += 12;
  });
  y += 4;

  // 6. CERTIFICATIONS & ACHIEVEMENTS
  y = drawSectionHeading('Certifications & Key Achievements', y);
  doc
    .font('Helvetica')
    .fontSize(7.8)
    .fillColor(darkTextColor)
    .text('• Paper Presentations: "AI-Based Image Recognition" & "Password Strength Analyzer".', 46, y, { width: 509 })
    .text('• Academic Honors: 1st/2nd Proficiency in Computer Applications; 2nd in Language studies.', 46, y + 9.5, { width: 509 })
    .text('• Certified in: Accenture (89%), Swayam/NPTEL, ICT Academy, NoviTech, Wadhwani, Tally, Typewriting.', 46, y + 19, { width: 509 });

  doc.end();

  stream1.on('finish', () => {
    try {
      fs.copyFileSync(pdfPath1, pdfPath2);
      console.log('Resume PDFs created successfully in public/assets/resume.pdf and public/resume.pdf');
    } catch (err) {
      console.error('Error copying PDF:', err);
    }
  });
}
