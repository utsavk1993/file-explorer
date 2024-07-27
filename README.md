# File System

## Problem Statement
1. A customer has asked for a way to provide a UI for exploring a file system with the ability to
see directories and the files within them.
2. They would like a sidebar (on the left) with the directory tree and a table (on the right) that shows the files within the directory.

## Acceptance criteria
1. The component should be divided into two panes and display a folder tree in the left pane and a file/folder list in the right pane (see mockup below).
2. It should be possible to expand/collapse folders in the folder tree.
3. It should be possible to select a folder in the left or right pane and display the contents of the folder in the right pane.
4. The data used to create the nodes should be in this format:
```
interface ITreeNode {
  type: 'file' | 'folder';
  name: string;
  modified: Date;
  size: number;
  children?: ITreeNode[]
}
```
Assumption: "name" will be unique per folder

## Mockup

![image](https://github.com/user-attachments/assets/a61bdf86-8426-440d-b8e4-7c927629ce2d)

