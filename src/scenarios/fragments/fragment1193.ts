import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1191 } from "./fragment1191";
import type { FragmentToken1192 } from "./fragment1192";

export const FRAGMENT_1193 = gql(`
  fragment Fragment1193 on Member72 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_72
    memberCount_72
    memberMetric_72
  }
`);

type FragmentResult1193 = ResultOf<typeof FRAGMENT_1193>;
type FragmentSelf1193 = NonNullable<FragmentResult1193>;

export type FragmentToken1193 =
  | FragmentSelf1193["__typename"]
  | FragmentSelf1193["typenameHint"] | FragmentToken1191 | FragmentToken1192;
