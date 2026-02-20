import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2070 } from "./fragment2070";
import type { FragmentToken2071 } from "./fragment2071";

export const FRAGMENT_2072 = gql(`
  fragment Fragment2072 on Member111 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_111
    memberCount_111
    memberMetric_111
  }
`);

type FragmentResult2072 = ResultOf<typeof FRAGMENT_2072>;
type FragmentSelf2072 = NonNullable<FragmentResult2072>;

export type FragmentToken2072 =
  | FragmentSelf2072["__typename"]
  | FragmentSelf2072["typenameHint"] | FragmentToken2070 | FragmentToken2071;
