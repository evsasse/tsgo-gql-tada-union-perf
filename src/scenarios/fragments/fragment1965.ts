import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1963 } from "./fragment1963";
import type { FragmentToken1964 } from "./fragment1964";

export const FRAGMENT_1965 = gql(`
  fragment Fragment1965 on Member04 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_04
    memberCount_04
    memberMetric_04
  }
`);

type FragmentResult1965 = ResultOf<typeof FRAGMENT_1965>;
type FragmentSelf1965 = NonNullable<FragmentResult1965>;

export type FragmentToken1965 =
  | FragmentSelf1965["__typename"]
  | FragmentSelf1965["typenameHint"] | FragmentToken1963 | FragmentToken1964;
