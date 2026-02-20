import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1785 } from "./fragment1785";
import type { FragmentToken1786 } from "./fragment1786";

export const FRAGMENT_1787 = gql(`
  fragment Fragment1787 on Member106 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_106
    memberCount_106
    memberMetric_106
  }
`);

type FragmentResult1787 = ResultOf<typeof FRAGMENT_1787>;
type FragmentSelf1787 = NonNullable<FragmentResult1787>;

export type FragmentToken1787 =
  | FragmentSelf1787["__typename"]
  | FragmentSelf1787["typenameHint"] | FragmentToken1785 | FragmentToken1786;
