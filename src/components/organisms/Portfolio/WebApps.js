import React from "react";

function WebApps() {

    return (
            <section class="bg-yellow-100 body-font">
                <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                    <div class="text-center lg:w-2/3 w-full">
                        <h1 class="title-font sm:text-4xl text-3xl mb-10 font-medium text-gray-900 font-legacy">Web Applications</h1>
                    </div>
                    <div class="flex flex-col">
                        <div class="h-1 bg-red-200 rounded overflow-hidden">
                            <div class="w-24 h-full bg-red-500"></div>
                        </div>
                        <div class="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
                            <h1 class="sm:w-2/5 text-black font-medium title-font text-3xl mb-2 sm:mb-0 font-legacy">Bunker</h1>
                            <p class="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0 font-regular text-xl">Write about what bunker is, what was your role and contribution (about se-165 group and maybe what you learned out of that experience), and the technologies you used.</p>
                        </div>
                    </div>
                    <iframe
                        title="bunker"
                        width="100%" height="900px"
                        frameBorder="1"
                        src="https://se-165.firebaseapp.com/home"
                    />
                    <div class="flex flex-col mt-24">
                        <div class="h-1 bg-red-200 rounded overflow-hidden">
                            <div class="w-24 h-full bg-red-500"></div>
                        </div>
                        <div class="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
                            <h1 class="sm:w-2/5 text-black font-medium title-font text-3xl mb-2 sm:mb-0 font-legacy">Todoist</h1>
                            <p class="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0 font-regular text-xl">Write about what todoist is, what was your role and contribution (if it was a group project mention that), and the technologies you used.</p>
                        </div>
                    </div>
                    <iframe
                        title="todoist"
                        width="100%" height="700px"
                        frameBorder="1"
                        src="https://vivz753.github.io/React"
                    />
                </div>
            </section>
    );
}

export default WebApps 
