import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2001 } from "./fragment2001";
import type { FragmentToken2002 } from "./fragment2002";

export const FRAGMENT_2003 = gql(`
  fragment Fragment2003 on Member42 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_42
    memberCount_42
    memberMetric_42
  }
`);

type FragmentResult2003 = ResultOf<typeof FRAGMENT_2003>;
type FragmentSelf2003 = NonNullable<FragmentResult2003>;

export type FragmentToken2003 =
  | FragmentSelf2003["__typename"]
  | FragmentSelf2003["typenameHint"] | FragmentToken2001 | FragmentToken2002;
