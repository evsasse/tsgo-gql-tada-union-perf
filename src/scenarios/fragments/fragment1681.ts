import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1679 } from "./fragment1679";
import type { FragmentToken1680 } from "./fragment1680";

export const FRAGMENT_1681 = gql(`
  fragment Fragment1681 on Member00 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_00
    memberCount_00
    memberMetric_00
  }
`);

type FragmentResult1681 = ResultOf<typeof FRAGMENT_1681>;
type FragmentSelf1681 = NonNullable<FragmentResult1681>;

export type FragmentToken1681 =
  | FragmentSelf1681["__typename"]
  | FragmentSelf1681["typenameHint"] | FragmentToken1679 | FragmentToken1680;
