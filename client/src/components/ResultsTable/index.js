import React from "react";
import profiles from "../../utils/API"

function ResultsTable(props){
    const ProfileProps = props.profiles; 

    return(
        <table className="table table-striped" placeholder="Results">

            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Location</th>
                    <th scope="col">Instrument</th>
                    <th scope="col">Style</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>

                {ProfileProps.map(([profile], index) =>
                    <tr key={profile._id}>

                        <td>
                            <strong>
                                {profile.name}
                            </strong>
                        </td>
                        <td>
                            <strong>
                                {props.location}
                            </strong>
                        </td>
                        <td>
                            <strong>
                                {profile.instrument}
                            </strong>
                        </td>
                        <td>
                            <strong>
                                {profile.style}
                            </strong>
                        </td>
                        <td>
                        <button
                                onClick={(e, profile_id) => this.profileModal(e, profile._id)}
                                data-toggle="modal"
                                data-target="#exampleModal"
                            >
                                Open Profile
                         </button>
                        </td>
                    </tr>

                )}
            </tbody>
        </table>

    
    );
}


export default ResultsTable;