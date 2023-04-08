import * as React from "react";
import { connect } from "react-redux";
import BattlesuitCard from "./BattlesuitCard";

const CharacterBrowser = (props) => {

    let { characters } = props;

    return (
        <React.Fragment>
            {characters.characters.length > 0 &&
                <React.Fragment>
                    {characters.characters.map(char => {
                        return (
                            <React.Fragment key={char.character}>
                                {char.battlesuits.map(battlesuit => <BattlesuitCard key={battlesuit.name} character={char.character} battlesuit={battlesuit} />)}
                            </React.Fragment>
                        )
                    })}
                </React.Fragment>
            }
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        characters: state.characters,
        characterFilters: state.characterFilters
    }
}

export default connect(mapStateToProps)(CharacterBrowser);