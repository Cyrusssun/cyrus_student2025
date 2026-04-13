---
layout: base
title: Risk assessment simple
permalink: /risk_assessment_simple
---
<style>
  .box {
    font-family: Arial, sans-serif;
    background: white;
    border-radius: 10px;
    padding: 30px;
    max-width: 520px;
    margin: 40px auto;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  
  input[type="text"] {
    width: 100%;
    padding: 10px;
    margin-bottom: 14px;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: 14px;
  }
  .question { margin-bottom: 16px; }
  .question b { display: block; margin-bottom: 6px; }
  button {
    background: #3b82f6;
    color: white;
    border: none;
    padding: 11px 24px;
    border-radius: 6px;
    font-size: 14px;
    cursor: pointer;
    margin-top: 10px;
  }
  #result {
    display: none;
    margin-top: 24px;
    padding: 20px;
    border-radius: 10px;
    background: #f0f4ff;
    border: 1px solid #ccc;
    color: black !important;
  }
  #result p, #result h3, #result span {
    color: black !important;
  }
  .box p, .box h2, .box b, .box label {
    color: black !important;
  }
  .badge {
    display: inline-block;
    padding: 8px 24px;
    border-radius: 20px;
    font-size: 20px;
    font-weight: bold;
    color: white;
    margin: 8px 0;
  }
</style>

<div class="box">
  <h2>Investment Risk Assessment</h2>
  <p>Answer 5 questions to find your investor type.</p>

  <b>Your Name:</b>
  <input type="text" id="inputName" placeholder="e.g. Alex" />

  <b>Investment Goal:</b>
  <input type="text" id="inputGoal" placeholder="e.g. Save for retirement" />

  <div class="question">
    <b>1. What is your age range?</b>
    <input type="radio" name="q1" id="q1a" value="80"> <label for="q1a">18-25</label>
    <input type="radio" name="q1" id="q1b" value="60"> <label for="q1b">26-35</label>
    <input type="radio" name="q1" id="q1c" value="40"> <label for="q1c">36-50</label>
    <input type="radio" name="q1" id="q1d" value="20"> <label for="q1d">51+</label>
  </div>

  <div class="question">
    <b>2. What is your household annual income?</b>
    <input type="radio" name="q2" id="q2a" value="20"> <label for="q2a">Under $50k</label>
    <input type="radio" name="q2" id="q2b" value="40"> <label for="q2b">$50k-$100k</label>
    <input type="radio" name="q2" id="q2c" value="70"> <label for="q2c">$100k-$200k</label>
    <input type="radio" name="q2" id="q2d" value="90"> <label for="q2d">Above $200k</label>
  </div>

  <div class="question">
    <b>3. Maximum loss you could accept?</b>
    <input type="radio" name="q3" id="q3a" value="10"> <label for="q3a">Under 5%</label>
    <input type="radio" name="q3" id="q3b" value="30"> <label for="q3b">5-15%</label>
    <input type="radio" name="q3" id="q3c" value="60"> <label for="q3c">15-25%</label>
    <input type="radio" name="q3" id="q3d" value="90"> <label for="q3d">Over 25%</label>
  </div>

  <div class="question">
    <b>4. What is your main investment goal?</b>
    <input type="radio" name="q4" id="q4a" value="10"> <label for="q4a">Preserve money</label>
    <input type="radio" name="q4" id="q4b" value="40"> <label for="q4b">Steady growth</label>
    <input type="radio" name="q4" id="q4c" value="70"> <label for="q4c">Faster growth</label>
    <input type="radio" name="q4" id="q4d" value="90"> <label for="q4d">Maximum returns</label>
  </div>

  <div class="question">
    <b>5. Do you have an emergency fund (3+ months of expenses)?</b>
    <input type="radio" name="q5" id="q5a" value="80"> <label for="q5a">Yes, fully covered</label>
    <input type="radio" name="q5" id="q5b" value="40"> <label for="q5b">Partially</label>
    <input type="radio" name="q5" id="q5c" value="10"> <label for="q5c">No</label>
  </div>

  <button onclick="showResult()">See My Result</button>

  <div id="result">
    <h3 id="resTitle"></h3>
    <div class="badge" id="resBadge"></div>
    <p id="resType"></p>
    <p><b>Expected Return:</b> <span id="resReturn"></span></p>
    <p><b>Annual Fluctuation:</b> <span id="resFluc"></span></p>
    <p><b>Suggestion:</b> <span id="resAdvice"></span></p>
    <p><b>Your Goal:</b> <span id="resGoal"></span></p>
  </div>
</div>

<script>
  const weights = [0.15, 0.10, 0.35, 0.30, 0.10];
    function assessInvestmentRisk(answers,weights){

      let score = 0;
      for (let i = 0; i < answers.length; i++) {
        score = score + answers[i] * weights[i];
      }
      score = Math.round(score);

      let level  = "";
      let type   = "";
      let ret    = "";
      let fluc   = "";
      let advice = "";
      let color  = "";

      if (score < 20) {
        level = "Low Risk";         type = "Conservative Investor";
        ret   = "2% - 4% per year"; fluc = "+/- 3%";
        advice = "80%+ bonds or savings."; color = "#16a34a";
      } else if (score < 40) {
        level = "Low-Medium Risk";  type = "Cautious Investor";
        ret   = "4% - 6% per year"; fluc = "+/- 5%";
        advice = "60% bonds, 30% blue-chip stocks, 10% cash."; color = "#65a30d";
      } else if (score < 60) {
        level = "Medium Risk";      type = "Balanced Investor";
        ret   = "6% - 9% per year"; fluc = "+/- 8%";
        advice = "40% bonds, 50% stocks, 10% other."; color = "#d97706";
      } else if (score < 78) {
        level = "Medium-High Risk"; type = "Growth Investor";
        ret   = "9% - 12% per year"; fluc = "+/- 12%";
        advice = "20% bonds, 70% growth stocks, 10% ETFs."; color = "#ea580c";
      } else {
        level = "High Risk";        type = "Aggressive Investor";
        ret   = "12%+ per year";    fluc = "+/- 15% - 20%";
        advice = "10% bonds, 80% growth stocks, 10% high-risk."; color = "#dc2626";
      }
      return{
        score:score,
        level:level,
        type:type,
        ret:ret,
        fluc:fluc,
        advice:advice,
        color:color,
      };
    }
  let testConservative = assessInvestmentRisk([20,20,10,10,10],weights);
  let testAggresive = assessInvestmentRisk([80,90,90,90,80],weights);
   function showResult() {
    let name = inputName.value;
    let goal = inputGoal.value;

    let a1 = 0;
    if (q1a.checked) { a1 = 80; }
    else if (q1b.checked) { a1 = 60; }
    else if (q1c.checked) { a1 = 40; }
    else if (q1d.checked) { a1 = 20; }

    let a2 = 0;
    if (q2a.checked) { a2 = 20; }
    else if (q2b.checked) { a2 = 40; }
    else if (q2c.checked) { a2 = 70; }
    else if (q2d.checked) { a2 = 90; }

    let a3 = 0;
    if (q3a.checked) { a3 = 10; }
    else if (q3b.checked) { a3 = 30; }
    else if (q3c.checked) { a3 = 60; }
    else if (q3d.checked) { a3 = 90; }

    let a4 = 0;
    if (q4a.checked) { a4 = 10; }
    else if (q4b.checked) { a4 = 40; }
    else if (q4c.checked) { a4 = 70; }
    else if (q4d.checked) { a4 = 90; }

    let a5 = 0;
    if (q5a.checked) { a5 = 80; }
    else if (q5b.checked) { a5 = 40; }
    else if (q5c.checked) { a5 = 10; }

    if (name == "" || goal == "" || a1 == 0 || a2 == 0 || a3 == 0 || a4 == 0 || a5 == 0) {
      alert("Please fill in all fields and answer all questions.");
      return;
    }

    let answers = [a1, a2, a3, a4, a5];
    let profile = assessInvestmentRisk(answers,weights);
    resTitle.innerHTML  = name + "'s Result";
    resBadge.innerHTML  = profile.level;
    resBadge.style.backgroundColor = profile.color;
    resType.innerHTML   = profile.type;
    resReturn.innerHTML = profile.ret;
    resFluc.innerHTML   = profile.fluc;
    resAdvice.innerHTML = profile.advice;
    resGoal.innerHTML   = goal;
    result.style.display = "block";
   }
</script>