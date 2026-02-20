import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1046 } from "./fragment1046";
import type { FragmentToken1047 } from "./fragment1047";

export const FRAGMENT_1048 = gql(`
  fragment Fragment1048 on Member207 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_207
    memberCount_207
    memberMetric_207
  }
`);

type FragmentResult1048 = ResultOf<typeof FRAGMENT_1048>;
type FragmentSelf1048 = NonNullable<FragmentResult1048>;

export type FragmentToken1048 =
  | FragmentSelf1048["__typename"]
  | FragmentSelf1048["typenameHint"] | FragmentToken1046 | FragmentToken1047;
