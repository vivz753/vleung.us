import React from "react";

function Resume() {

    return (
            <section className="bg-white body-font mt-10" id="res">
                <div className="container mx-auto">
                    <div class="container mx-auto flex px-5 py-4 items-center justify-center flex-col">
                        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 font-legacy">Resume</h1>
                        <p class="leading-relaxed text-xl font-regular text-center justify-center flex">Open to opportunities in 3D graphic design, full-stack development, and operations/infra.</p>
                    </div>
                    <div className="flex flex-col text-center items-center py-10" style={{ position: "relative", minWidth: "320px", height: "930px" }}>
                        <iframe class="scribd_iframe_embed" title="Vivian's Resume" src="https://www.scribd.com/embeds/431551693/content?start_page=1&view_mode=scroll&access_key=key-VQcBQLzvJAqSjXVEwonM"
                            data-auto-height="true" data-aspect-ratio="0.7729220222793488" scrolling="no" width="90%" height="100%" frameborder="0">
                        </iframe>
                    </div>
                </div>
            </section>
    );
}

export default Resume;
