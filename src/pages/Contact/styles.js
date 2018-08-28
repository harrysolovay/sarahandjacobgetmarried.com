import styled from 'styled-components'

export default styled.div`

  padding-top: 30px;

  .contact-group {
    margin-top: 20px;
    padding: 0px 20px;
  }

  textarea {
    min-height: 200px;
  }

  input, textarea, button {
    background-color: rgba(255, 255, 255, .5);
  }

  input, textarea {
    padding: 10px 12px 11px 12px;
    width: 100%;
    max-width: 100%;
    min-width: 100%;
    border: 1px solid rgba(0, 0, 0, .5);
    border-radius: 3px;
    &:focus {
      outline: none;
      border: 1px solid #000;
    }
  }

  button {
    margin-top: 10px;
    padding: 10px 12px 11px 12px;
    border: 1px solid #3498db;
    color: #3498db;
    border-radius: 3px;
  }

  h3 {
    margin-top: -25px;
  }

`