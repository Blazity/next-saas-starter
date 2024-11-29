using Quartz;

namespace TertuliatalkAPI.Infrastructure;

public static class DependencyInjection
{
    public static void AddInfrastructure(this IServiceCollection services)
    {
        services.AddQuartz(options =>
        {
            var courseStatusUpdatederJobKey = JobKey.Create(nameof(CourseStatusUpdaterService));

            options.UseMicrosoftDependencyInjectionJobFactory();

            options
                .AddJob<CourseStatusUpdaterService>(courseStatusUpdatederJobKey)
                .AddTrigger(trigger =>
                    trigger
                        .ForJob(courseStatusUpdatederJobKey)
                        .WithSimpleSchedule(schedule =>
                            schedule.WithIntervalInSeconds(60).RepeatForever()));

            var courseReminderJobKey = JobKey.Create(nameof(CourseReminderService));

            options.UseMicrosoftDependencyInjectionJobFactory();

            options
                .AddJob<CourseReminderService>(courseReminderJobKey)
                .AddTrigger(trigger =>
                    trigger
                        .ForJob(courseReminderJobKey)
                        .WithSimpleSchedule(schedule =>
                            schedule.WithIntervalInSeconds(60).RepeatForever()));
        });

        services.AddQuartzHostedService();
    }
}