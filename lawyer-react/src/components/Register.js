import React from 'react';



const Register = () => {


        
    return (
        <div className="App">
<h1> Register File</h1>
<hr />
<h3> Choose file to send </h3>
<form >
<input type="file" />
<button type="submit"> Generate Hash </button>
</form>
<hr/>
<table >
<thead>
<tr>
<th>Input</th>
<th>Values</th>
</tr>
</thead>
<tbody>
<tr>
<td>Generated Hash</td>
<td></td>
</tr>

</tbody>
</table>
</div>
    )
}

export default Register;