import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1837 } from "./fragment1837";
import type { FragmentToken1838 } from "./fragment1838";

export const FRAGMENT_1839 = gql(`
  fragment Fragment1839 on Member158 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_158
    memberCount_158
    memberMetric_158
  }
`);

type FragmentResult1839 = ResultOf<typeof FRAGMENT_1839>;
type FragmentSelf1839 = NonNullable<FragmentResult1839>;

export type FragmentToken1839 =
  | FragmentSelf1839["__typename"]
  | FragmentSelf1839["typenameHint"] | FragmentToken1837 | FragmentToken1838;
