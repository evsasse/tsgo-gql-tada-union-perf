import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1319 } from "./fragment1319";
import type { FragmentToken1320 } from "./fragment1320";

export const FRAGMENT_1321 = gql(`
  fragment Fragment1321 on Member200 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_200
    memberCount_200
    memberMetric_200
  }
`);

type FragmentResult1321 = ResultOf<typeof FRAGMENT_1321>;
type FragmentSelf1321 = NonNullable<FragmentResult1321>;

export type FragmentToken1321 =
  | FragmentSelf1321["__typename"]
  | FragmentSelf1321["typenameHint"] | FragmentToken1319 | FragmentToken1320;
