# Starter Plain Vault Template

A simple **Obsidian starter vault** with:  
- A clean folder structure.  
- Predefined templates.  
- Preconfigured community plugins.  

Perfect if you want to **start quickly and with zero friction**.
## 📚 Table of Contents
- [[#🚀 Getting Started]]
- [[#📂 Vault Folder Structure]]
- [[#🔌 Community Plugins]]
	- [[#Recommended Plugins]]
- [[#🧭 Workflow]]
- [[#⌨️ Essential Obsidian Shortcuts]]
- [[#📑 Notes & Tips]]
	- [[#Dictionaries]]
- [[#🔗 Useful Links]]

---

## 🚀 Getting Started

1. **Download or clone this vault**  
   - Copy the entire `starter-vault` folder into your Obsidian vaults directory.  
   - Typical locations:  
     - **Windows:** `C:\Users\<username>\Documents\Obsidian\Vaults\`  
     - **macOS/Linux:** `~/Obsidian/Vaults/`  
2. **Rename the folder**  
   - Rename `starter-vault` to whatever name you prefer (e.g. `MyNotes`, `WorkVault`, etc.). 
3. **Open in Obsidian**  
   - Launch Obsidian.  
   - Select *Open folder as vault* and choose your copied folder.  
   - When prompted, click **Trust author and enable plugins** to activate the preconfigured community plugins.   
4. Rename the new vault `README.md` title to `# <new_vault_name> initialized from Starter Vault Template`
## 📂 Vault Folder Structure

| Folder / Path          | Purpose                                                         |
| ---------------------- | --------------------------------------------------------------- |
| `inbox/`               | Where new notes and quick captures land before being processed. |
| `focus/`               | Management and high-level organization notes.                   |
| `focus/journal/`       | Subfolder for daily, weekly, or reflective journaling notes.    |
| `notes/`               | Main collection of processed and organized notes.               |
| `support/`             | Supporting files (templates, scripts, attachments).             |
| `support/attachments/` | Stores images, PDFs, and other note attachments.                |
| `support/scripts/`     | Custom scripts for plugins or automation.                       |
| `support/templates/`   | Note templates for both plugins and manual use.                 |
> [!WARNING]  
> If you rename or move **core folders** (e.g. `00-inbox/`, `40-notes/`, `90-support/`),  
>some plugins may stop working as expected because their **default destination paths** will no longer exist.  
> Always review plugin settings (like *Templater*, *Daily Notes*, *Excalidraw*, etc.) after making changes,  
> to ensure everything keeps working correctly.

💡 You can extend this structure with additional folders, e.g.:  
- `projects/` for project-specific documentation and workspaces.  

👉 However, for **better usability**, it’s generally preferable to rely on **tags** to classify content types instead of creating many folders.

> [!IMPORTANT]  
> Whenever you install a new plugin, review if it allows defining a **default destination folder**.  
> - The preferred location is `notes/`.  
> - Alternatively, configure a dedicated folder if the plugin generates specific content (e.g., canvases → `visuals/canvas/`).  
> This ensures consistency and prevents fragmentation in your vault.

## 🔌 Community Plugins

These plugins come preinstalled and cover the basics: task management, querying, automation, and styling.

| Plugin                                                                        | Type  | Description                                                                             |
| ----------------------------------------------------------------------------- | ----- | --------------------------------------------------------------------------------------- |
| **[Calendar](https://github.com/liamcain/obsidian-calendar-plugin)**          | Core  | Adds a calendar view for navigating and creating daily notes.                           |
| **[Dataview](https://github.com/blacksmithgu/obsidian-dataview)**             | Core  | Powerful querying engine: turn your notes into a database with tables, lists, or tasks. |
| **[Tasks](https://github.com/obsidian-tasks-group/obsidian-tasks)**           | Core  | Advanced task management: queries, filtering, grouping, and custom statuses.            |
| **[Templater](https://github.com/SilentVoid13/Templater)**                    | Core  | Scripting and automation for templates using JavaScript and dynamic commands.           |
| **[Advanced Tables](https://github.com/tgrosinger/advanced-tables-obsidian)** | Core  | Enhances Markdown tables with formatting, navigation, and editing shortcuts.            |
| **[Manual Sorting<br>](https://github.com/kh4f/manual-sorting)**              | Core  | Adds manual drag&drop sorting to the file explorer.                                     |
| **[Iconize](https://github.com/FlorianWoelki/obsidian-iconize)**              | Style | Assign icons to files, folders, and links to improve visual organization.               |
| **[Style Settings](https://github.com/mgmeyers/obsidian-style-settings)**     | Style | Customize themes and snippets with user-friendly settings panels.                       |

### Recommended Plugins

Additional plugins that improve workflows, visuals, and sync capabilities.

| Plugin                                                                    | Type   | Description                                                                 |
| ------------------------------------------------------------------------- | ------ | --------------------------------------------------------------------------- |
| **[Copilot](https://github.com/logancyang/obsidian-copilot)**             | AI     | AI-powered assistant to generate, refactor, and improve notes.              |
| **[Excalidraw](https://github.com/zsviczian/obsidian-excalidraw-plugin)** | Visual | Create and embed Excalidraw diagrams directly inside Obsidian.              |
| **[Git](https://github.com/denolehov/obsidian-git)**                      | Sync   | Integrate Git for version control and backups of your vault.                |
| **[Remotely Save](https://github.com/remotely-save/remotely-save)**       | Sync   | Sync your vault with cloud services (e.g., OneDrive, Dropbox, WebDAV).      |
| **[QuickAdd](https://github.com/chhoumann/quickadd)**                     | UX     | Create quick capture workflows, macros, and advanced templating actions.    |
| **[Homepage](https://github.com/mirnovov/obsidian-homepage)**             | UX     | Set a custom note or dashboard as the default homepage when Obsidian opens. |

## 🧭 Workflow

This workflow defines how notes are created, developed, and organized across the vault.

1. **Default note creation**  
   - All new notes are created in `inbox/`.  
   - Notes here are considered *work-in-progress*.  

2. **Formatting new notes**  
   - Format new notes using the template **`formatted.note`**.  
   - Shortcut: **Left ALT + E**.  

3. **Promoting finished notes**  
   - Once complete, move the note to `notes/` (processed knowledge).  

4. **Focus notes**  
   - Use `focus/` for daily notes, meetings, and tracking.  
   - `focus/journal/` for reflective journaling.  

5. **Tasks**  
   - Tasks are usually written in daily notes.  
   - Open tasks can be aggregated and reviewed in the **Pending Task** note.  

✅ Workflow summary:  
**00-inbox → format → process → 40-notes**  
Meanwhile, **10-focus** is reserved for operations and short-term management.
## ⌨️ Essential Obsidian Shortcuts

| Action                         | Windows / Linux    | macOS             |
| ------------------------------ | ------------------ | ----------------- |
| ⚡ Quick switcher / commands   | `Ctrl + P`         | `Cmd + P`         |
| 🔍 Search and open a note      | `Ctrl + O`         | `Cmd + O`         |
| 📅 Create/open Daily Note      | LAlt + Shift + T   | LAlt + Shift + T  |
| 📝 Create new note             | `Ctrl + N`         | `Cmd + N`         |
| 📄 Insert template (Templater) | LAlt + E           | LAlt + E          |
| 📂 Move note to folder         | `Ctrl + Shift + M` | `Cmd + Shift + M` |
| 👁️ Toggle preview/edit mode   | `Ctrl + E`         | `Cmd + E`         |
| 📑 Toggle left sidebar         | `Ctrl + [`         | `Cmd + [`         |
| 📑 Toggle right sidebar        | `Ctrl + ]`         | `Cmd + ]`         |
| ⚙️ Open Settings               | `Ctrl + ,`         | `Cmd + ,`         |

## 📑 Notes & Tips

### Dictionaries

Obsidian’s spellcheck configuration is **global**, not vault-specific.  
Dictionaries are stored in the **Obsidian configuration folder** and shared across all vaults.

**Dictionary location by OS:**
- **Linux** → `~/.config/obsidian/Dictionaries`  
- **macOS** → `~/Library/Application Support/obsidian/Dictionaries`  

**Custom words:**  
Stored in the same path in `Custom Dictionary.txt` (plain text, one word per line).  

**Key notes:**  
- Applies globally across all vaults.  
- Sync `Custom Dictionary.txt` to keep the same spellcheck experience on multiple devices.  
## 🔗 Useful Links

| Resource             | Link                                                             | Description                                      |
| -------------------- | ---------------------------------------------------------------- | ------------------------------------------------ |
| Official Website     | [obsidian.md](https://obsidian.md)                               | Obsidian homepage and download.                  |
| Help & Documentation | [help.obsidian.md](https://help.obsidian.md)                     | Official documentation and guides.               |
| Community Plugins    | [obsidian.md/plugins](https://obsidian.md/plugins)               | Browse and install community plugins.            |
| Obsidian Forum       | [forum.obsidian.md](https://forum.obsidian.md)                   | Official community forum.                        |
| Obsidian Subreddit   | [r/ObsidianMD](https://www.reddit.com/r/ObsidianMD/)             | Reddit community for tips and discussions.       |
| Obsidian Discord     | [Obsidian Discord Server](https://discord.gg/veuWUTm)            | Active chat community for Obsidian users.        |
| Awesome Obsidian     | [awesome-obsidian](https://github.com/kmaasrud/awesome-obsidian) | Curated list of plugins, themes, and tools.      |
| Obsidian Roadmap     | [Obsidian Roadmap](https://obsidian.md/roadmap/)                 | We're chipping away at improvements to Obsidian. |

## 📜 License
This vault template is licensed under the terms of the [GNU General Public License v3.0
](https://github.com/ajmasia/awesome-obsidian/blob/main/LICEN