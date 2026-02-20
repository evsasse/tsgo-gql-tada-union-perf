import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1717 } from "./fragment1717";
import type { FragmentToken1718 } from "./fragment1718";

export const FRAGMENT_1719 = gql(`
  fragment Fragment1719 on Member38 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_38
    memberCount_38
    memberMetric_38
  }
`);

type FragmentResult1719 = ResultOf<typeof FRAGMENT_1719>;
type FragmentSelf1719 = NonNullable<FragmentResult1719>;

export type FragmentToken1719 =
  | FragmentSelf1719["__typename"]
  | FragmentSelf1719["typenameHint"] | FragmentToken1717 | FragmentToken1718;
