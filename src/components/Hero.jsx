import { IoSearch } from "react-icons/io5";
import { FaSquareGithub } from "react-icons/fa6";


const Hero = () => {
  return (
    <section className="w-full bg-[#000105] ">
        <div className="w-full h-1/4 relative">
            <img 
                src="src/assets/hero-image-github-profile-sm.jpg" 
                alt="phon background" 
                className="md:hidden w-full h-full object-center object-cover"
            />
            <img 
                src="src/assets/hero-image-github-profile.jpg" 
                alt="Desktop background" 
                className="hidden md:flex w-full h-full object-center object-cover"
            />

            <div className="absolute w-full h-full top-0 left-0 flex justify-center items-center">
                <div className="bg-[#20293A] text-[#CDD5E0]  flex w-[80%] md:w-[35%] h-10 items-center 
                rounded-lg gap-2 font-semibold">
                    <div className="">
                        <IoSearch className="ml-4" />
                    </div>
                    <div>
                        <p>Username</p>
                    </div>
                </div>
            </div>
        </div>

        <section className="bg-[#364153] w-full md:w-[75%] mx-auto mt-[-20px] relative">

                    {/* Desktop view */}
            <div className="w-full hidden md:flex">
                <div className="relative top-[-20px] left-20">
                    <FaSquareGithub 
                        className="text-white" 
                        size={100}
                    />
                </div>
                <div className="ml-26 mt-6 flex gap-4">
                    <div className="flex gap-2 font-bold text-sm bg-[#111629] h-10 w-40 rounded-md 
                                    justify-center items-center"
                    >
                        <p className="text-[#97A3B6]">Followers</p>
                        <div className="border-[#97A3B6] border-l h-5"/>
                        <p className="text-[#97A3B6]">27839</p>
                    </div>

                    <div className="flex gap-2 font-bold text-sm bg-[#111629] h-10 w-36 rounded-md 
                                    justify-center items-center"
                    >
                        <p className="text-[#97A3B6]">Following</p>
                        <div className="border-[#97A3B6] border-l h-5"/>
                        <p className="text-[#97A3B6]">0</p>
                    </div>

                    <div className="flex gap-2 font-bold text-sm bg-[#111629] h-10 w-52 rounded-md 
                                    justify-center items-center"
                    >
                        <p className="text-[#97A3B6]">Location</p>
                        <div className="border-[#97A3B6] border-l h-5"/>
                        <p className="text-[#97A3B6]">SanFransisco,CA</p>
                    </div>
                     
                </div>
            </div>

                {/* Mobile  view*/}
            <div className="w-full md:hidden flex flex-col">

                <div className="top-[-20px] relative left-10 ">
                    <FaSquareGithub size={100} className="text-white"/>
                </div>
                <div className="flex gap-2 bg-[#111629] py-3 w-44 rounded-xl ml-10">
                    <p className="text-[#97A3B6] font-bold pl-3">Followers </p>
                    <div className="border border-l text-[#97A3B6]" />
                    <p className="text-[#97A3B6] font-bold">27839</p>
                </div>

                <div className="flex gap-2 bg-[#111629] py-3 w-36 rounded-xl ml-10 mt-4">
                    <p className="text-[#97A3B6] font-bold pl-3">Following </p>
                    <div className="border border-l text-[#97A3B6]" />
                    <p className="text-[#97A3B6] font-bold">0</p>
                </div>

                <div className="flex gap-2 bg-[#111629] py-3 w-60 rounded-xl ml-10 mt-4">
                    <p className="text-[#97A3B6] font-bold pl-3">Location </p>
                    <div className="border border-l text-[#97A3B6]" />
                    <p className="text-[#97A3B6] font-bold">SanFransico, CA</p>
                </div>

            </div>

            <section className="w-full h-full">
                <div className="w-full ml-20">
                    <h2 className="text-[#CDD5E0] text-3xl font-semibold">GitHub</h2>
                    <p className="text-[#CDD5E0] font-bold">How people build software</p>
                </div>
                <div className="w-full mt-6 ml-8 gap-8 md:ml-20 flex flex-col md:flex-row md:flex-wrap md:gap-10">
                    <div className="w-[90%] md:w-[40%] bg-gradient-to-r from-[#111729] to-[#1D1B48] rounded-xl">
                        <h2 className="text-[#CDD5E0] font-bold ml-6 mt-4">.github</h2>
                        <p className="text-[#CDD5E0] ml-6 mt-2 text-sm">
                            Community Health for the @GitHub organization
                        </p>
                        <div className="ml-6 flex items-center gap-3 pb-4">
                            <div className="flex items-center gap-2 mt-2">
                                <img 
                                    src="src/assets/Nesting.svg" 
                                    alt="Nesting" 
                                />
                                <p className="text-[#CDD5E0] text-sm font-bold">2369</p>
                            </div>
                            <div className="flex items-center gap-2 mt-2">
                                <img 
                                    src="src/assets/Star.svg" 
                                    alt="star" 
                                />
                                <p className="text-[#CDD5E0] text-sm font-bold">703</p>
                            </div>
                            <div className="mt-2">
                                <p className="text-[#CDD5E0] text-xs font-bold">Updated 4 days ago</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-[90%] md:w-[40%] bg-gradient-to-r from-[#111729] to-[#1D1B48] rounded-xl">

                        <h2 className="text-[#CDD5E0] font-bold ml-6 mt-4">accessibility-alt-text-bot</h2>
                        <p className="text-[#CDD5E0] ml-6 mt-2 text-sm">
                            An action to recommend users to add alt text on issues. pull requests and discussions.
                        </p>
                        <div className="ml-6 flex items-center gap-3 pb-4">
                            <div className="flex items-center mt-2">
                                <img 
                                    src="src/assets/Chield_alt.svg" 
                                    alt="shield" 
                                />
                                <p className="text-[#CDD5E0] text-sm font-bold">MIT</p>
                            </div>

                            <div className="flex items-center gap-2 mt-2">
                                <img 
                                    src="src/assets/Nesting.svg" 
                                    alt="Nesting" 
                                />
                                <p className="text-[#CDD5E0] text-sm font-bold">7</p>
                            </div>

                            <div className="flex items-center gap-2 mt-2">
                                <img 
                                    src="src/assets/Star.svg" 
                                    alt="star" 
                                />
                                <p className="text-[#CDD5E0] text-sm font-bold">50</p>
                            </div>

                            <div className="mt-2">
                                <p className="text-[#CDD5E0] text-xs font-bold">Updated 3 days ago</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-[90%] md:w-[40%] bg-gradient-to-r from-[#111729] to-[#1D1B48] rounded-xl">
                        <h2 className="text-[#CDD5E0] font-bold ml-6 mt-4">accessibilityjs</h2>
                        <p className="text-[#CDD5E0] ml-6 mt-2 text-sm">
                            Client side accessibility error scanner.
                        </p>
                        <div className="ml-6 flex items-center gap-3 pb-4">
                            <div className="flex items-center mt-2">
                                <img 
                                    src="src/assets/Chield_alt.svg" 
                                    alt="shield" 
                                />
                                <p className="text-[#CDD5E0] text-sm font-bold">MIT</p>
                            </div>

                            <div className="flex items-center gap-2 mt-2">
                                <img 
                                    src="src/assets/Nesting.svg" 
                                    alt="Nesting" 
                                />
                                <p className="text-[#CDD5E0] text-sm font-bold">72</p>
                            </div>
                            <div className="flex items-center gap-2 mt-2">
                                <img 
                                    src="src/assets/Star.svg" 
                                    alt="star" 
                                />
                                <p className="text-[#CDD5E0] text-sm font-bold">2181</p>
                            </div>
                            <div className="mt-2">
                                <p className="text-[#CDD5E0] text-xs font-bold">Updated 4 days ago</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-[90%] md:w-[40%] bg-gradient-to-r from-[#111729] to-[#1D1B48] rounded-xl">
                        <h2 className="text-[#CDD5E0] font-bold ml-6 mt-4">actions-cheat-sheet</h2>
                        <p className="text-[#CDD5E0] ml-6 mt-2 text-sm">
                            A cheat sheet for GitHub Actions
                        </p>
                        <div className="ml-6 flex items-center gap-3 pb-4">
                            <div className="flex items-center mt-2">
                                <img 
                                    src="src/assets/Chield_alt.svg" 
                                    alt="shield" 
                                />
                                <p className="text-[#CDD5E0] text-sm font-bold">MIT</p>
                            </div>

                            <div className="flex items-center gap-2 mt-2">
                                <img 
                                    src="src/assets/Nesting.svg" 
                                    alt="Nesting" 
                                />
                                <p className="text-[#CDD5E0] text-sm font-bold">26</p>
                            </div>
                            <div className="flex items-center gap-2 mt-2">
                                <img 
                                    src="src/assets/Star.svg" 
                                    alt="star" 
                                />
                                <p className="text-[#CDD5E0] text-sm font-bold">194</p>
                            </div>
                            <div className="mt-2">
                                <p className="text-[#CDD5E0] text-xs font-bold">Updated 4 days ago</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-[83%] text-center mb-10">
                        <p className="text-[#CDD5E0] text-sm font-bold">View all repositories</p>
                    </div>
                </div>
            </section>

        </section>

     
    </section>
  )
}

export default Hero