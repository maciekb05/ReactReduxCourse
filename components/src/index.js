import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                Are you sure you want to do this?
            </ApprovalCard>
            <ApprovalCard>
                <div>
                    <h3>Warning!</h3>
                    Are you sure you want to do this?
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author={faker.internet.userName()} 
                    time="Today at 6:00PM" 
                    text="Nice blog post!" 
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author={faker.internet.userName()} 
                    time="Yesterday at 7:04PM" 
                    text="I like your work :)" 
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            
        </div>
    );
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);