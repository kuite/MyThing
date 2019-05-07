for (i = 0; i < 90; i++) {
	var gg = "var fund" + i + " = context.Funds.Add(new FundEntity \n {\n Id = Guid.NewGuid(),\n CreatedAt = DateTimeOffset.UtcNow,\n Title = \"Fund Title" + i + "\",\n Description = \"Sample Description" + i + "\"\n}).Entity;";
	console.log(gg);
}


