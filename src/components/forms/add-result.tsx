import * as React from "react";

export const AddResultForm = () => {
    return <form>
        <div>
            <label htmlFor="homeTeam">Awesome</label>
            <span> VS </span>
            <label htmlFor="guestTeam">Cruel</label>
        </div>
        <div>
            <input type="number" name="homeTeam" min="1" max="10" step="1" defaultValue="0" />
            <span>:</span>
            <input type="number" name="guestTeam" min="1" max="10" step="1" defaultValue="0" />
        </div>
        <button type="submit">Pridaj Výsledok</button>
    </form>;
}