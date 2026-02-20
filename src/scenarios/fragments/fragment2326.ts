import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2324 } from "./fragment2324";
import type { FragmentToken2325 } from "./fragment2325";

export const FRAGMENT_2326 = gql(`
  fragment Fragment2326 on Member85 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_85
    memberCount_85
    memberMetric_85
  }
`);

type FragmentResult2326 = ResultOf<typeof FRAGMENT_2326>;
type FragmentSelf2326 = NonNullable<FragmentResult2326>;

export type FragmentToken2326 =
  | FragmentSelf2326["__typename"]
  | FragmentSelf2326["typenameHint"] | FragmentToken2324 | FragmentToken2325;
