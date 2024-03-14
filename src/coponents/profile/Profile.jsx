import React, { useContext } from "react";
import './profile.css'
import { DataContext } from "../../context/DataContext";

function Profile() {
    const { content, theme } = useContext(DataContext);

    return (
        <div className={`header-profile ${theme === 'dark' ? 'dark:bg-darkBackground' : ''}`} id="profile">
            <h1 className={`profile-h1 ${theme === 'dark' ? 'dark:text-darkH1' : ''} text-title font-semibold mb-[10px] text-[36px] text-center md:text-[48px] md:text-left`}>
                {content.profile}
            </h1>

            <div
                className="profile-container flex text-primary flex-wrap  justify-center md:justify-start "
                id="profile-info"
            >
                <div className="basis-full md:basis-1/2">
                    <span className={`text-blue-600 ${theme === 'dark' ? 'dark:text-darkH2' : ''} font-medium text-3xl flex justify-center md:justify-start`}>
                        {content.profile}
                    </span>


                    <div
                        id="infos"
                        className="grid grid-cols-2 mt-[21px] text-[#000]"
                    >
                        <div className={`grid ${theme === 'dark' ? 'dark:text-white' : ''} grid-rows-5 font-semibold place-content-center md:place-content-start`}>
                            <p>{content.profileData.birhdayData}</p>
                            <p>{content.profileData.cityData}</p>
                            <p>{content.profileData.educationData}</p>
                            <br />
                            <p>{content.profileData.roleData}</p>
                        </div>
                        <div className={`grid ${theme === 'dark' ? 'dark:text-white' : ''} grid-rows-5 md:basis-1/2 place-content-center md:place-content-start`}>
                            <p>{content.profileData.birthdayValue}</p>
                            <p>{content.profileData.cityValue}</p>
                            <p>{content.profileData.educationValue.universityName}</p>
                            <p>
                                {content.profileData.educationValue.departmentType} -
                                {content.profileData.educationValue.graduadeYear}
                            </p>
                            <p>{content.profileData.jobData}</p>

                        </div>
                    </div>
                </div>
                <div className="basis-full md:basis-1/2 ">
                    <span className={`text-blue-600 ${theme === 'dark' ? 'dark:text-darkH2' : ''} font-medium text-3xl flex justify-center md:justify-start`}>
                        {content.profileData.headerData}
                    </span>

                    <div className={`text-text ${theme === 'dark' ? 'dark:text-white' : ''} space-y-4`}>
                        {content.profileData.aboutData.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;






