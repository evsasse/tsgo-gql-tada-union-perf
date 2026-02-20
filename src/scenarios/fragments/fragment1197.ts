import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1195 } from "./fragment1195";
import type { FragmentToken1196 } from "./fragment1196";

export const FRAGMENT_1197 = gql(`
  fragment Fragment1197 on Member76 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_76
    memberCount_76
    memberMetric_76
  }
`);

type FragmentResult1197 = ResultOf<typeof FRAGMENT_1197>;
type FragmentSelf1197 = NonNullable<FragmentResult1197>;

export type FragmentToken1197 =
  | FragmentSelf1197["__typename"]
  | FragmentSelf1197["typenameHint"] | FragmentToken1195 | FragmentToken1196;
