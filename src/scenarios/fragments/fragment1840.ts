import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1838 } from "./fragment1838";
import type { FragmentToken1839 } from "./fragment1839";

export const FRAGMENT_1840 = gql(`
  fragment Fragment1840 on Member159 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_159
    memberCount_159
    memberMetric_159
  }
`);

type FragmentResult1840 = ResultOf<typeof FRAGMENT_1840>;
type FragmentSelf1840 = NonNullable<FragmentResult1840>;

export type FragmentToken1840 =
  | FragmentSelf1840["__typename"]
  | FragmentSelf1840["typenameHint"] | FragmentToken1838 | FragmentToken1839;
