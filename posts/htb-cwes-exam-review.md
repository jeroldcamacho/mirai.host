---
title: "HTB CWES Exam Review"
summary: I completed the HTB Web Penetration Tester learning path and recently passed the CWES (formerly CBBH) certification exam last September.
date: 2025-11-08T22:55:00+08:00
# categories: [Certification]
# tags: [HTB, Certification]
showtoc: true
tocopen: false
---

Hack The Box renamed the CBBH certification to **CWES** to better reflect the broader web-application penetration testing skills employers are looking for today, rather than focusing only on traditional bug-bounty hunter roles. [^1]

I completed the **Web Penetration Tester** learning path earlier this year, and I bought my exam voucher in September last year. Life and work got hectic, and motivation was low, so it took me longer than expected to actually take the test.

# CWES Course Material

The Web Penetration Tester path demonstrates a wide range of web attacks that are useful for the exam. Make sure you’re familiar with exploitation techniques such as:

- Cross-Site Scripting (XSS)
- SQL Injection
- Command Injection
- File upload vulnerabilities
- Server-side request forgery and server-side attacks
- Login brute-forcing and broken authentication

The course is excellent for hands-on practice; however, use it as a foundation to build your own web pentest methodology. Having a consistent approach will make your exam work faster.
# CWES Exam Experience

Disclaimer: I have a solid background in web penetration testing through bug bounty hunting and professional pentests, and I have built my own web testing methodology.

I took the CWES exam at the end of August, just before Hack The Box added the _Attacking GraphQL and API Attacks_ module to the course. The exam itself was heavily focused on real-world web application exploitation rather than theory-based questions.

I used [**SysReptor**](https://sysreptor.com/) for my final report — it helped me structure findings and made the reporting process much smoother.

# Tips

Here are some practical tips that helped me and will probably help you prepare for and perform well on exam day:

1. Complete the Web Penetration Tester path, but don’t stop there. Practice on PortSwigger Labs [^2] and other hands-on platforms.
2. Recon. Recon. Recon. Look at request/response, JavaScript, hidden endpoints, and the source code.
3. Don’t over-rely on automated tools. Always verify and understand the issue manually.
4. Build and follow your own testing methodology, covering discovery, exploitation, and reporting. Having a structured approach will help you stay organized and avoid overlooking important steps during the exam.
5. Document everything as you go. Screenshots, request/response snippets, and POC steps will save you time when writing the final report.
6. Practice reporting: being able to explain impact, exploitation steps, and remediation clearly is as important as finding the bug.

# Conclusion

If you already have experience with web application testing and have completed the course path, you're in a strong position to take the CWES. Focus on developing your practical exploitation skills, refining your reconnaissance and testing methodology, and practicing how to write clear, professional findings. The exam places a strong emphasis on hands-on technical skills and reporting, so be well prepared for both.

---

<!-- ![](/img/htb-cwes-exam-review/CWES.jpg) -->
<img src="/img/htb-cwes-exam-review/CWES.jpg" alt="foo" class="img-lg">
<center><a href="https://www.credly.com/badges/2a6e0370-dac5-43f3-841e-632a049a4e82/public_url">Verify on Credly</a></center>

[^1]: [From bug bounty to broader impact: Introducing the Certified Web Exploitation Specialist (HTB CWES)](https://www.hackthebox.com/blog/HTB-CWES-announcement)
[^2]: [PortSwigger Labs](https://portswigger.net/web-security/all-labs)