<template>
  <div class="body">
    <div class="card">
      <div v-if="computed != true">
        <div>
          <br />
          <label>
            Current Population
            <input
              placeholder="Current Population"
              type="number"
              id="data-population"
            />
          </label>
          <br />
          <br />
          <label>
            Expected Time to Elapse
            <input
              placeholder="Time to Elapse"
              type="number"
              id="data-time-to-elapse"
            />
          </label>
          <br />
          <br />
          <label>
            Total Reported Cases
            <input
              placeholder="Reported Cases "
              type="number"
              id="data-reported-cases"
            />
          </label>
          <br />
          <br />
          <label>
            Total Reported Cases
            <input placeholder="Total Hosiptal Beds" type="number" />
          </label>
        </div>
        <br />
        <label for="period">
          Period Type :
          <select id="data-period-type a">
            <option value="days">Days</option>
            <option value="weeks">Weeks</option>
            <option value="months">Months</option>
          </select>
        </label>
        <br />
        <br />
        <button @click="computed = true">Estimate Data</button>
      </div>

      <div class="result" v-else>
        <h5>The result from your figures is ;</h5>

        <br />
        <button @click="computed = false" id="data-go-estimate">Make a new Estimate</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data: () => {
    return {
      computed: false
    };
  }
};
</script>

<style >
.result {
  padding: 3rem 1rem;
}

.body {
  padding: 5rem 1rem;
  justify-content: center;
  display: flex;
  place-items: center;
}

.card {
  box-shadow: 0px 3px 5px grey;
  width: 40rem;
} 
label {
    text-align: left;
    font-size: 1.1rem;
  } 
input {
    width: 32rem;
    border: 1px solid #000;
    height: 5.5vh;
    border-radius: 4px;
    padding: 0.7rem 1.5rem;
  }
 button {
    background: transparent;
    color: #000;
    padding: 0.7rem 5rem;
    border: 1px solid #000;
    border-radius: 5px;
  }
</style>