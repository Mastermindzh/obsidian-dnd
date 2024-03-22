# Obsidian-dnd

I've been using Obsidian for my DND sessions for quite a while now and several players have asked me for my setup. This repo provides the minimum setup for a vault that includes my setup.

<!-- toc -->

- [Obsidian-dnd](#obsidian-dnd)
 	- [How to install](#how-to-install)
  		- [just use this vault as is](#just-use-this-vault-as-is)
  		- [the harder way](#the-harder-way)
 	- [How to use](#how-to-use)
 	- [Features](#features)
  		- [The game list](#the-game-list)
  		- [The campaign overview](#the-campaign-overview)
  		- [Interactive mapping](#interactive-mapping)

<!-- tocstop -->

## How to install

### just use this vault as is

By far the easiest way to use this vault is to just copy it entirely and use it.
Plugins are set up, custom code is automatically detected & used, and everything will work as expected.

Even if you have your own vault already, consider copying it over to this vault if it doesn't contain too much custom stuff.

### the harder way

You can copy all templates, scripts and attachments over manually to your own vault.
Then you should go through **all** the settings tabs (including plugins) and copy the settings to your own vault.

Note that the "QuickAdd" actions can only be setup by modifying the [data.json](./.obsidian/plugins/quickadd/data.json) file in the plugin directory.

## How to use

1. Use the "Create a game" button in the [Game list](Game%20list.md) to create a campaign
2. Open the campaign page: `DND/<campaign name>/campaign`
3. Click the "Add Session" button when you are about to play a session
4. During the session use the `notes` section in the new session page to make notes.
5. Annotate everything you want to convert to a page with `[[` and `]]` like so: `[[something]]`, you can then make a page for these later to link them.
1. Alternatively, you can create pages right away, link them immediately and then fill them later.
2. Right-click any folder (1) and select "Create new note from template" to create a page.
    ![](./attachments/Pasted%20image%2020240322223040.png)

6. After the session go through the session document and fill out the summary (short summary in frontmatter, long one in body), go through linked documents & just add links & references to whatever you need before the next session

## Features

### The game list

In the DND folder you'll find a page which shows you a list of all your campaigns.
It keeps track of how many sessions are in each campaign and whether it is active or not.
Along that it has a button that allows you to automatically add a new campaign.
![[./attachments/Pasted image 20240322220331.png]]

### The campaign overview

Once you open the campaign page you'll see a bunch of "dataviews" with content that is useful to your current campaign like NPCs, players, sessions and more.

![](./attachments/Pasted%20image%2020240322224052.png)

### Interactive mapping

This is one of the killer features that I can't live without as a DM.
Before a session I can simply add markers to a drawing of a city/place-of-interest and hook them up to chapters in the locations document or other notes.

Below I've highlighted a specific place in Phandalin which will take me to a heading called `Miner's exchange` in the current document.

![](./attachments/Pasted%20image%2020240322224150.png)
To link to a specific heading instead of another note set up the `note to open` properties of a location pin to the current page and add the heading behind it with a `#` right in between like so:
![](./attachments/Pasted%20image%2020240322224532.png)

PS: This also works for custom campaigns where you provide your own beautiful drawing of course:
![](./attachments/Pasted%20image%2020240322224325.png)
