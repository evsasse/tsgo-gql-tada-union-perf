import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1971 } from "./fragment1971";
import type { FragmentToken1972 } from "./fragment1972";

export const FRAGMENT_1973 = gql(`
  fragment Fragment1973 on Member12 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_12
    memberCount_12
    memberMetric_12
  }
`);

type FragmentResult1973 = ResultOf<typeof FRAGMENT_1973>;
type FragmentSelf1973 = NonNullable<FragmentResult1973>;

export type FragmentToken1973 =
  | FragmentSelf1973["__typename"]
  | FragmentSelf1973["typenameHint"] | FragmentToken1971 | FragmentToken1972;
