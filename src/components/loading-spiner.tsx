function LoadingSpiner (): JSX.Element {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
      className="spinner spinner-bg spinner-alert"
    >
    </div>
  );
}

export {LoadingSpiner};
