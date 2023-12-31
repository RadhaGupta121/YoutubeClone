import axios from 'axios';
import React, { useEffect, useState } from 'react';
import img1 from '../../img/banner2.jpg'
function MyChannel(props) {
    const [name, setName] = useState('');
    const [avatarImg, setAvatarImg] = useState('');
    const [email, setEmail] = useState('');
    const [coverImg, setCoverImg] = useState('');
    useEffect(() => {
        console.log("useefect")
        fetchUser();
    }, [])
    async function fetchUser() {
        const user = await axios.post('/user/get-current-user');
        console.log(user);
        if (user.status === 200) {
            const userName = user?.data?.isExist?.name || user?.data?.user?.userName;
            const userAvtarImg = user?.data?.isExist?.avatar || user?.data?.user?.avatar;
            const userEmail = user?.data?.isExist?.email || user?.data?.user?.email;
            const userCoverImg = user?.data?.isExist?.coverImage || user?.data?.user?.coverImage;
            // const userCoverImg={img1}
            setName(userName);
            setAvatarImg(userAvtarImg);
            setEmail(userEmail);
            setCoverImg(userCoverImg);
        }


    }
    return (
        <div style={{ width: "80vw", margin: "auto",padding:"32px" }} >
            <div style={{ backgroundColor: "green", height: "25vh", width: "80vw", borderRadius: "20px", margin: "auto" }} >
                {coverImg ? <img src={coverImg} alt='' style={{ height: "100%", width: "100%", borderRadius: "20px" }} /> : null}
            </div>
            <div style={{ display: "flex", justifyContent: "flex-start", marginTop: "2rem",gap:"20px" }}>
                <img src={avatarImg} alt='not found' style={{ height: "12rem", width: "12rem", borderRadius: "50%" }} />
                <div>
                    <p style={{ fontSize: "30px", fontWeight: "700",padding:"8px" }}>{name}</p>
                    <p style={{ fontSize: "18px", color: "gray" ,padding:"8px"}}>{email} .2subscribers . 1video</p>
                    <p style={{ color: "grey",padding:"8px" }}>More about this channel</p>
                    <p style={{ marginTop: "25px" }}>
                        <span
                            style=
                            {{
                                backgroundColor: "rgb(232,232,232)", color: "black", padding: "13px", marginTop: "25px",
                                borderRadius: "30px", fontWeight: "600"
                            }}>
                            Customise Channel
                        </span>

                        <span style={{
                            backgroundColor: "rgb(232,232,232)", color: "black", padding: "13px",
                            marginLeft: "25px", borderRadius: "30px", fontWeight: "600"
                        }}>
                            Manage videos</span>
                    </p>
                </div>
            </div>

            <div style={{ marginTop: "30px" }}>
                <div style={{ display: "flex", justifyContent: "flex-start",padding:"12px",
                 gap: "2rem", marginTop: "2rem",fontSize:"18px",color:"gray",fontWeight:"700" }}>
                    <span>Home</span>
                    <span>Videos</span>
                    <span>Playlist</span>
                    <span>Community</span>
                </div>
                <hr />
                <div>
                   
                </div>
            </div>
        </div>
    );
}

export default MyChannel;