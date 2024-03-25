export function Todo() {
    return (
        <div style= {{display: 'flex'}}>
            <input class="form-check-input" type ="checkbox" value=""/>
            <p> Create</p>
              <button type="button" class="btn btn-secondary">Edit</button>
              <button type="button" class="btn btn-danger">Delete</button>
        </div>
    )
}
          