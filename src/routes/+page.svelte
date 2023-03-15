<script lang="ts">
    import type { PageData } from './$types';
    let amount: number;
    let result = null;
    
    // export let data: PageData;
    let weights: any[] = [];

    // if (data.status == "SUCCESS") {
    //     weights = data.data
    // }

    async function handleSubmit(): Promise<number> {
        const response = await fetch('http://127.0.0.1:3000/api/v1/weights', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({'weight': {amount}})
        })
        
        const json = await response.json();
        result = JSON.stringify(json);
        return amount
    }
</script>

<main class="container is-desktop">
    <h1 class="title is-5 mt-4">Welcome to MikeyLosesBuddha</h1>
    <div class="box">
        <div class="field">
            <label class="label" for="weight">Weight</label>
            <div class="control">
                <input bind:value={amount} id="weight" class="input" type="number" placeholder="Enter weight">
            </div>
        </div>

        <div class="field">
            <div class="control">
                <button on:click={handleSubmit} class="button is-rounded is-small">Submit</button>
            </div>
        </div>
    </div>
    <table class="table">
        <thead>
            <tr>
                <th>Date</th>
                <th>Weight</th>
            </tr>
        </thead>
        <tbody>
            {#each weights as weight}
                <tr>
                    <td>{weight.created_at.split('T')[0]}</td>
                    <td>{weight.amount}</td>
                </tr>
            {/each}
        </tbody>
    </table>
    <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
</main>


<style>
    .box {
        max-width: 400px;
    }
</style>