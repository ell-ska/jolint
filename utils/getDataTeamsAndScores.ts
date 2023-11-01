interface ComboDataEntry {
  month: string;
  team: string;
  inclusion_score: number;
  [key: string]: number | string;
}

interface AggregatedDataEntry {
  month: string;
  [team: string]: number | string | null;
  benchmark: number;
}

export function getDataTeamsAndScores(data: ComboDataEntry[], teams: string[], key: string): AggregatedDataEntry[] {
  const aggregatedData: Record<string, AggregatedDataEntry> = {};

  data.forEach((entry) => {
    const { month, team: entryTeam, [key]: value } = entry;

    if (!aggregatedData[month]) {
      aggregatedData[month] = { month, benchmark: 50 };
    }

    teams.forEach((team) => {
      aggregatedData[month][team] = entryTeam === team ? value : aggregatedData[month][team] ?? null;
    });
  });

  return Object.values(aggregatedData);
}
