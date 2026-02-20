import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken038 } from "./fragment038";
import type { FragmentToken039 } from "./fragment039";

export const FRAGMENT_040 = gql(`
  fragment Fragment040 on Member39 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_39
    memberCount_39
    memberMetric_39
  }
`);

type FragmentResult040 = ResultOf<typeof FRAGMENT_040>;
type FragmentSelf040 = NonNullable<FragmentResult040>;

export type FragmentToken040 =
  | FragmentSelf040["__typename"]
  | FragmentSelf040["typenameHint"] | FragmentToken038 | FragmentToken039;
