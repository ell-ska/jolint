// I created comments due to so many questions from the team members about the process, my name choices and what and how it works.
type ComboDataEntry = {
  month: string;
  team: string;
  inclusion_score: number;
  [key: string]: any | any;
}

// Aggregated, here means combining multiple key values into a single entry
type AggregatedDataEntry = {
  month: string;
    // The team inside [] prevents duplicates when combining multiple key values for the month.
  [team: string]: number | string | null;
  benchmark: number;
}

export function getDataTeamsAndScores(data: ComboDataEntry[], teams: string[], key: string): AggregatedDataEntry[] {
  const aggregatedData: Record<string, AggregatedDataEntry> = {};

  data.forEach((entry) => {
    const { month, team: entryTeam, [key]: value } = entry;

    if (!aggregatedData[month]) {
       // Initialize the aggregatedData entry for the month with a default benchmark value of 50
      aggregatedData[month] = { month, benchmark: 50 };
    }

    teams.forEach((team) => {
       // Update the aggregatedData (combined data) entry with the value for the corresponding team
      aggregatedData[month][team] = entryTeam === team ? value : aggregatedData[month][team] ?? null;
    });
  });
  // Here we return the aggregatedData entries as an new data array
  return Object.values(aggregatedData);
}
