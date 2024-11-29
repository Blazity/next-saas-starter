import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Page from 'components/Page';
import Button from 'components/Button';
import RichText from 'components/RichText';
//burada kullanıcıdan data gelecek
interface User {
  name: string;
  email: string;
  age: number;
  profilePhotoUrl: string;
  isActive: boolean;
  hobbies: string;
  languageLevel: string; // veya uygun bir tip
  userCourses: UserCourse[];
}
interface ApiResponse<T> {
  data: T;
  error: string;
  isSuccess: boolean;
}
interface UserCourse {
  courseId: string; 
  createdDate: string; 
  updateDate: string; 
}
export default function FeaturesPage() {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [role, setRole] = useState<string | null>(null);
  useEffect(() => {
    const userRole = localStorage.getItem('userRole');
     if (userRole) {
      setRole(userRole);
    }
    const fetchUserData = async () => {
      const token = Cookies.get('token');
      if (!token) {
        setError('Token bulunamadı');
        return;
      }
      try {
        const response = await fetch('http://localhost:5199/api/Auth/get-logged-user', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const result: ApiResponse<User> = await response.json();
        if (result.isSuccess) {
          setUser(result.data);
        } else {
          setError(result.error);
        }
      } catch (error) {
        setError('Bir hata oluştu');
        console.error('API çağrısında bir hata oluştu:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <Page title="Profil ekranı">
      <WholeFrame>
        {role === null ? (
            <>
            <ProfileWrapper>
              <LeftColumn>
                <ProfilePicture
                  src={
                    user?.profilePhotoUrl && user.profilePhotoUrl !== "null"
                    ? user.profilePhotoUrl
                      : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                    }
                      alt="Profil Fotoğrafı"
                      />
                <Button>Düzenle</Button>
                {user && <Name>{user.name}</Name>}
                <Description>Buraya string bir ifade gelecek.</Description>
              </LeftColumn>
              <RightColumn>
                <InfoBox>
                  <h2>Kişisel Bilgiler</h2>
                  <ul>
                    {user && (
                      <>
                        <li>Yaş: {user.age !=0 ? user.age :""}</li>
                        <li>Hobiler: {user.hobbies}</li>
                        <li>Dil yeterlilik seviyesi: {user.languageLevel}</li>
                      </>
                    )}
                  </ul>
                  <ButtonInfo>4 hakkınız kaldı</ButtonInfo>
                  <ButtonInfo>Aboneliğimi Duraklat</ButtonInfo>
                </InfoBox>
              </RightColumn>
            </ProfileWrapper>
            <BottomSection>
                <Table>
                  <thead>
                    <tr>
                      <th>Katıldığım Oturumlar</th>
                        <th>Tarih</th>
                        <th>Açıklama</th>
                    </tr>
                  </thead>
                  <tbody>
                    {user && user.userCourses && user.userCourses.length > 0 ? (
                      user.userCourses.map((userCourse, index) => (
                        <tr key={index}>
                          <td>{userCourse.courseId}</td>
                          <td>{userCourse.createdDate}</td>
                          <td>{userCourse.courseId}</td>
                          </tr>
                    ))
                    ) : (
                    <tr>
                      <td colSpan={3}>Katıldığınız Oturum Bulunamadı.</td>
                    </tr>
                    )}
                  </tbody>
                </Table>
                <ButtonWrapper><ButtonBottom>Tümünü Göster</ButtonBottom></ButtonWrapper>
            </BottomSection>
            </>) : (
          <>
            {role === "Instructor" && (
              <RichText>Instructor</RichText>
            )}
            {role === "User" && (
              <>
                <ProfileWrapper>
                  <LeftColumn>
                   <ProfilePicture
                      src={
                        user?.profilePhotoUrl && user.profilePhotoUrl !== "null"
                        ? user.profilePhotoUrl
                          : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                        }
                          alt="Profil Fotoğrafı"
                          />
                    <Button>Düzenle</Button>
                    {user && <Name>{user.name}</Name>}
                    <Description>Buraya string bir ifade gelecek.</Description>
                  </LeftColumn>
                  <RightColumn>
                    <InfoBox>
                      <h2>Kişisel Bilgiler</h2>
                      <ul>
                        {user && (
                          <>
                            <li>Yaş: {user.age !=0 ? user.age :""}</li>
                            <li>Hobiler: {user.hobbies}</li>
                            <li>Dil yeterlilik seviyesi: {user.languageLevel}</li>
                          </>
                        )}
                      </ul>
                      <ButtonInfo>4 hakkınız kaldı</ButtonInfo>
                      <ButtonInfo>Aboneliğimi Duraklat</ButtonInfo>
                    </InfoBox>
                  </RightColumn>
                </ProfileWrapper>
                <BottomSection>
                   <Table>
                      <thead>
                        <tr>
                          <th>Katıldığım Oturumlar</th>
                            <th>Tarih</th>
                            <th>Açıklama</th>
                        </tr>
                      </thead>
                      <tbody>
                        {user && user.userCourses && user.userCourses.length > 0 ? (
                          user.userCourses.map((userCourse, index) => (
                            <tr key={index}>
                              <td>{userCourse.courseId}</td>
                              <td>{userCourse.createdDate}</td>
                              <td>{userCourse.courseId}</td>
                              </tr>
                        ))
                        ) : (
                        <tr>
                          <td colSpan={3}>Katıldığınız Oturum Bulunamadı.</td>
                        </tr>
                        )}
                      </tbody>
                    </Table>
                    <ButtonWrapper><ButtonBottom>Tümünü Göster</ButtonBottom></ButtonWrapper>
                </BottomSection>
              </>
            )}
            {role === "User" && (
              <>
              <ProfileWrapper>
                <LeftColumn>
                 <ProfilePicture
                    src={
                      user?.profilePhotoUrl && user.profilePhotoUrl !== "null"
                      ? user.profilePhotoUrl
                        : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                      }
                        alt="Profil Fotoğrafı"
                        />
                  <Button>Düzenle</Button>
                  {user && <Name>{user.name}</Name>}
                  <Description>Buraya string bir ifade gelecek.</Description>
                </LeftColumn>
                <RightColumn>
                  <InfoBox>
                    <h2>Kişisel Bilgiler</h2>
                    <ul>
                      {user && (
                        <>
                          <li>Yaş: {user.age !=0 ? user.age :""}</li>
                          <li>Hobiler: {user.hobbies}</li>
                          <li>Dil yeterlilik seviyesi: {user.languageLevel}</li>
                        </>
                      )}
                    </ul>
                    <ButtonInfo>4 hakkınız kaldı</ButtonInfo>
                    <ButtonInfo>Aboneliğimi Duraklat</ButtonInfo>
                  </InfoBox>
                </RightColumn>
              </ProfileWrapper>

              <BottomSection>
                 <Table>
                    <thead>
                      <tr>
                        <th>Katıldığım Oturumlar</th>
                          <th>Tarih</th>
                          <th>Açıklama</th>
                      </tr>
                    </thead>
                    <tbody>
                      {user && user.userCourses && user.userCourses.length > 0 ? (
                        user.userCourses.map((userCourse, index) => (
                          <tr key={index}>
                            <td>{userCourse.courseId}</td>
                            <td>{userCourse.createdDate}</td>
                            <td>{userCourse.courseId}</td>
                            </tr>
                      ))
                      ) : (
                      <tr>
                        <td colSpan={3}>Katıldığınız Oturum Bulunamadı.</td>
                      </tr>
                      )}
                    </tbody>
                  </Table>
                  <ButtonWrapper><ButtonBottom>Tümünü Göster</ButtonBottom></ButtonWrapper>
              </BottomSection>
            </>            )}
            {role === "SuperAdmin" && (
              <RichText>SuperAdmin</RichText>
            )}
          </>
        )}
      </WholeFrame>
    </Page>
  );
}


const WholeFrame = styled.div`
  border-radius: 1rem;
  width: 100%;
  height: 100%;
`;

//**top profile
const ProfileWrapper = styled.div`
  display: flex;
  gap: 2rem;
  padding: 2rem;
  background-color: #f2f2f2;
  border-radius: 3rem;
  border: 0.1rem solid;
`;

//top profile-left column
const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
`;

//top profile-right column
const RightColumn = styled.div`
  width: 70%;
  padding: 1rem;
  border-radius: 2rem;
  @media (max-width: 600px) {
      padding: 0;
    }
`;

//top profile-Profile picture
const ProfilePicture = styled.img`
  border-radius: 50%;
  width: 18rem;
  height: 18rem;
  margin: 1rem 0rem 1rem 0rem;
  object-fit: cover;
  transition: 1s ease; 
  overflow: hidden; 
  border:0.4rem,solid;
  &:hover {
    transform: scale(1.1); 
   
  }
   @media (max-width: 600px) {
      width: 10rem;
      height: 10rem;
      margin: 0;
    }
  }
`;

//top profile- name
const Name = styled.h1`
  margin: 0.5rem;
  text-align: center;
  font-size: 2.5rem;
`;

//top profile- description
const Description = styled.p`
  margin: 0.5rem;
  text-align: center;
  
`;

//top profile- infobox
const InfoBox = styled.div`
  padding: 2rem;
  border-radius: 3rem;
  height:100%;
  margin:0rem;
  border: 0.2rem solid;
  overflow: hidden;
  h2 {
    margin-bottom: 1rem; /* Başlık ile liste arasındaki boşluk */
    font-size:2.5rem;
  }
  ul{
    list-style-type: none;
    padding: 0;
    margin: 0;

  li{
      margin: 0.5rem 0;
      font-size:1.2rem;
    }
   }
   @media (max-width: 600px) {
      margin: 0 0 0.5rem 0;
      li{
        font-size:1rem;
      }
      h2{
        font-size:2rem;
      }
    }
`;


const ButtonInfo = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: bold;
  margin:1rem 1rem 0 0;
  background-color: #999999;

  
  @media (max-width: 600px) {
    margin-bottom: 0.5rem; 
    font-size: 1rem;
    width: 10rem;
  }
`;
//**bottom profile
const BottomSection = styled.div`
  margin-top: 1rem;
  background-color: #f2f2f2;
  border-radius:3rem;
  border: 0.1rem solid;
  @media (max-width: 600px) {
    margin-top:0.5rem ;
  }
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center; 
  align-items: center; 
  height: 100%; 
`;
const ButtonBottom = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: bold;
  color: #f8efcc;
  margin:1rem 0rem 2rem 0rem;
  &:hover {
    background-color: #2e2d28; 
  }
  
  @media (max-width: 600px) {
    margin-bottom: 0.5rem; 
  }
`;
//bottom profile table
const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 1rem;
  th,
  td {
    padding: 1rem;
    border: none;
    border-radius:2rem;
    font-size: 1.3rem;
  }

  th {
    border-radius:2rem;
    border: 0.2rem solid;
    font-size:1.3rem;
  }
   @media (max-width: 600px) {
    th,
    td {
    font-size: 1rem;
    }

    th {
      border-radius:2rem;
      border: 0.2rem solid;
      font-size:1rem;
    }
  }
`;

