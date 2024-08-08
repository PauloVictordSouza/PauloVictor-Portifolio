

    function updateProfileInfo(profileData){

        const photo = document.getElementById("profile.photo")
        photo.src = profileData.photo
        photo.alt = profileData.name

        const name = document.getElementById("profile.name")
        name.innerText = profileData.name

        const job = document.getElementById("profile.job")
        job.innerText = profileData.job

        const location = document.getElementById("profile.location")
        location.innerText = profileData.location

        const phone = document.getElementById("profile.phone")
        phone.innerText = profileData.phone

        const email = document.getElementById("profile.email")
        email.innerText = profileData.email
        email.href = `mailto:${profileData.email}`
        
    }

    function updateSoftSkillsInfo(profileData){
        const softSkills = document.getElementById("profile.skills.softSkills")


       softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join("")
    }

    function updatehardSkillsInfo(profileData){
        const hardSkills = document.getElementById("profile.skills.hardSkills")


       hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => ` <li>
                        <img src="${skill.logo}" alt="${skill.name}" title="${skill.name}">
                    </li>
        `).join("")
    }

    function updateLanguages(profileData){

        const languages = document.getElementById("profile.languages")
        

        languages.innerHTML = profileData.language.map(language => `<li>${language.name} - ${language.level}</li>`).join("")
    }

    function updateProjects(profileData){
        const projetos = document.getElementById('profile.projects')
        projetos.innerHTML = profileData.projetos.map(projeto =>{
            return `<li>
                        <h3 ${projeto.github ? 'class="title github"': ""}>
                                ${projeto.name}
                        </h3>
                        <a href="${projeto.url}" target="_blank">${projeto.url}</a>
                    </li>`
        }).join("")
    } 

    function updateProfessionalExperience(profileData){
        const professionalExperience = document.getElementById("profile.professionalExperience")

       professionalExperience.innerHTML = profileData.professionalExperience.map(experience => {
            return `
                <li>
                <h3 class="title">${experience.name}</h3>
                <p class="period">${experience.period}</p>
                <p>${experience.description}<p>
            `
        }).join("")

    }


    (async () => {
        
        const profileData = await fetchProfileData()
        updateProfileInfo(profileData)
        updateSoftSkillsInfo(profileData)
        updatehardSkillsInfo(profileData)
        updateLanguages(profileData)
        updateProjects(profileData)
        updateProfessionalExperience(profileData)
        
    })()

