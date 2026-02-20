import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1218 } from "./fragment1218";
import type { FragmentToken1219 } from "./fragment1219";

export const FRAGMENT_1220 = gql(`
  fragment Fragment1220 on Member99 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_99
    memberCount_99
    memberMetric_99
  }
`);

type FragmentResult1220 = ResultOf<typeof FRAGMENT_1220>;
type FragmentSelf1220 = NonNullable<FragmentResult1220>;

export type FragmentToken1220 =
  | FragmentSelf1220["__typename"]
  | FragmentSelf1220["typenameHint"] | FragmentToken1218 | FragmentToken1219;
