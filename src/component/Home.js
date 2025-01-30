import React from 'react'
import Showlibrary from './Showlibrary'
import Showgroup from './Showgroup'
import Showcontact from './Showcontact'
import Showmessage from './Showmessage'

export default function Home() {
  return (
    <div className='container'>
        <h1 className="text-center my-4">Send SMS</h1>
          <div class="row d-flex justify-content-center">
            <Showlibrary />
            <div class="col-md-4">
              <form>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Enter Library Name</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='E.g. Birthday' />
                </div>
                <div className='d-grid gap-2'>
                  <button type="submit" class="btn btn-navy-blue">Submit</button>
                </div>              
              </form>
            </div>
            <Showgroup />
          </div>
          <div class="row d-flex justify-content-center">
            <Showmessage />
            <Showcontact />
          </div>    
        
    </div>
  )
}
