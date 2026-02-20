import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1751 } from "./fragment1751";
import type { FragmentToken1752 } from "./fragment1752";

export const FRAGMENT_1753 = gql(`
  fragment Fragment1753 on Member72 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_72
    memberCount_72
    memberMetric_72
  }
`);

type FragmentResult1753 = ResultOf<typeof FRAGMENT_1753>;
type FragmentSelf1753 = NonNullable<FragmentResult1753>;

export type FragmentToken1753 =
  | FragmentSelf1753["__typename"]
  | FragmentSelf1753["typenameHint"] | FragmentToken1751 | FragmentToken1752;
