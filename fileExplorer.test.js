import { displayFolderContents } from './fileExplorer.js';

jest.mock('./data/index.js', () => ({
  data: [
    {
      name: 'root',
      type: 'folder',
      children: [
        { name: 'file1.txt', type: 'file', modified: new Date(), size: 1024 },
        {
          name: 'subfolder',
          type: 'folder',
          modified: new Date(),
          children: [],
        },
      ],
    },
  ],
}));

describe('displayFolderContents()', () => {
  let tbody;
  let folderNode;
  let emptyFolderNode;

  beforeEach(() => {
    tbody = {
      innerHTML: '',
      appendChild: jest.fn(),
    };

    document.getElementById = jest.fn((id) => {
      if (id === 'fileTable') return { querySelector: jest.fn(() => tbody) };
      throw new Error(`Unexpected id: ${id}`);
    });

    folderNode = {
      name: 'root',
      type: 'folder',
      children: [
        { name: 'file1.txt', type: 'file', modified: new Date(), size: 1024 },
        {
          name: 'subfolder',
          type: 'folder',
          modified: new Date(),
          children: [],
        },
      ],
    };

    emptyFolderNode = {
      name: 'emptyFolder',
      type: 'folder',
      children: [],
    };

    jest.clearAllMocks();
  });

  it('should display folder contents correctly', () => {
    displayFolderContents(folderNode);

    expect(tbody.innerHTML).toBe('');
    expect(tbody.appendChild).toHaveBeenCalledTimes(2);

    // Check the first row
    const firstCallArgs = tbody.appendChild.mock.calls[0][0];
    expect(firstCallArgs.nodeName).toBe('TR');
    expect(firstCallArgs.children[0].textContent).toContain('📄');
    expect(firstCallArgs.children[0].textContent).toContain('file1.txt');
    expect(firstCallArgs.children[1].textContent).toBe(
      folderNode.children[0].modified.toLocaleDateString(),
    );
    expect(firstCallArgs.children[2].textContent).toBe('1.0 KB');

    // Check the second row
    const secondCallArgs = tbody.appendChild.mock.calls[1][0];
    expect(secondCallArgs.nodeName).toBe('TR');
    expect(secondCallArgs.children[0].textContent).toContain('📁');
    expect(secondCallArgs.children[0].textContent).toContain('subfolder');
    expect(secondCallArgs.children[1].textContent).toBe(
      folderNode.children[1].modified.toLocaleDateString(),
    );
    expect(secondCallArgs.children[2].textContent).toBe('');
  });

  it('should handle folders with no children correctly', () => {
    displayFolderContents(emptyFolderNode);

    expect(tbody.innerHTML).toBe('');
    expect(tbody.appendChild).not.toHaveBeenCalled();
  });

  it('should add event listeners to table rows', () => {
    document.createElement = jest.fn((element) => {
      const elem = {
        appendChild: jest.fn(),
        addEventListener: jest.fn(),
      };
      return elem;
    });

    displayFolderContents(folderNode);

    const firstCallArgs = tbody.appendChild.mock.calls[0][0];
    const secondCallArgs = tbody.appendChild.mock.calls[1][0];

    expect(firstCallArgs.addEventListener).toHaveBeenCalledWith(
      'click',
      expect.any(Function),
    );
    expect(secondCallArgs.addEventListener).toHaveBeenCalledWith(
      'click',
      expect.any(Function),
    );
  });

  it('should clear existing contents before displaying new contents', () => {
    tbody.innerHTML = '<tr><td>Old content</td></tr>';
    displayFolderContents(folderNode);

    expect(tbody.innerHTML).toBe('');
  });
});
