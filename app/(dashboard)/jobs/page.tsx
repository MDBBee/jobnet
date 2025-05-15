import JobsList from '@/components/JobsList';
import SearchForm from '@/components/SearchForm';
import { getAllJobsAction } from '@/utils/actions';
import {
  QueryClient,
  dehydrate,
  HydrationBoundary,
} from '@tanstack/react-query';

const AllJobsPage = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['jobs', '', 'all', 1],
    queryFn: () => getAllJobsAction({}),
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <SearchForm />
      <JobsList />
    </HydrationBoundary>
  );
};
export default AllJobsPage;
