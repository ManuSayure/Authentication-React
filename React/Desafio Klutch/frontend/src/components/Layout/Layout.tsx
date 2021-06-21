import Footer from "../Footer/Footer";
import HeaderNav from "../HeaderNav/HeaderNav";
import * as S from "./styles";

const Layout: React.FC = ({ children }) => {
  return (
    <S.Layout>
      <HeaderNav />
      <S.FlexLayout>
      <S.StyledContent>
         {children}
      </S.StyledContent>
      <Footer />
      </S.FlexLayout>
    </S.Layout>
  );
};

export default Layout;
