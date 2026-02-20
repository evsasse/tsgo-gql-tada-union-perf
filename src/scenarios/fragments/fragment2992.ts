import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2990 } from "./fragment2990";
import type { FragmentToken2991 } from "./fragment2991";

export const FRAGMENT_2992 = gql(`
  fragment Fragment2992 on Member191 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_191
    memberCount_191
    memberMetric_191
  }
`);

type FragmentResult2992 = ResultOf<typeof FRAGMENT_2992>;
type FragmentSelf2992 = NonNullable<FragmentResult2992>;

export type FragmentToken2992 =
  | FragmentSelf2992["__typename"]
  | FragmentSelf2992["typenameHint"] | FragmentToken2990 | FragmentToken2991;
