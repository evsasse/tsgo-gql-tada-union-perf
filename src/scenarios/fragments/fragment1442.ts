import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1440 } from "./fragment1440";
import type { FragmentToken1441 } from "./fragment1441";

export const FRAGMENT_1442 = gql(`
  fragment Fragment1442 on Member41 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_41
    memberCount_41
    memberMetric_41
  }
`);

type FragmentResult1442 = ResultOf<typeof FRAGMENT_1442>;
type FragmentSelf1442 = NonNullable<FragmentResult1442>;

export type FragmentToken1442 =
  | FragmentSelf1442["__typename"]
  | FragmentSelf1442["typenameHint"] | FragmentToken1440 | FragmentToken1441;
