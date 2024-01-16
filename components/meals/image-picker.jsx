'use client'
import { useRef, useState } from 'react'
import Image from 'next/image'

import classes from './image-picker.module.css'

export default function ImagePicker({ label, name }) {
	const [pickedImage, setPickedImage] = useState()
	const imageInput = useRef()
	// hook is being used to create a reference to the input element with the ref={imageInput} attribute. This allows you to interact with the DOM element directly in React.

	function handlePickClick() {
		imageInput.current.click()
		// is used to programmatically trigger a click event on the file input. This has the same effect as if the user had manually clicked on the file input.
	}

	function handleImageChange(event) {
		const file = event.target.files[0]

		if (!file) {
			setPickedImage(null)
			return
		}

		const fileReader = new FileReader()
		fileReader.onload = () => {
			setPickedImage(fileReader.result)
		}
		fileReader.readAsDataURL(file)
	}

	return (
		<div className={classes.picker}>
			<label htmlFor={name}>{label}</label>
			<div className={classes.controls}>
				<div className={classes.preview}>
					{!pickedImage && <p>No image picked yet.</p>}
					{pickedImage && <Image src={pickedImage} alt='The image selected by the user' fill />}
				</div>
				<input
					className={classes.input}
					type='file'
					id={name}
					accept='image/png, image/jpeg'
					name={name}
					ref={imageInput}
					// multiple -> could be an option
					onChange={handleImageChange}
					required
				/>

				{/* onClick is a client side interation, use client for the component */}
				<button className={classes.button} type='button' onClick={handlePickClick}>
					Pick an Image
				</button>
			</div>
		</div>
	)
}
