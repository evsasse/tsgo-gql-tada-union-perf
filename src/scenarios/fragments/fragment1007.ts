import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1005 } from "./fragment1005";
import type { FragmentToken1006 } from "./fragment1006";

export const FRAGMENT_1007 = gql(`
  fragment Fragment1007 on Member166 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_166
    memberCount_166
    memberMetric_166
  }
`);

type FragmentResult1007 = ResultOf<typeof FRAGMENT_1007>;
type FragmentSelf1007 = NonNullable<FragmentResult1007>;

export type FragmentToken1007 =
  | FragmentSelf1007["__typename"]
  | FragmentSelf1007["typenameHint"] | FragmentToken1005 | FragmentToken1006;
