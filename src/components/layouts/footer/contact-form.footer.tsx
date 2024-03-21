export default function Contact() {
    return (
        <section className="flex h-[23rem] w-96 flex-col gap-5 rounded-3xl bg-base-100 px-5 py-5">
            <h2 className="text-center text-xl font-extrabold text-slate-100">
                Say something
            </h2>
            <div className="flex w-full flex-col gap-3">
                <p>Username</p>
                <input
                    type="text"
                    placeholder="Your name"
                    className="input input-bordered w-full bg-slate-100 text-base-100"
                />
            </div>
            <div className="flex w-full flex-col gap-3">
                <p>Message</p>
                <textarea
                    className="textarea textarea-bordered w-full resize-none bg-slate-100 text-base-100"
                    placeholder="Messages"
                ></textarea>
            </div>
            <button className="h-10 rounded-md bg-secondary text-base hover:opacity-75">
                Send
            </button>
        </section>
    );
}
