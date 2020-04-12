import React from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap.min.css'


function Hero() {

    return (
        <div className= "row">

            <div className="jumbotron col-10 offset-1">
                <h1>Author Quiz</h1>
                <p >Select the book written by the author shown</p>
            </div>
        </div>
    )
}

function Continue() {
    return (<div/>);
}

function Turn({author , books, highLight,onAnswerSelected}) {

    function HighLightValues(highLight) {

        const mapping = {
            'none': '',
            'wrong' : 'red',
            'correct': 'green'
        };

        return mapping[highLight]
    }




    return(<div className="row turn"  style ={{backgroundColor : HighLightValues(highLight)}}>
        <div className="col-4 offset-1" >
            <img src={author.imageUrl}  className="authorimage" alt=  "Author"/>
        </div>

        <div className="col-6">

            {books.map((data )=> <Book data={data} key={data} onClick={onAnswerSelected}/> )}

        </div>
    </div>);
}

function Book({data,onClick}) {
    return (<div className="answer" onClick={()=>{onClick(data);}}>
       <h4>{data}</h4>
    </div>)
}

function Footer() {

    return (
        <div className="row" id="footer">
            <div className="col-12">
                <p className="text-muted credit">
                    All image are from
                </p>
            </div>

    </div>
    )
}


function AuthorQuiz({turnData,highLight,AddResultClick}) {
  return (
    <div className="container-fluid">

        <Hero/>
        <Turn {...turnData } highLight={highLight} onAnswerSelected={AddResultClick}/>
        <Continue/>

        <Footer/>
    </div>
  );
}

export default AuthorQuiz;
