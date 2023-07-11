import ConfirmBtn from "../ConfirmBtn/ConfirmBtn";
import TurnDownBtn from "../TurnDownBtn/TurnDownBtn";

export default function InvitedTranslators({ translatorData }) {
    const {
        id,
        status_id,
        translator: {
            user: { first_name, last_name },
        },
        status: { status_name },
    } = translatorData;

    return (
        <div className="potential-translators">
            <div className="translators-name">
                {first_name} {last_name}
            </div>
            <div className="translators-status">{status_name}</div>

            {status_id === 3 ? (
                <>
                    <ConfirmBtn requestStatus_id={id} />
                    <TurnDownBtn requestStatus_id={id} />
                </>
            ) : (
                ""
            )}
        </div>
    );
}
