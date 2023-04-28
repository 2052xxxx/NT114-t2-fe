import React, { Component } from 'react'
import "./CBlogNext.css"
import HeaderPage from "../MainAfterSignin/HeaderPage/HeaderPage"
export default class CBlogNext extends Component {
  render() {
    return (
        <div>
            <div>
                <form>
                <label className='font_1'>
                    Story Preview
                    <br />
                    <input placeholder="Include a hight-quality image in your story to make it more inviting to readers" className='Data_blog' type="text" name="title" />
                </label>
                <br />
                <label className='font_1'>
                    Hi
                    <br />
                    <textarea className='Size' placeholder="Write a preview subtitle" name="content"></textarea>
                </label>
                <br />
                <input className='Publish_blog' type="submit" value="Publish now" />
                </form>
                <div>
                    {/* <label htmlFor="image-upload">Chọn ảnh:</label>
                    <input type="file" id="image-upload" name="image" accept="image/*" onChange={handleImageUpload}></input>
                    <img id="image-preview" src={imagePreview} alt="Ảnh xem trước"></img>                 */}
                </div>
            </div>        
        </div>
    )
  }
}
