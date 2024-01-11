import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import { useCabins } from "./useCabins";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import { useSearchParams } from "react-router-dom";

function CabinTable() {
  const { isLoading, cabins } = useCabins();
  const [searchParams] = useSearchParams();

  if (isLoading) return <Spinner />;

  // filter
  const filter = searchParams.get("filter") || "all";
  console.log(filter);

  let filteredCabins = cabins;

  if (filter === "all") {
    filteredCabins = cabins;
  }
  if (filter === "with-discount") {
    filteredCabins = cabins.filter((cabin) => cabin.discount > 0);
  }
  if (filter === "no-discount") {
    filteredCabins = cabins.filter((cabin) => cabin.discount === 0);
  }

  // Sort

  const sortBy = searchParams.get("sortBy") || "startDate-asc";
  const [field, order] = sortBy.split("-");
  const modifier = order === "asc" ? 1 : -1;
  const sortedCabins = filteredCabins.sort(
    (a, b) => (a[field] > b[field] ? 1 : -1) * modifier
  );
  return (
    <Menus>
      <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
        <Table.Header>
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={sortedCabins}
          render={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />}
        />
      </Table>
    </Menus>
  );
}

export default CabinTable;
