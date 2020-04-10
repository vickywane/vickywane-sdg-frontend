<template>
  <div class="body">
    <BCard class="card">
      <div>
        <br />
        <label>Current Population</label>
        <input placeholder="Current Population" type="number" />
        <br />
        <br />
        <label>Expected Time to Elapse</label>
        <input placeholder="Time to Elapse" type="number" />
        <br />
        <br />
        <label>Total Reported Cases</label>
        <input placeholder="Reported Cases " type="number" />
        <br />
        <br />
        <label>Total Reported Cases</label>
        <input placeholder="Total Hosiptal Beds" type="number" />
      </div>
      <br />
      <label for="period">Period Type :</label>
      <select id="period">
        <option value="days">Days</option>
        <option value="weeks">Weeks</option>
        <option value="months">Months</option>
      </select>
      <br />
      <br />
      <button>Estimate Data</button>
    </BCard>
  </div>
</template>

<script>
import { BCard } from "bootstrap-vue";

export default {
  name: "Home"
};
</script>

<style scoped lang="postcss" >
.body {
  padding: 1rem;
  justify-content: center;
  display: flex;
  place-items: center;
}

.card {
  box-shadow: 0px 3px 5px grey;
  width: 40rem;

  & div {
    text-align: center;
    & label {
      text-align: left;
      font-size: 1.1rem;
    }
    & input {
      width: 32rem;
      border: 1px solid #000;
      height: 5.5vh;
      border-radius: 4px;
      padding: 0.7rem 1.5rem;
    }
  }
  & button {
    background: transparent;
    color: #000;
    padding: 0.7rem 5rem;
    border: 1px solid #000;
    border-radius: 5px;
  }
}
</style>