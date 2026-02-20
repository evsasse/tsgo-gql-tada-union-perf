import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1490 } from "./fragment1490";
import type { FragmentToken1491 } from "./fragment1491";

export const FRAGMENT_1492 = gql(`
  fragment Fragment1492 on Member91 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_91
    memberCount_91
    memberMetric_91
  }
`);

type FragmentResult1492 = ResultOf<typeof FRAGMENT_1492>;
type FragmentSelf1492 = NonNullable<FragmentResult1492>;

export type FragmentToken1492 =
  | FragmentSelf1492["__typename"]
  | FragmentSelf1492["typenameHint"] | FragmentToken1490 | FragmentToken1491;
