import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2000 } from "./fragment2000";
import type { FragmentToken2001 } from "./fragment2001";

export const FRAGMENT_2002 = gql(`
  fragment Fragment2002 on Member41 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_41
    memberCount_41
    memberMetric_41
  }
`);

type FragmentResult2002 = ResultOf<typeof FRAGMENT_2002>;
type FragmentSelf2002 = NonNullable<FragmentResult2002>;

export type FragmentToken2002 =
  | FragmentSelf2002["__typename"]
  | FragmentSelf2002["typenameHint"] | FragmentToken2000 | FragmentToken2001;
