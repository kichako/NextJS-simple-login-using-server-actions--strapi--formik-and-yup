export function ResponseBox({ data }) {
    return (
        <section>
            <div className="bg-slate-900 p-6 rounded-lg text-[#F9FCFB]">
                <pre className="overflow-hidden">
                    <code>
                        { JSON.stringify(data, null, 2) }
                    </code>
                </pre>
            </div>
        </section>
    );
}
