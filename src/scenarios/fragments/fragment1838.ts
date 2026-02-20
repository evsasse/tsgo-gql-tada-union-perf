import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1836 } from "./fragment1836";
import type { FragmentToken1837 } from "./fragment1837";

export const FRAGMENT_1838 = gql(`
  fragment Fragment1838 on Member157 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_157
    memberCount_157
    memberMetric_157
  }
`);

type FragmentResult1838 = ResultOf<typeof FRAGMENT_1838>;
type FragmentSelf1838 = NonNullable<FragmentResult1838>;

export type FragmentToken1838 =
  | FragmentSelf1838["__typename"]
  | FragmentSelf1838["typenameHint"] | FragmentToken1836 | FragmentToken1837;
