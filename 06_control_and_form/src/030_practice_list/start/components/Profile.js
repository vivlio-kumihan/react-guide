// 2. 
// コンポーネント側では、分割代入の書式で入ってきたら
// キーで受けて値をもらって展開する。
// 呼んだ回数だけハッシュが返る。
// あとは、一回ずつフォーマットとなるJSXに合わせて適宜インスタンスを配置すれば良い。

const Profile = ({name, age, hobby}) => {
  return (
    <>
      <hr />
      <div>Name: {name}</div>
      <div>Age: {age}</div>
      <div>Hobby: 
        <ul>
          {hobby.map(item => <li>{item}</li>)}
        </ul>
      </div>
    </>
  )
};

export default Profile;