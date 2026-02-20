import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2148 } from "./fragment2148";
import type { FragmentToken2149 } from "./fragment2149";

export const FRAGMENT_2150 = gql(`
  fragment Fragment2150 on Member189 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_189
    memberCount_189
    memberMetric_189
  }
`);

type FragmentResult2150 = ResultOf<typeof FRAGMENT_2150>;
type FragmentSelf2150 = NonNullable<FragmentResult2150>;

export type FragmentToken2150 =
  | FragmentSelf2150["__typename"]
  | FragmentSelf2150["typenameHint"] | FragmentToken2148 | FragmentToken2149;
