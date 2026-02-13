function PersonalInfo(){
    const name = "Himabindu";
    const role = "Software Engineer";
    const location = "Hyderabad, IN";
    const email = "hima@example.com"
        return (
        <div className="personal-info"> 
        <h2 className="name">{name}</h2>
        <p className="role">{role}</p>
        <p className="location">{location}</p>
        <p className="email">{email}</p>
        </div>

    );
}

export default PersonalInfo;