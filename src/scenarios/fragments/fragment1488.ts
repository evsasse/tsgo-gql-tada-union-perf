import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1486 } from "./fragment1486";
import type { FragmentToken1487 } from "./fragment1487";

export const FRAGMENT_1488 = gql(`
  fragment Fragment1488 on Member87 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_87
    memberCount_87
    memberMetric_87
  }
`);

type FragmentResult1488 = ResultOf<typeof FRAGMENT_1488>;
type FragmentSelf1488 = NonNullable<FragmentResult1488>;

export type FragmentToken1488 =
  | FragmentSelf1488["__typename"]
  | FragmentSelf1488["typenameHint"] | FragmentToken1486 | FragmentToken1487;
