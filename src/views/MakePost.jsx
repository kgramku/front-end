import { useState } from "react";

const MakePost = () => {
	const [content, setContent] = useState("");

	const submitPost = () => {
		alert(content);
	};

	return (
		<div className="make-post">
			<form>
				<input
					value={content}
					onChange={(e) => setContent(e.target.value)}
					type="text"
					placeholder="What do you have in mind?"
					name="content"
				/>
				<input type="submit" value="Post" onClick={submitPost} />
			</form>
		</div>
	);
};

export default MakePost;
