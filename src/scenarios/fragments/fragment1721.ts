import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1719 } from "./fragment1719";
import type { FragmentToken1720 } from "./fragment1720";

export const FRAGMENT_1721 = gql(`
  fragment Fragment1721 on Member40 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_40
    memberCount_40
    memberMetric_40
  }
`);

type FragmentResult1721 = ResultOf<typeof FRAGMENT_1721>;
type FragmentSelf1721 = NonNullable<FragmentResult1721>;

export type FragmentToken1721 =
  | FragmentSelf1721["__typename"]
  | FragmentSelf1721["typenameHint"] | FragmentToken1719 | FragmentToken1720;
