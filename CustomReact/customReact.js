/*
function customRender(reactElement,container){
    //new domElement ko create kro but with the help of custom made element that is reactElement
    const domElement=document.createElement(reactElement.type);
    domElement.innerHTML=reactElement.children;
    domElement.setAttribute('href',reactElement.props.href);
    domElement.setAttribute('target',reactElement.props.target);

    //ab jo domElemen bnae ho usko mainContainer me append krdo
    container.appendChild(domElement);
}
*/

//using for loop
function customRender(reactElement,container){
    const domElement=document.createElement(reactElement.type);
    domElement.innerHTML=reactElement.children;

    for (const prop in reactElement.props) {
        if(prop==='children') continue;
        domElement.setAttribute(prop,reactElement.props[prop])

    }
    container.appendChild(domElement);
}

const reactElement={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'Click here to visit Google'
}


const mainContainer=document.querySelector('#root');

//now reactElemnt to inject kro mainContainer that is root 
//thats how react work by injecting element into root component

customRender(reactElement,mainContainer)