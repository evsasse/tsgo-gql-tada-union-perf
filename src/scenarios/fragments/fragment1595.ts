import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1593 } from "./fragment1593";
import type { FragmentToken1594 } from "./fragment1594";

export const FRAGMENT_1595 = gql(`
  fragment Fragment1595 on Member194 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_194
    memberCount_194
    memberMetric_194
  }
`);

type FragmentResult1595 = ResultOf<typeof FRAGMENT_1595>;
type FragmentSelf1595 = NonNullable<FragmentResult1595>;

export type FragmentToken1595 =
  | FragmentSelf1595["__typename"]
  | FragmentSelf1595["typenameHint"] | FragmentToken1593 | FragmentToken1594;
