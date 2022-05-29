import Wrapper from "./Wrapper";

export default function toVideoPretty(Component, views) {
  if (views > 1000) {
    return (props) => {
      return (
        <Wrapper status={'popular'} label={'Popular!'}>
          <Component {...props}/>
        </Wrapper>
      )
    }
  }
  if (views < 100) {
    return (props) => {
      return (
        <Wrapper status={'new'} label={'New!'}>
          <Component {...props}/>
        </Wrapper>
      )
    }
  }
  return (props) => <Component {...props}/>
}