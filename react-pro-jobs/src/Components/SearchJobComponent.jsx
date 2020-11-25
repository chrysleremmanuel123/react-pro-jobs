import React, { createContext, useState } from 'react'

export const UserContext = createContext();

export default function SearchJobComponent() {
    const [description, setDescription] = useState('')
    console.log("value", description);
    return (
        <UserContext.Provider
            value={{
                description
            }}
        >
            <div className="form-container">
                <form>
                    <label>Description</label>
                    <br />
                    <input type="text" className="input-container" onChange={(e) => setDescription(e.target.value)} />
                    <br />
                </form>
                <form>
                    <label>Location</label>
                    <br />
                    <input type="text" className="input-container" />
                </form>
                <form>
                    <br />
                    <input type="checkbox" />
                    <label >Only Full Time</label>

                </form>
            </div>
        </UserContext.Provider>
    )
}
