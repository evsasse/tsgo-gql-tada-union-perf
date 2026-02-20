import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1832 } from "./fragment1832";
import type { FragmentToken1833 } from "./fragment1833";

export const FRAGMENT_1834 = gql(`
  fragment Fragment1834 on Member153 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_153
    memberCount_153
    memberMetric_153
  }
`);

type FragmentResult1834 = ResultOf<typeof FRAGMENT_1834>;
type FragmentSelf1834 = NonNullable<FragmentResult1834>;

export type FragmentToken1834 =
  | FragmentSelf1834["__typename"]
  | FragmentSelf1834["typenameHint"] | FragmentToken1832 | FragmentToken1833;
