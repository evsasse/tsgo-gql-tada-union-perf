import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2631 } from "./fragment2631";
import type { FragmentToken2632 } from "./fragment2632";

export const FRAGMENT_2633 = gql(`
  fragment Fragment2633 on Member112 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_112
    memberCount_112
    memberMetric_112
  }
`);

type FragmentResult2633 = ResultOf<typeof FRAGMENT_2633>;
type FragmentSelf2633 = NonNullable<FragmentResult2633>;

export type FragmentToken2633 =
  | FragmentSelf2633["__typename"]
  | FragmentSelf2633["typenameHint"] | FragmentToken2631 | FragmentToken2632;
