import { Card, CardContent, CardTitle } from "@/components/ui/card";

function TripInfo() {
  return (
    <div className="p-1">
      <Card>
        <CardTitle className="text-center">
          Explore Your Next Adventure
        </CardTitle>
        <CardContent>
          <b>Price :</b> ₹25,999 / Person <br />
          <b>All-inclusive Highlights :</b> Guided tour of local attractions
          Sunset sightseeing & cultural experiences Beach hopping & water
          activities Traditional cuisine & local experiences <br />
          <b>Duration :</b> 5 Nights / 6 Days <br />
          <b> Accommodation :</b> 5-star hotel with breakfast included <br />
          <b>CTA :</b> Enquire Now
        </CardContent>
      </Card>
    </div>
  );
}

export default TripInfo;
