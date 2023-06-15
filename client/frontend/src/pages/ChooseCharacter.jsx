<div className='characterSelection'>
                <label for="chickenJoe">Chicken Joe</label>
                <input id="chickenJoe" name="character" value={characters[0]} type="radio" onChange={handleCharacterSelection} />
                <label for="jackSparrow">Jack Sparrow</label>
                <input id="jackSparrow" name="character" value={characters[1]} type="radio" onChange={handleCharacterSelection} />
</div>