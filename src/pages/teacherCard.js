const TeacherCard = (props) => {


    const {name, job, img} = props.teacher;
    return (
        <div class="card">
                    <img src={img} alt="" />
                    <h4>{name}</h4>
                    <p>{job}</p>
                    <div class="per">
                        <table>
                            <tr>
                                <td><span>84%</span></td>
                                <td><span>83%</span></td>
                            </tr>
                            <tr>
                                <td>Month</td>
                                <td>Year</td>
                            </tr>
                        </table>
                    </div>
                    <button>Profile</button>
                </div>
    )
}
export default TeacherCard;