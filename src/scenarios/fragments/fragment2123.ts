import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2121 } from "./fragment2121";
import type { FragmentToken2122 } from "./fragment2122";

export const FRAGMENT_2123 = gql(`
  fragment Fragment2123 on Member162 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_162
    memberCount_162
    memberMetric_162
  }
`);

type FragmentResult2123 = ResultOf<typeof FRAGMENT_2123>;
type FragmentSelf2123 = NonNullable<FragmentResult2123>;

export type FragmentToken2123 =
  | FragmentSelf2123["__typename"]
  | FragmentSelf2123["typenameHint"] | FragmentToken2121 | FragmentToken2122;
