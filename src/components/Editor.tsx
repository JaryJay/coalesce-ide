const handleChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
    console.log("Hi");
    const newValue = e.currentTarget.value;
}

const Editor = () => {
    return (
        <div className="flex-auto h-full">
            <textarea
                className="min-w-full h-full resize-none editor-text-area"
                onChange={handleChange}
            />
        </div>
    );
};

export default Editor;
