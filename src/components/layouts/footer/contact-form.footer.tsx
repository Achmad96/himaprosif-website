export default function Contact() {
    return (
        <section className="flex h-[22rem] w-96 flex-col gap-5 rounded-3xl bg-base-100 px-5 py-5">
            <h2 className="text-center text-xl font-extrabold">
                Say something
            </h2>
            <div className="w-full">
                <p>Username</p>
                <input
                    type="text"
                    placeholder="Your name"
                    className="input input-bordered w-full max-w-xs bg-slate-100 text-base-100"
                />
            </div>
            <div>
                <p>Message</p>
                <textarea
                    className="textarea textarea-bordered w-full resize-none bg-slate-100 text-base-100"
                    placeholder="Messages"
                ></textarea>
            </div>
            <button className="h-10 rounded-md bg-secondary text-base">
                Send
            </button>
        </section>
    );
}
