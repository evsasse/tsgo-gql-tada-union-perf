import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1786 } from "./fragment1786";
import type { FragmentToken1787 } from "./fragment1787";

export const FRAGMENT_1788 = gql(`
  fragment Fragment1788 on Member107 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_107
    memberCount_107
    memberMetric_107
  }
`);

type FragmentResult1788 = ResultOf<typeof FRAGMENT_1788>;
type FragmentSelf1788 = NonNullable<FragmentResult1788>;

export type FragmentToken1788 =
  | FragmentSelf1788["__typename"]
  | FragmentSelf1788["typenameHint"] | FragmentToken1786 | FragmentToken1787;
