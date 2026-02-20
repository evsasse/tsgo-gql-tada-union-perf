import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1207 } from "./fragment1207";
import type { FragmentToken1208 } from "./fragment1208";

export const FRAGMENT_1209 = gql(`
  fragment Fragment1209 on Member88 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_88
    memberCount_88
    memberMetric_88
  }
`);

type FragmentResult1209 = ResultOf<typeof FRAGMENT_1209>;
type FragmentSelf1209 = NonNullable<FragmentResult1209>;

export type FragmentToken1209 =
  | FragmentSelf1209["__typename"]
  | FragmentSelf1209["typenameHint"] | FragmentToken1207 | FragmentToken1208;
