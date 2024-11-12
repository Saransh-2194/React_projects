function customRender(reactElement, container) {
    /*
    const DomElement = document.createElement(reactElement.type);
    DomElement.innerHTML = reactElement.children
    DomElement.setAttribute('href', reactElement.props.href);
    DomElement.setAttribute('target', reactElement.props.target);
    container.appendChild(DomElement);
    */

    const DomElement = document.createElement(reactElement.type);
    DomElement.innerHTML = reactElement.children;

    for (const prop in reactElement.props) {
        if (prop === 'children') continue;
        DomElement.setAttribute(prop, reactElement.props[prop]);
    }
    container.appendChild(DomElement);;
}

const reactElement = {
    type: 'a',
    //props are shortform for properties they are the properties of the component we are rendering.
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit Google'
}

const mainContainer = document.querySelector('#root');

customRender(reactElement, mainContainer)
