import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
// import { Editor } from '@tinymce/tinymce-react';
import '../css/postCreate.css';
import { postCreate } from '../utils';



function PostCreate({ loggedIn, darkMode })
{
    const years = []

    const [title, setTitle] = useState()
    const [price, setPrice] = useState()
    const [make, setMake] = useState()
    const [model, setModel] = useState()
    const [type, setType] = useState("Coupe")
    const [drivechain, setDrivechain] = useState("FWD")
    const [yearString, setYearString] = useState(2022)
    const [miles, setMiles] = useState()
    const [colour, setColour] = useState()
    const [doors, setDoors] = useState("2")
    const [location, setLocation] = useState()
    const wiz = "wiz is a stretch goal, this is a default state"
    const navigate = useNavigate()
    const submitHandler = async (event) =>
    {
        event.preventDefault()
        console.log("postCreate.js submitHadler", title)

        const year = Number(yearString)
        const formatedModel = model.replace(" ", "-");
        let priceFormat = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        priceFormat = "£" + priceFormat

        await postCreate(title, priceFormat, make, formatedModel, type, drivechain, year, miles, colour, doors, location, wiz)
        navigate("/browse")
    }

    for (let i = 2022; i >= 1920; i--)
    {
        years.push(i)
    }

    // const editorRef = useRef(null);

    // const log = () => {
    // if (editorRef.current) {
    //     editorRef.current.getContent()
    // }
    // };

    return (
        <div id="postCreateContent2" className={darkMode === true ? "dark flexbox" : "light flexbox"}>
            {!loggedIn ?
                (<div>
                    <div id="login-message">
                        <h1>You are currently not logged in</h1>
                        <h2>Please click <Link to="/login" id="accountCreateLink">here</Link> to log in</h2>
                    </div>
                </div>) :
                (<div>
                    <form id="postCreateForm" className="flexbox" onSubmit={submitHandler}>
                        <h1>Listing Creation</h1>
                        <label htmlFor="title">Title:</label>
                        <input type="text" name="title" onChange={(event) => setTitle(event.target.value)} />

                        <div id='postCreateColumnHolder' className='flexbox'>
                            <div className='postCreateColumns flexbox'>
                                <label htmlFor="price">Price (£):</label>
                                <input id="price" type="number" name="price" onChange={(event) => setPrice(event.target.value)} required />

                                <label htmlFor="make" >Make:</label>
                                <input type="text" name="make" onChange={(event) => setMake(event.target.value)} required />

                                <label htmlFor="model">Model:</label>
                                <input type="text" name="model" onChange={(event) => setModel(event.target.value)} required />

                                <label htmlFor="type">Type:</label>
                                <select name="type" onChange={(event) => setType(event.target.value)} required>
                                    <option value="Coupe">Coupe</option>
                                    <option value="Crossover">Crossover</option>
                                    <option value="Estate">Estate</option>
                                    <option value="GT">GT</option>
                                    <option value="Hatchback">Hatchback</option>
                                    <option value="Micro">Micro</option>
                                    <option value="Minivan">Minivan</option>
                                    <option value="Muscle Car">Muscle Car</option>
                                    <option value="Pickup">Pickup</option>
                                    <option value="Roadster">Roadster</option>
                                    <option value="Sedan">Sedan</option>
                                    <option value="Sports Car">Sports Car</option>
                                    <option value="Super Car">Super Car</option>
                                    <option value="SUV">SUV</option>
                                    <option value="Van">Van</option>
                                </select>

                                <label htmlFor="drivechain">Drivechain:</label >
                                <select name="drivechain" onChange={(event) => setDrivechain(event.target.value)} required>
                                    <option value="FWD">FWD</option>
                                    <option value="RWD">RWD</option>
                                    <option value="AWD">AWD</option>
                                    <option value="4WD">4WD</option>
                                </select>
                            </div>

                            <div className='postCreateColumns flexbox'>
                                <label htmlFor="year">Year:</label>
                                <select name="year" onChange={(event) => setYearString(event.target.value)} required>
                                    {years.map((year, index) => (
                                        <option value="year" key={index} >{year}</option>
                                    ))}
                                </select>

                                <label htmlFor="miles">Miles:</label>
                                <input type="number" name="miles" onChange={(event) => setMiles(event.target.value)} required />

                                <label htmlFor="colour">Colour:</label>
                                <input type="text" name="colour" onChange={(event) => setColour(event.target.value)} required />

                                <label htmlFor="doors">Doors:</label>
                                <select name="doors" onChange={(event) => setDoors(event.target.value)} required>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>

                                <label htmlFor="location">Location:</label>
                                <input type="text" name="location" onChange={(event) => setLocation(event.target.value)} required />
                            </div>
                        </div>

                        {/* <label htmlFor="text">History/General Info</label>
                <div id='wiz'>
                    <Editor onChange={(event) => setWiz(event.target.value)}
                        onInit={(evt, editor) => editorRef.current = editor}
                        init={{
                        height: 500,
                        menubar: false,
                        plugins: [
                            'advlist autolink lists link image charmap print preview anchor',
                            'searchreplace visualblocks code fullscreen',
                            'insertdatetime media table paste code help wordcount'
                        ],
                        toolbar: 'undo redo | formatselect | ' +
                        'bold italic backcolor | alignleft aligncenter ' +
                        'alignright alignjustify | bullist numlist outdent indent | ' +
                        'removeformat | help',
                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                        }}
                    />
                </div> */}

                        <button id='submitBtn' type='submit'>Submit</button>
                    </form>
                </div>)}
        </div>
    )
}

export default PostCreate