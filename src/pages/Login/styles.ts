import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: stretch;
    height: 100vh;

    aside {
        flex: 7;
        background: var(--green);
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 120px 80px;
    }

    main{
        flex: 8;
        padding: 0 2rem;

        display: flex;
        align-items: center;
        justify-content: center;

        
    }

    .main-content{
         display: flex;
         flex-direction: column;
         width: 100%;
         max-width:320px;
         align-items: stretch;
         text-align: center;

         > img{
             align-self: center;
         }
         input{
             height: 50px;
             border-radius: 0.5rem;
             padding: 0 2rem;
             background: var(--background);
             border: 1px solid #a8a8b3;
         }

         .google-button{
             margin-top: 4rem;
             height: 50px;
             border-radius: 0.5rem;
             font-weight: 500;
             background: #ea4335;
             color: #fff;

             display: flex;
             justify-content: center;
             align-items: center;

             cursor: pointer;
             border: 0;
             transition: filter 0.2s;

             img {
                 margin-right: 8px;
             }

             &:hover {
                 filter: brightness(0.9)
             }

         }
        
        }

`