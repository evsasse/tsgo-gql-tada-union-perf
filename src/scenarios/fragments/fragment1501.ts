import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1499 } from "./fragment1499";
import type { FragmentToken1500 } from "./fragment1500";

export const FRAGMENT_1501 = gql(`
  fragment Fragment1501 on Member100 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_100
    memberCount_100
    memberMetric_100
  }
`);

type FragmentResult1501 = ResultOf<typeof FRAGMENT_1501>;
type FragmentSelf1501 = NonNullable<FragmentResult1501>;

export type FragmentToken1501 =
  | FragmentSelf1501["__typename"]
  | FragmentSelf1501["typenameHint"] | FragmentToken1499 | FragmentToken1500;
