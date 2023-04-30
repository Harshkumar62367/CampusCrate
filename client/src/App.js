import "./styles/Home.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard, HomePage, NewProposal, Proposal, Vote, Projects } from "./pages";
import { Layout, VerticalNav } from "./components";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import Blogs from "./pages/Blogs/Blogs";
import Blog from "./pages/Blogs/Blog";

export default function Home() {


  return (
    <div className="w-full relative">
      <BrowserRouter>
        <ThirdwebProvider activeChain={"mumbai"}>

          <Routes>
            <Route path="/" element={
              <Layout>
                <HomePage />
              </Layout>
            } />

            <Route path="/dashboard" element={
              <>
                <VerticalNav name={'Dashboard'}>
                  <Dashboard />
                </VerticalNav>
              </>
            } />

            <Route path="/proposals" element={
              <>
                <VerticalNav name={'Proposals'}>
                  <Proposal />
                </VerticalNav>
              </>
            } />

            <Route path="/new-proposal" element={
              <>
                <VerticalNav name={'New Proposal'}>
                  <NewProposal />
                </VerticalNav>
              </>
            } />

            <Route path="/vote" element={
              <>
                <VerticalNav name={'Vote'}>
                  <Vote />
                </VerticalNav>
              </>
            } />

            <Route path="/projects" element={
              <>
                <VerticalNav name={'Projects'}>
                  <Projects />
                </VerticalNav>
              </>
            } />

            <Route path="/blogs" element={
              <>
                <VerticalNav name={'Blogs'}>
                  <Blogs />
                </VerticalNav>
              </>
            } />

             <Route path="/blog/:blogId" element={
              <>
                <VerticalNav name={'Blog'}>
                  <Blog/>
                </VerticalNav>
              </>
            } />

          </Routes>
        </ThirdwebProvider>
      </BrowserRouter>
    </div>
  );
}
