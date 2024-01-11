export function Account_img({ name_profil, access }) {
    return (
        <>
            <span className='pr-[2px] font-bold'>{name_profil}</span>
            {access === "ok" && <svg width="17" height="17" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.75 9.41667C17.75 8.1 17.0208 6.95833 15.96 6.41667C16.0883 6.05417 16.1583 5.6625 16.1583 5.25C16.1583 3.40833 14.7333 1.91833 12.9767 1.91833C12.585 1.91833 12.21 1.98833 11.8633 2.12667C11.3483 1.0125 10.2583 0.25 9 0.25C7.74166 0.25 6.65333 1.01417 6.13583 2.125C5.78999 1.9875 5.41416 1.91667 5.02249 1.91667C3.26416 1.91667 1.84083 3.40833 1.84083 5.25C1.84083 5.66167 1.90999 6.05333 2.03833 6.41667C0.978327 6.95833 0.249161 8.09833 0.249161 9.41667C0.249161 10.6625 0.900828 11.7483 1.86749 12.3217C1.85083 12.4633 1.84083 12.605 1.84083 12.75C1.84083 14.5917 3.26416 16.0833 5.02249 16.0833C5.41416 16.0833 5.78916 16.0117 6.13499 15.875C6.65166 16.9867 7.73999 17.75 8.99916 17.75C10.2592 17.75 11.3475 16.9867 11.8633 15.875C12.2092 16.0108 12.5842 16.0817 12.9767 16.0817C14.735 16.0817 16.1583 14.59 16.1583 12.7483C16.1583 12.6033 16.1483 12.4617 16.1308 12.3208C17.0958 11.7483 17.75 10.6625 17.75 9.4175V9.41667ZM12.2367 6.63833L8.625 12.055C8.50416 12.2358 8.30666 12.3333 8.10416 12.3333C7.98499 12.3333 7.86416 12.3 7.75749 12.2283L7.66166 12.15L5.64916 10.1375C5.40499 9.89333 5.40499 9.4975 5.64916 9.25417C5.89333 9.01083 6.28916 9.00917 6.53249 9.25417L8.00749 10.7267L11.195 5.94333C11.3867 5.65583 11.775 5.58 12.0617 5.77083C12.35 5.9625 12.4283 6.35083 12.2367 6.6375V6.63833Z" fill="#D9D9D9" />
            </svg>}
            {access !== "ok" && <svg width="20" height="20" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.75 6.31H15.87C15.68 3.23 13.124 0.784 10 0.784C6.876 0.784 4.32 3.232 4.13 6.31H2.25C1.01 6.31 0 7.317 0 8.56V18.79C0 20.03 1.01 21.04 2.25 21.04H17.75C18.99 21.04 20 20.03 20 18.79V8.56C20 7.318 18.99 6.31 17.75 6.31ZM10.75 14.687V16.083C10.75 16.497 10.414 16.833 10 16.833C9.586 16.833 9.25 16.497 9.25 16.083V14.687C8.486 14.387 7.943 13.647 7.943 12.777C7.943 11.64 8.863 10.719 10 10.719C11.136 10.719 12.057 11.639 12.057 12.775C12.057 13.645 11.514 14.385 10.75 14.685V14.687ZM5.648 6.31C5.838 4.06 7.705 2.284 10 2.284C12.295 2.284 14.163 4.061 14.352 6.307H5.648V6.31Z" fill="#D9D9D9" />
            </svg>}
        </>
    )
}

export function Account_src({ id_profil, classe }) {
    return (
        <>
            <div className="text-[#6E767D]">
                <a href="#" className={classe}>@{id_profil}</a>
                <span className='px-[4px]'>.</span>
                <a href="#">7m</a>
            </div>
        </>
    )
}