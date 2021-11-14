import React from "react";
import { connect } from "react-redux";
import ScoreItem from "./ScoreItem";


const LeaderBoard = (props) => {
    const { users } = props;

    const scoreSheet =
        Object.values(users).map(user => {
            return {
                id: user.id,
                score: (Object.keys(user.answers).length + user.questions.length)
            }
        }).sort((a, b) => (b.score - a.score));

    return (
        <div className="card" style={{ width: "800px" }}>
            <div className="card-header">
                <h4 className="text-start fw-bold card-text">Leader Board</h4>
            </div>

            <div className="card-body d-flex flex-column justify-content-center">
                {scoreSheet.map(item => (
                    <div key={item.id} className="d-flex flex-row justify-content-center">
                        <ScoreItem key={item.id} userId={item.id} score={item.score} />
                    </div>
                ))}
            </div>
        </div>
    )
}

const mapStateToProps = ({ users }) => {
    return {
        users
    }
}

export default connect(mapStateToProps)(LeaderBoard);