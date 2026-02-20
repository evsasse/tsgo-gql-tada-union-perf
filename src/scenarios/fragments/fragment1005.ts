import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1003 } from "./fragment1003";
import type { FragmentToken1004 } from "./fragment1004";

export const FRAGMENT_1005 = gql(`
  fragment Fragment1005 on Member164 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_164
    memberCount_164
    memberMetric_164
  }
`);

type FragmentResult1005 = ResultOf<typeof FRAGMENT_1005>;
type FragmentSelf1005 = NonNullable<FragmentResult1005>;

export type FragmentToken1005 =
  | FragmentSelf1005["__typename"]
  | FragmentSelf1005["typenameHint"] | FragmentToken1003 | FragmentToken1004;
