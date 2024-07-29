import { data } from './data/index.js';

/* Create the tree view of the file explorer in the sidebar using the data provided
 * @param {Object} node - The node object to create the tree view for
  * @param {Element} parentElement - The parent element to append the tree view to
  */
const createTreeView = (node, parentElement) => {
  const li = document.createElement('li');
  const text = document.createElement('span');
  li.style.listStyleType = 'none';
  text.textContent = node.name;
  text.dataset.type = node.type;
  text.dataset.path = getPath(node);
  text.classList.add(node.type);

  li.appendChild(text);
  // Append the list item to the parent element
  parentElement.appendChild(li);

  // If the node has children, create a nested list
  if (node.children && node.children.length > 0) {
    const ul = document.createElement('ul');
    li.appendChild(ul);
    // Recursively create the tree view for the children
    node.children.forEach(child => createTreeView(child, ul));
  }

  // Add event listener to the text element to display the contents of the folder
  text.addEventListener('click', (event) => {
    const target = event.target;
    if (target.classList.contains('folder')) {
      // Toggle the display of the nested ul element
      const nestedUl = target.nextElementSibling;
      if (nestedUl) {
        nestedUl.style.display = nestedUl.style.display === 'none' ? 'block' : 'none';
      }
    }
    document.querySelectorAll('.selected').forEach(el => el.classList.remove('selected'));
    target.classList.add('selected');
  });
}

// Get the path of the node by traversing up the parent nodes
const getPath = (node) => {
  const path = [];
  let current = node;
  while (current) {
    path.unshift(current.name);
    current = current.parent;
  }
  return path.join('/');
}

/* Initialize the file explorer by creating the tree view in the sidebar */
const initializeFileExplorer = () => {
  const rootElement = document.getElementById('sidebar');
  data.forEach(node => createTreeView(node, rootElement));
}

initializeFileExplorer();
