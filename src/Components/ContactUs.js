import React from 'react'

function ContactUs() {
    return (
        <div>
            <form >
                <div class="input-group mb-3 mt-2">
                    <span class="input-group-text" id="basic-addon1">Name</span>
                    <input type="text" class="form-control" placeholder="Username" aria-label="Enter your Name" aria-describedby="basic-addon1" />
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">Number</span>
                    <input type="number" class="form-control" placeholder="Enter your Phone Number" aria-label="Enter your Phone Number" aria-describedby="basic-addon1" />
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text">Address</span>
                    <textarea class="form-control" aria-label="Enter your Address"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default ContactUs