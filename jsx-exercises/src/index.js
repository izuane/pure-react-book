import React from 'react';
import ReactDOM from 'react-dom';
// JS

function TitleJS(){
  return (
    React.createElement('div', {className: 'book'}, 'The Title')
  );
}

function AuthorJS() {
  return (
    React.createElement('div', {className: 'author'}, 'The Author')
  );
}

function RatingJS() {
  return (
    React.createElement('li', {className: 'rating'}, '5 stars')
  );
}

function ISBNJS() {
  return (
    React.createElement('li', {className:'isbn'}, '12-345678-910')
  );
}

function StatsJS() {
  return (
    React.createElement('ul', {className: 'stats'},
                        React.createElement(RatingJS, null), React.createElement(ISBNJS, null))
  );
}

// JSX
function Title(){
  return (
    <div className = 'book'>
      The Title
    </div>
  );
}

function Author() {
  return (
    <div className = 'author'>
      The Author
    </div>
  );
}

function Rating() {
  return (
    <li className = 'rating'>
      5 stars
    </li>
  );
}

function ISBN() {
  return (
    <li className = 'isbn'>
      12-345678-910
    </li>
  );
}

function Stats() {
  return (
    <ul className = 'stats'>
      <Rating/>
      <ISBN/>
    </ul>
  );
}

function JSXspace() {
  return (
    <div>
      &nbsp;Non-breaking
      &nbsp;Spaces&nbsp;
    </div>
  );
}

function JSXlinespace() {
  return (
    <div>
      Line1
      {' '}
      Line2
    </div>
  );
}

function Greeting() {
  let username = "root";
  //let username = undefined;
  //let username = null;
  //let username = false;
  return (
    <div>
      {typeof username == 'string' ? 'Hello, ' + username: 'Not logged in.'}
    </div>
  );
}

function ReturnTwo() {
  return (
    <>
    <Title/> <Stats/>
    </>
  );
}

// Can't return JS expression like this
// function ExprInBraces() {
//   return (
//     <div>
//       {true && true; true && false}
//     </div>
//   );
// }

// can't return inside JS expression
// function ReturnInJSExpr() {
//   return (
//     <div>
//     {return 1}
//     </div>
//   );
// }

// Using alert halts rendering
function TestAlert() {
  return (
    <>
      {alert('Hi')}
    </>
  )
}

// Doesn't remove the single quote when displayed in browser
function QuotedStringInJSX() {
  return (
    <>
      'Yo sup'
    </>
  )
}

function Data() {
  return (
    <>
      <td>(1,1)</td>
      <td>(1,2)</td>
      <td>(1,3)</td>
    </>
  );
}

function Table() {
  return (
    <>
      <table>
        <tbody>
          <tr>
            <Data/> 
          </tr>
        </tbody>
      </table>
    </>
  );
}

function MyThing() {
  return (
    <div className = 'book'>
      <TitleJS/>
      <AuthorJS/>
      <StatsJS/>
      <JSXspace/>
      <JSXlinespace/>
      <Greeting/>
      <ReturnTwo/>
      {/* <TestAlert/> */}
      <QuotedStringInJSX/>
      <Table/>
    </div>
  )
}

ReactDOM.render(
  <MyThing/>,
  document.querySelector('#root')
);