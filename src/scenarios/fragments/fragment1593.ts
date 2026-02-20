import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1591 } from "./fragment1591";
import type { FragmentToken1592 } from "./fragment1592";

export const FRAGMENT_1593 = gql(`
  fragment Fragment1593 on Member192 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_192
    memberCount_192
    memberMetric_192
  }
`);

type FragmentResult1593 = ResultOf<typeof FRAGMENT_1593>;
type FragmentSelf1593 = NonNullable<FragmentResult1593>;

export type FragmentToken1593 =
  | FragmentSelf1593["__typename"]
  | FragmentSelf1593["typenameHint"] | FragmentToken1591 | FragmentToken1592;
