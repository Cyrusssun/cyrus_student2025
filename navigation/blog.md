---

layout: blogs 
title: Blogs
search_exclude: true
permalink: /blogs/
toc: true
---



# VS Code Setup Summary

## 1. Installation & Configuration
Downloaded VS Code from https://code.visualstudio.com/ and added essential PATH integrations. Enabled context menu options for easy folder access.

## 2. Extension Setup
Installed Python extension for language support, Jupyter for notebook integration, and GitLens for enhanced version control features.

## 3. Environment Verification
Confirmed Python and Git installations:
```bash
python --version
git --version
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

## 4. Virtual Environment
Created isolated Python environment using setup script:
```bash
./scripts/venv.sh
source venv/bin/activate
```

## 5. Repository Management
Organized personal and team repositories. Copied pages repository to personal directory and experimented with theme customizations.

## 6. Jupyter Integration
Set up notebook workflow with proper output management:
```bash
git add notebook.ipynb
git commit -m "Updated notebook"
git push
```

## 7. Collaboration Setup
Established shared repositories and created personal forks for team project contributions.

## 8. Final Testing
Verified all components function correctly. Confirmed Python code runs in virtual environment and notebook outputs display properly.